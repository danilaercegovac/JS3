// Берём часть после вопросительного знака
const query = window.location.search; // пример: "?123456"
const N = parseInt(query.substring(1), 10);

if (!isNaN(N) && N >= 2) {
    // Считаем простые числа от 2 до N
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let count = 0;
    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) count++;
    }

    // Выводим результат только в заголовок окна (title)
    document.title = count;

} else {
    // Если число не указано или меньше 2
    document.title = "Введите число >=2 после '?' в URL";
}
