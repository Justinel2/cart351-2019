$(document).ready(function(){

  let loaded=false;
  let prevKeyword = "";
  let keyword;
  let data;
  let days;

  // Data will be only loaded once
  $("#getData").click(function(event){
    //console.log("clicked", loaded);
    getKeyword();

    if(loaded === false ){
      getData();
      }
      else{
        //console.log("data was loaded");
        if (keyword != prevKeyword) {
          displayData();
        }
      }

      function getKeyword() {
        keyword = $("#keyword").val();

        switch (keyword) {
          case "days": case "DAYS": case "Days": case "day": case "DAY": case "Day":
            keyword = "Days";
            break;
          case "time": case "TIME": case "Time": case "number": case "Number": case "NUMBER":
            keyboard = "Time";
            break;
          case "Duration": case "duration": case "DURATION":
            keyword = "Duration";
            break;
          case "Itenary": case "itenary": case "ITENARY":
            keyword = "Itenary";
            break;
          case "Type": case "type": case "TYPE":
            keyword = "Type";
          case "State": case "state": case "STATE": case "Crowd": case "crowd": case "CROWD":
            keyword = "State";
            break;
          case "1":
            keyword = 1;
            break;
          case "2":
            keyword = 2;
            break;
          case "3":
            keyword = 3;
            break;
          case "4":
            keyword = 4;
            break;
          default:
            keyword = "Unknown";
            break;
        }
      }
    });

    function getData() {
      $.getJSON('json/transport.json', function (data) {
        days = data["Days"];
        displayData();
        loaded = true;
      })
      .fail(function() {
        console.log("error");
      });
    }

    function displayData() {

      $('section').empty();

      if (keyword != "Unknown") {
        if (keyword != 1 && keyword != 2 && keyword != 3 && keyword != 4) {
          boxArray = days.length;
          index = 0;
          }
          else {
            boxArray = keyword;
            index = keyword-1;
          }

          for (var i = index; i < boxArray; i++) {

            let sampleDayArticle = $('<article>');
            let sampleDayH2 = $("<h1>");
            let samplePara1 = $("<p>");
            let samplePara2 = $("<p>");
            let samplePara3 = $("<p>");
            let samplePara4 = $("<p>");
            let sampleList1= $("<ul>");
            let sampleList2= $("<ul>");
            let listItem1 = $('<li>');
            let listItem2 = $('<li>');
            let listItem3 = $('<li>');
            let listItem4 = $('<li>');

            $(sampleDayH2).html(days[i].Count);
            $(samplePara1).html("Total duration: " + days[i].Duration);
            $(samplePara2).html("Itenary:");
            $(samplePara3).html("Type: ");
            $(samplePara4).html("State: " + days[i].State);

            $(listItem1).html("Departure: "+ days[i].Itenary.Entrance);
            $(listItem2).html("Exit: "+ days[i].Itenary.Exit);
            $(listItem3).html("Final Destination: "+ days[i].Itenary.Final_Destination);

            $(listItem4).html(days[i].Type.Carriage + " " + days[i].Type.Number + " direction " + days[i].Type.Direction);

            $(listItem1).appendTo(sampleList1);
            $(listItem3).appendTo(sampleList1);
            $(listItem3).appendTo(sampleList1);
            $(listItem4).appendTo(sampleList2);

            $(sampleList1).appendTo(samplePara2);
            $(sampleList2).appendTo(samplePara3);

            if (keyword === 1 || keyword === 2 || keyword === 3 || keyword === 4 || keyword === "Days") {

              $(sampleDayH2).appendTo(sampleDayArticle);
              $(samplePara1).appendTo(sampleDayArticle);
              $(samplePara2).appendTo(sampleDayArticle);
              $(samplePara3).appendTo(sampleDayArticle);
              $(samplePara4).appendTo(sampleDayArticle);

            }
            else if (keyword === "Duration"){
              $(sampleDayH2).appendTo(sampleDayArticle);
              $(samplePara1).appendTo(sampleDayArticle);
            }
            else if (keyword === "Itenary") {
              $(sampleDayH2).appendTo(sampleDayArticle);
              $(samplePara2).appendTo(sampleDayArticle);
            }
            else if (keyword === "Type") {
              $(sampleDayH2).appendTo(sampleDayArticle);
              $(samplePara3).appendTo(sampleDayArticle);
            }
            else if (keyword === "State") {
              $(sampleDayH2).appendTo(sampleDayArticle);
              $(samplePara4).appendTo(sampleDayArticle);
            }
            $('section').append(sampleDayArticle);
        }
      }
      else {
        //console.log("no match");
        let sampleDayArticle = $('<article>');
        let samplePara1 = $("<p>");
        $(samplePara1).html("No match. Change keyword.");
        $(samplePara1).appendTo(sampleDayArticle);
        $('section').append(sampleDayArticle);
      }
    }

});
