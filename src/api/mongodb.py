from pymongo import MongoClient
from config import MONGODB_URI


# Connect to your MongoDB cluster:
client = MongoClient(MONGODB_URI)
