import os
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from pymongo import MongoClient