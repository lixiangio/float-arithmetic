## 采用数组表达式的浮点数运算器

类似常规数值运算表达式，可用于多个表达式的连续计算，避免产生大量计算代码碎片

## 参考示例

      let arithmetic = require('float-arithmetic')

      let result = arithmetic(0.1, '+', 0.2, '+', 0.3)

      let result = arithmetic(0.1, '+', 0.2, '+', [0.3, '*', 0.4])

      let result = arithmetic(0.1, '-', 0.2, '+', [0.3, '/', 0.4])


## 数组等同于括弧运算符，可提升运算优先级

> 注意：目前暂不支持乘除法优先级运算，如果要提升优先级需要用数组包裹