class Transaction:
  def __init__(self,transaction_id,category_name,transiction_amount,transaction_vendor,is_delete):
    self.transaction_id = transaction_id    
    self.category_name = category_name
    self.transiction_amount = transiction_amount
    self.transaction_vendor = transaction_vendor
    self.is_delete = is_delete
    
  def get_transiction_amount(self):
    return self.transiction_amount
  def __eq__(self, other):
        return self.transaction_id == other.transaction_id and self.category_name == other.category_name and self.transiction_amount == other.transiction_amount and self.transaction_vendor == other.transaction_vendor and self.is_delete == other.is_delete

  def __hash__(self):
        return hash((self.transaction_id, self.category_name))

  def __str__(self) -> str:
        return f"('{self.transaction_id}','{self.category_name}','{self.transiction_amount}','{self.transaction_vendor}','{self.is_delete}')"

  def __repr__(self) -> str:
        return f"<Transaction>  ({self.transaction_id},{self.category_name},{self.transiction_amount},{self.transaction_vendor},{self.is_delete})"
  