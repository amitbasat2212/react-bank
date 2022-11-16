
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

def get_categories_query():
    try:
        with connection.cursor() as cursor:
            query_categories = f"SELECT * from categories;"
            cursor.execute(query_categories)
            result_categories = cursor.fetchall()
            print(result_categories)
            categories = category_utils.create_categories(result_categories)
            return categories
    except TypeError as e:
        return e
