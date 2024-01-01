/** @format */

const HashTable = require("../08_customHashTable/customHashTable");

const newHashTable = new HashTable();

// * Add Two key value pairs

newHashTable.set("John", "222-44-5-5");
newHashTable.set("Jill", "333-44-5-5");

// * Get the number [value] from name [key]

console.log(newHashTable.get("John"));

// * Verify the two key value pairs

newHashTable.printTable();

// * Remove one of the pairs

newHashTable.remove("Jill");

newHashTable.printTable();

// * Check for key is present in the table

console.log(newHashTable.has("Jill")); // Removed one
console.log(newHashTable.has("John"));

//* Clear the table

newHashTable.clear();

// * Check the table for data

newHashTable.printTable();
