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

      let resultDecimal = String(result).split('.')[1]
      if (resultDecimal) {
         var resultLength = resultDecimal.length || 0
      }

      let initiativeDecimal = String(initiative).split('.')[1]
      if (initiativeDecimal) {
         var initiativeLength = initiativeDecimal.length || 0
      }

      let enlarge = Math.pow(10, Math.max(resultLength, initiativeLength))

      result = operation[operator](result, initiative, enlarge)

   }
   return result
}

module.exports = arithmetic