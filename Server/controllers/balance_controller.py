from fastapi import APIRouter
from service import balance_service

router = APIRouter()

@router.get('/balance/', status_code=200)
def get_balance():
    return balance_service.get_balance();


