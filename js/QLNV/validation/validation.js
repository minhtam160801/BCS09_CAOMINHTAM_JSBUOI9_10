function checkEmpty(value, idSpan) {
    if (value == '') {
        document.getElementById(idSpan).innerHTML = 'Vui lòng không bỏ trống';
        // console.log('ko dc bo trong')
        return false;
    } else {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    }
}
function checkNumber(value, idSpan) {
    if (isNaN(value)) {
        document.getElementById(idSpan).innerHTML = 'Chỉ nhập giá trị số';
        return false;
    } else {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    }
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
function checkName(value, idSpan) {
    var regexName = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g;
    if (regexName.test(value)) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).innerHTML = 'Định dạng tên không chính xác';
        return false;
    }
}
function checkEmailValue(value, idSpan) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //sử dụng phương thức test để kiểm tra dữ liệu đầu vào có thỏa chuỗi regex hay ko
    regexEmail.test(value);
    if (regexEmail.test(value)) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).innerHTML = 'Định dạng email không chính xác';
        return false;
    }
}
function checkPass(value, idSpan) {
    var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    regexPass.test(value);
    if (regexPass.test(value)) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).innerHTML = 'Định dạng không chính xác';
        return false;
    }
}
function checkNgayLam(value, idSpan) {
    var regexDate = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    regexDate.test(value);
    if (regexDate.test(value)) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).innerHTML = 'Định dạng không chính xác';
        return false;
    }
}
function checkSalary(value, idSpan) {
    if (value >= 1000000 && value <= 20000000) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).innerHTML = 'Chỉ nhập lương từ 1000000 đến 20000000';
        return false;
    }
}
function checkChucVu(value, idSpan) {
    if (value == 'Sếp' || value == 'Trưởng phòng' || value == 'Nhân viên') {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).innerHTML = 'Chức vụ không hợp lệ';
        return false;
    }
}
function checkGioLam(value, idSpan) {
    if (value >= 80 && value <= 200) {
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).innerHTML = 'Chỉ nhập giờ làm từ 80 đến 200 giờ';
        return false;
    }
}