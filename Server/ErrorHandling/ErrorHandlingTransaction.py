from ErrorHandling import ErrorResponse
from consts import transaction_const
  




def row_is_not_in_table(transaction_to_delete):
    if(len(transaction_to_delete)==0):
           ErrorResponse("there is no such transaction",500)
        
    


