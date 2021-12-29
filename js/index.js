function getLottoNumber(start, end, numbers, special = false) {

    let lotto = [];
    for (let i = 0; i < numbers; i++) {
        lotto.push(Math.floor(Math.random() * (end - start + 1)) + start);
    }
    if (special) {
        lotto.push(Math.floor(Math.random() * (end - start + 1)) + start);
    }
    return lotto;
}

console.log(getLottoNumber(1, 49, 6, true))
const start = 1;
const end = 49;
lottoEl = '<ul >';
for (let a = 0; a < 5; a++) {
    let lotto = '';
    for (let i = 0; i < 6; i++) {

        let num = (Math.floor(Math.random() * (end - start + 1)) + start);
        //let lotto = (`第${i + 1}個號碼:${num}`);

        lotto += num + ' &nbsp;&nbsp;';

    }
    lottoEl += `<li>${lotto}</li>`;
}

lottoEl += '</ul>';
console.log(lottoEl);
document.write(lottoEl);




