// var MM_API_KEY = "9878e4e3e1c98453316ef422d8148877"; // MusixMatch API key

// var queryString = window.location.search;
// var urlParams = new URLSearchParams(queryString);
// var keyword = urlParams.get("keyword");

// function queryMusixMatch() {
//   var queryURL =
//     "https://api.musixmatch.com/ws/1.1/track.search?q=" +
//     keyword +
//     "&apikey=" +
//     MM_API_KEY;

//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//     response = JSON.parse(response);

//     var firstTrack = response.message.body.track_list[0].track;
//     console.log(firstTrack.track_id);

//     var nextQueryURL =
//       "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" +
//       firstTrack.track_id +
//       "&apikey=" +
//       MM_API_KEY;

//     $.ajax({
//       url: nextQueryURL,
//       method: "GET",
//     }).then(function (nextResponse) {
//       nextResponse = JSON.parse(nextResponse);
//       var lyrics = nextResponse.message.body.lyrics.lyrics_body;
//       var lyricsWithBreaks = lyrics.split("\n").join("<br>");
//       $("#mm-results").html(lyricsWithBreaks);
//     });
//   });
// }
// queryMusixMatch();


// function queryWikipedia() {


//--------------------------------------------------

    $("#submit").on("click", function(){

        $( "#clear" ).click(function() {
            $( "#output" ).empty();
            
        });
    
        var searchTerm = $(".textarea").val();
        var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
        //var queryURL = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=" + searchTerm + "&namespace=14%7C-1&limit=5&profile=engine_autoselect";

        $.ajax({
            url: queryURL,
            method: "GET",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function(data, status, jqXHR) {
                $("#output").html();
                for(var i=0; i < data[1].length-8; i++) {
                    $("#output").append("<div><div class='btn-primary'><a href=" +data[1][i]+ "><h2>" +data[1][i]+ "</h2>" + "<p>" + data[3][i] + "</p></a></div></div>");
                console.log(data);
                }
            }
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
    });

//queryWikipedia();

    
    





//---------Giphy----------

// function displayInfo() {
// $("submit").on("click", function() {
    

// var person = $(this).attr("#search-musician");

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=LQF6WEjUOrbemyHpMNLZA3bw8L7O4UYF";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     $("p").text(JSON.stringify(response));

//     var results = response.data;

//     for (var i = 0; i < results.length; i++) {
//     if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

//     var gifDiv = $("<div>");

//     var personImage = $("<img>");

//     personImage.attr("src", results[i].images.fixed_height.url);

//     gifDiv.append(personImage);
 
//     $("p").appendTo(gifDiv);
//         }
//     }
// });
// });


// }





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