"use strict"

let cardinalNumber = 10000

// 递归数组运算表达式转JS运算表达式
function recursion(expression) {

   // 数值
   if (!isNaN(expression)) {
      return expression * cardinalNumber
   }

   // 运算符
   else if (typeof expression === 'string') {
      return expression
   }

   // 数组
   else if (expression instanceof Array) {
      let sub = ''
      for (let item of expression) {
         sub = sub + recursion(item)
      }
      return sub
   }

}

module.exports = function (expression) {
   // 仅处理数组表达式
   if (expression instanceof Array) {
      // 递归生成运算表达式
      return eval(recursion(expression)) / cardinalNumber
   } else {
      return null
   }
}

// console.log(6 + (() => {
//    return 77
// })())