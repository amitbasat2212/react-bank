from fastapi import APIRouter
from service import balance_service
from fastapi import Request
router = APIRouter()

@router.get('/balance/', status_code=200)
def get_balance():
    return balance_service.get_balance();


