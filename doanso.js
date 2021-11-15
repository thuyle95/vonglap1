function doanso() {
    var a = prompt('Nhap day so ban muon doan: ');
    var n = prompt('Nhap so ban muon doan (1-'+a+")");

    var r = Math.round(Math.random()*a+1);
    for (count = 1; count<3; count++){
        if (n==r){
            alert('Chuc mung ban da doan chinh xac');
            break;
        } else if (n<r) {
            alert('Hay nhap so be hon');
            var n = prompt('Nhap so ban muon doan (1-'+a+")");
            } else if (n>r) {
                alert('hay nhap so lon hon');
                var n = prompt('Nhap so ban muon doan (1-'+a+")");
            }        
        }
        if (count=3) {
            alert('Ban da thua!!');
        }
    }


