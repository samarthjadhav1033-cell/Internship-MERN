const fs = require("fs");

function insert(name) {
    fs.appendFileSync("studentDetails.txt", name + "\n");
    console.log("Student Added Successfully");
}

function display() {
    const data = fs.readFileSync("studentDetails.txt", "utf8");
    console.log(data);
}

function update(oldName, newName) {
    let data = fs.readFileSync("studentDetails.txt", "utf8");

    data = data
        .split("\n")
        .map(item => item === oldName ? newName : item)
        .join("\n");

    fs.writeFileSync("studentDetails.txt", data);
    console.log("Student Updated");
}

function remove(name) {
    let data = fs.readFileSync("studentDetails.txt", "utf8");
    let arr = data.split("\n").filter(item => item !== name && item !== "");
    fs.writeFileSync("studentDetails.txt", arr.join("\n"));
    console.log("Student Deleted");
}

module.exports = { insert, display, update, remove };