// var panels = $('.board section');
// // 배열 개체로 담기는 것
// var tabs = $('.tab a');

// // e 이벤트 객체
// tabs.click(function (e) {
//     e.preventDefault();
//     // e.preventDefault(); a태그의 링크 기본이벤트 취소하기
//     panels.removeClass('board-act');
//     $(this).parent().parent().addClass('board-act');
// });

var tabs = $('[role="tab"]')

tabs.on('click', function (e)) {
    e.preventDefalt();
    $(this).attr('aria-selected', true).siblings().attr('aria-selected', false); 
    // ㄴ나를 제외한 형제레벨들을 전부 false로 바꿔라
    var selectedId = "#"+$(this).attr('aria-controls');
		//자신은 보이게하고 다른 tabpanel은 보이지 않게 지정한다.
		$(selectedId).addClass('section-act').siblings().removeClass('section-act');
	});

}