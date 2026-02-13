$(document).ready(function () {
  var envelope = $("#envelope");
  var btnOpen = $("#open");
  var btnReset = $("#reset");

  // Open envelope
  btnOpen.click(function () {
    envelope.removeClass("close").addClass("open");
  });

  // Close envelope
  btnReset.click(function () {
    envelope.removeClass("open").addClass("close");
  });
});
