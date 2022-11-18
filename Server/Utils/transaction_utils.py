
from Models.transactions_model import Transaction
from Dto.transaction_dto import Transactio_Dto
from consts import transaction_const

def create_transaction(transaction):
    new_transaction= Transaction(
        transaction[transaction_const.transaction_id],
        transaction[transaction_const.category_name],
        transaction[transaction_const.transiction_amount],
        transaction[transaction_const.transaction_vendor]
        )

    return new_transaction    

    


def create_transactions(transactions_query):
    transactions = []
    for transaction in transactions_query:
        transactions.append(create_transaction(transaction))
    return transactions


def create_transaction_dto(transaction):
        new_transaction_dto= Transactio_Dto(        
        transaction[transaction_const.category],
        transaction[transaction_const.amount],
        transaction[transaction_const.vendor])

        return new_transaction_dto    