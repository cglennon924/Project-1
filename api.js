


//----------Wikipedia-----------

// $(function () {
//     $(function () {
//         $("#search-musician").on("keycode", function (e) {
//             if (e.keycode === 13) {
//                 $("#submit").on("click", function () {
//                     $("#clear").click(function () {
//                         $("#wp-results").empty();
//                     });
//                     var artist = $("textarea").val();
//                     var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + artist + "&format=json&callback=?";

//                     $.ajax({
//                         url: queryURL,
//                         method: "GET",
//                         contentType: "application/json; charset=utf-8",
//                         async: false,
//                         dataType: "json",
//                         success: function (data, status, jqXHR) {
//                             $("#wp-results").html();
//                             for (var i = 0; i < data[1].length - 1; i++) {
//                                 $("#wp-results").append("<div><div class='btn-primary'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
//                                 console.log(data);
//                             }
//                         }
//                     })

//                 });
//             }
//         });
        $("#submit").on("click", function () {
            $("#clear").click(function () {
                $("#wp-results").empty();
            });
            
            var searchTerm = $("textarea").val();
            var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

             $.ajax({
                url: queryURL,
                method: "GET",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (data, status, jqXHR) {
                    $("#wp-results").html();
                    for (var i = 0; i < data[1].length - 1; i++) {
                        $("#wp-results").append("<div><div class='btn-primary'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                        console.log(data);
                    }
                }
            })
                .done(function () {
                    console.log("success");
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                });
        });
//     });
// })