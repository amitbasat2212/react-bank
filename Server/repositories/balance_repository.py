from .connection import data_base_manager
from Utils import balance_utils
from repositories import transactions_repository;

def caculate_the_balance_by_transactions(result_balance):
   transactions = transactions_repository.get_transactions_query();
   new_balance = balance_utils.create_balance_by_transcations(transactions,result_balance)
   return new_balance



def get_balance_query():
    try:
        with data_base_manager.connection.cursor() as cursor:
            query_balance = f"SELECT * from balance;"
            cursor.execute(query_balance)
            result_balance = cursor.fetchall()            
            balance = caculate_the_balance_by_transactions(result_balance)
            return balance
    except TypeError as e:
        return e
