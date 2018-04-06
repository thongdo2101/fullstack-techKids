$(document).ready(function () {
    const formElement = $('#search-form');
    formElement.keyup('#search-form-input', (e) => {
        e.preventDefault();
        if ($('#search-form-input').val() == "") {
            clearData();
            return;
        }
        if (!$('#loader').length) {
            $('.loading').append("<div class='loader col-lg-12 text-center btn mt-3' id='loader'></div>");
        }
        //myThrottleSearch();
        myDebounceSearch();
    });
});
const throttedSearch = _.debounce(showResult, 1000);
const myDebounceSearch = myDebounce(showResult, 1000);
const myThrottleSearch = myThrottle(showResult, 1000);

function clearData() {
    $('#article-list').empty();
}

function showResult() {
    const promise = listenToFormSubmitEvent();
    promise.then(function (result) {
        if (result.query !== undefined) {
            const arr = result.query.search;
            $('.loading').empty();
            clearData();
            if (arr.length !== 0) {
                const elementArray = arr.map((article) => {
                    return `
                        <a href="https://en.wikipedia.org/?curid=${article.pageid}" class="article-element">
                            <div class="article text-left text-dark border rounded mt-4">
                                <div class="container">
                                    <h2>${article.title}</h2>
                                    <p>
                                        ${article.snippet}
                                    </p>
                                </div>
                            </div>
                        </a>`;
                }).join(""); // Nếu không chuyền gì vô hàm join thì nó mặc định là dấu ,
                $('#article-list').append(elementArray);
            } else if (result.query.search.length == 0) {
                $('#article-list').append(`<h1 id="no-result" class="article-element">No Result</h1>`);
            }
        }
    });
}
async function listenToFormSubmitEvent() {
    const searchContent = $('#search-form-input').val();
    let result;
    try {

        if (searchContent != $('#search-form-input').val()) {
            return;
        }
        result = await $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            method: 'get',
            data: {
                action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                srsearch: encodeURI(searchContent) // thay dấu cách bằng "%20"
            }
        });
        return result;
    } catch (err) {
        console.log(err);
    }
}

function myThrottle(func, delay) {
    var waiting = false;
    var funcTimeoutId;
    return () => {
        if (!waiting) {
            waiting = true;
            clearTimeout(funcTimeoutId);
            funcTimeoutId = setTimeout(() => {
                func.call();
                waiting = false;
            }, delay);
        }
    };
}

function myDebounce(func, delay) {
    var funcTimeoutId;
    return () => {
        clearTimeout(funcTimeoutId);
        funcTimeoutId = setTimeout(() => {
            func.call();
        }, delay);
    };
}