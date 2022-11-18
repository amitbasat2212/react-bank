from fastapi import APIRouter
from service import balance_service
from fastapi import Request
router = APIRouter()

@router.get('/balance/', status_code=200)
def get_balance():
    return balance_service.get_balance();


@router.post('/balance/', status_code=201)
async def set_balance(request: Request):
    balance = await request.json()
    return balance_service.set_the_balance(balance);