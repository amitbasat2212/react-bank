
from Utils import balance_utils
from consts import balance_consts

import pymysql
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="bank",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

   


def update_the_balance_query(amount_to_update,delete_or_add_transaction):
    try:
        with connection.cursor() as cursor:
            old_balance = get_balance_query();
            new_balance=old_balance.balance_amount+(amount_to_update)*delete_or_add_transaction
            insert_new_balance = f'UPDATE balance SET balance_amount ={new_balance}'
                 
            the_new_balance = balance_utils.create_balance({balance_consts.balance_amount:new_balance})
            cursor.execute(insert_new_balance)
            connection.commit()
            return the_new_balance

    except TypeError as e:
        return e    


def get_balance_query():
    try:
        with connection.cursor() as cursor:
            query_balance = f"SELECT * from balance;"
            cursor.execute(query_balance)
            result_balance = cursor.fetchall()            
            balance = balance_utils.create_balances(result_balance)
            return balance[0]
    except TypeError as e:
        return e
