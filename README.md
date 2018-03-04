采用数组表达式的浮点数运算器，类似数学运算表达式语法，实现浮点数的连续运算

## Installation

      npm install float-arithmetic --save

## 示例

      let Float = require('float-arithmetic')

      let result = Float(0.1, '+', 0.2, '+', 0.3)
      // 0.6 | 0.6000000000000001

      let result = Float(0.1, '+', 0.2, '+', [0.3, '*', 0.4])
      // 0.42 | 0.42000000000000004

      let result = Float(0.1, '-', 0.2, '+', [0.3, '/', 0.4])
      // 0.65 | 0.6499999999999999

      let result = Float(0.1, '+', 0.2, '+', [0.2, '*', [0.3, '/', 0.4]])
      // 0.45 | 0.45000000000000007

## 优先级

> 注意：不支持自动提升乘除法优先级，可使用数组包裹方式声明优先级。

数组等同于括弧，与括弧运算符特性一致。


## 关于精度

加减乘除运算均采用放大至整型后求值，当除法运算无法被除尽时依然会产生多位小数，输出特性与普通计算器一致