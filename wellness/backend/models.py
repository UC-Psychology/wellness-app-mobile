from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, LargeBinary
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import relationship, sessionmaker

Base = declarative_base()
engine = create_engine('sqlite:////Users/philipqueen/Documents/GitHub/wellness-app-mobile/wellness/backend/app.db', echo=True)
Session = sessionmaker(bind=engine)


# TODO: figure out which foreign key to match with (we want a non unique user id, but a unique form id to match body parts with)
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, index=True)
    feeling = Column(String)
    extra_note = Column(String)
    geolocation = Column(String)
    timestamp = Column(String)
    body_parts = relationship("BodyPart", back_populates="user")

class BodyPart(Base):
    __tablename__ = 'body_parts'

    id = Column(Integer, primary_key=True)
    part = Column(String)
    feeling = Column(String)
    form_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("User", back_populates="body_parts")

Base.metadata.create_all(engine)