
from Models.transactions_model import Transaction
from consts import transaction_const

def create_transaction(transaction):
    new_transaction= Transaction(
        transaction[transaction_const.transaction_id],
        transaction[transaction_const.category_name],
        transaction[transaction_const.category_money_spend],
        transaction[transaction_const.is_delete])

    return new_transaction    

    


def create_transactions(transactions_query):
    transactions = []
    for transaction in transactions_query:
        transactions.append(create_transaction(transaction))
    return transactions