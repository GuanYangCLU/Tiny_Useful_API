function changeMonth(month) {
  console.log("change month called, month: ", month);
  initMonth(month);
}

function initMonth(month) {
  console.log("init month called, month: ", month);
  $("#month").html(getScheduleTitle(month));
}

function getScheduleTitle(month) {
  console.log("get schedule title called, month: ", month);
  var date = new Date();
  var curYear = date.getFullYear();
  var curMonth = date.getMonth() + 1;
  if (!!month) {
    var title = $("#month").text();
    var titleArr = title.split(" - ");
    curYear = Number(titleArr[0]);
    curMonth = Number(titleArr[1]);
    console.log({ title, curYear, curMonth, month });

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
  return curYear + " - " + curMonth;
}

// https://blog.csdn.net/weixin_42476601/article/details/81196490

$(document).ready(function () {
  initMonth();
});
