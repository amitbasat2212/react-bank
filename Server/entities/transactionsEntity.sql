use bank

CREATE TABLE transactions(
    transaction_id int PRIMARY KEY AUTO_INCREMENT ,
    transiction_amount INT ,   
    category_name VARCHAR(20),    
    is_delete BIT,
    FOREIGN KEY(category_name) REFERENCES categories(category_name),    
    FOREIGN KEY(user_id) REFERENCES user(user_id),    
);