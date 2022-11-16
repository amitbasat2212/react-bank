use bank;

CREATE TABLE transactions(
    transaction_id int PRIMARY KEY AUTO_INCREMENT ,
    transiction_amount FLOAT ,   
    category_name VARCHAR(20),    
    transaction_vendor VARCHAR(40),
    is_delete BIT,
    FOREIGN KEY(category_name) REFERENCES categories(category_name)    
   
);