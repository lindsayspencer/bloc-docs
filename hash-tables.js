//Implementing Hash Tables

// How will hashing occur?
// How will collisions be handled?
// key => hash => true index
// declare size
// collisions, insertions, lookups

// Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.

// hash is based on the phoneNumber, which is given, but it is provided as a string
// collisions are handled with open addressing

FUNCTION addCustomer(name, address, phoneNumber)
  CREATE CustomerMap
  STORE each phoneNumber(key) into CustomerMap and associate with frequency name and address
END FUNCTION

class CustomerMap {
  constructor(){
    this.customers = [];
    this.databaseSize = 47;
  }
  hash(key){
    let hashCode = 0;
    for(var i = 0; i < key.length; i++){
      hashCode += key.charCodeAt(i);
    }
    let index = hashCode % this.databaseSize;
    return index;
  }
  addCustomer(name, address, phoneNumber){
    let index = this.hash(phoneNumber);
    // checking for collision
    while(this.customers[index]){
      index = index + 1;
    }
    this.customers[index] = {customerName: name, customerAddress: address, customerPhone: phoneNumber};
  }
  lookUpCustomer(phoneNumber){
    let index = this.hash(phoneNumber);
    while(this.customers[index].customerPhone !== phoneNumber){
      index = index + 1;
    }
    return this.customers[index];
  }
}

// Test Code
let customerTest = new CustomerMap();
test.addCustomer("Lindsay Spencer", "25327 Metzler Creek Drive", "2812538164");
test.addCustomer("Max Spencer", "25327 Metzler Creek Drive", "7138342625");
test.addCustomer("Paula McGee", "25327 Metzler Creek Drive", "2812536232");


// Build a system that allows a store owner to track their store's inventory using a hash table for storage.

// hash is based off of the itemName

CLASS Inventory
  CREATE InventoryMap
  FUNCTION addItem(itemNumber, itemName, itemCount)
    IF item does not exist in database THEN
      STORE each itemNumber(key) into InventoryMap and associate with frequency itemName and itemCount
    ELSE
      FIND item by itemNumber
      INCREMENT itemCount by 1
    END IF
  END FUNCTION
  FUNCTION removeItem(itemNumber)
    FIND item by itemNumber
    DECREMENT itemCount by 1 and RETURN updated itemCount
  END FUNCTION
  FUNCTION checkInventory(itemNumber)
    FIND item by itemNumber
    RETURN itemName and itemCount
  END FUNCTION
END CLASS

class InventoryMap {
  constructor() {
    this.inventory = [];
    this.databaseSize = 47;
  }
  hash(key){
    let hashCode = 0;
    for(var i = 0; i < key.length; i++){
      hashCode += key.charCodeAt(i);
    }
    let index = hashCode % this.databaseSize;
    return index;
  }
  addItem(itemName, itemCount){
    let index = this.hash(itemName);
    // checking for collision
    while(this.inventory[index]){
      index = index + 1;
    }
    this.inventory[index] = {item: itemName, quantity: itemCount};
  }
  updateCount(itemName, updatedItemCount){
    let index = this.hash(itemName);
    // find item
    while(this.inventory[index].item !== itemName){
      index = index + 1;
    }
    // update info
    this.inventory[index] = {item: itemName, quantity: updatedItemCount};
  }
  removeItem(itemName){
    let index = this.hash(itemName);
    while(this.inventory[index].item !== itemName){
      index = index + 1;
    }
    this.inventory[index] = null;
  }
  checkInventory(itemName){
    let index = this.hash(itemName);
    while(this.inventory[index].item !== itemName){
      index = index + 1;
    }
    return this.inventory[index];
  }
}

// Test Code

let inventoryTest = new InventoryMap();
inventoryTest.addItem("Whoosit", "3");
inventoryTest.addItem("Whatsit", "5");
inventoryTest.addItem("Thingimabobs", "20");



// Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.

FUNCTION fileNewspaper(newspaper, publisher, publicationDate)
  CREATE HashMapNewspaper
  STORE each publisher and publication date(key) into HashMapNewspaper and associate with frequency newspaper
END FUNCTION


class NewspaperMap {
  constructor() {
    this.database = [];
    this.databaseSize = 47;
  }
  hash(key){
    let hashCode = 0;
    for(var i = 0; i < key.length; i++){
      hashCode += key.charCodeAt(i);
    }
    let index = hashCode % this.databaseSize;
    return index;
  }
  enterNewspaper(newspaper, publisher, publicationDate){
    let key = publisher + publicationDate;
    let index = this.hash(key);
    // checking for collision
    while(this.database[index]){
      index = index + 1;
    }
    this.database[index] = {content: newspaper, publisher: publisher, date: publicationDate};
  }
  searchDatabase(publisher, publicationDate){
    let key = publisher + publicationDate;
    let index = this.hash(key);
    while(this.database[index].publisher !== publisher && this.database[index].date !== publicationDate){
      index = index + 1;
    }
    return this.database[index];
  }
}

// Test Code

let newspaperTest = new NewspaperMap();
newspaperTest.enterNewspaper("Today, the world changed...", "New York Times", "06/12/1992");
newspaperTest.enterNewspaper("Santa spotted leaving the North Pole...", "Houston Chronicle", "12/24/2018");
