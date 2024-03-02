class Storage {
  #item
  constructor (item) {
    this.#item = item
  }
  getItems() {
return this.#item;
  }
  addItem(newItem) {
return this.#item.push(newItem);
  }
  removeItem(itemToRemove) {
    return this.#item = this.#item.filter(item => item !== itemToRemove);
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]