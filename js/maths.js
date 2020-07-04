var var_b = document.getElementById("var_b");
var_b.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        calcu();
    }
});

var var_a = document.getElementById("var_a");
var_a.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        calcu();
    }
});

$('#var_b').keyup(_.debounce(calcu , 500));

function calcu() {
    var_a = document.getElementById('var_a').value
    var_b = document.getElementById('var_b').value
    var result = var_a * var_b;
    document.getElementById('mycalcu').innerHTML = result;
}