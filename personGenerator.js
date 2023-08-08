let personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Инна",
            "id_2": "Анна",
            "id_3": "Ольга",
            "id_4": "Лариса",
            "id_5": "Мария",
            "id_6": "Анжелла",
            "id_7": "Виктория",
            "id_8": "Анастасия",
            "id_9": "Альбина",
            "id_10": "Мария"
        }
    }`,
    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Викторович",
            "id_2": "Олегович",
            "id_3": "Андреевич",
            "id_4": "Игоревич",
            "id_5": "Максимович",
            "id_6": "Николаевич",
            "id_7": "Артемович",
            "id_8": "Кириллович",
            "id_9": "Юрьевич",
            "id_10": "Евгеньевич"
        }
    }`,
    professionMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Грузчик",
            "id_4": "Моряк",
            "id_5": "Строитель"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Няня",
            "id_2": "Визажист",
            "id_3": "Уборщица",
            "id_4": "Актриса",
            "id_5": "Секретарь"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomData: function() {
        const month = this.randomValue(this.monthJson);
        if (month === 'апреля' || month === 'июня' || month === 'сентября' || month === 'ноября') {
            return `${this.randomIntNumber(30, 1)} ${month} ${this.randomIntNumber(2005, 1923)} г.`;
        }  else if (month === 'февраля') {
            return `${this.randomIntNumber(28, 1)} ${month} ${this.randomIntNumber(2005, 1923)} г.`;
        } else {
            return `${this.randomIntNumber(31, 1)} ${month} ${this.randomIntNumber(2005, 1923)} г.`;
        }
    },

    getPerson: function () {
        this.person = {};

        if (Math.random() < 0.5) {
            this.person.surname = this.randomValue(this.surnameJson);
            this.person.firstName = this.randomValue(this.firstNameMaleJson);
            this.person.middleName = this.randomValue(this.middleNameJson);
            this.person.gender = this.GENDER_MALE;
            this.person.profession = this.randomValue(this.professionMaleJson);
        } else {
            this.person.surname = this.randomValue(this.surnameJson) + 'a';;
            this.person.firstName = this.randomValue(this.firstNameFemaleJson);
            this.person.middleName = this.randomValue(this.middleNameJson).slice(0, -2) + 'нa';
            this.person.gender = this.GENDER_FEMALE;
            this.person.profession = this.randomValue(this.professionFemaleJson);
        };

        this.person.random = this.randomChoice;
        this.person.data = this.randomData();
        return this.person;
    }
};