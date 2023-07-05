for (let i = 1; i <= 10; i++) {
    let row = `${i}^n`;
    for (let ex = 1; ex <= 10; ex++) {
        let res = Math.pow(i, ex);
        row += res + " ";
    }
    console.log(row);
}
