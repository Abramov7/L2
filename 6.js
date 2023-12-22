var a = prompt('проверка на лог тип данных', 0);
a = a + '';
a = a.toLowerCase();
//Склеить с пустой строкой число

if (a == 'true' || a == 'false' || a == '1' || a == '0') {
    console.log('ЭТО ЛОГ ТИП ДАННЫХ!')
} else {
    console.log('НЕВЕРНО!')
}