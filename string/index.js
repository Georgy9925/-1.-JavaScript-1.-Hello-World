
const myName = 'Георгий';

const programmingLanguage = 'JavaScript';

const nameCourseCreatorName = 'Владилена';
const surnameCourseCreatorName= 'Минина';
const courseCreatorName = `${nameCourseCreatorName} ${surnameCourseCreatorName}`;

const cause1 = 'хочу'
const cause2 = 'найти'
const cause3 = 'хорошую'
const cause4 = 'работу'
const reasonText = `${cause1} ${cause2} ${cause3} ${cause4}`;

const numberOfMonth = '0';

let myInfoText = `Всем привет! Меня зовут ${myName}.\n
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.\n
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев.\n
Я уверен, что пройду данный курс до конца!`

console.log(myInfoText);
