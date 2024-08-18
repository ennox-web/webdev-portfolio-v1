import os
from dotenv import load_dotenv

# Load config from a .env file:
load_dotenv(".env.local")
MONGODB_URI = os.environ['MONGODB_URI']
