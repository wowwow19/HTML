// 실시간 검색어
$(function () {
  ticker();
  revScroll();
  hoverRank();
  toggleSearch();
  $('img[usemap]').rwdImageMaps();
});

function init() {
  $('img[usemap]').rwdImageMaps();
}

// 오버시 이미지 교체 함수
function changeImg(img) {
  var mapimg = document.getElementById('map');
  mapimg.src = img;
}

function changeImg1(obj, img) {
  var mapimg1 = document.getElementById('map1');
  mapimg1.src = img;
}

// 모두 선택, 해제 함수
function selectAll(selectAll) {
  const checkboxes
    = document.getElementsByName('agree');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}

// 실시간 검색어 스크롤
var ticker = function () {
  setTimeout(function () {
    $('#ticker li:first').animate({ marginTop: '-20px' }, 400, function () {
      $(this).detach().appendTo('ul#ticker').removeAttr('style');
    });
    ticker();
  }, 3000);
};

function revScroll() {
  $("nav").mousewheel(function (event, delta) {

    this.scrollLeft -= (delta * 0.5);

    event.preventDefault();

  });
}

function hoverRank() {
  if($(window).width() > 767) {
    $(".chart").mouseenter(function() {
      $(".popup").css("display", "block");
      $(".chart").css("visibility", "hidden");
    });

    $(".popup").mouseleave(function() {
      $(".popup").css("display", "none");
      $(".chart").css("visibility", "visible");
    });
  } else {
    $(".chart").click(function() {
      $(".popup").css("display", "block");
      $(".chart").css("visibility", "hidden");
    });

    $(document).mouseup(function(e) {
      var popup = $(".popup");
      var chart = $(".chart");
      if(popup.has(e.target).length === 0){
        popup.css("display", "none");
        chart.css("visibility", "visible");
        }
    });
  }
}

function toggleSearch() {
  $(".main-btm").click(function() {
    var bar = $(".search-wrapper");
    var map = $(".search-map-wrapper");

    if(bar.css("display") != "none") {
      bar.css("display", "none");
      map.css("display", "block");
    } else {
      bar.css("display", "flex");
      map.css("display", "none");
    }
    init();
  });
}