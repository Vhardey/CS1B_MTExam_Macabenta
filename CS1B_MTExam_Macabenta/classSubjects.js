// MACABENTA, VHARDEY JOHN F.
let subTitle = prompt("Enter your subject title."); // asks user for their subject
let classSchedule = prompt("Enter your class schedule."); // asks useer for their schedule
let classroom = prompt("Enter your classroom."); // asks user for their room
let classInstrutor = prompt("Enter your instructor."); // asks user for their instructors name
let studName = prompt("Enter your name."); // asks users name

let fullInfo = (`[${studName}] is currently enrolled in [${subTitle}] with a class schedule of [${classSchedule}] at [${classroom}]. The instructor for subject is [${classInstrutor}]`); // combines all the value above into a sentence

console.log(fullInfo); // logs fullInfo dvalue