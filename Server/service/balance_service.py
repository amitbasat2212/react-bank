from repositories import balance_repository


def set_the_balance(new_balance):
    return balance_repository.set_the_balance_query(new_balance)

def get_balance():
    return balance_repository.get_balance_query();
