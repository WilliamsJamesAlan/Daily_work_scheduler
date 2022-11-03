var timeDate = moment().format("dddd MMMM Do, YYYY, h:mm:ss a");
var currentHour = moment().hour();


$("#currentDay").text(timeDate);

for (var i = 8; i < 17; i++) {
 
  // create the elements needed
  var div = $("<div>");
  var h3 = $("<div>");
  var textarea = $("<textarea>");
  var button = $("<button>");

  if(i < currentHour){
    div.addClass('past')
  }else if( i === currentHour){
    div.addClass('present')
  }
  else{
    div.addClass('future')
  }

  // add the classes to give the elements their style
  div.addClass("time-block row");
  h3.addClass("hour col-1");
  textarea.addClass("description col-10");
  button.addClass("saveBtn btn col-1");


  h3.text(i );
  button.text("SAVE");
  
  button.on('click',buttonClick)
  // append h3, textarea, and button to the div
  div.append(h3, textarea, button);
  // append to the container div
  $(".container").append(div);
}

function buttonClick(){

}