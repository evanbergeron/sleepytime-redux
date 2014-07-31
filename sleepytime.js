function whenToWakeUp() {
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var min = currentTime.getMinutes();
  // takes 14 mins to fall asleep
  min += 14;
  fixOverflow(hour, min);
  var possibleWakeUpTimes = [];
  for (var cycle = 0; cycle < 8; cycle++) {
    // a sleep cycle is an hour and a half
    hour += 1;
    min += 30;
    fixOverflow(hour, min);
    possibleWakeUpTimes += (hour, min);
  }
  return possibleWakeUpTimes;
}

function fixOverflow(hour, min) {
  hour += (min >= 60);
  min %= 60;
  hour %= 24;
}
