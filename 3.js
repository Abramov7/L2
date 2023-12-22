var a = 2.1;
var b = 6.7;
var x = Number(prompt('Введите значение X: ', 0));
console.log(x);

if (x<-2) {
    var y = x*x*x + 2*a;
    console.log(y);
} else if (x>=-2 && x<=5) {
    //Math.log(x) - Возвращает натуральный логарифм числа
    //Math.cos(x) - Возвращает косинус числа
    var y = Math.log(Math.abs(Math.cos(b*x)));
    console.log(y);
} else if (x>5) {
    var y = (x**2)*(Math.E**x);
    console.log(y);
} else {
    console.log('Ошибка');
}