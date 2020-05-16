//$(document).ready(function(){

    var title = "post-malone"
    //var queryURL = "https:wikimedia.org/api/rest_v1" + "/metrics/pageviews/{endpoint}/{parameter 1}/{parameter 2}/.../{parameter N}";
    var queryURL ="https://wikimedia.org/api/rest_v1/feed/availability";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {e
        console.log(response)
});

//function displayInfo() {
$("input").on("click", function() {

var person = $(this).attr("#search-musician");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=LQF6WEjUOrbemyHpMNLZA3bw8L7O4UYF";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#image-here").text(JSON.stringify(response));

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

    var gifDiv = $("<div>");

    var personImage = $("<img>");

    personImage.attr("src", results[i].images.fixed_height.url);

    gifDiv.append(personImage);
 
    $("#image-here").prepend(gifDiv);
        }
    }
});
});

$("submit").on("click", function(event) {
    event.preventDefault();

    var submit= $("#submit").val().trim();
    submit.push("");
    console.log(data);

});
console.log()



//}





//var APIkey = "9878e4e3e1c98453316ef422d8148877";
//var queryURL2 = "https://api.musixmatch.com/ws/1.1/artist.albums.get?format=jsonp&callback=callback&artist_id=john_lennon&apikey=" + APIkey;

//$.ajax({
  //  url: queryURL2,
    //method: "GET",
    //format: "JSON",
    //callback:"jsonp_callback"
//}).then(function(response) {
//    console.log(response)
//});










//function getLyrics() {
//    var lyricsSearch = document.getElementById("searchbar");

//    $.ajax({
//        type: "GET",
//        data: {
//            url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433"
            //apikey: "9878e4e3e1c98453316ef422d8148877";
            //q_lyrics: lyricsSearch,
            //format: "json",

//        },
       
//    });

//};