window.onload = function () {
    // 0-9 0-9  10-35 A-Z 36-61 a-z 62-spe_len 特殊符号
    var data=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*",",",".","_","!","@","#","$","%","^","&","*",",",".","_"];
    var str = "";
	//alert(data.length-1);
	var spe_len=data.length-1;
    var num = document.getElementById("num");
    var upA = document.getElementById("upA");
    var lowA = document.getElementById("lowA");
    var special = document.getElementById("special");
    var length = 16;
    var btn = document.getElementById("confirm"); //获取 按钮
	var btn_copy = document.getElementById("copy_psw"); //获取 按钮2
    var txt_opt1 = document.getElementById("txt_opt1"); //获取文本输出框1
	var txt_opt2 = document.getElementById("txt_opt2"); //获取文本输出框2
	txt_opt1.innerHTML = "结果为：";


    btn.onclick = function make() {
        length = document.getElementById("ipt_len").value-1; //密码长度
        switch (true) {
            //单项
            case num.checked && !upA.checked && !lowA.checked && !special.checked: //仅当数字被选中
                makePW(length,0,9);
                break;
            case !num.checked && upA.checked && !lowA.checked && !special.checked: //仅当大写字母被选中
                makePW(length,10,35);
                break;
            case !num.checked && !upA.checked && lowA.checked && !special.checked: //仅当小写字母被选中
                makePW(length,36,61);
                break;
            case !num.checked && !upA.checked && !lowA.checked && special.checked: //仅当符号被选中
                makePW(length,62,spe_len);
                break;
            //两项
            case !num.checked && upA.checked && lowA.checked && !special.checked: //当全部字母被选中
                makePW(length,10,61);
                break;
            case num.checked && upA.checked && !lowA.checked && !special.checked: //当大写字母与数字被选中
                makePW(length,0,35);
                break;
            case num.checked && !upA.checked && lowA.checked && !special.checked: //当小写字母与数字被选中
                specialMake(length,0,61,10,35);
                break;
            case !num.checked && !upA.checked && lowA.checked && special.checked: //当小写字母与符号被选中
                makePW(length,36,spe_len);
                break;
            case !num.checked && upA.checked && !lowA.checked && special.checked: //当大写字母与符号被选中
                specialMake(length,10,spe_len,36,61);
                break;
            case num.checked && !upA.checked && !lowA.checked && special.checked: //当数字与符号被选中
                specialMake(length,0,spe_len,10,61);
                break;
            //三项
            case num.checked && upA.checked && lowA.checked && !special.checked: //当全部字母与数字被选中
                makePW(length,0,61);
                break;
            case !num.checked && upA.checked && lowA.checked && special.checked: //字母加符号
                makePW(length,10,spe_len);
                break;
            case num.checked && !upA.checked && lowA.checked && special.checked: //数字、小写字母、特殊符号
                specialMake(length,0,spe_len,10,35);
                break;
            case num.checked && upA.checked && !lowA.checked && special.checked: //数字、大写字母、特殊符号
                specialMake(length,0,spe_len,36,61);
                break;
            //四项
            case num.checked && upA.checked && lowA.checked && special.checked: //全部被选中
                makePW(length,0,spe_len);
                break;
            //未选择
            default :
                alert("至少选择一项");
                break;
        }
    }
	

    //对于普通情况的函数
    function makePW (len,startnum,endnum) {
        for(var i=0; i<=len; i++) {
            var ram = Math.floor(Math.random()*(endnum-startnum+1)+startnum);
            str += data[ram];
        }
        txt_opt1.innerHTML = "结果为：";
		txt_opt2.innerHTML =   str;
        str = "";
    }
    //特殊情况
    function specialMake(len,startnum,endnum,expnum1,expnum2) {
        var curlength = len;
        for(var i=0; i<=curlength; i++) {
            var ram = Math.floor(Math.random()*(endnum-startnum+1)+startnum);
            if(ram>=expnum1 && ram <=expnum2){
                curlength++;
                continue;
            }
            str += data[ram];
        }
        txt_opt1.innerHTML = "结果为：";
		txt_opt2.innerHTML =   str;
        str = "";
    }


}