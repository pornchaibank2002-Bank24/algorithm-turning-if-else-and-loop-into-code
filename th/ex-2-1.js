/* 
ให้เขียน Function ที่ชื่อว่า sumPositiveNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers ซึ่งเป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำเฉพาะตัวเลขที่มีค่าเป็นบวกมารวมกัน แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/
/*
1.list ว่าต้องใช้ กระบวนการใดบ้าง
    Loop
    if-else (เป็นบวกจิงไหม)
    การเปรียบเทียบ >= 0
    return ผลลัพธ์ ??? -> ต้องมีตัวแปรมาเก็บค่า ถึงจะ return ค่านั้นออกมาได้ การกำหนมค่า /assign or re-assign -> =
    // ยังขาดไป
2. ลองเขียน step ออกมา
    1. สร้างตัวแปรทดมารอรับค่าแรก let totle = 0;
    ขั้นแรกต้อง Loop เข้าไปก่อน
    เข้าไปเจอสมาชิกแต่ละตัวแล้วนำสมาชิกตัวนั้นมาเทียบว่ามีค่ามากกว่าเท่ากับ 0 ไหม -> if (3 > 0) 
    {ุถ้าสมาชิกตัวมีค่าเป็นจำนวนเต็มบวกเอา total + สมาชิกตัวนั้น}
    อย่าลืม return total ออกไปนอก function
3. แปลง step เป็นโค้ด
*/
// Start coding here

function sumPositiveNumbers(numbers1){
    let total = 0;
    // for Loop ธรรมดา หรือ for of
    for(const num of numbers1){
        if(num >=0){
            total += num;
            // ข้างบนย่อ ไม่ย่อคือ total = total + num
        }
    }
    return total;
}

const numbers1 = [3, -5, 10, 12, -7, 0, 8, 2];
console.log(sumPositiveNumbers(numbers1)); // 35

const number2 = [0, -4, -1, -5, 6, 5, 0];
console.log(sumPositiveNumbers(number2)); // 11
