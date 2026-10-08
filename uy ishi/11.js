const lessons = [
  { studentId: 1, courseId: 101, lessonId: 1 },
  { studentId: 1, courseId: 101, lessonId: 2 },
  { studentId: 1, courseId: 101, lessonId: 1 },
  { studentId: 2, courseId: 101, lessonId: 1 },
  { studentId: 2, courseId: 102, lessonId: 5 },
  { studentId: 1, courseId: 102, lessonId: 5 }
];

const data = new Map();

for (let { studentId, courseId, lessonId } of lessons) {
  if (!data.has(studentId)) data.set(studentId, new Map());
  const courses = data.get(studentId);

  if (!courses.has(courseId)) courses.set(courseId, new Set());
  courses.get(courseId).add(lessonId);
}

data.forEach((courses, studentId) => {
  let count = 0;
  courses.forEach(lessonsSet => count += lessonsSet.size);
  console.log(`Student ${studentId}: jami ${count} ta unique lesson bajargan.`);
});

console.log("Natija:", data);