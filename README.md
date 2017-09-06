# 采用数组表达式的浮点数运算器

类似常规数值运算表达式，可用于多个表达式的连续计算，避免代码碎片化

## Installation

      npm install float-arithmetic --save

## 参考示例

      let Float = require('float-arithmetic')

      let result = Float(0.1, '+', 0.2, '+', 0.3)

      let result = Float(0.1, '+', 0.2, '+', [0.3, '*', 0.4])

      let result = Float(0.1, '-', 0.2, '+', [0.3, '/', 0.4])


## 数组等同于括弧运算符，可提升运算优先级

> 注意：目前暂不支持自动提升乘除法优先级，可使用数组包裹方式声明优先级