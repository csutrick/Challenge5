// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const dayJSObj = dayjs();
var currentHour = 0;

// Update global currentHour var
function updateHour(hour) {
  hour = dayjs().hour()
  console.log(hour);
  // Add clock the repeats function every minute
};

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  








  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



// First thing that happens when the page loads
//updateHour(currentHour);


function saveBut (value, num) {
  localStorage.setItem(num, value)
  console.log("Saved" + num + "Data")
};

function loadSaved () {
  for (let i = 10; i <= 10; i++) {
    var txtCont = $('#txt' + i);
    txtCont.val(localStorage.getItem(i))
  }
}

loadSaved()

var saveBut10 = $('#btn10');
saveBut10.on('click', function () {
  console.log("Button 10 clicked");
  var but10Value = $.trim($("#txt10").val());
  console.log(but10Value);
  var butNum = 10;
  saveBut(but10Value, butNum);
});