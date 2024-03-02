let customers = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
  { id: 3, name: "David Smith", email: "david.smith@example.com" },
  { id: 4, name: "Emma Johnson", email: "emma.johnson@example.com" },
  { id: 5, name: "Michael Williams", email: "michael.williams@example.com" }
];

renderCustomers(); 
function renderCustomers() {
  let html = "";
  customers.forEach(customer => {
      html += `
          <tr>
              <td>${customer.name}</td>
              <td>${customer.email}</td>
              <td>
                  <button type="button" class="btn btn-primary" onclick="editCustomer(${customer.id})">Edit</button>
                  <button type="button" class="btn btn-danger" onclick="deleteCustomer(${customer.id})">Delete</button>
              </td>
          </tr>
      `;
  });
  document.getElementById("customer-list").innerHTML = html;
}

function editCustomer(id) {
  let customer = customers.find(c => c.id === id);
  if (customer) {
      document.getElementById("edit-customer").style.display = "block";
      document.getElementById("name").value = customer.name;
      document.getElementById("email").value = customer.email;
      document.getElementById("customer-form").onsubmit = function (event) {
          event.preventDefault();
          customer.name = document.getElementById("name").value;
          customer.email = document.getElementById("email").value;
          document.getElementById("edit-customer").style.display = "none";
          renderCustomers();
      }
  }
}

function deleteCustomer(id) {
  customers = customers.filter(c => c.id !== id);
  renderCustomers();
}

function cancelEdit() {
  document.getElementById("edit-customer").style.display = "none";
}
