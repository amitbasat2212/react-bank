from Models.balance_model import Balance
from consts import balance_consts


def create_balance(balance):     
    new_balance= Balance(
        balance[balance_consts.balance_amount])

    return new_balance    

def create_balances(balances_query):
    balances = []
    for balance in balances_query:
        balances.append(create_balance(balance))
    return balances
  

