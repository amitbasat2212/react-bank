from Models.balance_model import Balance
from consts import balance_consts
from consts import transaction_const

def create_balance_object(balance,total_amount_to_balance):   
    new_balance= Balance(
        balance[balance_consts.balance_amount])   
        
    new_balance.set_balance_amount(new_balance.balance_amount+total_amount_to_balance);


    return new_balance        

def amount_of_all_transactions(transactions):
    sum_transactions=0;    
    for transaction in transactions:
        sum_transactions=sum_transactions+float(transaction.get_transiction_amount())

    return sum_transactions



def create_balance_by_transcations(transactions,balances_query):   
    amounts_of_all_transactions =amount_of_all_transactions(transactions)
   
    balances = []
    for balance in balances_query:
        balances.append(create_balance_object(balance,amounts_of_all_transactions))


    return balances