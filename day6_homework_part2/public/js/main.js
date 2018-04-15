$(document).ready(function () {
    var card = $('.card');
    var childs = card.children();
    var plusBtn = childs.first();
    plusBtn.on('click', (e) => {
        e.preventDefault();
        var linkImage = plusBtn.next().attr('src');
        setDetailImage(linkImage);
    });
});

function setDetailImage(linkImage) {
    var detailPost = $('#detailPost');
    var detailPost_childs = detailPost.children();

    var detailPost_Dialog = detailPost_childs.first();
    var detailPost_Dialog_childs = detailPost_Dialog.children();

    var detailPost_Content = detailPost_Dialog_childs.first();
    var detailPost_Content_childs = detailPost_Content.children();

    var detailPost_Content_Body = detailPost_Content_childs.first().next();
    var detailPost_Content_Body_childs = detailPost_Content_Body.children();

    var detailPost_Content_Body_Image = detailPost_Content_Body_childs.first();
    detailPost_Content_Body_Image.attr('src', linkImage);
}