const content__id = document.querySelector('.content__id'),
    content__desc = document.querySelector('.content__desc'),
    btn__rdm = document.querySelector('.rdm');
let URL = `https://api.adviceslip.com/advice`;

loadSlip();

function loadSlip() {
    fetch(URL)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            content__id.textContent = `ADVICE #${data.slip.id}`
            content__desc.textContent = `"${data.slip.advice}"`
        })
}

btn__rdm.addEventListener('click', () => {
    console.log(btn__rdm)
    loadSlip();
})