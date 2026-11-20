class FoodItemsDB {
  constructor() {
    if (!FoodItemsDB.instance) {
      // Initializes 5 food item
      this.FoodItems = [
        { id: 1, name: 'Pizza', quantity: 10, price: '$5', stock:1 },
        { id: 2, name: 'Poutine', quantity: 10, price: '$5', stock:2 },
        { id: 3, name: 'Tacos', quantity: 10, price: '$5', stock:3 },
        { id: 4, name: 'Hamburger', quantity: 10, price: '$5', stock:4 },
        { id: 5, name: 'Sandwich', quantity: 10, price: '$5', stock:5 }
      ];
      FoodItemsDB.instance = this;
    }
    return FoodItemsDB.instance;
  }

  // returns all food items as a Promise for async/await
  async getAll() {
    // Simulate async operation (like fetching from a real database)
    return new Promise((resolve, reject) => {
      try {
        resolve(this.FoodItems);
      } catch (error) {
        reject(error);
      }
    });
  }
}

// Exports singleton instance
const instance = new FoodItemsDB();
module.exports = instance;