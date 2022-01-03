console.log('Hej hej!');

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


// alert('Siema!');

// const randomName = 'John';
// const age = 20;
// alert(randomName + ' ' + age);
// console.log(randomName + ' ' + age);
// console.log(age);

// console.log(`Nazywam się ${randomName} i mam ${age} lat.`);
// console.log('Nazywam się '+randomName+ ' i mam '+age+ ' lat.😀');

// alert(`Nazywam się ${randomName} i mam ${age} lat.😀`);

// console.log(`Witaj. Ja jestem ${randomName} i mam ${age} lat.😀`);