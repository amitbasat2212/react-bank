from .connection import data_base_manager
from Utils import category_utils



def get_categories_query():
    try:
        with data_base_manager.connection.cursor() as cursor:
            query_categories = f"SELECT * from categories;"
            cursor.execute(query_categories)
            result_categories = cursor.fetchall()
            print(result_categories)
            categories = category_utils.create_categories(result_categories)
            return categories
    except TypeError as e:
        return e
