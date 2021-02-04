$(function () {
  var ticker = function () {
    setTimeout(function () {
      $('#ticker li:first').animate({ marginTop: '-20px' }, 400, function () {
        $(this).detach().appendTo('ul#ticker').removeAttr('style');
      });
      ticker();
    }, 3000);
  };
  ticker();
});

function changeImg(img) {
  var mapimg = document.getElementById('map');
  mapimg.src = img;
}
function changeImg1(obj, img) {
  var mapimg1 = document.getElementById('map1');
  mapimg1.src = img;
}
