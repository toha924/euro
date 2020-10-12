function iosAdapt() {
    if (window.navigator.userAgent.search(/iPad|iPhone|iPod/) > 0) {
        document.querySelector(".wrapper").style.backgroundAttachment = "local"
    }
}
$(window).load((function () {
    var e = $(".portfolio-group");
    e.isotope({
        itemSelector: ".portfolio-group .portfolio-item",
        masonry: {
            columnWidth: $(".isotope-item:first").width(),
            gutterWidth: -20,
            isFitWidth: !0
        },
        filter: "*"
    }), $(".portfolio-filter-container a").click((function () {
        return e.isotope({
            filter: this.getAttribute("data-filter")
        }), !1
    }));
    var t = null;
    $(".portfolio-filter a").click((function () {
        null === t ? $(".portfolio-filter a").removeClass("portfolio-selected") : $(t).removeClass("portfolio-selected"), t = this, $(this).addClass("portfolio-selected")
    }))
})), $(document).ready((function () {
    Modernizr.touch ? ($(".close-overlay").removeClass("hidden"), $(".image-hover figure").click((function (e) {
        $(this).hasClass("hover") || $(this).addClass("hover")
    })), $(".close-overlay").click((function (e) {
        e.preventDefault(), e.stopPropagation(), $(this).closest(".image-hover figure").hasClass("hover") && $(this).closest(".image-hover figure").removeClass("hover")
    }))) : $(".image-hover figure").mouseenter((function () {
        $(this).addClass("hover")
    })).mouseleave((function () {
        $(this).removeClass("hover")
    }))
})), $((function () {
    $(".thumbs-gallery i").animate({
        opacity: 0
    }, {
        duration: 300,
        queue: !1
    }), $(".thumbs-gallery").parent().hover((function () {}), (function () {
        $(".thumbs-gallery i").animate({
            opacity: 0
        }, {
            duration: 300,
            queue: !1
        })
    })), $(".thumbs-gallery i").hover((function () {
        $(this).animate({
            opacity: 0
        }, {
            duration: 300,
            queue: !1
        }), $(".thumbs-gallery i").not($(this)).animate({
            opacity: .4
        }, {
            duration: 300,
            queue: !1
        })
    }), (function () {}))
})), $((function () {
    $("#hornavmenu").slicknav()
})), $(window).load((function () {
    $("#hornav").sticky({
        topSpacing: 120
    })
})), $(window).load((function () {
    $("#header").sticky({
        topSpacing: 0
    })
})), cardHeightAdapt = () => {
    let e = Array.from(document.querySelectorAll(".portfolio-group li figure figcaption")),
        t = e.map(e => parseInt(window.getComputedStyle(e).height)),
        o = Math.max(...t);
    e.forEach(e => {
        e.style.height = o + "px"
    })
}, window.addEventListener("load", cardHeightAdapt()), window.addEventListener("resize", cardHeightAdapt()), window.addEventListener("load", iosAdapt()), window.addEventListener("resize", iosAdapt());
let data = {
    service_id: "service_rdgv3y7",
    template_id: "user_EjMoam6vByYiEyUFivMom",
    user_id: "user_EjMoam6vByYiEyUFivMom",
    template_params: {
        username: "James",
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd..."
    }
};
const btn = document.getElementById("button");
let onClick = document.getElementById("form").addEventListener("submit", (function (e) {
    e.preventDefault(), btn.value = "Sending...";
    emailjs.sendForm("default_service", "template_99gqwmi", this).then(() => {
        btn.value = "Send Email", alert("Sent!")
    }, e => {
        btn.value = "Send Email", alert(JSON.stringify(e))
    })
}));
const baton = document.getElementById("prorab_button");
let prorab = document.getElementById("prorab").addEventListener("submit", (function (e) {
    e.preventDefault();
    let t = document.getElementById("phone").value;
    if (!/^\+?\d{6,12}$/.test(t)) return alert("Phone is incorrect"), !1;
    btn.value = "Отправка...";
    emailjs.sendForm("default_service", "template_j67g79f", this).then(() => {
        baton.value = "вызвать прораба", alert("Заявка отправлена")
    }, e => {
        baton.value = "вызвать прораба", alert(JSON.stringify(e))
    })
}));

const btnCallback = document.getElementById('callback_button');

let callBack = document.getElementById('call_back')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btnCallback.value = 'Отправка...';

   const serviceID = 'default_service';
   const templateID = 'template_j67g79f';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnCallback.value = 'заказать обратный pвонок';
      alert('Sent!');
    }, (err) => {
      btnCallback.value = 'заказать обратный звонок';
      alert(JSON.stringify(err));
    });
});