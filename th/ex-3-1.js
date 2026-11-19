/*  
ให้เขียน Function ที่ชื่อว่า countDogByBreed ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ breedArray
        1. breedArray เป็น Array ที่บรรจุสายพันธุ์สุนัขที่เข้ารับบริการในร้านตัดขนแห่งหนึ่ง
    - Function นี้จะนับว่าสุนัขแต่ละสายพันธุ์ที่เข้ามาใช้บริการมีจำนวนทั้งหมดกี่ตัว แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

/* 
1. list operation ว่าใช้ concept อะไรบ้าง
 1. loop
  // จะนับจำนวนได้ต้องบอกได้ก่อนว่า เป็นหมาสายพันธุ์ไหน
  2. if-else
    1. ถ้ายังไม่เคยเจอหมาสายพันธ์ุนั้นเลย -> ต้องนับสายพันธุ์นั้นครั้งแรก
    2. เคยเจอหมาสายพันธุ์นั้นแล้ว -> เอาจำนวนเดิมมาบวก 1
  3. การ+ - * /
  4. return จะต้องมีตัวแปรสำหรับส่งค่าออกมา การกำหนดค่า /assign or re-assign
2. ลองเขียน step ออกมา
  1. ประกาศตัวแปรทดก่อน
  2. ใช้ loop เพื่อตรวจสอบสมาชิกรายตัว
    ในการเข้าถึงสมาชิกแต่ละตัวให้ใช้ if-else
    ถ้าเงื่อนไขไหนถูก ให้ทำตามเงื่อนไขนั้น
  3. return ค่าออกมา
3. แปลง step เป็นโค้ด
*/

// Start coding here

function countDogByBreed(breedArray) {

  // ตัวแปรทดต้องเก็บค่า obj เพราะเราอยาก return obj ออกไป
  const dogFrequency = {};

  for(const breed of  breedArray){
    //objname(key)
    // dogFrequency{"Beagle" = 1
    if (dogFrequency[breed]){
      dogFrequency[breed]++;
    } else {
      dogFrequency[breed] = 1;
    }
  }
  return dogFrequency;
}

const breedArray1 = [
    "Beagle",
    "Labrador Retriever",
    "Golden Retriever",
    "Bulldog",
    "Golden Retriever",
    "Poodle",
    "Beagle",
    "Beagle",
  ];
  
  console.log(countDogByBreed(breedArray1));
  /* 
          {
            Beagle: 3,
            "Labrador Retriever": 1,
            "Golden Retriever": 2,
            Bulldog: 1,
            Poodle: 1
          }
  */
  
  const breedArray2 = [
    "German Shepherd",
    "Siberian Husky",
    "Dachshund",
    "Siberian Husky",
    "Shih Tzu",
  ];
  
  console.log(countDogByBreed(breedArray2));
  /*
          {
            "German Shepherd": 1,
            "Siberian Husky": 2,
            Dachshund: 1,
            "Shih Tzu": 1
          }
  */
  
  // ถ้าเราพยายามเข้าถึง Key ที่ยังไม่มีอยู่ใน Object จะได้ค่ากลับมาเป็น undefined เช่น
  const dogFrequency = {
    "German Shepherd": 10,
  };
  
  // objName["key"] -> bracket notation
  // objName.key -> Dot notation
  console.log(dogFrequency["German Shepherd"]); // 10
  console.log(dogFrequency["Shih Tzu"]); // undefined
  