var a = prompt('ЧИСЛО: ', 0)
var i = 4;
c = ''

if (Number(a) >= 10000 && Number(a) <= 99999){
    
    while (i != -1) {
        c = c + a[i]
        i = i - 1;
    }
    
    if (a == c){
        console.log('ПОЛИНДРОМ');
    } else {
        console.log('НЕТ');
    }

} else {
    console.log('ОШИБКА');
}

