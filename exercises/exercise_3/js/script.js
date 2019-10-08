$(document).ready(function(){

  let loaded=false;
  let prevKeyword = "";
  let keyword;
  let data;
  let days;

  // Data will be only loaded once
  $("#getData").click(function(event){
    console.log("clicked", loaded);
    getKeyword();

    if(loaded === false ){
      getData();
      }
      else{
        console.log("data was loaded");
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
          case "Entrance": case "entrance": case "ENTRANCE":
            keyword = "Entrance";
            break;
          case "Exit": case "exit": case "EXIT":
            keyword = "Exit";
            break;
          case "Destination": case "destination": case "DESTINATION":
            keyword = "Final_Destination";
            break;
          case "Type": case "type": case "TYPE":
            keyword = "Type";
            break;
          case "Carriage": case "carriage": case "CARRIAGE": case "Vehicle": case "vehicule": case "VEHICULE": case "Mode": case "Mode": case "MODE":
            keyword = "Carriage";
            break;
          case "Color": case "color": case "COLOR": case "Number": case "number": case "NUMBER":
            keyword = "Type";
            break;
          case "Direction": case "direction": case "DIRECTION":
            keyword = "Direction";
            break;
          case "State": case "state": case "STATE": case "Crowd": case "crowd": case "CROWD":
            keyword = "State";
            break;
          default:
            // display a note that said there's no result
            keyword = "Unknown";
            break;
        }
        console.log(keyword);
      }
    });

    function getData() {
      $.getJSON('json/transport.json', function (data) {
        days = data["Days"];
        displayData();
        loaded = true;
        console.log(loaded);
      })
      .fail(function() {
        console.log("error");
      });
    }

    function displayData() {
      for (var i = 0; i < days.length; i++) {
        console.log(days[i][keyword]);
      }
    }

});
