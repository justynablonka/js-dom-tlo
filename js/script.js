const setBackgroundColor = () => {
    let p1 = document.querySelector('.first-paragraph');
    let p2 = document.querySelector('.second-paragraph');

    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
}


let btnSetBgColor = document.getElementById('set-bg-color');
btnSetBgColor.addEventListener('click', setBackgroundColor);