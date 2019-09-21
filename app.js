var mysql = require("mysql");
var inquirer = require("inquirer");
​


// create the connection information for the sql database
var connection = mysql.createConnection({
 host: "localhost",
 port: 3306,
 user: "root",
 password: "1234",
 database: "bamazon_db"
});
connection.connect(function(err) {
    if (err) throw err;
   //console.log("connected as id " + connection.threadId);
   });
   
   function readAll() {
    connection.query("select * from products", function(err, res) {
      if(err) throw err;
      console.log(JSON.stringify(res, null, 2));
      connection.end();
    });
  };
  readAll()
  function buyProduct() {
    inquirer.prompt({
        name: "id",
        type: "input",
        message: "What are you buying?"
      }
      {
        name: "quantity",
        type: "input",
        message: "How many do you want to buy?"
      }).then(function(answer) {
          console.log(answer)
        var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                quantity: 100
              },
              {
                flavor: "Rocky Road"
              }
            ],
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " products updated!\n");
            }
          );
      });
    });
  }
  ​
   
  