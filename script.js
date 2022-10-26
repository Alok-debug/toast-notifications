const btn = document.getElementById('btn');
const noti__container = document.getElementById('noti__container');

let num = 0;
btn.addEventListener('click', () => {
    num += 1;
    const noti = document.createElement('div');
    noti.classList.add('toast');
    noti.innerText = `notification No: ${num}`;

    noti__container.appendChild(noti);
    setTimeout(() => {
        noti.remove();
    },3000);
})