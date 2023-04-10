// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const dayJSObj = dayjs();
var currentHour = 0;
var testHour = 12;

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



// Update global currentHour var
function updateHour(hour) {
  hour = dayjs().hour()
  console.log(hour);
  // Add clock the repeats function every minute
};

function saveBut (value, num) {
  localStorage.setItem(num, value)
  console.log("Saved" + num + "Data")
};

function loadSaved () {
  for (let i = 9; i <= 17; i++) {
    var txtCont = $('#txt' + i);
    txtCont.val(localStorage.getItem(i))
  }
}

function boxColor () {
  for (let i = 9; i <= 17; i++) {
    if (i === testHour) {
      $('#hour-' + i).removeClass('past present future').addClass('present');
    } else if (i < testHour) {
      $('#hour-' + i).removeClass('past present future').addClass('past');
    } else if (i > testHour) {
      $('#hour-' + i).removeClass('past present future').addClass('future');
    }
  }
}

updateHour(currentHour);
loadSaved()
boxColor()

// Save button click listeners
var saveBut9 = $('#btn9');
saveBut9.on('click', function () {
  console.log("Button 9 clicked");
  var but9Value = $.trim($("#txt9").val());
  console.log(but9Value);
  var butNum = 9;
  saveBut(but9Value, butNum);
});

var saveBut10 = $('#btn10');
saveBut10.on('click', function () {
  console.log("Button 10 clicked");
  var but10Value = $.trim($("#txt10").val());
  console.log(but10Value);
  var butNum = 10;
  saveBut(but10Value, butNum);
});

var saveBut11 = $('#btn11');
saveBut11.on('click', function () {
  console.log("Button 11 clicked");
  var but11Value = $.trim($("#txt11").val());
  console.log(but11Value);
  var butNum = 11;
  saveBut(but11Value, butNum);
});

var saveBut12 = $('#btn12');
saveBut12.on('click', function () {
  console.log("Button 12 clicked");
  var but12Value = $.trim($("#txt12").val());
  console.log(but12Value);
  var butNum = 12;
  saveBut(but12Value, butNum);
});

var saveBut13 = $('#btn13');
saveBut13.on('click', function () {
  console.log("Button 13 clicked");
  var but13Value = $.trim($("#txt13").val());
  console.log(but13Value);
  var butNum = 13;
  saveBut(but13Value, butNum);
});

var saveBut14 = $('#btn14');
saveBut14.on('click', function () {
  console.log("Button 14 clicked");
  var but14Value = $.trim($("#txt14").val());
  console.log(but14Value);
  var butNum = 14;
  saveBut(but14Value, butNum);
});

var saveBut15 = $('#btn15');
saveBut15.on('click', function () {
  console.log("Button 15 clicked");
  var but15Value = $.trim($("#txt15").val());
  console.log(but15Value);
  var butNum = 15;
  saveBut(but15Value, butNum);
});

var saveBut16 = $('#btn16');
saveBut16.on('click', function () {
  console.log("Button 16 clicked");
  var but16Value = $.trim($("#txt16").val());
  console.log(but16Value);
  var butNum = 16;
  saveBut(but16Value, butNum);
});

var saveBut17 = $('#btn17');
saveBut17.on('click', function () {
  console.log("Button 17 clicked");
  var but17Value = $.trim($("#txt17").val());
  console.log(but17Value);
  var butNum = 17;
  saveBut(but17Value, butNum);
});