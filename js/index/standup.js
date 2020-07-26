function onChangeStatus() {
  $('.cell').click(function(e) {
    console.log(e.target.innerText);
    var curId = "#" + e.target.innerText;
    if (!$(curId).hasClass("checked")) {
      $(curId).attr("class", "checked");
    } else {
      $(curId).removeAttr("class", "checked");
    }
  });
}

function onResetStatus() {
  console.log("reset");
}
