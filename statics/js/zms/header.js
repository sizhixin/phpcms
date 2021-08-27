$(function () {
  $(".nav").each(function () {
    $(this).hover(function () {
      var $this = $(this).children(".list");
      var isShow = $this.css("display");
      if (isShow == "none") {
        $this.show();
      } else {
        $this.hide();
      }
    });
  });
});
