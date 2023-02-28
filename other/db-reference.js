addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addEmployee();
});

export function addEmployee() {
  const name = document.querySelector("#name").value;
  const salary = document.querySelector("#salary").value;

  fetch("http://localhost:3000/employees/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      salary,
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// ==

function getEmployees() {
  fetch("http://localhost:3000/employees/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

function showEmployees(employees) {
  employeesListing = employees;
  employees.map((employee) => {
    const li = document.createElement("li");
    li.innerHTML = `${employee.name} - $${employee.salary}`;
    document.querySelector("ul").appendChild(li);
  });
}
