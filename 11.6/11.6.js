let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let subtend = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");
let result;

if (subtend === "+") {
    result = a + b;
} else if (subtend === "-") {
    result = a - b;
} else if (subtend === "*") {
    result = a * b;
} else if (subtend === "/") {
    if (b != 0) {
        result = a / b;
    }
    else {
        result = "Không thể chia cho 0";
    }
} else {
    result = "Phép tính chưa được hỗ trợ"
}

alert("Kết quả của " + a + subtend + b + " = " + result);

// let a = +prompt("Mời bạn nhập vào số a");
// let b = +prompt("Mời bạn nhập vào số b");
// let subtend = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");
// let result;
// switch (subtend) {
//     case "+":
//         result = a + b;
//         break;
//     case "-":
//         result = a - b;
//         break;
//     case "*":
//         result = a * b;
//         break;
//     case "/":
//         result = (b != 0) ? a / b : "Lỗi chia cho 0"; (dấu ? thay cho "nếu đúng điều kiện", dấu : thay cho "ngược lại")
//         break;
//     default:
//         result = "Phép tính chưa được hỗ trợ"
// }
// alert(`Kết quả của" ${a} ${subtend} ${b} = ${result} `)
