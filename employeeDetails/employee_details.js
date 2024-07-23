const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'Java' },
    //... More employee records can be added here
  ];

  // Function to display all employees

function displayEmployees (){
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
document.getElementById('displayEmployeesButton').addEventListener('click', displayEmployees);


function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}
document.getElementById('calculateTotalSalariesButton').addEventListener('click', calculateTotalSalaries);


function displayHREmployees() {
    const hrEmployees = employees.filter((employee) => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
document.getElementById('displayHREmployeesButton').addEventListener('click', displayHREmployees);

function findEmployeeById(employeeId) {
    employeeId=parseFloat(prompt("enter id"),10);
    const foundEmployee = employees.find((employee) => employee.id === employeeId);
    if (!isNaN(employeeId)) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = `<p>no employee has been found with this ID</p>`;

    }
}
document.getElementById('findEmployeeByIdButton').addEventListener('click', findEmployeeById);


//.toLowerCase() to filteration without case sensitive
//This function to find employee by specialization 
function findEmployeeBySpecialization(specializationID){
    specializationID=prompt("Please enter the specialization").toLowerCase();
const foundEmployeeBySpecialization=employees.find((special)=>special.specialization.toLowerCase()===specializationID);
if(foundEmployeeBySpecialization){
    document.getElementById("employeesDetails").innerHTML=`<p>${foundEmployeeBySpecialization.id}: ${foundEmployeeBySpecialization.name} - ${foundEmployeeBySpecialization.department} - ${foundEmployeeBySpecialization.specialization}</p>`
}
else{
    document.getElementById("employeesDetails").innerHTML=`<p>no employee has been found with this ID</p>`;

}

}
document.getElementById('findEmployeeBySpecializationButton').addEventListener('click', findEmployeeBySpecialization);