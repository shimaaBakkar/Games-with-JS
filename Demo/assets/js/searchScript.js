
function search() {
    //searchbar is the input
    var searchbar = document.getElementById("search_item");
    //// to make the value of the input in upper case  the filter hint////
    var filter = searchbar.value.toUpperCase();

  //////// get  all the items that i want to search about//////
    var games = document.querySelectorAll(".card-game");
    console.log(games)

    //var item_title = itemssection.getElementsByClassName("title");

 ///////to loop to the cards and find the one that match//////
    for (var i = 0; i < games.length; i++) {
        var match = games[i].getElementsByClassName("title")[0];

        if (match) {
            var textvalue =  match.innerHTML
            console.log(textvalue)
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
        ///////to be shown/////
                games[i].style.display = "block";   
            } else {
        //////to hide the other games//////
               games[i].style.display = "none";

            }
        }

    }
    

};
