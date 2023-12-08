const express = require('express'); //express module
const app = express()
const employees = require('./employees.json') ///importing employee data, data stored in the employees.json
const port = 2000;
app.get('/employees', (req, res)=>{
    res.json(employees);
});
app.get('/employees/:employeeID', (req, res)=>{  //goes thru the object of employees
    const employeeID = parseInt(req.params.employeeID);
    let employee;
    for(let i = 0; i < employees.employees.length; i++){
        if (employees.employees[i].employeeID === employeeID){
            employee = employees.employees[i];
        }
    }
    if(employee){ //conditional statement incase there there any errors or not 
        res.json(employee)
    } else {
        res.status(404).json({ error: 'Employee not Found'})
    }
});
app.listen(port, ()=>{ //to start the server and make it listen on thee specified port
    console.log(employees)
});

