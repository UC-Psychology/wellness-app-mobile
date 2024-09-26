from sqlalchemy import create_engine, exc

try:
    # Replace 'sqlite:///app.db' with your actual database URL
    engine = create_engine('sqlite:///app.db')
    # Try to connect and execute a simple query
    with engine.connect() as connection:
        result = connection.execute("SELECT 1")
        print(result.fetchone())
    print("Connection to the database was successful.")
except exc.SQLAlchemyError as e:
    print(f"An error occurred: {e}")