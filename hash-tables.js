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
    this.databaseSize = 13;
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
    for(var x = 0; x < this.databaseSize - index; x++){
      if(!this.customers[index + x]){
        let location = index + x;
      }
    }
    this.customers[location] = {customerName: name, customerAddress: address, customerPhone: phoneNumber};
  }
  lookUpCustomer(phoneNumber){
    let index = this.hash(phoneNumber);
    for(var x = 0; x < this.databaseSize - index; x++){
      if(this.customers[index + x].customerPhone === phoneNumber){
        let location = index + x;
      }
    }
    return this.customers[location];
  }
}



// Build a system that allows a store owner to track their store's inventory using a hash table for storage.

// hash is based off of the itemNumber,

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
    this.databaseSize = 13;
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
    let index = hash(itemName);
    // checking for collision
    for(var x = 0; x < this.databaseSize - index; x++){
      if(!this.inventory[index + x]){
        let location = index + x;
      }
    this.inventory[location] = {item: itemName, quantity: itemCount};
  }
  updateCount(itemName, updatedItemCount){
    let index = hash(itemName);
    for(var x = 0; x < this.databaseSize - index; x++){
      if(this.inventory[index + x].item === itemName){
        let location = index + x;
      }
    }
    this.inventory[location] = {item: itemName, quantity: updatedItemCount};
  }
  removeItem(itemName){
    let index = hash(itemName);
    for(var x = 0; x < this.databaseSize - index; x++){
      if(this.inventory[index + x].item === itemName){
        let location = index + x;
      }
    }
    this.inventory[location] = null;
  }
  checkInventory(itemName){
    let location = hash(itemName);
    for(var x = 0; x < this.databaseSize - index; x++){
      if(this.inventory[index + x].item === itemName){
        let location = index + x;
      }
    }
    return this.inventory[location];
}

let newMap = new InventoryMap();
newMap.addItem("Whoosit", 3);



// Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.

FUNCTION fileNewspaper(newspaper, publisher, publicationDate)
  CREATE HashMapNewspaper
  STORE each publisher and publication date(key) into HashMapNewspaper and associate with frequency newspaper
END FUNCTION


class NewspaperMap {
  constructor() {
    this.database = [];
    this.databaseSize = 13;
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
    let index = hash(key);
    // checking for collision
    for(var x = 0; x < this.databaseSize - index; x++){
      if(!this.database[index + x]){
        let location = index + x;
      }
    }
    this.database[location] = {content: newspaper, publisher: publisher, date: publicationDate};
  }
  searchDatabase(publisher, publicationDate){
    let key = publisher + publicationDate;
    let index = hash(key);
    for(var x = 0; x < this.databaseSize - index; x++){
      if(this.database[index + x].publisher === publisher && this.database[index + x].date === publicationDate){
        let location = index + x;
      }
    }
    return this.database[location];
  }
}
