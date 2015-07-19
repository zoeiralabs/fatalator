(function () {
    'use strict';

    var currentHost = window.location.host;
    var forbiddenHosts = [
        'facebook',
        'twitter',
        'linkedin',
        'myspace',
        'whatsapp',
        'telegram',
        'youtube',
        'vimeo',
        'vine',
        'spotify',
        'deezer',
        'flickr',
        'instagram',
        'pinterest',
        'tumblr'
    ];

    var createFatalator = function(keyword) {
        var d = document.createElement('DIV'); 
        d.id = 'fatalator';
        d.style.width = '800px';
        d.style.height = '600px';
        d.style.marginLeft = '-400px';
        d.style.marginTop = '-300px';
        d.style.left = '50%';
        d.style.top = '50%';
        d.style.position = 'fixed';
        d.style.backgroundColor = '#1D8FCE';
        d.style.border = '2px #434358 solid';
        d.style.zIndex = '999999999999';
        d.innerHTML += '<div style="width: 395px; height: 600px; float: left; text-align: center; background: #1D8FCE"><img src="' + chrome.extension.getURL('images/big-head.png') + '"></div>';
        d.innerHTML += '<div style="width: 400px; height: 600px; float: right; text-align: left; background: #1D8FCE; font: 40pt Arial; color: #000000"><br><br>Entrando no <span id="fatalator-host" style="text-transform: capitalize; color: #434358; font-weight: bold">' + keyword + '</span> né safado?<br>tá sem trampo? ¬¬<br><br><a href="javascript:void(0)" id="fatalator-close" style="font: 25pt Arial; color: lightblue; text-decoration: underline">Sim, fechar o Fatalator!</a></div>';
        return d;
    };

    var removeFatalator = function() {
        document.body.removeChild(document.getElementById('fatalator'));
    };

    forbiddenHosts.forEach(function (invalid) {
        if (currentHost.search(invalid) !== -1) {
            document.body.insertBefore(createFatalator(invalid), document.body.firstChild);
            document.getElementById('fatalator-close').addEventListener('click', removeFatalator);
        };
    });

}());
