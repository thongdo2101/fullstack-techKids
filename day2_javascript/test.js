// demo javascript xử lý không đồng bộ
console.log("Hello");

var print = (callback) => { // function mới trong ES6
    console.log("Start print");
    setTimeout(() => {
        console.log("End print");
        callback();
    }, 1000);
}
// callback là 1 function 
var callbackFucntion = () => {
    console.log("End");
};
//
console.log("Start");
// print(callbackFucntion);
//
// naming convention : cách đặt tên biến

//
// function scope :
var a = 5;
var print = () => {
    console.log(a);
    b = 3; // không có var thì là biến window tức là global, biến window chỉ có trên trình duyệt, còn trong console thì là global
    console.log(b);
}
// print();
//
//
console.log("-------------------");
var countDown = (time) => {
    for (let i = time; i >= 0 ; i--) {
        setTimeout(() => {
            console.log(i);
        }, (time - i) * 1000);
    }
}

// countDown(5);
//
// demo let and var
console.log("------------------"); 
var a = 6;
var changeA = () => {
    a = 7;
    console.log(a);
};
console.log(a); //6
changeA(); //7
console.log(a); //7 
// 
