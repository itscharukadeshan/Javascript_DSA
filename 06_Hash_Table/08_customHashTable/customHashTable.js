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

  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i} : ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i} : Empty [[Key , Value]]`);
      }
    }
  }

  set(key, value) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  get(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
  remove(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index];
      } else {
        for (let i = 0; i < this.storage[index.length]; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i];
          }
        }
      }
    }
  }
  has(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return true;
        }
      }
    }

    return false;
  }
  clear() {
    this.storage = [];
  }
}
const newHashTable = new CustomHashTable();

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
