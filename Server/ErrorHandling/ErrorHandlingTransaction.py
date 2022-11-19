from ErrorHandling import ErrorResponse
from consts import transaction_const



def check_add_transaction(transaction):
    if not transaction[transaction_const.amount].isnumeric():
        ErrorResponse.error_response("the amount is not a number",404)

    if transaction[transaction_const.category].isnumeric():
        ErrorResponse.error_response("the category is not a string",404)  


    if transaction[transaction_const.vendor].isnumeric() :
        ErrorResponse.error_response("the vendor is not a String",404)        




def row_is_not_in_table():
    ErrorResponse("there is no such transaction",500)


