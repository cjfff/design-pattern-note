/*
 * @Author: your name
 * @Date: 2021-10-11 22:59:45
 * @LastEditTime: 2021-10-11 23:02:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /design-pattern/chapter-01/index.js
 */

const duck = {
  duckSinging() {
    console.log("gagaga");
  },
};
const chicken = {
  duckSinging() {
    console.log("gagaga");
  },
};

const choir = [];

const joinChoir = (animal) => {
  if (animal && typeof animal.duckSinging === "function") {
    choir.push(animal);
    console.log("join successful");
  }
};

joinChoir(duck);
joinChoir(chicken);

console.log(choir);
