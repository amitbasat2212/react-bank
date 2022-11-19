from ErrorHandling import ErrorResponse
from consts import transaction_const



def check_add_transaction(transaction):
    # if not str(transaction[transaction_const.amount]).isnumeric() :
    #     ErrorResponse.error_response("the amount is not a number",404)

    if str(transaction[transaction_const.category]).isnumeric():
        ErrorResponse.error_response("the category is not a string",404)  


    if str(transaction[transaction_const.vendor]).isnumeric() :
        ErrorResponse.error_response("the vendor is not a String",404)        




def row_is_not_in_table(transaction_to_delete):
    if(len(transaction_to_delete)==0):
           ErrorResponse("there is no such transaction",500)
        
    


