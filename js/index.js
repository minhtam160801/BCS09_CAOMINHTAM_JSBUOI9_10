var arrIdInput = ['tknv', 'name', 'email', 'password', 'datepicker', 'luongCB', 'chucvu', 'gioLam'];
var arrSpan = ['tbTKNV', 'tbTen', 'tbEmail', 'tbMatKhau', 'tbNgay', 'tbLuongCB', 'tbChucVu', 'tbGiolam']
var arrNhanVien = [];

function getValueUser() {
    event.preventDefault();
    var nhanVien = new NhanVien();
    var isValid = true;
    for (var i = 0; i < arrIdInput.length; i++) {
        var valueInput = document.getElementById(arrIdInput[i]).value;

        if (arrIdInput[i] == 'tknv') {
            isValid &= checkEmpty(valueInput, arrSpan[i]) && checkNumber(valueInput, arrSpan[i]);
        } else if (arrIdInput[i] == 'name') {
            isValid &= checkEmpty(valueInput, arrSpan[i]) && checkName(valueInput, arrSpan[i]);
        } else if (arrIdInput[i] == 'email') {
            isValid &= checkEmpty(valueInput, arrSpan[i]) && checkEmailValue(valueInput, arrSpan[i]);
        } else if (arrIdInput[i] == 'password') {
            isValid &= checkEmpty(valueInput, arrSpan[i]) && checkPass(valueInput, arrSpan[i]);
        } else if (arrIdInput[i] == 'datepicker') {
            isValid &= checkEmpty(valueInput, arrSpan[i]) && checkNgayLam(valueInput, arrSpan[i]);
        } else if (arrIdInput[i] == 'luongCB') {
            isValid &= checkEmpty(valueInput, arrSpan[i]) && checkSalary(valueInput, arrSpan[i]);
        } else if (arrIdInput[i] == 'chucvu') {
            isValid &= checkEmpty(valueInput, arrSpan[i]) && checkChucVu(valueInput, arrSpan[i]);
        } else if (arrIdInput[i] == 'gioLam') {
            isValid &= checkEmpty(valueInput, arrSpan[i]) && checkGioLam(valueInput, arrSpan[i]);
        } else {
            isValid &= checkEmpty(valueInput, arrSpan[i]);
        }
        console.log(valueInput);
        nhanVien[arrIdInput[i]] = valueInput;

    }
    if (isValid) {
        return nhanVien;
    }
    
}
function addUser() {
    var nhanVien = getValueUser();
    
    if (nhanVien) {
        arrNhanVien.push(nhanVien);
        debugger;
        saveLocalStorage('arrNhanVien', arrNhanVien);
        renderDisplay();
        document.getElementById('formQLNV').reset();
    }
}
document.getElementById('btnThemNV').onclick = addUser;

function renderDisplay(arr) {
    if (!arr) {
        arr = arrNhanVien;
    }
    var content = '';
    for (var z = 0; z < arr.length; z++) {
        var nhanVien = new NhanVien();
        var valueNhanVien = arr[z];
        Object.assign(nhanVien, valueNhanVien);
        console.log(nhanVien);
        content += 
        `<tr>
            <td>${nhanVien.tknv}</td>
            <td>${nhanVien.name}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.datepicker}</td>
            <td>${nhanVien.chucvu}</td>
            <td>${nhanVien.tongLuong()}</td>
            <td>${nhanVien.xepLoai()}</td>
            <td>
                <button onclick="deleteUser('${nhanVien.tknv}')" class="btn btn-danger">Xóa</button>
                <button onclick="getInfoUser('${nhanVien.tknv}')" data-toggle="modal" data-target="#myModal" class="btn btn-dark">Sửa</button>
            </td>
        </tr>`
    }
    console.log(content);
    document.getElementById('tableDanhSach').innerHTML = content;
}
//Xóa nhân viên
function deleteUser(tk) {
    // console.log('xoa');
    var index = -1;
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = arrNhanVien[i];
        if (nhanVien.tknv == tk) {
            console.log(i);
            index = i;
        }
    }
    if (index != -1) {
        arrNhanVien.splice(index, 1);
        saveLocalStorage('arrNhanVien', arrNhanVien);
        renderDisplay();
    }
}
//sửa nhân viên
function getInfoUser(tk) {
    var nhanVien = {};
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].tknv == tk) {
            nhanVien = arrNhanVien[i];
        }
    }
    for (var z = 0; z < arrIdInput.length; z++) {
        document.getElementById(arrIdInput[z]).value = nhanVien[arrIdInput[z]];
    }
}
function editUser() {
    var nhanVien = getValueUser();
    var index = -1;
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (nhanVien.tknv == arrNhanVien[i].tknv) {
            index = i;
        }
    }
    document.getElementById('formQLNV').reset();
    arrNhanVien[index] = nhanVien;
    saveLocalStorage('arrNhanVien', arrNhanVien);
    renderDisplay();
}
document.getElementById('btnCapNhat').onclick = editUser;

//tìm kiếm
function searchInfoUser(event) {
    //event.target => dom tới thẻ sử dụng sự kiện oninput
    var keyword = event.target.value;
    console.log(keyword.toLowerCase().trim());
    var newKeyWord = removeVietnameseTones(keyword.toLowerCase().trim());
    console.log(newKeyWord);
    //với những keyword nhận vào, ta sẽ chuyển đổi là viết thường hết hoặc viết hoa hết
    //loại bỏ những khoảng trắng ở trc và sau chuỗi (trim)
    var arrFilter = [];
    for (var z = 0; z < arrNhanVien.length; z++) {
        var nhanVien = new NhanVien();
        var valueNhanVien = arrNhanVien[z];
        Object.assign(nhanVien, valueNhanVien);
        console.log(nhanVien);
        var loaiNhanVien = removeVietnameseTones(nhanVien.xepLoai().toLowerCase().trim());
        if (loaiNhanVien.includes(newKeyWord)) {
            // console.log('tôi là sv bạn cần tìm', arrUser[i]);
            //khi tìm ra sv có keyword nằm trong tên, ta sẽ thêm sv đó vào trong mảng mới là arrFilter
            arrFilter.push(arrNhanVien[z]);
        }
    }
    console.log(arrFilter);
    renderDisplay(arrFilter);
}

    

//lưu data xuống localStorage
function saveLocalStorage(key, value) {
    var valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
}

function getLocalStore(key) {
    var arrLocal = JSON.parse(localStorage.getItem(key));
    console.log(arrLocal);
    if (arrLocal) {
        arrNhanVien = arrLocal;
        renderDisplay(arrNhanVien);
    }
}
getLocalStore('arrNhanVien');