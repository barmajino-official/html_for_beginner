/* The above code is getting the tbody and action_button elements from the HTML document. */
let tbody = document.getElementById("tbody");
let action_button = document.getElementById("action_button");

/* The above code is declaring variables and assigning them to the HTML elements with the corresponding
IDs. */
let product_name_input = document.getElementById("product");
let product_price_input = document.getElementById("price");
let product_quantity_input = document.getElementById("quantity");

/* This is an event listener. It is listening for the click event on the action_button element. When
the user clicks the button, the code inside the event listener will run. */
action_button.addEventListener("click", () => {
  /* Getting the values of the inputs and assigning them to variables. */
  let name = product_name_input.value;
  let price = product_price_input.value;
  let quantity = product_quantity_input.value;

  /* Adding the values of the variables to the table. */
  tbody.innerHTML += `<tr><td>${name}</td><td>${price}</td><td>${quantity}</td></tr>`;

  /* Clearing the input fields after the user clicks the button. */
  product_name_input.value = "";
  product_price_input.value = "";
  product_quantity_input.value = "";
});
