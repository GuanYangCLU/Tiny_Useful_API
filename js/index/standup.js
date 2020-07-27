// 等效于$(document).ready(function () {...}); 优于window.onload
$(function () {
  $(".cell").click(function (e) {
    // console.log(e.target.innerText);
    console.log("do");
    var curId = "#" + e.target.innerText;
    if (!$(curId).hasClass("checked")) {
      console.log(curId, $(curId).attr("class"));
      $(curId).addClass("checked");
      return;
    } else {
      console.log(curId, $(curId).attr("class"));
      $(curId).removeClass("checked");
      return;
    }
  });
});

function onResetStatus() {
  $("#reset").click(function (e) {
    $(".cell").removeClass("checked");
  });
}
