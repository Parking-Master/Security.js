(function(){
    setInterval(function(){
    url_not_allowed_TRUE=window.location.href;
    url_not_allowed_TRUE=false;
    var randomCh = ["&", "?", ":", ",", ".", "i", "@", "#", "%", "*"];
    var randomC = randomCh[Math.floor(Math.random() * randomCh.length)];
    if(window.location.href.includes('javascript=') || window.location.href.includes('javascript?') || window.location.href.includes('javascript&') || window.location.href.includes('javascript:') ||window.location.href.includes('javascript' + randomC) || window.location.href.includes('&javascript') || window.location.href.includes('?javascript') || window.location.href.includes(randomC + 'javascript')) {
        url_not_allowed_TRUE=true;
    }
if (url_not_allowed_TRUE===true){seterror_rq();}else if(document.body.innerHTML.includes('<script') || document.head.innerHTML.includes('<script')){ if (document.body.innerHTML.includes('cdn') || document.body.innerHTML.includes('http://')===false){return false;}else if (document.body.innerHTML.includes('src="security.js"')===false){document.body.innerHTML = document.body.innerHTML.replace('<script', '<!--<script') || document.body.innerHTML.replace('</script', '</script-->'); console.warn('Security.js: blocked loading: unknown loading of the <script> tag with source "' + document.querySelector('script').src + '" because of security issues\nIf the url loading resource is trusted, please add "securityjs.trust("trust: true", 1);" (1 meaning the selected tag, ie: \n\t1, <script src="url1.js"> \n\t2, <script src="url2.js">\nOr add "securityjs.trust("trustAll: true");" to trust all loading resources.');}}
function seterror_rq(){ window.stop();var overlay_xtwsOi = document.createElement('div'); overlay_xtwsOi.innerHTML = '<div style="width: 100%; height: 100%; margin: 0; position: absolute; left: 0; right: 0; top: 0; bottom: 0; padding: 0; background-color: #FFF; z-index: 999;"></div>'; document.body.appendChild(overlay_xtwsOi); var stop = 'stop.png'; var swalImport = document.createElement('script'); swalImport.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js'; document.head.appendChild(swalImport); swalImport.onload = function(){
    var domain_name = window.location.host.split('.')[0]; var swal_content_text_rfed = document.createElement('div'); swal_content_text_rfed.innerHTML = "<style>@font-face{font-family: 'Sansation'; src: url('https://db.onlinewebfonts.com/t/00370d92f1b404768d34ac7dc664289e.ttf');}</style><div style='color: #222; font-family: \"Sansation\", Arial;'><p><b>" + domain_name + "</b> currently has <a style='color: #F8BB86; text-decoration: none; border-bottom: 1px solid #F8BB86;' id='SecurityJS-anchor_link_underline_msover_Ivr' onmouseup='change_hyperLink(\"up\")' onmousedown='change_hyperLink(\"down\")' href='https://github.com/Parking-Master/Security.js' target='_blank'>SecurityJS</a> active.</p><p style=\'margin-top: 0.350625vw;\'>This site prevented potential risk of attack.<p style=\'margin-top: 0.350625vw\'>If you encountered a problem, please contact the owner.</p></p>"; swal({ title: "", content: swal_content_text_rfed, button: "Back", icon: 'warning', closeOnEsc: false, closeOnClickOutside: false }); document.getElementsByClassName('swal-button--confirm')[0].style.backgroundColor = '#F8BB86'; document.getElementsByClassName('swal-button--confirm')[0].addEventListener('click', function(){ location.replace(document.referrer); }); };window.history.replaceState({}, document.title, "#" + "");window.history.replaceState({}, document.title, "?" + "");document.body.innerHTML = document.body.innerHTML.replace('<script', '<!--<script') || document.body.innerHTML.replace('/script>', '/script>-->'); console.warn('Security.js: URL/Parameter not allowed: "' + window.location.href + '"\nstopped resource from loading'); }
    }, 1);
        if(console.error || console.warn) {
            console.clear(console.error, console.warn);
        }
})();
var security = {
trust: function(trust, tag) {
    if (trust.includes('trust: true')) {
        document.getElementsByTagName('script')[tag].setAttribute('trust', 'true');
    } else if (trust.includes('trustAll: true')) {
        document.querySelector('script').setAttribute('trust-all', 'true')
    } else {
        document.querySelector('script').setAttribute('trust', 'false');
    }
}
}
function change_hyperLink(type){if (type.includes('down')){document.getElementById('SecurityJS-anchor_link_underline_msover_Ivr').style.textDecoration = 'underline'; document.getElementById('SecurityJS-anchor_link_underline_msover_Ivr').style.borderBottom = 'none';} else if (type.includes('up')) {document.getElementById('SecurityJS-anchor_link_underline_msover_Ivr').style.textDecoration = 'none'; document.getElementById('SecurityJS-anchor_link_underline_msover_Ivr').style.borderBottom = '1px solid #F8BB86';}}
//window.onload=function(){document.body.innerHTML = document.body.innerHTML.replace('<script src="security.js"></script>', ''); document.body.innerHTML = document.body.innerHTML.replace('<script src="security.js" type="text/javascript"></script>', ''); document.body.innerHTML = document.body.innerHTML.replace("<script src='security.js'></script>", ''); document.body.innerHTML = document.body.innerHTML.replace('<script src="https://external-testing-3.w3spaces.com/security.js"></script>', ''); document.body.innerHTML = document.body.innerHTML.replace('<script type="text/javascript" src="security.js"></script>', '');};
