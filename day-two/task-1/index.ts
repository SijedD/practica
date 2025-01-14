const data = {
    name: "Alice",
    age: 25,
    address: "",
    phone: undefined,
    email: "alice@example.com",
    notes: null,
};


const countFilledValues = (obj: Record<string, unknown>) => {
    return Object.values(obj).filter(value => value !== undefined && value !== null && value !== "").length;
}


console.log(countFilledValues(data)) // 3

// Для простых объектов доступны следующие методы:
// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].