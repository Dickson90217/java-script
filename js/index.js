const get_bmi = (height, weight, point = 2) => {
    return (weight / (height / 100) ** 2).toFixed(point)

}
console.log(get_bmi(174, 88, 3))

function GetBmi(height, weight, point = 2) {
    let Bmi = weight / (height / 100) ** 2;
    return Bmi.toFixed(point);

}

console.log(GetBmi(174, 88, 3))

const get_random_number = (start, end) => (Math.floor(Math.random() * (end - start + 1)) + start);




function getLottoNumber(start, end, numbers, special = false) {

    let lotto = [];
    let count = 0;
    do {
        number = get_random_number(start, end);
        if (!lotto.includes(number)) {
            lotto.push(number);
            count++;
        }
    } while (count != numbers)

    lotto.sort((a, b) => {
        return a - b;
    });



    if (special) {
        lotto.push(get_random_number(start, end));
    }
    return lotto;
}

const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', () => {
    console.log('click');
})
const title = document.querySelector('h1');
title.innerText = '2021/12/29大樂透號碼';
const subtitle = document.querySelector('h3');
subtitle.innerHTML = '<h2>本期大樂透即將開獎!請按鈕開始</h2>';


const start = 1;
const end = 49;
lottoEl = '<ul >';
for (let a = 0; a < 5; a++) {
    let lotto = '';
    let num = getLottoNumber(start, end, 6, true);
    //let lotto = (`第${i + 1}個號碼:${num}`);

    lotto += num + ' &nbsp;&nbsp;';
    lottoEl += `<li>${lotto}</li>`;
}

lottoEl += '</ul>';
console.log(lottoEl);
document.write(lottoEl);




