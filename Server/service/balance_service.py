from repositories import balance_repository


def get_balance():
    return balance_repository.get_balance_query();
