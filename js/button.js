const button = document.querySelector('.page__main-header-button--js');
console.log(button);

function handleClick(e) {
    const headTitle = document.querySelector('.page__main-header--js');
    headTitle.innerHTML = 'Uczę się kodować we frontendzie.'
    headTitle.classList.toggle('page__main-header--red')
}

button.addEventListener('click', handleClick);