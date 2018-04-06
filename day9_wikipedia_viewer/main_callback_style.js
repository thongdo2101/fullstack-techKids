$(document).ready(function () {
    const formElement = $('#search-form');
    formElement.keyup('#search-form-input', (e) => {
        e.preventDefault();
        if (!$('#loader').length) {
            $('#article-list').append("<div class='loader col-lg-12 text-center btn mt-3' id='loader'></div>");
        }

    });
});

function showResult() {
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
}

function listenToFormSubmitEvent() {
    const searchContent = getUserSearchQuery();
    let result;
    try {
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            method: 'get',
            data: {
                action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                srsearch: encodeURI(searchContent) // thay dấu cách bằng "%20"
            },
            success: processData
        });
    } catch (err) {
        console.log(err);
    }
}

function processData(data) {
    $('#loader').remove();
    $('.article-element').remove();
    for (let element of data.query.search) {
        const articleElement = `
        <a href="https://en.wikipedia.org/?curid=${element.pageid}" class="article-element">
            <div class="article text-left text-dark border rounded mt-4">
                <div class="container">
                    <h2>${element.title}</h2>
                    <p>
                        ${element.snippet}
                    </p>
                </div>
            </div>
        </a>`;
        $('#article-list').append(articleElement);
    }
}

function getUserSearchQuery() {
    const inputElement = $('#search-form-input');
    const searchQuery = inputElement.val();
    return searchQuery;
}