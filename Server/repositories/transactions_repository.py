
from Utils import transaction_utils
from consts import transaction_const
from repositories import balance_repository
import ErrorHandaling

import pymysql
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="bank",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

def get_transaction_query(id_transaction):
    try:
        with connection.cursor() as cursor:
            query_transaction = f"SELECT * from transactions WHERE transaction_id={id_transaction};"
            cursor.execute(query_transaction)
            result_transaction = cursor.fetchall()
            transaction = transaction_utils.create_transactions(result_transaction)
            return transaction

    except TypeError as e:
        return e



def get_transactions_query():
    try:
        with connection.cursor() as cursor:
            query_transactions = f"SELECT * from transactions;"
            cursor.execute(query_transactions)
            result_transactions = cursor.fetchall()
            transactions = transaction_utils.create_transactions(result_transactions)
            return transactions

    except TypeError as e:
        return e



def add_transaction_query(transaction_data):
   
    try:
        with connection.cursor() as cursor:
            insert_new_transaction = f'''INSERT IGNORE INTO transactions
            values('{transaction_const.transaction_id_defult}'
            ,'{transaction_data[transaction_const.amount]}'
            ,'{transaction_data[transaction_const.category]}'
            ,'{transaction_data[transaction_const.vendor]}'
            ,'{transaction_const.transaction_not_delete}')'''

            cursor.execute(insert_new_transaction)
            connection.commit()
            
            new_transaction = transaction_utils.create_transaction_dto(transaction_data)
            balance_repository.update_the_balance_query(new_transaction.transiction_amount)


            return new_transaction

    except TypeError as e:
        return e    



def delete_transaction_query(id_transaction):    
    try:
        transaction_to_delete=get_transaction_query(id_transaction);
        if(len(transaction_to_delete)==0):
            raise ErrorHandaling.the_row_dosent_excit()
        
        with connection.cursor() as cursor:
            delete_transaction = f"DELETE FROM transactions WHERE transaction_id={id_transaction};"
            cursor.execute(delete_transaction)           
            connection.commit()
            balance_repository.update_the_balance_query(transaction_to_delete[0].transaction_amount)

            return {"succes": 200}

    except TypeError as e:
        return e
