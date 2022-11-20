from fastapi import APIRouter
from fastapi import Request
from service import transaction_service
from ErrorHandling import ErrorHandlingTransaction

router = APIRouter()

@router.get('/transactions/', status_code=200)
def get_transactions():   
    return transaction_service.get_transactions()



@router.post('/transactions/', status_code=201)
async def add_transaction(request: Request):
    transaction = await request.json()   
    return transaction_service.add_transaction(transaction)



@router.delete('/transactions/{id_transaction}', status_code=200)
def delete_transaction(id_transaction):
     return transaction_service.delete_transaction(id_transaction)

