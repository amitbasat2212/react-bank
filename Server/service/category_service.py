from repositories import category_repository



def get_categories():
    return category_repository.get_categories_query();
