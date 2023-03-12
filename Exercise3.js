function check() {
    let mday = +document.getElementById('mDay').value;
    let mmonth = +document.getElementById('mMonth').value;
    let myear = +document.getElementById('mYear').value;
    let fmday = +document.getElementById('fmDay').value;
    let fmmonth = +document.getElementById('fmMonth').value;
    let fmyear = +document.getElementById('fmYear').value;
    let mtamtai = +(mday + mmonth + myear) % 3;
    let ftamtai = +(fmday + fmmonth + fmyear) % 3;
    let mtamhop = +(mday + mmonth + myear) % 4;
    let ftamhop = +(fmday + fmmonth + fmyear) % 4;
    let tuhanhxung = +Math.abs(+(myear - fmyear));
    if (
        // Kiểm tra input là số nguyên dương và điều kiện là ngày, tháng
        Number.isInteger(mday) && Number.isInteger(mmonth) && Number.isInteger(myear) &&
        Number.isInteger(fmday) && Number.isInteger(fmmonth) && Number.isInteger(fmyear) &&
        (mday > 0) && (mmonth > 0) && (myear > 0) && (fmday > 0) && (fmmonth > 0) && (fmyear > 0) &&
        (mday <= 31) && (mmonth <= 12) && (fmday <= 31) && (fmmonth <= 12)
    ) { //Nhập giải bài toán
        if (mtamtai === ftamtai) {
            document.getElementById('display').innerHTML = 'Hai bạn thuộc tam tai. Không hợp nhau lắm'
        } else {
            if (mtamhop === ftamhop) {
                document.getElementById('display').innerHTML = 'Hai bạn thuộc tam hợp. Hợp nhau lắm';
            } else {
                document.getElementById('display').innerHTML = 'Hai bạn không phải trường hợp đặc biệt. ' +
                    'Phúc đức tại tâm, đức năng thắng số. ' +
                    'Hoan hỉ nhé';
            }
        }
        if (tuhanhxung === 6) {
            document.getElementById("display").innerHTML = "Hai bạn thuộc tứ hành xung. Không hợp nhau đâu"
        }
    } else {
        alert('Vui lòng nhập lại');
    }
}