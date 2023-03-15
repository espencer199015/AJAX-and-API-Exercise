console.log("Let's get this party started!");
const $giphRow = $("#giph_row");
const $giphSearch = $("#giph_search");

function addGiph(res) {
    let numResults = res.data.length;
    if(numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4"});
        let $newGiph = $("<img>", {
            src: res.data[randomIdx].images.original.url, class: "w-100"
        });
        $newCol.append($newGiph);
        $giphRow.append($newCol);
    }
}

$("form").on("submit", async function(e) {
    evt.preventDefault();

    let searchTerm = $giphSearch.val();
    $giphSearch.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {  
    params: {
        q: searchTerm,
    }
});
addGiph(response.data);
});

$("#giph_remove").on("click", function() {
    $giphRow.empty();
});