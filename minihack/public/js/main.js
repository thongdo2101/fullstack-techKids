$(document).ready(function () {
    $('.change').on('input', (event) => {
        console.log(event.target.dataset.round);
    });
});

function getRound() {
    // $("input[data-round='']")
}