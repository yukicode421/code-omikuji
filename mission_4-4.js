function omikujishow() {
    var omikuji = ["大吉", "中吉", "小吉", "凶"];
    var number1 = Math.random();
    var number2 = number1 * omikuji.length;
    var number = Math.floor(number2);
    var message = omikuji[number];
    
    var object = document.getElementById("omikuji");

    // 結果に応じて色を変更する
    if (message === "大吉") {
        object.style.color = "red";
        object.style.fontSize = "50px";
    } else if (message === "中吉") {
        object.style.color = "black";
        object.style.fontSize = "40px";
    } else if (message === "小吉") {
        object.style.color = "black";
        object.style.fontSize = "40px";
    } else if (message === "凶") {
        object.style.color = "blue";
        object.style.fontSize = "40px";
    } else {
        object.style.color = "black";
        object.style.fontSize = "40px"; // デフォルトの文字サイズ
    }

    object.innerText = message;
}