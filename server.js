const mysql = require("mysql");
const inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Homebrewer1",
    database: "employeeTracker_db"
});

connection.connect(function(err) {
    if (err) throw err;
    runPrompt();
  });

  //adding the prompt for different functions in CLI

  function runPrompt() {
      inquirer
      .prompt({
          name: "action",
          type: "rawlist",
          message: "What would you like to do?",
          choices: [
            "View all employees",
            "View all roles",
            "View all departments",
            "Add Employee",
            "Add Role",
            "Add Department",
            "Update Employee",
            "Delete Employee",

          ]
      })
      .then(function(answer) {
        switch (answer.action) {
          case "View all employees":
            viewAllEmployees();
            break;
  
          case "View all roles":
            viewAllRoles();
            break;
  
          case "View all departments":
            viewAllDepartments();
            break;
  
          case "Add Employee":
            addEmployee();
            break;
  
          case "Add Role":
            addRole();
            break;
  
          case "Add Department":
            addDepartment();
            break;
  
          case "Update Employee":
            updateEmployee();
            break;
  
          case "Update Roles":
            updateRole();
            break;
  
          case "Update Department":
            updateDepartment();
            break;
  
          case "View Employees By Department":
            viewByDepartment();
            break;
  
          case "View total budget by department":
            viewBudget();
            break;
  
          case "Delete Employee":
            deleteEmployee();
            break;
  
          case "Delete Department":
            deleteDepartment();
            break;
  
          case "Delete Roles":
            deleteRoles();
            break;
        }
      }); 
  };

  //View all functions
  viewAllEmployees = () => {
    let query = "select e.id, e.first_name, e.last_name, r.title, r.salary, d.name from employees e INNER JOIN roles r on e.role_id = r.id inner join departments d on r.department_id = d.id";
    connection.query(query, function(err, res) {
      if (err) throw err;
      if (res.length == 0) {
        console.log(
          "No employees found. Please start adding employees by following the prompts."
        );
        runPrompt();
      }
      console.log("Employees found: " + res.length);
      console.table("All Employees: ", res);
    });
  };
  viewAllRoles = () => {
    let query = "select * from roles";
    connection.query(query, function(err, res) {
      if (err) throw err;
      if (res.length == 0) {
        console.log(
          "No roles found. Please start adding roles by following the prompts."
        );
        runPrompt();
      }
      console.log("Roles found: " + res.length);
      console.table("All Roles: ", res);
    });
   };
   viewAllDepartments = () => {
    let query = "select * from departments";
    connection.query(query, function(err, res) {
      if (err) throw err;
      if (res.length == 0) {
        console.log(
          "No departments found. Please start adding departments by following the prompts."
        );
        runPrompt();
      }
      console.log("Roles found: " + res.length);
      console.table("All Roles: ", res);
    });
  };
  