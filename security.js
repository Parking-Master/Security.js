function re_join_HS2() {
    var n = !1;
    setInterval(function() {
        url_not_allowed_TRUE = window.location.href, url_not_allowed_TRUE = !1;
        var e = document.createElement("span");
        if (e.id = "url-not-allowed-value", setInterval(function() {
                e.innerText = url_not_allowed_TRUE
            }, 100), e.style.display = "none", 1 != n) {
            n = !0, document.body.appendChild(e);
            var t = (t = ["&", "?", ":", ",", ".", "i", "@", "#", "%", "*"])[Math.floor(Math.random() * t.length)];
            if (window.location.href.includes("javascript=") || window.location.href.includes("javascript?") || window.location.href.includes("javascript&") || window.location.href.includes("javascript:") || window.location.href.includes("javascript" + t) || window.location.href.includes("&javascript") || window.location.href.includes("?javascript") || window.location.href.includes(t + "javascript")) {
                if (!1 === document.getElementById("url-not-allowed-value").innerText) return;
                url_not_allowed_TRUE = !0
            }
            if (!0 === url_not_allowed_TRUE) ! function() {
                window.stop();
                var e = document.createElement("div");
                e.innerHTML = '<div style="width: 100%; height: 100%; margin: 0; position: absolute; left: 0; right: 0; top: 0; bottom: 0; padding: 0; background-color: #FFF; z-index: 10000;"></div>', document.body.appendChild(e), (e = document.createElement("script")).src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js", document.head.appendChild(e), e.onload = function() {
                    var e = window.location.host.split(".")[0],
                        t = document.createElement("div");
                    t.innerHTML = "<style>@font-face{font-family: 'Sansation'; src: url('https://db.onlinewebfonts.com/t/00370d92f1b404768d34ac7dc664289e.ttf');}</style><div style='color: #222; font-family: \"Sansation\", Arial;'><p><b>" + e + "</b> currently has <a style='color: #F8BB86; text-decoration: none; border-bottom: 1px solid #F8BB86;' id='SecurityJS-anchor_link_underline_msover_Ivr' onmouseup='change_hyperLink(\"up\")' onmousedown='change_hyperLink(\"down\")' href='https://github.com/Parking-Master/Security.js' target='_blank'>SecurityJS</a> active.</p><p style='margin-top: 0.350625vw;'>This site prevented potential risk of attack.<p style='margin-top: 0.350625vw'>If you encountered a problem, please contact the owner.</p></p>", swal({
                        title: "",
                        content: t,
                        button: "Back",
                        icon: "warning",
                        closeOnEsc: !1,
                        closeOnClickOutside: !1
                    }), document.getElementsByClassName("swal-button--confirm")[0].style.backgroundColor = "#F8BB86", document.getElementsByClassName("swal-button--confirm")[0].addEventListener("click", function() {
                        location.replace(document.referrer)
                    })
                }, window.history.replaceState({}, document.title, "#"), window.history.replaceState({}, document.title, "?"), document.body.innerHTML = document.body.innerHTML.replace("<script", "\x3c!--<script") || document.body.innerHTML.replace("/script>", "/script>--\x3e"), console.warn('Security.js: URL/Parameter not allowed: "' + window.location.href + '"\nstopped resource from loading')
            }();
            else if (document.body.innerHTML.includes("<script") || document.head.innerHTML.includes("<script")) {
                if (document.body.innerHTML.includes("cdn") || !1 === document.body.innerHTML.includes("http://")) return !1;
                !1 === document.body.innerHTML.includes('src="security.js"') && (document.body.innerHTML = document.body.innerHTML.replace("<script", "\x3c!--<script") || document.body.innerHTML.replace("</script", "</script--\x3e"), console.warn('Security.js: blocked loading: unknown loading of the <script> tag with source "' + document.querySelector("script").src + '" because of security issues\nIf the url loading resource is trusted, please add "securityjs.trust("trust: true", 1);" (1 meaning the selected tag, ie: \n\t1, <script src="url1.js"> \n\t2, <script src="url2.js">\nOr add "securityjs.trust("trustAll: true");" to trust all loading resources.'))
            }
        } else n = !0
    }, 1), console.error || console.warn
}
re_join_HS2();
var debug_wrapper = document.createElement("div");
debug_wrapper.id = "log", debug_wrapper.hidden = "true", document.body.appendChild(debug_wrapper);
var old = console.log;
! function() {
    console = console || {};
    var t = document.getElementById("log");
    console.log = function(e) {
        "object" == typeof e ? t.innerHTML += (JSON && JSON.stringify ? JSON.stringify(e) : String(e)) + "" : document.getElementById("log").innerHTML += e
    }
}(), async function() {
    for (var e = 0; e < document.querySelectorAll("link").length; e++) {
        var t = document.querySelectorAll("link");
        if (t.hasAttribute("trust")) return void(t.trust = "true")
    }
}();
var securityjs = {
    onexecute: function() {
        re_join_HS2()
    },
    block: function(e, t, n) {
        e.includes("url") ? window.history.replaceState({}, document.title, t + n) : e.includes("source") ? document.body.innerHTML = document.innerHTML.replace("<" + t, "\x3c!--<" + t) || document.innerHTML.replace("/" + t + ">", "/" + t + ">--\x3e") : e.includes("console") && setInterval(function() {
            var e = document.getElementById("log").innerHTML;
            (e.includes(t) || e.includes(n)) && (window.stop(), document.head.innerHTML = document.head.innerHTML.replace(t, "") || document.head.innerHTML.replace(n, ""), document.body.innerHTML = document.body.innerHTML.replace(t, "") || document.body.innerHTML.replace(n, ""), document.documentElement.innerHTML = document.documentElement.innerHTML.replace(t, "") || document.documentElement.innerHTML.replace(n, ""))
        }, 1)
    },
    stop: function(e) {
        var t = new URLSearchParams(window.location.search).get("sc_key");
        t === e ? (console.log("SecurityJS, AccessGranted: key is correct (" + e + ")"), delete re_join_HS2) : console.error("SecurityJS, Uncaught TypeError: key is deprecated or incorrect (" + t + ")")
    },
    trustAll: function(e, t) {
        null != t && ("css" === t ? function() {
            for (var e = 0; e < document.querySelectorAll("link").length; e++) document.querySelectorAll("link")[e].setAttribute("trust", "true")
        }() : 0 == e && document.querySelector("link").setAttribute("trust", "false")), 1 == e ? function() {
            for (var e = 0; e < document.querySelectorAll("script").length; e++) document.querySelectorAll("script")[e].setAttribute("trust", "true")
        }() : 0 == e && document.querySelector("script").setAttribute("trust", "false")
    },
    trust: function(e, t) {
        e.includes("trust: true") ? document.getElementsByTagName("script")[t].setAttribute("trust", "true") : e.includes("trustAll: true") ? document.querySelector("script").setAttribute("trust-all", "true") : document.querySelector("script").setAttribute("trust", "false")
    },
    auth: function(e, t, n, o, r) {
        var c, i;
        if ("passcode" == e) return async function() {
            console.clear(), i = setInterval(async function() {
                for (var e = 0; e < document.querySelectorAll("html").length; e++) {
                    var t = document.querySelectorAll("html")[e];
                    document.documentElement.style = "display:none;"
                }
            }, 100)
        }(), null != window && window, void(window.onload = function() {
            prompt("Enter passcode to access this file:", "") == t ? (clearInterval(i), document.documentElement.style = "") : window.onload()
        });
        e && "ip" === e && (c = document.createElement("script"), (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js", document.head.appendChild(e), c.type = "application/javascript", c.src = "https://api.ipify.org?format=jsonp&callback=getIP", c.defer = "", document.body.appendChild(c), (c = document.createElement("script")).type = "application/javascript", c.defer = "", c.setAttribute("async", ""), c.innerText = 'function getIP(json) { $.getJSON("https://api.ipify.org?format=json", function(data){ if (data.ip === "' + t + '" || data.ip === "' + n + '" || data.ip === "' + o + '" || data.ip === "' + r + '"){return;}else {document.write(\'<iframe src="401.html?ip=\' + data.ip + \'" style="width:100%;height:100%;position:absolute;left:0;top:0;right:0;bottom:0;z-index:99999;margin:0;padding:0;border:0;" frameborder="0"></iframe>\');}});}getIP();', document.body.appendChild(c))
    },
    object: function(e) {
        if ("object" == typeof object) return e || DOMError;
        console.error("Uncaught TypeError: SecurityJS: object is an object function.")
    },
    generateKey: function(length){
if(length==null||length=='undefined'){length=16}
var a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split(""),b=[],i;  
for(i=0;i<length;i++){
var j=(Math.random()*(a.length-1)).toFixed(0);
b[i]=a[j];
}
var e=b.join('');
if(e.length>=256) {
  throw new Error('SecurityJS: Cant\'t generate key over length of 255');
} else {
return e;
}
}
}
if (location.protocol=='http:'){
    if (securityjs!=undefined){securityjs=undefined}
    throw new Error('SecurityJS: Security.js is only available for encrypted websites. Use only with HTTPS (see more at https://github.com/Parking-Master/Security.js/blob/main/README.md#user-content-note-securityjs-is-only-available-for-secure-sites-with-hypertext-transfer-protocol-secure-https)');
}
function change_hyperLink(e) {
    e.includes("down") ? (document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.textDecoration = "underline", document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.borderBottom = "none") : e.includes("up") && (document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.textDecoration = "none", document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.borderBottom = "1px solid #F8BB86")
}
