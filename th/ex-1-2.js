/*
เรามี Variable score เก็บค่าคะแนนสอบของนักเรียน 1 คน
ให้เขียน Algorithm ที่นำ score มาแปลงเป็นเกรด แล้วบรรจุใน Variable grade ตามเกณฑ์ต่อไปนี้
    - 80 ขึ้นไป ได้ A
    - 70-79 ได้ B
    - 60-69 ได้ C
    - 50-59 ได้ D
    - 49 ลงไป ได้ F
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/





/*
กระบวนการ
1. แสดงผลลัพ console.log
2. กำหนดค่า // assign or re-assign =
3. การ + - * /
4. เปรียบเทียบ < > = ===
5. การดำเนินการทางตรรกะ
6. if-else
7. loop
-----------------------------------
1.list ว่าต้องใช้ กระบวนการใดบ้าง
    if-else
    การแสดงผล -> console.log()
    การกำหนดค่า 
2. ลองเขียน step ออกมา
    if -> score 80 ถ้าจริง = "A";
    else if -> score > 70 = "B";
    else if -> score > 60 = "C";
    else if -> score > 50 = "D";
    else -> ถ้าจรอง grade = "F";
3. แปลง step เป็นโค้ด
*/

const score = 75;
let grade;

if(score >= 80) {
    grade = "A";
} else if (score > 70) {
    grade = "B";
} else if (score > 60) {
    grade = "C";
} else if (score > 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log(grade); // "B"