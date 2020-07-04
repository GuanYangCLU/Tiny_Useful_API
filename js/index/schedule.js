function changeMonth(month) {
  initMonth(month);
}

function initMonth(month) {
  $("#month").html(getScheduleTitle(month));
}

function getScheduleTitle(month) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (!!month) {
    var title = $("#month").text();
    var titleArr = title.split(" - ");
    var curYear = Number(titleArr[0]);
    var curMonth = Number(titleArr[1]);
    // TODO: handle NaN
    if (month === "prev") {
      if (curMonth === 1) {
        curYear -= 1;
        curMonth = 12;
      } else {
        curMonth -= 1;
      }
    } else if (month === "next") {
      if (curMonth === 12) {
        curYear += 1;
        curMonth = 1;
      } else {
        curMonth += 1;
      }
    } else {
      // TODO: input number of month
    }
  }
  return year + " - " + month;
}

initMonth();
