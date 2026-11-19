/*
ให้เขียน Function ที่ชื่อว่า calculateAverageScore ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ scores และ classNumber
        1. scores เป็น Array ที่บรรจุข้อมูลคะแนนสอบ
        2. classNumber เป็นข้อมูลประเภท Number ที่เก็บหมายเลขห้องเรียน
    - Function นี้จะนำคะแนนสอบของนักเรียนในห้องที่ระบุมาบวกกัน จากนั้นนำไปหาค่าเฉลี่ย แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

/* Operation พื้นฐาน (กระบวนการพื้นฐาน) 7 ประเภท:
1. การแสดงผลลัพธ์ -> console.log()
2. การกำหนดค่า/assign or re-assign -> = 
3. การบวก/ลบ/คูณ/หาร 
4. การเปรียบเทียบ -> <, >, === 
5. การดำเนินการทางตรรกะ -> AND OR NOT
6. If-Else 
7. Loop
*/

/* 
1. list operation ว่าใช้ concept อะไรบ้าง
  loop
  เอามาเฉพาะคะแนนของคนที่อยู่ในห้องนั้น -> ต้องมีเงื่อนไข
  if-else
  มีการบวก/ลบ/คูณ/หาร 
  การเปรียบเทียบ -> <, >, === 
  return คะแนนเฉลี่ย ->  การกำหนดค่า/assign or re-assign -> = 
2. ลองเขียน step ออกมา
  1. ประกาศตัวแปรทดเพื่อ
    1.1 เก็บคะแนนรวม
    1.2 นับจำนวนคนที่จะเอามาหารเพื่อหาค่าเฉลี่ย
  2. loop เข้าไปเพื่อตรวจสอบสมาชิกแต่ละตัว
  3. if-else มาการเปรียบเทียบมาจับว่าสมาชิกตัวนั้นๆอยู่ห้องที่อยากเอามาคำนวณ === classNumber
    3.1 กรณีอยู่ห้องที่อยากเอามาคำนวณ ต้องเอามาคำนวณ
    3.2 กรณีอยู่คนละห้อง ไม่ต้องทำอะไร ช่างมัน
 4. return คะแนนเฉลี่ย

3. แปลง step เป็นโค้ด
*/

// Start coding here

function calculateAverageScore(scores, searchClassNumber){
  let totalScore = 0;
  let studentCount = 0;

  for (const student of scores) {
    console.log(student);
    if(student["classNumber"] === searchClassNumber){
      totalScore += student["mathScore"];
      studentCount += 1;
    }
  }
  return totalScore/studentCount;
}

const scores = [
  { firstname: "Isabel", lastname: "Moore", classNumber: 3, mathScore: 78 },
  { firstname: "Alice", lastname: "Clark", classNumber: 1, mathScore: 80 },
  { firstname: "Charlie", lastname: "Johnson", classNumber: 3, mathScore: 85 },
  { firstname: "Bob", lastname: "Smith", classNumber: 2, mathScore: 75 },
  { firstname: "David", lastname: "Lee", classNumber: 1, mathScore: 90 },
  { firstname: "Eva", lastname: "Davis", classNumber: 2, mathScore: 65 },
  { firstname: "Frank", lastname: "Brown", classNumber: 3, mathScore: 77 },
  { firstname: "Grace", lastname: "Miller", classNumber: 1, mathScore: 95 },
  { firstname: "Jack", lastname: "Taylor", classNumber: 1, mathScore: 82 },
  { firstname: "Henry", lastname: "Wilson", classNumber: 2, mathScore: 88 },
];

console.log(calculateAverageScore(scores, 1)); // 86.75
console.log(calculateAverageScore(scores, 3)); // 80
