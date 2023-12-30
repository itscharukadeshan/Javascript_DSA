/** @format */

class CustomHashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % max;
  }
}

const newHashTable = new CustomHashTable();
const result = newHashTable._hash("myKey", newHashTable.limit);

console.log(result);
