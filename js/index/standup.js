function onChangeStatus(e) {
  var curId = "#" + e.target.innerHtml;
  if (!$(curId).hasClass("checked")) {
    $(curId).attr("class", "checked");
  } else {
    $(curId).removeAttr("class", "checked");
  }
}

function onResetStatus() {
  console.log("reset");
}
