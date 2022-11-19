from fastapi import FastAPI, HTTPException
def error_response(messege,status):
   raise HTTPException(status_code=status, detail=messege)