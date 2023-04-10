const dayJSObj = dayjs();
var currentHour = 0;
var testHour = 0;

function updateHour() {
  currentHour = dayjs().hour()
  if (testHour > 0) {
    currentHour = testHour
    testHour++
  };
  console.log(currentHour);
  boxColor();
  setTimeout(updateHour, 60000);
};

function saveBut (value, num) {
  localStorage.setItem(num, value)
  console.log("Saved" + num + "Data")
};

function loadSaved () {
  for (let i = 9; i <= 17; i++) {
    var txtCont = $('#txt' + i);
    txtCont.val(localStorage.getItem(i))
  };
};

function boxColor () {
  for (let i = 9; i <= 17; i++) {
    if (i === currentHour) {
      $('#hour-' + i).removeClass('past present future').addClass('present');
    } else if (i < currentHour) {
      $('#hour-' + i).removeClass('past present future').addClass('past');
    } else if (i > currentHour) {
      $('#hour-' + i).removeClass('past present future').addClass('future');
    }
  }
};



$('#currentDay').text(dayjs().format('dddd[,] MMMM D'));
updateHour();
loadSaved();



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