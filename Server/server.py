
from fastapi import FastAPI
from origins import origins_const

from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from controllers import categories_controller;
from controllers import transictions_controller;
from controllers import balance_controller;



app = FastAPI()
origins = [ 
    "http://localhost:3000",
    "localhost:3000"
]



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)



app.include_router(categories_controller.router)
app.include_router(transictions_controller.router)
app.include_router(balance_controller.router)

if __name__ == "__main__":
     uvicorn.run("server:app", host="0.0.0.0", port=8081,reload=True)

