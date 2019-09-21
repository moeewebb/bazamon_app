



CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL auto_increment,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price INT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
); 

sINSERT INTO products (product_name, department_name, price, stock_quantity)
   VALUES ("iphone", "electronics", 1199.00, 24),
    ("Toys", "child Area", 29.99, 12),
    ("Camera", "electronic", 78.00, 3),
    ("sheets", "household goods", 45.00, 5),
    ("coffee beans", "food", 16.99, 24),
    ("slippers", "household goods", 24.99, 24),
   ;
