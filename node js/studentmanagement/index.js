const student = require("./student");

student.insert("Ajinkya");
student.insert("Samarth");

student.display();

student.update("Ayush" , "Pruthviraj");

student.remove("samarth");

student.display();