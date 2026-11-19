/* 
ให้เขียน Function ที่ชื่อว่า countNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers เป็น Array ที่บรรจุข้อมูลตัวเลข
    - Function นี้จะตรวจสอบตัวเลขแต่ละตัวใน numbers เพื่อนับจำนวนของตัวเลขที่มีค่าเป็นบวก, เป็นลบ และเป็นศูนย์ แล้ว Return ค่าออกมา
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
1.list ว่าต้องใช้ กระบวนการใดบ้าง
    1. จะตรวจสอบตัวเลขแต่ละตัวใน numbers -> loop
    if else
        -> ถ้าตัวเลขนั้นมากว่า 0 ให้เอาตัวแปรที่เก็บว่ามีเลขบวกกี่ตัว
    มาบวกเข้าไปอีก 1
        -> ถ้าตัวเลขเท่ากับ 0 ให้เอาตัวแปรที่เก็บว่ามีเลข 0 กี่ตัว มาบวกเข้าไปอีก 1
        -> เคสอื่น ให้ทำ ? (เคสตัวเลขมีค่าเป็นลบ)

    2. return ค่าออกมา -> มันน่าจะต้องมีตัวแปรมารับค่า
        ตังนั้นต้องใช้การกำหนดค่า
    assign or re-assign

2. ลองเขียน step ออกมา

3. แปลง step เป็นโค้ด
*/

// Start coding here

function countNumbers(numbers){
    let numberOfPositive = 0; // เก็บว่ามีตัวเลขที่มีค่าบวกกี่ตัว
    let numberOfzero = 0; // เก็บว่ามีตัวเลขที่มีค่าเป็น 0 กี่ตัว
    let numberOfNegative = 0; // เก็บว่ามีตัวเลขที่มีค่าเป็นลบกี่ตัว
    for(const num of numbers) {
        if(num > 0) {
            numberOfPositive++;
        }else if (num === 0) {
            numberOfzero++;
        }else {
            numberOfNegative++;
        }
    }
    return {
        positive : numberOfPositive,
        negative : numberOfNegative,
        zero : numberOfzero,
    };
}

const numbers1 = [3, -5, 0, 12, -7, 0, 8, 0, 1];
console.log(countNumbers(numbers1)); // { positive: 4, negative: 2, zero: 3 }
// key:value,....,
const number2 = [0, -4, -1, -5, 6, 0];
console.log(countNumbers(number2)); // { positive: 1, negative: 3, zero: 2 }
