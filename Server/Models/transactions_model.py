class Transaction:
  def __init__(self,transaction_id,category_name,transiction_amount,transaction_vendor,is_delete):
    self.transaction_id = transaction_id    
    self.category_name = category_name
    self.transiction_amount = transiction_amount
    self.transaction_vendor = transaction_vendor
    self.is_delete = is_delete
    
  def get_transiction_amount(self):
    return self.transiction_amount
  