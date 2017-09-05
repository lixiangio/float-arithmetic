"use strict"

// 浮点数放大倍数
const cardinalNumber = 100

const operator = {
   '+': {
      compensate: '*'
   },
   '-': {
      compensate: '*'
   },
   '*': {
      compensate: '/' + cardinalNumber
   },
   '/': {
      compensate: '*' + cardinalNumber
   },
}

// 递归数组运算表达式转JS运算表达式
function recursion(expression) {

   // 数值
   if (!isNaN(expression)) {
      return `${expression}*${cardinalNumber}`
   }

   // 运算符
   else if (typeof expression === 'string') {
      return expression
   }

   // 数组
   else if (expression instanceof Array) {
      let sub = ``
      for (let item of expression) {
         sub = sub + recursion(item)
      }
      return `(${sub})`
   }

}


module.exports = function (...expression) {
   // 仅处理数组表达式
   if (expression instanceof Array) {

      let stringExpression = `${recursion(expression)}/${cardinalNumber}`
      console.log(stringExpression)

      // 递归生成运算表达式
      return eval(stringExpression)

   } else {
      return null
   }
}