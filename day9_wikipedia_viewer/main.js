$(document).ready(function () {
    const formElement = $('#search-form');
    formElement.keyup('#search-form-input', (e) => {
        e.preventDefault();
        if (!$('#loader').length) {
            $('#article-list').append("<div class='loader col-lg-12 text-center btn mt-3' id='loader'></div>");
        }
        var promise = listenToFormSubmitEvent();
        promise.then(function (result) {
            $('#loader').remove();
            $('.article-element').remove();
            if (result.query !== undefined) {
                const arr = result.query.search;
                if (arr.length !== 0) {
                    for (let i = 0; i < arr.length; i++) {
                        $('#article-list').append(`
                            <a href="https://en.wikipedia.org/?curid=${arr[i].pageid}" class="article-element">
                                <div class="article text-left text-dark border rounded mt-4">
                                    <div class="container">
                                        <h2>${arr[i].title}</h2>
                                        <p>
                                            ${arr[i].snippet}
                                        </p>
                                    </div>
                                </div>
                            </a>`);
                    }
                } else if (result.query.search.length == 0) {
                    $('#article-list').append(`<h1 id="no-result" class="article-element">No Result</h1>`);
                }
            }
        });
    });
});

async function listenToFormSubmitEvent() {
    const searchContent = $('#search-form-input').val();

    let result;
    try {
        result = await $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            method: 'post',
            data: {
                action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                srsearch: encodeURI(searchContent)
            }
        });
        return result;
    } catch (err) {
        console.log(err);
    }
};
