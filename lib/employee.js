const inquirer = require("inquirer")
const engineer = require("./engineer")
const intern = require("./intern")
const manager = require("./manager")


class Employee {
    construnctor(name, id, email){
        this.name = name;
        this.id = id;
        this.email =email;
    }

    getName(){
        const query =
        "SELECT employee.first_name, employee.last_name FROM job JOIN department ON job.department_id = department.id JOIN employee ON job.id = employee.id;";
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
      });

    }

    getId(){
        const query =
        "SELECT job.id FROM job JOIN department ON job.department_id = department.id JOIN employee ON job.id = employee.id;";
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
      });

    }

    getEmail(){
        const query =
        "SELECT `this.email` FROM job JOIN department ON job.department_id = department.id JOIN employee ON job.id = employee.id;";
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
      });

    }

    getRole(){
        const query =
        "SELECT job.id, job.title, job.salary, department.department_name, employee.first_name, employee.last_name, employee.manager_id FROM job JOIN department ON job.department_id = department.id JOIN employee ON job.id = employee.id;";
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
      });

    }
}

module.exports = employee;