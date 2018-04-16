$(document).ready(function () {
    $("#question").on('input', function () {
        var currentLength = String(document.getElementById("question").value).length;
        document.getElementById("counter").innerHTML =  'Còn ' + (200 - currentLength) + '/200 ký tự';
    });
});
