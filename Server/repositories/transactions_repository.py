from .connection import data_base_manager
from Utils import transaction_utils
from consts import transaction_const
import ErrorHandaling

def get_transaction_query(id_transaction):
    try:
        with data_base_manager.connection.cursor() as cursor:
            query_transaction = f"SELECT * from transactions WHERE transaction_id={id_transaction};"
            cursor.execute(query_transaction)
            result_transaction = cursor.fetchall()
            transaction = transaction_utils.create_transaction(result_transaction)
            return transaction

    except TypeError as e:
        return e


def get_transactions_query():
    try:
        with data_base_manager.connection.cursor() as cursor:
            query_transactions = f"SELECT * from transactions;"
            cursor.execute(query_transactions)
            result_transactions = cursor.fetchall()
            transactions = transaction_utils.create_transactions(result_transactions)
            return transactions

    except TypeError as e:
        return e



def add_transaction_query(transaction_data):
    try:
        with data_base_manager.connection.cursor() as cursor:
            insert_new_transaction = f'''INSERT IGNORE INTO transactions
            values('{transaction_data[transaction_const.transaction_id]}'
            ,'{transaction_data[transaction_const.category_name]}'
            ,'{transaction_data[transaction_const.category_money_spend]}'
            ,'{transaction_data[transaction_const.is_delete]}')'''

            cursor.execute(insert_new_transaction)
            data_base_manager.connection.commit()
            
            new_transaction = transaction_utils.create_transactions(transaction_data)
            return new_transaction

    except TypeError as e:
        return e    



def delete_transaction_query(id_transaction):    
    try:
        if(len(get_transaction_query(id_transaction))==0):
            raise ErrorHandaling.the_row_dosent_excit()
        
        with data_base_manager.connection.cursor() as cursor:
            delete_transaction = f"DELETE FROM transactions WHERE transaction_id={id_transaction};"
            cursor.execute(delete_transaction)           
            data_base_manager.connection.commit()
            return {"succes": 200}

    except TypeError as e:
        return e
