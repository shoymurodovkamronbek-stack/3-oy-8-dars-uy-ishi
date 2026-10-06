const students = [
    { id: 1, name: "Ali", group: "A", score: 85 },
    { id: 2, name: "Vali", group: "B", score: 72 },
    { id: 3, name: "Hasan", group: "A", score: 95 },
    { id: 4, name: "Husan", group: "B", score: 88 },
    { id: 5, name: "Aziz", group: "A", score: 65 },
    { id: 6, name: "Sardor", group: "B", score: 91 }
];

const groupMap = new Map();
for (const student of students) {
    const group = student.group;
    if (!groupMap.has(group)) {
        groupMap.set(group, []);
    }
    groupMap.get(group).push(student);
}
console.log("1.", groupMap);


const studentMap = new Map();
for (const student of students) {
    studentMap.set(student.id, student);
}
console.log("2.", studentMap.get(3));

const groupAverage = new Map();
for (const [group, students] of groupMap) {
    let sum = 0;
    for (const student of students) {
        sum += student.score;
    }
    groupAverage.set(group, sum / students.length);
}
console.log("3.", groupAverage);

const groupTopStudent = new Map();
for (const [group, students] of groupMap) {
    let topStudent = students[0];
    for (const student of students) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }
    groupTopStudent.set(group, topStudent);
}
console.log("4.", groupTopStudent);

let bestGroup = "";
let bestAverage = 0;
for (const [group, average] of groupAverage) {
    if (average > bestAverage) {
        bestAverage = average;
        bestGroup = group;
    }
}

console.log("5.", bestGroup, bestAverage);