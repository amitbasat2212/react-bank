from Models.categories_model import Category
from consts import categories_consts

def create_category(category):
    new_category= Category(
        category[categories_consts.category_name],
        category[categories_consts.category_money_spend])

    return new_category    

    


def create_categories(categories_query):
    categories = []
    for category in categories_query:
        categories.append(create_category(category))
    return categories