
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





def set_the_balance_query(new_balance):
    try:
        with connection.cursor() as cursor:
            insert_new_balance = f'UPDATE balance SET balance_amount ={new_balance[0][balance_consts.balance_amount]}'
            cursor.execute(insert_new_balance)
            connection.commit()            
            the_new_balance = balance_utils.create_balance(new_balance)
            return the_new_balance

    except TypeError as e:
        return e    


def get_balance_query():
    try:
        with connection.cursor() as cursor:
            query_balance = f"SELECT * from balance;"
            cursor.execute(query_balance)
            result_balance = cursor.fetchall()            
            balance = balance_utils.create_balance(result_balance)
            return balance
    except TypeError as e:
        return e
