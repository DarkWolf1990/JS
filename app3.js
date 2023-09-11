 "use strict";

// let obj = [{
//     "color": "red",
//     "number": [12345, 6789],
//     "checked": true
// }]

// console.log(obj);
// ___________________________________
// function fibonachi(count) {
//   let fib = [];
//   for (let i = 0; i < count; i++) {
//     if (i == 0) fib[i] = 1;
//     else if (i == 1) fib[i] = 2;
//     else fib[i] = fib[i - 2] + fib[i - 1];
//   }
//   return fib;
// }

// let f = fibonachi(10);
// console.log(f);

// _______________________________________

// function factorial(n) {
//   let fact = 1;
//   if (n == 0) return fact;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// let a = factorial(0);
// console.log(a);
// let b = factorial(3);
// console.log(b);
// let c = factorial(5);
// console.log(c);

// __________________________


//
// class User {
//     constructor(name, age, admin=false) {
//     this.name = name;
//     this.age = age;
//     this.admin = admin;
//     }
//     myInfo(){
//         console.log("My name is "+this.name+" I`m old "+this.age+" years.")
//         if(this.admin === true){
//             console.log("I`m admin!")
//         }
//             }
// }
//
// class Moderator extends User {
//     constructor(name, age, admin=false, moderator=true) {
//         super(name,age,admin)
//         this.moderator = moderator;
//     }
//    static addPost(){
//         console.log("New Post!")
//     }
//     myInfo(){
//         super.myInfo();
//             console.log("I`m moderator!")
//         }
//
// }
//
// let ul1 = new User('Sergey', 33, true)
// let ul2 = new User('Vladimir', 30)
// let ul3 = new User('Alex', 27)
// let m1 = new Moderator("Fedor", 22)

 // _____________________________________-



 class People {
     /**
      *@param {String} fio по формату "Фамилия Имя Отчество"
      * @param {String} birthday день рождения по формату "24.11.1994"
      * @param {String} numbers "номер", если больше 2 номеров, то по формату "номер1, номер2"
      * @param {number} room комната
      */
     constructor(fio, birthday, numbers="", room="") {
         let name = fio.toLowerCase().split(" ");
         this.name = {};
         this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
         this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
         this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

         let date = birthday.split(".");
         this.date = {};
         this.date.d = +date[0]
         this.date.m = +date[1]
         this.date.y = +date[2]
         this.numbers = numbers.split(", ")
         this.room = +room

     }
     static month = ["января", "февраля", "марта", "ареля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
     /**
      * Вывести ФИО
      * @return {String} Строка формата "Фамилия Имя Отчество"
      */
     getFio(){
         return `${this.name.f} ${this.name.i} ${this.name.o}`
     }

     /**
      * Вывести день рождения
      * @return {String} Строка формата "24 июля 1997"
      */

     getBirthday(){
         return  `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
     }

     /**
      * Вывести Фамилия_Имя_Отчество.расширение
      * @param {String} extension расширение, например "jpg" или "png"
      * @return {String} для названия изображения
      */
     getImgSrc(extension){
         return `${this.name.f}_${this.name.i}_${this.name.o}.${extension}`
     }

     /**
      * Вывести все номера телефона или только первый номер
      * @param {Boolean} allNumbers если true то все номера, если false только первый номер
      * @return {String} Строка формата: "890006660099, 89009996699"
      */

     getNumberList(allNumbers){
         if(this.numbers.length ===0 || this.numbers[0].length===0)
             return  undefined
         if(allNumbers){
             return this.numbers.join(", ")
         }else {
             return this.numbers[0];
         }
     }
 }

 let people1 = new People("Dark Wolf Grey", "14.01.1990", "9984, 66332, 5", 6975)
 console.log(people1.getFio())