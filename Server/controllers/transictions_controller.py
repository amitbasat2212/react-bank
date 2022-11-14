from fastapi import APIRouter
from fastapi import Request
router = APIRouter()



@router.get('/transactions/', status_code=200)
def get_transactions():
    pass



@router.post('/transactions/', status_code=201)
async def add_transaction(request: Request):
    candidate = await request.json()

@router.delete('/transactions/', status_code=200)
def delete_transaction(id):
    pass
