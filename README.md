## 使用逗号分隔符的浮点数运算器，类似与常规数值运算表达式



## 参考示例

      let arithmetic = require('float-arithmetic')

      let result = arithmetic(0.1, '+', 0.2, '+', 0.3)

      let result = arithmetic(0.1, '+', 0.2, '+', [0.3, '*', 0.4])

      let result = arithmetic(0.1, '+', 0.2, '+', [0.3, '*', 0.4])


## 数组等同于括弧运算符，可提升运算优先级