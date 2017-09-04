"use strict"

let n = 10000
module.exports = function (expression) {
   if (expression instanceof Array) {
      for (let item of expression) {
         //数组（等同括弧）
         if (item instanceof Array) {
            for (let item of expression) {

            }
         }
      }
   }
}