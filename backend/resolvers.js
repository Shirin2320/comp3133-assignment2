const employees = [
    { id: 1, name: 'Alice', email: 'alice@mail.com', salary: 55000 },
    { id: 2, name: 'Bob', email: 'bob@mail.com', salary: 65000 }
  ];
  
  module.exports = {
    employees: () => employees,
    employee: ({ id }) => employees.find(emp => emp.id == id)
  };
  