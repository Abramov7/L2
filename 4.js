var a = 2.1;
var b = 6.7;
var x = Number(prompt('Введите значение X: ', 0));
console.log(x);

switch(x) {
    case -3:
        var y = x*x*x + 2*a;
        console.log(y);
        break;
    case 4:
        var y = Math.log(Math.abs(Math.cos(b*x)));
        console.log(y);
        break;
    case 6:
        var y = (x**2)*(Math.E**x);
        console.log(y);
        break;
    default:
        console.log('Нет таких значений.')
}
//break - прерывает выполнение, однако если его нет
//то выполнение пойдёт ниже по следующим case, при этом
//остальные проверки игнорируются