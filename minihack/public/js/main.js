$(document).ready(function () {
    $('.change').on('input', (event) => {
        console.log(event.target.dataset);
        var idRound = event.target.dataset.idRound;
        // $.ajax({
        //     type: "post",
        //     url: "/game/changeScore/" + idRound,
        //     success: function (response) {

        //     }
        // });
    });

});