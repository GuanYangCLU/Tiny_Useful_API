function changeMonth(month) {
  console.log("change month called, month: ", month);
  initMonth(month);
}

function initMonth(month) {
  console.log("init month called, month: ", month);
  $("#month").html(getSchedule(month).title);
  $("#schedule").html(getSchedule(month).content);
}

function getSchedule(month) {
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
  return {
    title: curYear + " - " + curMonth,
    content: getContent({ year: curYear, month: curMonth }),
  };
}

function initSchedule(month) {
  console.log("init schedule called, month: ", month);
  $("#schedule").html(getSchedule(month).content);
}

function getContent({ year, month }) {
  $.getJSON("js/leetCodeInfo.json", function (data) {
    var item = data[year][month - 1]; // arr with month day data
    var firstDateTime = year + "-" + month + "-01 00:01";
    var firstDay = new Date(firstDateTime).getDay();
    for (var i = 0; i < firstDay; i++) {
      item.unshift("");
    }
    var tail = 7 - (item.length % 7);
    for (var j = 0; j < tail; j++) {
      item.push("");
    }
    // maybe 28 or 35 or 42 length
    return getMonthContent(item);
  });
}

function getMonthContent(item) {
  var template = "";
  var weeks = item.length / 7;
  for (var i = 0; i < weeks; i++) {
    weekItem = item.slice(i * 7, (i + 1) * 7);
    template += "<tr>" + getWeekContent(weekItem) + "</tr>";
  }
  return template;
}

function getWeekContent(weekItem) {
  var template = "";
  // { checeked, date, notes: [ { content } ] }
  for (var i = 0; i < 7; i++) {
    if (!weekItem[i]) {
      // not in this month, item is ''
      template += '<td class="date unavailable"></td>';
    } else {
      template +=
        '<td class="date' +
        (weekItem[i].checked === true ? " checked" : "") +
        '">' +
        getDayContent(weekItem[i]) +
        "</td>";
    }
  }
  return template;
}

function getDayContent(dayItem) {
  var dateField = '<div class="dateNum">' + dayItem.date + "</div>";
  var notesField = "";
  for (var i = 0; i < dayItem.notes.length; i++) {
    // note may include content, color, id, level ...
    notesField += '<div class="notes">' + dayItem.notes[i].content + "</div>";
  }
  return dateField + notesField;
}

// https://blog.csdn.net/weixin_42476601/article/details/81196490

$(document).ready(function () {
  initMonth();
});

// TODO: string number check
