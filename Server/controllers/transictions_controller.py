from fastapi import APIRouter

router = APIRouter()



@router.get('/transactions/', status_code=200)
def get_transactions():
    pass



@router.post('/transactions/', status_code=201)
def add_transaction():
    pass

@router.delete('/transactions/', status_code=200)
def delete_transaction(id):
    pass
