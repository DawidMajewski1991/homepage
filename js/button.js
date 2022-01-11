const button = document.querySelector('.page__main-header-button--js');
console.log(button);

function handleClick(e) {
    const header = document.querySelector('.page__main-header--js');
    header.innerHTML = 'Uczę się kodować we frontendzie.'
    header.classList.toggle('page__main-header--red')
}

button.addEventListener('click', handleClick);