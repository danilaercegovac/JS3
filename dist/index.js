// Берём часть после вопросительного знака
const query = window.location.search; // пример: "?123456"
const N = parseInt(query.substring(1), 10);

if (!isNaN(N) && N >= 2) {
    document.title = ``;

    // Функция для проверки простого числа
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Считаем простые числа
    let count = 0;
    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) count++;
    }

    // Отображаем результат
    document.getElementById('result').textContent = `${count}`;
} else {
    document.getElementById('result').textContent = "Введите число >= 2 в URL после '?'.";
    document.title = "Ошибка ввода";
}