const fan = document.querySelector('.fan');
const switchButton = document.getElementById('toggleSwitch');

let isSpinning = false;

switchButton.addEventListener('click', () => {
    if (isSpinning) {
        fan.classList.remove('spin');
        switchButton.classList.remove('on');
    } else {
        fan.classList.add('spin');
        switchButton.classList.add('on');
    }
    isSpinning = !isSpinning;
});
