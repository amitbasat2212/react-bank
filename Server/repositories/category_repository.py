
from Utils import category_utils

import pymysql
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="bank",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

def get_category_query(category_name):
    try:
        with connection.cursor() as cursor:
            query_category = f"SELECT * from categories WHERE category_name='{category_name}';"
            cursor.execute(query_category)
            result_category = cursor.fetchall()            
            category= category_utils.create_categories(result_category)
            return category
    except TypeError as e:
        return e



def get_categories_query():
    try:
        with connection.cursor() as cursor:
            query_categories = f"SELECT * from categories;"
            cursor.execute(query_categories)
            result_categories = cursor.fetchall()            
            categories = category_utils.create_categories(result_categories)
            return categories
    except TypeError as e:
        return e



def update_category_spending(amount_to_update,category_name,delete_or_add_transaction):
    try:
        with connection.cursor() as cursor:
            old_category = get_category_query(category_name);
            new_category_spending=old_category[0].category_money_spend+(amount_to_update)*delete_or_add_transaction
            
            insert_new_category_spending = f'''UPDATE categories
             SET category_money_spend ={new_category_spending}
             WHERE category_name='{category_name}' '''
           
            old_category[0].category_money_spend=new_category_spending  
            
            cursor.execute(insert_new_category_spending)
            connection.commit()            
            return old_category

    except TypeError as e:
        return e    
