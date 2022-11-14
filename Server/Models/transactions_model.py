class Transaction:
  def __init__(self,transaction_id,category_name,user_id,transaction_amount,is_delete):
    self.transaction_id = transaction_id    
    self.category_name = category_name
    self.category_money_spend = transaction_amount
    self.user_id = user_id
    self.is_delete = is_delete

    