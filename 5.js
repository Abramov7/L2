var a = Number(prompt('ВВЕДИТЕ ЧИСЛО: ', 0));

if (a == Math.floor(a) && a>0){
    console.log('У ВАС ПОЛУЧИЛОСЬ');
} else {
    console.log('У вас неправильно!');
}