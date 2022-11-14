from fastapi import APIRouter

router = APIRouter()



@router.delete('/categories/', status_code=200)
def get_categories():
    pass