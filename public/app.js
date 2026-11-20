// Function to load all FoodItems from the backend
async function loadFoodItems() {
  try {
    const response = await fetch('/FoodItems');
    const FoodItems = await response.json();
    const tbody = document.getElementById('FoodItems-table-body');
    tbody.innerHTML = ''; // clear existing rows

    FoodItems.forEach(FoodItem => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${FoodItem.id}</td><td>${FoodItem.name}</td><td>${FoodItem.quantity}</td><td>${FoodItem.price}</td><td>${FoodItem.stock}</td>`;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading FoodItem:', error);
  }
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', loadFoodItems);