var MM_API_KEY = "7af893eb75f4879fd8998ec21f44e334"; // MusixMatch API key

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var keyword = urlParams.get("keyword");

function queryMusixMatch() {
  var queryURL =
    "https://api.musixmatch.com/ws/1.1/track.search?q=" +
    keyword +
    "&apikey=" +
    MM_API_KEY;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    response = JSON.parse(response);

    var firstTrack = response.message.body.track_list[0].track;
    console.log(firstTrack.track_id);

    var nextQueryURL =
      "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" +
      firstTrack.track_id +
      "&apikey=" +
      MM_API_KEY;

    $.ajax({
      url: nextQueryURL,
      method: "GET",
    }).then(function (nextResponse) {
      nextResponse = JSON.parse(nextResponse);
      var lyrics = nextResponse.message.body.lyrics.lyrics_body;
      var lyricsWithBreaks = lyrics.split("\n").join("<br>");
      $("#mm-results").html(lyricsWithBreaks);
    });
  });
}

function queryWikipedia() {}

queryMusixMatch();
queryWikipedia();
