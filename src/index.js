const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const inner = document.querySelector('.inner');
const wrapper = document.createElement('div');

const remove = () => {
    inner.firstChild.remove();
    menu.classList.remove('active');
}

const addElem = () => {
    menu.classList.add('overflow-hidden');
    wrapper.classList.add('wrapper');
    inner.insertAdjacentElement('afterbegin', wrapper);
    menu.classList.add('active');
}

menuBtn.addEventListener('click', e => {
    const elem = new Promise((resolve, reject) => {
        if (menu.classList.contains('active')) {
            resolve('close');
        } else {
            resolve('open');
        }
    });
    elem.then((action) => {
        if (action === 'open') {
            addElem();
        } else {
            remove();
        }
    });
});

wrapper.addEventListener('click', (e) => {
    const elem = new Promise((resolve, reject) => {
        if (menu.classList.contains('active')) {
            resolve('close');
        } else {
            resolve('open');
        }
    });
    elem.then((action) => {
        if (action === 'open') {
            addElem();
        } else {
            remove();
        }
    });
});

