from repositories import balance_repository


def get_balance():
    try:
     return balance_repository.get_balance_query();
    except TypeError as e:
        return e      
