// declaraction of document.ready() function.
(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();

function update_string(){
    const currentLanguage = window.localStorage && window.localStorage.getItem('language');
    const isEnglish = currentLanguage !== 'Chinese';
    var allElements=document.getElementsByClassName("split-language");
    function split_language(str, isEnglish) {
        console.log(str);
        if(isEnglish) {
            return str.split(' - ')[0];
        } else {
            return str.split(' - ')[1];
        }
    }
    for (var i=0; i< allElements.length; i++ ){
        allElements[i].innerHTML = split_language(allElements[i].getAttribute("data-content"), isEnglish);
    }
}

document.ready(
    // toggleTheme function.
    // this script shouldn't be changed.
    function () {
        var _Blog = window._Blog || {};
        const currentTheme = window.localStorage && window.localStorage.getItem('theme');
        const isDark = currentTheme === 'dark';
        const currentLanguage = window.localStorage && window.localStorage.getItem('language');
        const isEnglish = currentLanguage !== 'Chinese';
        console.log(isEnglish);
        // if (isDark) {
        //     document.getElementById("switch_default").checked = true;
        //     // mobile
        //     document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        // } else {
        //     document.getElementById("switch_default").checked = false;
        //     // mobile
        //     document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        // }
        update_string();
        if (isEnglish) {
            document.getElementById('switch_language').innerHTML = '中文';
            if(document.getElementById("English") && document.getElementById("Chinese")){
                document.getElementById("English").style.display = "";
                document.getElementById("Chinese").style.display = "none";
            }
            // mobile
            // document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        } else {
            document.getElementById('switch_language').innerHTML = 'English';
            if(document.getElementById("English") && document.getElementById("Chinese")){
                document.getElementById("English").style.display = "none";
                document.getElementById("Chinese").style.display = "";
            }
            // mobile
            // document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        }
        _Blog.toggleTheme = function () {
            // if (isDark) {
            //     document.getElementsByTagName('body')[0].classList.add('dark-theme');
            //     // mobile
            //     document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            // } else {
            //     document.getElementsByTagName('body')[0].classList.remove('dark-theme');
            //     // mobile
            //     document.getElementById("mobile-toggle-theme").innerText = "· Light"
            // }
            // document.getElementsByClassName('toggleBtn')[0].addEventListener('click', () => {
            //     if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
            //         document.getElementsByTagName('body')[0].classList.remove('dark-theme');
            //     } else {
            //         document.getElementsByTagName('body')[0].classList.add('dark-theme');
            //     }
            //     window.localStorage &&
            //     window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light',)
            // })
            // moblie
            // document.getElementById('mobile-toggle-theme').addEventListener('click', () => {
            //     if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
            //         document.getElementsByTagName('body')[0].classList.remove('dark-theme');
            //         // mobile
            //         document.getElementById("mobile-toggle-theme").innerText = "· Light"

            //     } else {
            //         document.getElementsByTagName('body')[0].classList.add('dark-theme');
            //         // mobile
            //         document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            //     }
            //     window.localStorage &&
            //     window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light',)
            // })
        };
        _Blog.toggleLanguage = function () {
            // if (isEnglish) {
            //     document.getElementsByTagName('body')[0].classList.add('dark-theme');
            //     // mobile
            //     document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            // } else {
            //     document.getElementsByTagName('body')[0].classList.remove('dark-theme');
            //     // mobile
            //     document.getElementById("mobile-toggle-theme").innerText = "· Light"
            // }
            document.getElementById('switch_language').addEventListener('click', () => {
                if (document.getElementById('switch_language').innerHTML == '中文') {
                    document.getElementById('switch_language').innerHTML = 'English';
                    if(document.getElementById("English") && document.getElementById("Chinese")){
                        document.getElementById("English").style.display = "none";
                        document.getElementById("Chinese").style.display = "";
                    }
                } else {
                    document.getElementById('switch_language').innerHTML = '中文';
                    if(document.getElementById("English") && document.getElementById("Chinese")){
                        document.getElementById("English").style.display = "";
                        document.getElementById("Chinese").style.display = "none";
                    }
                }
                
                window.localStorage &&
                window.localStorage.setItem('language', document.getElementById('switch_language').innerHTML == '中文' ? 'English' : 'Chinese',);
                update_string();
            })
            // moblie
            // document.getElementById('mobile-toggle-theme').addEventListener('click', () => {
            //     if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
            //         document.getElementsByTagName('body')[0].classList.remove('dark-theme');
            //         // mobile
            //         document.getElementById("mobile-toggle-theme").innerText = "· Light"

            //     } else {
            //         document.getElementsByTagName('body')[0].classList.add('dark-theme');
            //         // mobile
            //         document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            //     }
            //     window.localStorage &&
            //     window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light',)
            // })
        };
        _Blog.toggleTheme();
        _Blog.toggleLanguage();
        // ready function.

    }
);