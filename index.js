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
   } else {
      throw new Error('运算表达式语法错误')
   }
}

function arithmetic(...expression) {
   // 迭代初始值
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

      let enlarge = Math.pow(10, Math.max(resultLength, initiativeLength))

      if (operation[operator]) {
         result = operation[operator](result, initiative, enlarge)
      } else {
         throw new Error('运算符不存在')
      }

   }
   return result
}

module.exports = arithmetic