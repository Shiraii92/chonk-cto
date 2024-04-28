$(function(){
        $("#open").show();
        $("#close").hide();
    // アイコンをクリック
	$("#open").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").hide();
        $("#close").show();
	});
        
    // アイコンをクリック
	$("#close").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").show();
        $("#close").hide();
	});
	
});

$(function () {
    var topBtn = $('#pagetop');
    topBtn.hide();
    //スクロールが300に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function(){
	// メニューをクリック
	$("a[href*=#]:not([href=#])").click(function(){
		// 移動先のコンテンツ位置を取得
		var target = $($(this).attr("href")).offset().top;
		// 50px減らす
		target -= 50;
		// 各コンテンツへスクロール
		$("html, body").animate({scrollTop: target}, 500);
		return false;
	});
});

$(function () {
    $('#copy-url').click(function () {
        // data-urlの値を取得
        const url = $(this).data('url');

        // クリップボードにコピー
        navigator.clipboard.writeText(url);

        // フラッシュメッセージ表示
        $('.success-msg').fadeIn("slow", function () {
            $(this).delay(2000).fadeOut("slow");
        });
    });
});

// Warten, bis das Dokument vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    // Festlegen der Variable für das GIF-Element
    var gif = document.getElementById("meinGif");

    // Überwachung des Scrollereignisses
    window.addEventListener("scroll", function() {
        // Überprüfen, ob das GIF im sichtbaren Bereich ist
        var isInViewport = function(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        // Wenn das GIF im sichtbaren Bereich ist, setzen Sie die Schleifenanzahl auf 1
        if (isInViewport(gif)) {
            gif.setAttribute("loop", "1");
        } else {
            // Andernfalls setzen Sie die Schleifenanzahl auf 0
            gif.setAttribute("loop", "0");
        }
    });
});



