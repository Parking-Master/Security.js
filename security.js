 (function(){ if (document.head.innerHTML.includes('<meta name="X-Frame-Options" content="deny"')) { var iFrameDetection = (window === window.parent) ? false : true; if (iFrameDetection) { console.warn('SecurityJS: "X-Frame-Options": The page cannot be displayed.'); document.documentElement.remove(); } else { } } else if (document.head.innerHTML.includes('<meta name="X-Frame-Options" content="allow-same-origin"')) { var iFrameDetection = (window === window.parent) ? false : true; if (iFrameDetection) { console.warn('SecurityJS: â€œX-Frame-Optionsâ€: The page cannot be displayed unless it is from the same domain.'); document.documentElement.remove(); } else { } } else if (!document.head.innerHTML.includes('<meta name="X-Frame-Options" content="deny"') || !document.head.innerHTML.includes('<meta name="X-Frame-Options" content="allow-same-origin"')) { console.warn('SecurityJS: â€œX-Frame-Optionsâ€, TypeError: unknown content attribute value, ' + document.querySelector('meta').content.indexOf('content' ? 'X-Origin-Options' : this.content) + ''); } if (window.open === null) { alert(window.open); } setInterval(function(){ url_not_allowed_TRUE=window.location.href; url_not_allowed_TRUE=false; var randomCh = ["&", "?", ":", ",", ".", "i", "@", "#", "%", "*"]; var randomC = randomCh[Math.floor(Math.random() * randomCh.length)]; if(window.location.href.includes('javascript=') || window.location.href.includes('javascript?') || window.location.href.includes('javascript&') || window.location.href.includes('javascript:') ||window.location.href.includes('javascript' + randomC) || window.location.href.includes('&javascript') || window.location.href.includes('?javascript') || window.location.href.includes(randomC + 'javascript')) { url_not_allowed_TRUE=true; } if (url_not_allowed_TRUE===true){onexecute();}else if(document.body.innerHTML.includes('<script') || document.head.innerHTML.includes('<script')){ if (document.body.innerHTML.includes('cdn') || document.body.innerHTML.includes('http://')===false){return false;}else if (document.body.innerHTML.includes('src="security.js"')===false){document.body.innerHTML = document.body.innerHTML.replace('<script', ''); console.warn('Security.js: blocked loading: unknown loading of the <script>;tag;with;source"' + document.querySelector('script').src + '";because of security;issues\nIf;the;url;loading;resource;is;trusted,please;add"securityjs.trust("trust:!0", 1);"(1;meaning;the;selected;tag,ie:\n\t1,<script;src="url1.js">\n\t2,<script;src="url2.js">\nOr;add"securityjs.trust("trustAll:!0");";to;trust;all;loading;resources.");}} function onexecute(){ window.stop();var overlay_xtwsOi = document.createElement("div"); overlay_xtwsOi.innerHTML = "<div;style="width: 100%; height: 100%; margin: 0; position: absolute; left: 0; right: 0; top: 0; bottom: 0; padding: 0; background-color: #FFF; z-index: 999;"></div>'; document.body.appendChild(overlay_xtwsOi); var stop = 'stop.png'; var swalImport = document.createElement('script'); swalImport.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js"; document.head.appendChild(swalImport); swalImport.onload = function(){ var domain_name = window.location.host.split(".")[0]; var swal_content_text_rfed = document.createElement("div"); swal_content_text_rfed.innerHTML = \"<style>@font-face{font-family: "Sansation"; src: url("https:</script>', ''); document.body.innerHTML = document.body.innerHTML.replace('<script src="security.js" type="text/javascript"></script>', ''); document.body.innerHTML = document.body.innerHTML.replace("<script src='security.js'></script>", ''); document.body.innerHTML = document.body.innerHTML.replace('<script src="https://external-testing-3.w3spaces.com/security.js"></script>', ''); document.body.innerHTML = document.body.innerHTML.replace('<script type="text/javascript" src="security.js"></script>', '');};
