
/*console.log('Hej hej!');

const navigation = document.querySelectorAll('.navigation__link--js');
const paragraphs = document.querySelectorAll('p');

console.log(navigation);
console.log(navigation[1]);
console.log(paragraphs);
console.log(paragraphs[4]);

const text = document.querySelector('.main-footer__text-add--js');
console.log(text.innerHTML);
console.log(text);

const firstName = 'Dawid Majewski';

text.innerHTML = `Paragraf <strong>utworzony w JS</strong>. ${firstName}.`;

const age = 113;

if (age > 20) {
    console.log('Masz więcej niż 20 lat.');
}
else if (age == 20) {
    console.log('Masz 20 lat.');
}
else {
    console.log('Masz mniej niż 20 lat.');
}

switch (age) {
    case 20:
        console.log('Masz tylko 20 lat.')
    break;
    case 30:
        console.log('Masz aż 30 lat.')
    break;
    default:
        console.log(`Masz ${age} lat.`)
    break;
}

const amIOld = (age > 70) ? console.log('yes') : console.log('no');

let oldIndicator = ' I do not know.';

console.log(oldIndicator);

if (age > 70) {
    oldIndicator = 'yes';
}
else {
    oldIndicator = 'no';
}

console.log(oldIndicator);


if('JavaScript' != 'Java') {
    console.log('Prawda to, że JS to nie Java.');
}
else {
    console.log('eeee.')
}

const zmienna = 1;
const liczba = 2;

if (((zmienna == 1)&&(liczba == 2))) {
    console.log('True')
}
else {console.log('False')}


if ((zmienna == 1)||(liczba == 2)) {
    console.log('True')
}
else {console.log('False')}

const age = 128;

if((age >= 18)&&(age <= 100)) {
    console.log('Jesteś pełnoleni.');
}
else if(age < 0) {
    console.log('Jeszcze się nie urodziłeś.');
}
else if(age > 100) {
    console.log('Jesteś bardzo stary.');
}
else {
    console.log('Jesteś jeszcze dzieckiem.');
}

switch (age) {
    case 18:
        console.log('Masz dokładnie 18 lat.');
    break;

    case 28:
        console.log('Masz aż 28 lat.');
    break;
    
    default:
        console.log(`Masz ${age} lat.`);
    break;
}

(age>70)?console.log(`Jesteś stary, Ty ${age} letni typie.}`): console.log(`Jesteś młody ${age} letni chłopcze.}`)
alert('Siema!');

const randomName = 'John';
const age = 20;
alert(randomName + ' ' + age);
console.log(randomName + ' ' + age);
console.log(age);

console.log(`Nazywam się ${randomName} i mam ${age} lat.`);
console.log('Nazywam się '+randomName+ ' i mam '+age+ ' lat.😀');

alert(`Nazywam się ${randomName} i mam ${age} lat.😀`);

console.log(`Witaj. Ja jestem ${randomName} i mam ${age} lat.😀`);

function calculate(x) {
    y = x;
    console.log(y);
    console.log(y-1);
    console.log(y*2);
    console.log(y**2);
    console.log(y**3);
    console.log(y**4);

    return('Exit.');
}

console.log(calculate(1));
console.log('-----------')
console.log(calculate(2));
console.log('-----------')
console.log(calculate(3));
console.log('-----------')
console.log(calculate(4));
*/

/* FAT ARRROW FUNCTIONS

const calculateFat = x => {
    return (`${x}, ${x-1}, ${x*2}, ${x**2}, ${x**3}, ${x**4}, Exit.`);
}

console.log(calculateFat(1));
console.log('-----------')
console.log(calculateFat(2));
console.log('-----------')
console.log(calculateFat(3));
console.log('-----------')
console.log(calculateFat(4));


function hello(name, age) {
    alert(`Witaj ${name}, który masz ${age} lat.`)
}

hello('Chris', 29)
 */

const button = document.querySelector('.page__main-header-button--js');
console.log(button);

function handleClick(e) {
    const header = document.querySelector('.page__main-header--js');
    header.innerHTML = 'Uczę się kodować we frontendzie.'
}

button.addEventListener('click', handleClick);