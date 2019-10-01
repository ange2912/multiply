module.exports = function multiply(first, second) {
   
   let firsts = first.split('').reverse();   
   let seconds = second.split('').reverse();
   let groups = [];

   // for j: перемножаем i-й firsts  на все j-элементы seconds
   for (let i = 0; i < firsts.length; i++) {
     for (let j = 0; j < seconds.length; j++) {
       let ixj = firsts[i] * seconds[j];
       groups[i + j] = (groups[i + j]) ? groups[i + j] + ixj : ixj; // если в groups записан элемент - прибавляем следующий,  иначе - перезаписываем
     }
   } //groups.length = firsts.length + seconds.length. 
   
   //Находим сумму отдельного groups[i] с учетом порядка десятков, сотен и тд.
   //в groups[i] остается 1цифра
   //остальное перенесем на позицию выше
   for (let i = 0; i < groups.length; i++) {
     let number = groups[i] % 10;                 // цифра в позиции
     let valueUp = Math.floor(groups[i] / 10);    // значение для переноса наверх
     groups[i] = number;                          // перезаписываем 1цифру в ячейку groups
   // перенос выше
     if (groups[i + 1])
       {groups[i + 1] += valueUp}
     else if (valueUp != 0)
       {groups[i + 1] = valueUp};
   }
   
   let multiply = groups.reverse().join('');
   return multiply;
};
