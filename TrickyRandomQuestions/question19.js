function showMarks(marks) {
  const messsage1 = marks || "Absent"; // this consider 0 as falsy value
  const messsage2 = marks ?? "Absent"; // this consider null or undefined only as falsy value and not 0 hence it prints 0 instead of Absent
  console.log(messsage1);
  console.log(messsage2);
}

showMarks(100); // 100 // 100
showMarks(0); // Absent // 0
showMarks(90); // 90 // 90
