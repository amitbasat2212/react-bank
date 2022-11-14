from fastapi import APIRouter
from service import category_service
router = APIRouter()

@router.get('/categories/', status_code=200)
def get_categories():
    return category_service.get_categories()