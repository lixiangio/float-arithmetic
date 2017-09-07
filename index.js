"use strict";
var operation = {
    "+": function (a, b, enlarge) {
        return ((a * enlarge) + (b * enlarge)) / enlarge;
    },
    "-": function (a, b, enlarge) {
        return ((a * enlarge) - (b * enlarge)) / enlarge;
    },
    "*": function (a, b, enlarge) {
        return ((a * enlarge) * (b * enlarge)) / enlarge / enlarge;
    },
    "/": function (a, b, enlarge) {
        return ((a * enlarge) / (b * enlarge));
    }
};
// 数据类型判断
function type(expression) {
    // 数值
    if (!isNaN(expression)) {
        return expression;
    }
    else if (expression instanceof Array) {
        return arithmetic.apply(void 0, expression);
    }
}
function arithmetic() {
    var expression = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        expression[_i] = arguments[_i];
    }
    var result = type(expression[0]);
    for (var i = 0; i + 2 < expression.length; i += 2) {
        var operator = expression[i + 1];
        var initiative = type(expression[i + 2]);
        var resultDecimal = String(result).split('.')[1];
        if (resultDecimal) {
            var resultLength = resultDecimal.length || 0;
        }
        var initiativeDecimal = String(initiative).split('.')[1];
        if (initiativeDecimal) {
            var initiativeLength = initiativeDecimal.length || 0;
        }
        var enlarge = Math.pow(10, Math.max(resultLength, initiativeLength));
        result = operation[operator](result, initiative, enlarge);
    }
    return result;
}
module.exports = arithmetic;
