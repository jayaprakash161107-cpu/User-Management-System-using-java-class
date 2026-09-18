# User Management System using JavaScript and JSON

## About the Project

This is a simple **User Management System** created using JavaScript.

In this project, user details are stored in **JSON format**. The JSON data is converted into a JavaScript object using `JSON.parse()`.

The user details are then displayed using a `for` loop.

Finally, the JavaScript object is converted back into JSON format using `JSON.stringify()`.

## Technologies Used

* JavaScript
* JSON

## Concepts Used

* Variables
* JSON
* `JSON.parse()`
* `JSON.stringify()`
* Arrays
* Objects
* `for` loop
* Template literals
* `console.log()`

## User Details

The project contains details such as:

* Username
* Mobile Number
* Age

Example:

```text
Alice - 9876543210 - 25
Bob - 9123456780 - 30
Charlie - 9001122334 - 17
```

## How It Works

1. User information is written in JSON format.
2. `JSON.parse()` converts the JSON string into a JavaScript array of objects.
3. A `for` loop goes through each user.
4. User details are displayed in the console.
5. `JSON.stringify()` converts the JavaScript data back into JSON format.

## Example

```javascript
const users = JSON.parse(jsonData);

for (let i = 0; i < users.length; i++) {
    console.log(
        `${users[i].username} - ${users[i].mobileNum} - ${users[i].age}`
    );
}

const jsonOut = JSON.stringify(users);

console.log(jsonOut);
```

## What I Learn
