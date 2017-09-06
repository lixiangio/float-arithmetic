"use strict"

let operation = {
   "+"(a, b, enlarge) {
      return ((a * enlarge) + (b * enlarge)) / enlarge
   },
   "-"(a, b, enlarge) {
      return ((a * enlarge) - (b * enlarge)) / enlarge
   },
   "*"(a, b, enlarge) {
      return ((a * enlarge) * (b * enlarge)) / enlarge / enlarge
   },
   "/"(a, b, enlarge) {
      return ((a * enlarge) / (b * enlarge))
   },
}

// 数据类型判断
function type(expression) {

   // 数值
   if (!isNaN(expression)) {
      return expression
   }

   // 数组
   else if (expression instanceof Array) {
      return arithmetic(...expression)
   }

}

function arithmetic(...expression) {

   let result = type(expression[0])

   for (let i = 0; i + 2 < expression.length; i += 2) {

      let operator = expression[i + 1]
      let initiative = type(expression[i + 2])

      let resultLength = 0
      let resultDecimal = String(result).split('.')[1]
      if (resultDecimal) {
         resultLength = resultDecimal.length
      }

      let initiativeLength = 0
      let initiativeDecimal = String(initiative).split('.')[1]
      if (initiativeDecimal) {
         initiativeLength = initiativeDecimal.length
      }

      // 对比小数位数位数，取大于值
      let enlarge = Math.pow(10, Math.max(resultLength, initiativeLength))

      result = operation[operator](result, initiative, enlarge)

   }

   return result
}

module.exports = arithmetic