from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from models import User, BodyPart, Session as DBSession
import logging

app = FastAPI()

# TODO: change the model to our desired model

class BodyPartModel(BaseModel):
    part: str
    feeling: str

class UserModel(BaseModel):
    user_id: int
    feeling: str
    body_parts: list[BodyPartModel]
    extra_note: str
    geolocation: str
    timestamp: str

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.post("/users/")
def create_user(user: UserModel):
    db: Session = DBSession()
    try:
        db_user = User(
            user_id=user.user_id,
            feeling=user.feeling,
            extra_note=user.extra_note,
            geolocation=user.geolocation,
            timestamp=user.timestamp
        )
        db.add(db_user)
        db.commit()  # Commit here to get the user_id for foreign key reference
        
        for part in user.body_parts:
            db_body_part = BodyPart(part=part.part, feeling=part.feeling, user=db_user)
            db.add(db_body_part)
        
        db.commit()  # Commit again to save body parts

        logger.info(f"User {user.user_id} with body parts added to database")
        return {"success": True}
    except Exception as e:
        db.rollback()
        logger.error(f"Error occurred: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
    finally:
        db.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)