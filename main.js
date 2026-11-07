// ЗАВДАННЯ 1: Порівняння кількості літер a
const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(row1, row2) {
    const count1 = countLetter(row1, 'a');
    const count2 = countLetter(row2, 'a');

    if (count1 > count2) {
        return row1;
    } else if (count2 > count1) {
        return row2;
    } else {
        return 'Кількість літер однакова';
    }
}

console.log("--- Результат Завдання 1 ---");
console.log(getRow(firstRow, secondRow));

// ЗАВДАННЯ 2: Форматування номеру телефону
function formattedPhone(phone) {
    let cleaned = phone.trim();
    let digits = cleaned.replace(/\D/g, '');
    if (digits.length === 10 && digits.startsWith('0')) {
        digits = '38' + digits; 
    } else if (digits.length === 11 && digits.startsWith('8')) {
        digits = '3' + digits; 
    }

    if (digits.length !== 12 || !digits.startsWith('38')) {
        return 'Помилка: формат функції неправильний!';
    }

    let country = '+' + digits.slice(0, 2); 
    let operator = digits.slice(2, 5);     
    let part1 = digits.slice(5, 8);        
    let part2 = digits.slice(8, 10);      
    let part3 = digits.slice(10, 12);    

    return `${country} (${operator}) ${part1}-${part2}-${part3}`;
}

console.log("--- Результат Завдання 2 ---");
console.log(formattedPhone('+380664567890'));
console.log(formattedPhone('80971234567'));    
console.log(formattedPhone('0671234567'));      
console.log(formattedPhone('12345'));           