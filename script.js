const userName = prompt("Введите ваше имя:", "Елизавета");

// Данные: массив из 7 чисел (дневная выручка в рублях)
const dailyRevenues = [12000, 2500, 8000, 10500, 1500, 4000, 3000];

// Функция подсчёта суммы
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Функция поиска максимума
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Функция фильтрации (выручка > 10000 Р)
function filterHighRevenue(arr) {
    let highDays = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10000) {
            highDays.push(arr[i]);
        }
    }
    return highDays;
}

// 3. Цикл: подсчёт дней с низкой выручкой (<= 3000 Р) и их доли
let lowRevenueCount = 0;
for (let i = 0; i < dailyRevenues.length; i++) {
    if (dailyRevenues[i] <= 3000) {
        lowRevenueCount++;
    }
}
const lowRevenueShare = (lowRevenueCount / dailyRevenues.length) * 100;

// 4. Вычисления
const totalRevenue = calculateSum(dailyRevenues);
const maxRevenue = findMax(dailyRevenues); // ДОБАВЛЕНО: используем функцию максимума
const highRevenueDaysCount = filterHighRevenue(dailyRevenues).length;
const averageRevenue = totalRevenue / dailyRevenues.length;

// 5. Вывод результатов
alert(`Привет, ${userName}! Общая выручка — ${totalRevenue} ₽, в ${highRevenueDaysCount} днях показатели были высокими.`);

// Вывод в консоль
console.log(`Количество дней с низкой выручкой (<= 3000 ₽): ${lowRevenueCount}`);
console.log(`Доля дней с низкой выручкой: ${lowRevenueShare.toFixed(2)}%`);
console.log(`Максимальная дневная выручка: ${maxRevenue} ₽`);

// 6. Дополнительное условие (ТЗ: если среднее < 5000, вывести в консоль)
if (averageRevenue < 5000) {
    console.log("Стоит проанализировать причины низкой выручки");
}