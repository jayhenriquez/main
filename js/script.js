

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1000},"pages":[{"id":"page-home-page","displayName":"Home Page","link":{"linkType":"LinkTypePage","href":"#!page-home-page"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-about","displayName":"About","link":{"linkType":"LinkTypePage","href":"#!page-about"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-rappin","displayName":"rappin","link":{"linkType":"LinkTypePage","href":"#!page-rappin"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true},{"id":"page-always-on-point-don-surf","displayName":"always on point, don surf","link":{"linkType":"LinkTypePage","href":"#!page-always-on-point-don-surf"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-celly-cases-x-art-by-jose","displayName":"celly cases x art by jose","link":{"linkType":"LinkTypePage","href":"#!page-celly-cases-x-art-by-jose"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true}]}

        $(function() {
            /* hamburger menu */
            $('.close-btn, .open-btn').click(function() {
                $('body').toggleClass('is-not-active is-active');
            });

            /*
                animation widget from here: https://github.com/silexlabs/Silex/issues/443
            */

            window.sr = ScrollReveal({
                distance: '100px'
            });
            sr.reveal('.from-left', { origin:  'left'});
            sr.reveal('.from-right', { origin:  'right'});
            sr.reveal('.from-top', { origin:  'top'});
            sr.reveal('.from-bottom', { origin:  'bottom'});

        })
    