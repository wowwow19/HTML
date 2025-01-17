// 실시간 검색어
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

  $(window).click(function() {
    $(".popup").css("display", "none");
  });

});

// 즐겨찾기 토글
$(function () {
  $("span").click(function () {
    $("#fav-btn", this).toggleClass("far fas");
  }); 
});

// 좋아요 토글
$(function () {
  $("span").click(function () {
    $("#like-btn", this).toggleClass("like-btn like-btn-clicked");
  });
});

$(function () {
  $("span").click(function () {
    $("#like-btn", this).toggleClass("far fas");
  });
});

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
    = document.getElementsByName('consent');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}

// 스크롤 방향 변경 함수
$(function () {

  $("nav").mousewheel(function (event, delta) {

    this.scrollLeft -= (delta * 0.5);

    event.preventDefault();

  });

});



