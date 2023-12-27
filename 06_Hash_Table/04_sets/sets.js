/** @format */

const newSet = new Set(["one", "two", "three", "one"]);

// * Set only take unique values

console.log(newSet);

// * Adding new values

newSet.add("four");

console.log(newSet);

// Checking for values

newSet.has("one");
newSet.has("six");

// * Size of the Set

console.log(newSet.size);

// * get values

console.log(newSet.values());

// With for loop

for (const number of newSet) {
  console.log(number);
}

// * Convert to an array

const newArray = [...newSet];

console.log(newArray);
