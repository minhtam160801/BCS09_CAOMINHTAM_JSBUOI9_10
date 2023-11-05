function NhanVien() {
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB = '';
    this.chucvu = '';
    this.gioLam = '';

    this.tongLuong = function() {
        var tongLuong = 0;
        if (this.chucvu == 'Sếp') {
            tongLuong = this.luongCB*1 * 3;
        } else if (this.chucvu == 'Trưởng phòng') {
            tongLuong = this.luongCB*1 * 2;
        } else if (this.chucvu == 'Nhân viên') {
            tongLuong = this.luongCB*1;
        }
        return tongLuong;
    }

    this.xepLoai = function() {
        var loaiNV = '';
        if (this.gioLam*1 >= 192) {
            loaiNV = 'Xuất sắc';
        } else if (this.gioLam*1 >= 176) {
            loaiNV = 'Giỏi';
        } else if (this.gioLam >= 160) {
            loaiNV = 'Khá';
        } else if (this.gioLam < 160) {
            loaiNV = 'Trung bình';
        }
        return loaiNV;
    }
}