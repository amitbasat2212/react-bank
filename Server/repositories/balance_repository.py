from .connection import data_base_manager
from Utils import balance_utils



def get_balance_query():
    try:
        with data_base_manager.connection.cursor() as cursor:
            query_balance = f"SELECT * from balance;"
            cursor.execute(query_balance)
            result_balance = cursor.fetchall()            
            balance = balance_utils.create_balances(result_balance)
            return balance
    except TypeError as e:
        return e