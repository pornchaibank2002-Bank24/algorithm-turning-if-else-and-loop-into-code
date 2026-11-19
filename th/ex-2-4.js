/*
เรามี Array numbers ซึ่งบรรจุตัวเลข
ให้เขียน Algorithm ที่หาตัวเลขที่มีค่ามากที่สุดใน numbers แล้วนำตัวเลขนี้มาเก็บไว้ใน Variable maxValue
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

/*
1.list ว่าต้องใช้ กระบวนการใดบ้าง
    loop 
    การกำหนดค่า assign/reassign (Variable maxValue)
    if-else
    การเปรียบเทียบ
2. ลองเขียน step ออกมา
    1.ประกาศ maxvalue
    2.น่าจะต้องมีการ loopเข้าไป
    3. เอา if-else มาเทียบว่าตัวเลขนั้นมากกว่า maxvalue จิงไหมถ้าจิงมห้เปลี่ยนค่าใน maxvalue เป็นตัวเลขนั้น
3. แปลง step เป็นโค้ด
*/

const numbers1 = [12, 45, 7, 89, 23];
const numbers2 = [120, 450, 70, 890, 23000];
function findMaxValue(arr){

// Start coding here

let maxValue = arr[0]; // numbers1 จะได้ 12 แต่ number2 จะได้ 120

// index
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > maxValue) {
        maxValue = numbers[i];
        }
    }
        return maxValue;
}
console.log(findMaxValue(numbers1)); // 89
console.log(findMaxValue(numbers2)); // 23000
