let year = Number(prompt('nhập năm muốn check'));
if (year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0){
    alert(`${year} là năm nhuận`);
} else {
    alert(`${year} không phải là năm nhuận`);
}