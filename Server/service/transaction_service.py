
from repositories import transactions_repository


def get_transactions():
    return transactions_repository.get_transactions_query();

def add_transaction(transaction):
    return transactions_repository.add_transaction_query(transaction)


def delete_transaction(id_transaction):
    return transactions_repository.delete_transaction_query(id_transaction)
