// задание 2.1
function snakeCase(s){
    let word=s.split("-");
    let first=word[0];
    let second=word[1].at(0).toUpperCase()+word[1].slice(1);
    return first+second;
}
let result=snakeCase("background-color");
console.log(result);

//задание 2.2
let arr=[9,8,7,6,5,4,3,2,1];
let copy=[...arr];
let copy2=arr.slice();
copy.reverse();
let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    copy2[j] = arr[i];
    j++;
}
console.log("Оригинал:", arr);
console.log("Первый способ:", copy);
console.log("Второй способ:", copy2);

//задание 2.3
const foodDictionary = {
    "пицца": "PIZZA",
    "кофе": "COFFEE",
    "шоколад": "CHOCOLATE",
    "яблоко": "APPLE"
};
function translate(word){
    word=word.toLowerCase();
    if(foodDictionary[word]){
        return foodDictionary[word];
    }
    else{
        return "слова нет в словаре"
    }
}
console.log(translate("пицца"))
console.log(translate("ШОКОЛАД"))

//задание 2.4
const weekDays = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",

    getCurrentDay() {
        let now = new Date();
        let dayNum = now.getDay(); 
        if (dayNum === 0) {
            dayNum = 7;
        }
        return this[dayNum];
    }
};
console.log(weekDays.getCurrentDay());

//задание 2.5
const personal = {
    manager: "Анна",
    developer: "Иван",
    designer: "Ольга"
};
const personal2 = { ...personal };
personal2.manager = "Максим";
personal2.developer = "Светлана";
let strPersonal = "Менеджер: " + personal.manager + "\nРазработчик: " + personal.developer;
let strPersonal2 = "Менеджер: " + personal2.manager + "\nРазработчик: " + personal2.developer;
console.log(strPersonal);
console.log(strPersonal2);

//задание 2.6
let subjects={
    list:"математика, программирование, физика, химия, история",

    add(name){
        let arr=this.list.split(", ")
        if(!arr.includes(name)){
            arr.push(name)
            this.list = arr.join(", ");
        }
    }
}
subjects.add("информатика");
console.log(subjects.list);
subjects.add("физика");
console.log(subjects.list);