<html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <head>
        <script type="text/javascript" src="libraries/dygraph-combined.js"></script>
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

        <link rel="stylesheet" src="CSS/Button.css" />
        <link rel="stylesheet" src="CSS/componen.css" />
        <style>
            table{
                margin:0px auto; 
                width:95%; 
                height:90%;
                vertical-align: middle;
            }
            .control {
                font-family: arial;
                display: block;
                position: relative;
                padding-left: 30px;
                margin-bottom: 5px;
                padding-top: 2px;
                cursor: pointer;
                font-size: 16px;
            }
            .control input {
                position: absolute;
                z-index: -1;
                opacity: 0;
            }
            .control_indicator {
                position: absolute;
                top: 1px;
                left: 0;
                height: 20px;
                width: 20px;
                background: #ff3737;
                border: 0px solid #007a2c;
            }
            .control-radio .control_indicator {
                border-radius: undefined%;
            }

            .control:hover input ~ .control_indicator,
            .control input:focus ~ .control_indicator {
                background: #b60000;
            }

            .control input:checked ~ .control_indicator {
                background: #0ab40a;
            }
            .control:hover input:not([disabled]):checked ~ .control_indicator,
            .control input:checked:focus ~ .control_indicator {
                background: #00bb0f;
            }
            .control input:disabled ~ .control_indicator {
                background: #e6e6e6;
                opacity: 0.6;
                pointer-events: none;
            }
            .control_indicator:after {
                box-sizing: unset;
                content: '';
                position: absolute;
                display: none;
            }
            .control input:checked ~ .control_indicator:after {
                display: block;
            }
            .control-checkbox .control_indicator:after {
                left: 8px;
                top: 4px;
                width: 3px;
                height: 8px;
                border: solid #ffffff;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }
            .control-checkbox input:disabled ~ .control_indicator:after {
                border-color: #dedede;
            }

            @font-face {
                font-family: 'icomoon';
                src:url('../fonts/icomoon/icomoon.eot');
                src:url('../fonts/icomoon/icomoon.eot?#iefix') format('embedded-opentype'),
                    url('../fonts/icomoon/icomoon.woff') format('woff'),
                    url('../fonts/icomoon/icomoon.ttf') format('truetype'),
                    url('../fonts/icomoon/icomoon.svg#icomoon') format('svg');
                font-weight: normal;
                font-style: normal;
            }

            /* General button style (reset) */
            .btn {
                border: none;
                font-family: inherit;
                font-size: inherit;
                color: inherit;
                background: none;
                cursor: pointer;
                padding: 25px 80px;
                display: inline-block;
                margin: 15px 30px;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 700;
                outline: none;
                position: relative;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                transition: all 0.3s;
            }

            .btn:after {
                content: '';
                position: absolute;
                z-index: -1;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                transition: all 0.3s;
            }

            /* Pseudo elements for icons */
            .btn:before,
            .icon-heart:after,
            .icon-star:after,
            .icon-plus:after,
            .icon-file:before {
                font-family: 'icomoon';
                speak: none;
                font-style: normal;
                font-weight: normal;
                font-variant: normal;
                text-transform: none;
                line-height: 1;
                position: relative;
                -webkit-font-smoothing: antialiased;
            }

            .icon-envelope:before {
                content: "\e000";
            }

            .icon-cart:before {
                content: "\e007";
            }

            .icon-cart-2:before {
                content: "\e008";
            }

            .icon-heart:before {
                content: "\e009";
            }

            /* Filled heart */
            .icon-heart:after,
            .icon-heart-2:before {
                content: "\e00a";
            }

            .icon-star:before {
                content: "\e00b";
            }

            /* Filled star */
            .icon-star:after,
            .icon-star-2:before {
                content: "\e00c";
            }

            .icon-arrow-right:before {
                content: "\e00d";
            }

            .icon-arrow-left:before {
                content: "\e003";
            }

            .icon-truck:before {
                content: "\e00e";
            }

            .icon-remove:before {
                content: "\e00f";
            }

            .icon-cog:before {
                content: "\e010";
            }

            .icon-plus:before,
            .icon-plus:after {
                content: "\e011";
            }

            .icon-minus:before {
                content: "\e012";
            }

            .bh-icon-smiley:before {
                content: "\e001";
            }

            .bh-icon-sad:before {
                content: "\e002";
            }

            .icon-file:before {
                content: "\e004";
            }

            .icon-remove-2:before {
                content: "\e005";
            }

            .btn-circle.btn-lg {
                width: 50px;
                height: 50px;
                padding: 10px 16px;
                margin: 10px;
                font-size: 18px;
                line-height: 1.33;
                border-radius: 25px;
            }

            /* Button 1 */
            .btn-1 {

                border: 3px solid #fff;
                color: #fff;
            }

            /* Button 1a */
            .btn-1a:hover,
            .btn-1a:active {
                color: #0e83cd;
                background: #fff;
            }

            /* Button 1b */
            .btn-1b:after {
                width: 100%;
                height: 0;
                top: 0;
                left: 0;
                background: #fff;
            }

            .btn-1b:hover,
            .btn-1b:active {
                color: #0e83cd;
            }

            .btn-1b:hover:after,
            .btn-1b:active:after {
                height: 100%;
            }

            /* Button 1c */
            .btn-1c:after {
                width: 0%;
                height: 100%;
                top: 0;
                left: 0;
                background: #fff;
            }

            .btn-1c:hover,
            .btn-1c:active {
                color: #0e83cd;
            }

            .btn-1c:hover:after,
            .btn-1c:active:after {
                width: 100%;
            }

            /* Button 1d */
            .btn-1d {
                overflow: hidden;
            }

            .btn-1d:after {
                width: 0;
                height: 103%;
                top: 50%;
                left: 50%;
                background: #fff;
                opacity: 0;
                -webkit-transform: translateX(-50%) translateY(-50%);
                -moz-transform: translateX(-50%) translateY(-50%);
                -ms-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
            }

            .btn-1d:hover,
            .btn-1d:active {
                color: #0e83cd;
            }

            .btn-1d:hover:after {
                width: 90%;
                opacity: 1;
            }

            .btn-1d:active:after {
                width: 101%;
                opacity: 1;
            }

            /* Button 1e */
            .btn-1e {
                overflow: hidden;
            }

            .btn-1e:after {
                width: 100%;
                height: 0;
                top: 50%;
                left: 50%;
                background: #fff;
                opacity: 0;
                -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
                -moz-transform: translateX(-50%) translateY(-50%) rotate(45deg);
                -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg);
                transform: translateX(-50%) translateY(-50%) rotate(45deg);
            }

            .btn-1e:hover,
            .btn-1e:active {
                color: #0e83cd;
            }

            .btn-1e:hover:after {
                height: 260%;
                opacity: 1;
            }

            .btn-1e:active:after {
                height: 400%;
                opacity: 1;
            }

            /* Button 1f */
            .btn-1f {
                overflow: hidden;
            }

            .btn-1f:after {
                width: 101%;
                height: 0;
                top: 50%;
                left: 50%;
                background: #fff;
                opacity: 0;
                -webkit-transform: translateX(-50%) translateY(-50%);
                -moz-transform: translateX(-50%) translateY(-50%);
                -ms-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
            }

            .btn-1f:hover,
            .btn-1f:active {
                color: #0e83cd;
            }

            .btn-1f:hover:after {
                height: 75%;
                opacity: 1;
            }

            .btn-1f:active:after {
                height: 130%;
                opacity: 1;
            }

            /* Button 2 */
            .btn-2 {
                background: #cb4e4e;
                color: #fff;
                box-shadow: 0 6px #ab3c3c;
                -webkit-transition: none;
                -moz-transition: none;
                transition: none;
            }

            /* Button 2a */
            .btn-2a {
                border-radius: 0 0 5px 5px;
            }

            .btn-2a:hover {
                box-shadow: 0 4px #ab3c3c;
                top: 2px;
            }

            .btn-2a:active {
                box-shadow: 0 0 #ab3c3c;
                top: 6px;
            }

            /* Button 2b */
            .btn-2b {
                border-radius: 0 0 5px 5px;
            }

            .btn-2b:hover {
                box-shadow: 0 8px #ab3c3c;
                top: -2px;
            }

            .btn-2b:active {
                box-shadow: 0 0 #ab3c3c;
                top: 6px;
            }

            /* Button 2c */
            .btn-2c {
                border-radius: 5px;
            }

            .btn-2c:hover {
                box-shadow: 0 4px #ab3c3c;
                top: 2px;
            }

            .btn-2c:active {
                box-shadow: 0 0 #ab3c3c;
                top: 6px;
            }

            /* Button 2d */
            .btn-2d {
                border-radius: 5px;
            }

            .btn-2d:hover {
                box-shadow: 0 8px #ab3c3c;
                top: -2px;
            }

            .btn-2d:active {
                box-shadow: 0 0 #ab3c3c;
                top: 6px;
            }

            /* Button 2e */
            .btn-2e {
                border-radius: 5px;
                box-shadow: -6px 0 #ab3c3c;
            }

            .btn-2e:hover {
                box-shadow: -4px 0 #ab3c3c;
                left: -2px;
            }

            .btn-2e:active {
                box-shadow: 0 0 #ab3c3c;
                left: -6px;
            }

            /* Button 2f */
            .btn-2f {
                border-radius: 5px;
                box-shadow: 6px 0 #ab3c3c;
            }

            .btn-2f:hover {
                box-shadow: 4px 0 #ab3c3c;
                left: 2px;
            }

            .btn-2f:active {
                box-shadow: 0 0 #ab3c3c;
                left: 6px;
            }

            /* Button 2g */
            .btn-2g {
                border-radius: 40px;
            }

            .btn-2g:hover {
                box-shadow: 0 4px #ab3c3c;
                top: 2px;
            }

            .btn-2g:active {
                box-shadow: 0 0 #ab3c3c;
                top: 6px;
            }

            /* Button 2h */
            .btn-2h {
                border-radius: 20px;
            }

            .btn-2h:hover {
                box-shadow: 0 4px #ab3c3c;
                top: 2px;
            }

            .btn-2h:active {
                box-shadow: 0 0 #ab3c3c;
                top: 6px;
            }

            /* Button 2i */
            .btn-2i {
                border-radius: 50%;
                width: 90px;
                height: 90px;
                padding: 0;
            }

            .btn-2i:hover {
                box-shadow: 0 4px #ab3c3c;
                top: 2px;
            }

            .btn-2i:active {
                box-shadow: 0 0 #ab3c3c;
                top: 6px;
            }

            /* Button 2j */
            .btn-2j {
                border-radius: 50%;
                width: 90px;
                height: 90px;
                padding: 0;
            }

            .btn-2j:hover {
                box-shadow: 0 8px #ab3c3c;
                top: -2px;
            }

            .btn-2j:active {
                box-shadow: 0 0 #ab3c3c;
                top: 6px;
            }

            /* Button 3 */
            .btn-3 {
                background: #fcad26;
                color: #fff;
            }

            .btn-3:hover {
                background: #f29e0d;
            }

            .btn-3:active {
                background: #f58500;
                top: 2px;
            }

            .btn-3:before {
                position: absolute;
                height: 100%;
                left: 0;
                top: 0;
                line-height: 3;
                font-size: 140%;
                width: 60px;
            }

            /* Button 3a */
            .btn-3a {
                padding: 25px 60px 25px 120px;
            }

            .btn-3a:before {
                background: rgba(0,0,0,0.05);
            }

            /* Button 3b */
            .btn-3b {
                padding: 25px 60px 25px 120px;
                border-radius: 10px;
            }

            .btn-3b:before {
                border-right: 2px solid rgba(255,255,255,0.5);
            }

            /* Button 3c */
            .btn-3c {
                padding: 80px 20px 20px 20px;
                border-radius: 10px;
                box-shadow: 0 3px #da9622;
            }

            .btn-3c:active {
                box-shadow: 0 3px #dc7801;
            }

            .btn-3c:before {
                height: 60px;
                width: 100%;
                line-height: 60px;
                background: #fff;
                color: #f29e0d;
                border-radius: 10px 10px 0 0;
            }

            .btn-3c:active:before {
                color: #f58500;
            }

            /* Button 3d */
            .btn-3d {
                padding: 25px 60px 25px 120px;
                border-radius: 10px;
            }

            .btn-3d:before {
                background: #fff;
                color: #fcad26;
                z-index: 2;
                border-radius: 10px 0 0 10px;
            }

            .btn-3d:after {
                width: 20px;
                height: 20px;
                background: #fff;
                z-index: 1;
                left: 55px;
                top: 50%;
                margin: -10px 0 0 -10px;
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            .btn-3d:active:before {
                color: #f58500;
            }

            .btn-3d:active {
                top: 0;
            }

            .btn-3d:active:after {
                left: 60px;
            }

            /* Button 3e */
            .btn-3e {
                padding: 25px 120px 25px 60px;
                overflow: hidden;
            }

            .btn-3e:before {
                left: auto;
                right: 10px;
                z-index: 2;
            }

            .btn-3e:after {
                width: 30%;
                height: 200%;
                background: rgba(255,255,255,0.1);
                z-index: 1;
                right: 0;
                top: 0;
                margin: -5px 0 0 -5px;
                -webkit-transform-origin: 0 0;
                -webkit-transform: rotate(-20deg);
                -moz-transform-origin: 0 0;
                -moz-transform: rotate(-20deg);
                -ms-transform-origin: 0 0;
                -ms-transform: rotate(-20deg);
                transform-origin: 0 0;
                transform: rotate(-20deg);
            }

            .btn-3e:hover:after {
                width: 40%;
            }

            /* Button 4 */
            .btn-4 {
                border-radius: 50px;
                border: 3px solid #fff;
                color: #fff;
                overflow: hidden;
            }

            .btn-4:active {
                border-color: #17954c;
                color: #17954c;
            }

            .btn-4:hover {
                background: #24b662;
            }

            .btn-4:before {
                position: absolute;
                height: 100%;
                font-size: 125%;
                line-height: 3.5;
                color: #fff;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                transition: all 0.3s;
            }

            .btn-4:active:before {
                color: #17954c;
            }

            /* Button 4a */
            .btn-4a:before {
                left: 130%;
                top: 0;
            }

            .btn-4a:hover:before {
                left: 80%;
            }

            /* Button 4b */
            .btn-4b:before {
                left: -50%;
                top: 0;
            }

            .btn-4b:hover:before {
                left: 10%;
            }

            /* Button 4c */
            .btn-4c:before {
                left: 70%;
                opacity: 0;
                top: 0;
            }

            .btn-4c:hover:before {
                left: 80%;
                opacity: 1;
            }

            /* Button 4d */
            .btn-4d:before {
                left: 30%;
                opacity: 0;
                top: 0;
            }

            .btn-4d:hover:before {
                left: 10%;
                opacity: 1;
            }

            /* Button 5 */
            .btn-5 {
                background: #823aa0;
                color: #fff;
                height: 70px;
                min-width: 260px;
                line-height: 24px;
                font-size: 16px;
                overflow: hidden;
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                backface-visibility: hidden;
            }

            .btn-5:active {
                background: #9053a9;
                top: 2px;
            }

            .btn-5 span {
                display: inline-block;
                width: 100%;
                height: 100%;
                -webkit-transition: all 0.3s;
                -webkit-backface-visibility: hidden;
                -moz-transition: all 0.3s;
                -moz-backface-visibility: hidden;
                transition: all 0.3s;
                backface-visibility: hidden;
            }

            .btn-5:before {
                position: absolute;
                height: 100%;
                width: 100%;
                line-height: 2.5;
                font-size: 180%;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                transition: all 0.3s;
            }

            .btn-5:active:before {
                color: #703b87;
            }

            /* Button 5a */
            .btn-5a:hover span {
                -webkit-transform: translateY(300%);
                -moz-transform: translateY(300%);
                -ms-transform: translateY(300%);
                transform: translateY(300%);
            }

            .btn-5a:before {
                left: 0;
                top: -100%;
            }

            .btn-5a:hover:before {
                top: 0;
            }

            /* Button 5b */
            .btn-5b:hover span {
                -webkit-transform: translateX(200%);
                -moz-transform: translateX(200%);
                -ms-transform: translateX(200%);
                transform: translateX(200%);
            }

            .btn-5b:before {
                left: -100%;
                top: 0;
            }

            .btn-5b:hover:before {
                left: 0;
            }

            /* Button 6 */
            .btn-6 {
                color: #fff;
                background: #226fbe;
                -webkit-transition: none;
                -moz-transition: none;
                transition: none;
            }

            .btn-6:active {
                top: 2px;
            }

            /* Button 6a */
            .btn-6a {
                border: 4px solid #226fbe;
            }

            .btn-6a:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6b */
            .btn-6b {
                border: 4px solid #226fbe;
                border-radius: 15px;
            }

            .btn-6b:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6c */
            .btn-6c {
                border: 4px solid #226fbe;
                border-radius: 60px;
            }

            .btn-6c:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6d */
            .btn-6d {
                border: 2px dashed #226fbe;
            }

            .btn-6d:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6e */
            .btn-6e {
                border: 2px dashed #226fbe;
                border-radius: 15px;
            }

            .btn-6e:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6f */
            .btn-6f {
                border: 2px dashed #226fbe;
                border-radius: 60px;
            }

            .btn-6f:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6g */
            .btn-6g {
                border: 2px dotted #226fbe;
            }

            .btn-6g:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6h */
            .btn-6h {
                border: 2px dotted #226fbe;
                border-radius: 15px;
            }

            .btn-6h:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6i */
            .btn-6i {
                border: 2px dotted #226fbe;
                border-radius: 60px;
            }

            .btn-6i:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6j */
            .btn-6j {
                border: 4px double #226fbe;
            }

            .btn-6j:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6k */
            .btn-6k {
                border: 4px double #226fbe;
                border-radius: 15px;
            }

            .btn-6k:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 6l */
            .btn-6l {
                border: 4px double #226fbe;
                border-radius: 60px;
            }

            .btn-6l:hover {
                background: transparent;
                color: #226fbe;
            }

            /* Button 7 */
            .btn-7 {
                background: #17aa56;
                color: #fff;
                border-radius: 7px;
                box-shadow: 0 5px #119e4d;
                padding: 25px 60px 25px 90px;
            }

            /* Button 7a */
            .btn-7a {
                overflow: hidden;
            }

            .btn-7a:before {
                position: absolute;
                left: 0;
                width: 40%;
                font-size: 160%;
                line-height: 0.8;
                color: #0a833d;
            }

            .btn-7a.btn-activated {
                -webkit-animation: fadeOutText 0.5s;
                -moz-animation: fadeOutText 0.5s;
                animation: fadeOutText 0.5s;
            }

            .btn-7a.btn-activated:before {
                -webkit-animation: moveToRight 0.5s;
                -moz-animation: moveToRight 0.5s;
                animation: moveToRight 0.5s;
            }

            @-webkit-keyframes fadeOutText {
                0% { color: transparent; }
                80% { color: transparent; }
                100% { color: #fff; }
            }

            @-moz-keyframes fadeOutText {
                0% { color: transparent; }
                80% { color: transparent; }
                100% { color: #fff; }
            }

            @keyframes fadeOutText {
                0% { color: transparent; }
                80% { color: transparent; }
                100% { color: #fff; }
            }

            @-webkit-keyframes moveToRight {
                80% { -webkit-transform: translateX(250%); }
                81% { opacity: 1; -webkit-transform: translateX(250%); }
                82% { opacity: 0; -webkit-transform: translateX(250%); }
                83% { opacity: 0; -webkit-transform: translateX(-50%); }
                84% { opacity: 1; -webkit-transform: translateX(-50%);  }
                100% { -webkit-transform: translateX(0%); }
            }

            @-moz-keyframes moveToRight {
                80% { -moz-transform: translateX(250%); }
                81% { opacity: 1; -moz-transform: translateX(250%); }
                82% { opacity: 0; -moz-transform: translateX(250%); }
                83% { opacity: 0; -moz-transform: translateX(-50%); }
                84% { opacity: 1; -moz-transform: translateX(-50%);  }
                100% { -moz-transform: translateX(0%); }
            }

            @keyframes moveToRight {
                80% { transform: translateX(250%); }
                81% { opacity: 1; transform: translateX(250%); }
                82% { opacity: 0; transform: translateX(250%); }
                83% { opacity: 0; transform: translateX(-50%); }
                84% { opacity: 1; transform: translateX(-50%);  }
                100% { transform: translateX(0%); }
            }

            /* Button 7b */
            .btn-7b {
                overflow: hidden;
            }

            .btn-7b:before {
                position: absolute;
                left: 0;
                width: 40%;
                font-size: 160%;
                line-height: 0.8;
                color: #0a833d;
            }

            .btn-7b.btn-activated:before {
                -webkit-animation: scaleUp 0.5s;
                -moz-animation: scaleUp 0.5s;
                animation: scaleUp 0.5s;
            }

            @-webkit-keyframes scaleUp {
                80% {
                    opacity: 0;
                    -webkit-transform: scale(2);
                }
                100% {
                    opacity: 0;
                    -webkit-transform: scale(2);
                }
            }

            @-moz-keyframes scaleUp {
                80% {
                    opacity: 0;
                    -moz-transform: scale(2);
                }
                100% {
                    opacity: 0;
                    -moz-transform: scale(2);
                }
            }

            @keyframes scaleUp {
                80% {
                    opacity: 0;
                    transform: scale(2);
                }
                100% {
                    opacity: 0;
                    transform: scale(2);
                }
            }

            /* Icon only style */
            .btn-icon-only {
                font-size: 0;
                padding: 25px 30px;
            }

            .btn-icon-only:before {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                font-size: 26px;
                line-height: 54px;
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                backface-visibility: hidden;
            }

            /* Button 7c */
            .btn-7c {
                overflow: hidden;
            }

            .btn-7c:before {
                color: #fff;
                z-index: 1;
            }

            .btn-7c:after {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                z-index: 0;
                width: 0;
                background: #0a833d;
                -webkit-transition: none;
                -moz-transition: none;
                transition: none;
            }

            .btn-7c.btn-activated:after {
                -webkit-animation: fillToRight 0.7s forwards;
                -moz-animation: fillToRight 0.7s forwards;
                animation: fillToRight 0.7s forwards;
            }

            @-webkit-keyframes fillToRight {
                to { 
                    width: 100%;
                }
            }

            @-moz-keyframes fillToRight {
                to { 
                    width: 100%;
                }
            }

            @keyframes fillToRight {
                to { 
                    width: 100%;
                }
            }

            /* Button 7d */
            .btn-7d {
                overflow: hidden;
            }

            .btn-7d:before {
                color: #fff;
                z-index: 1;
            }

            .btn-7d:after {
                position: absolute;
                top: 0;
                left: 0;
                height: 0;
                width: 100%;
                z-index: 0;
                background: #21bb63;
                -webkit-transition: none;
                -moz-transition: none;
                transition: none;
            }

            .btn-7d.btn-activated:after {
                -webkit-animation: emptyBottom 0.7s forwards;
                -moz-animation: emptyBottom 0.7s forwards;
                animation: emptyBottom 0.7s forwards;
            }

            @-webkit-keyframes emptyBottom {
                to { 
                    height: 100%;
                }
            }

            @-moz-keyframes emptyBottom {
                to { 
                    height: 100%;
                }
            }

            @keyframes emptyBottom {
                to { 
                    height: 100%;
                }
            }

            /* Button 7e */
            .btn-7e:after {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: 1;
                font-size: 26px;
                line-height: 54px;
                color: #ea515e;
                -webkit-transform: scale(0);
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                transform: scale(0);
                opacity: 0;
                -webkit-transition: none;
                -moz-transition: none;
                transition: none;
            }

            .btn-7e.btn-activated:after {
                -webkit-animation: scaleFade 0.5s forwards;
                -moz-animation: scaleFade 0.5s forwards;
                animation: scaleFade 0.5s forwards;
            } 

            @-webkit-keyframes scaleFade {
                50% { 
                    opacity: 1;
                    -webkit-transform: scale(1);
                }
                100% {
                    opacity: 0;
                    -webkit-transform: scale(2.5);
                }
            }

            @-moz-keyframes scaleFade {
                50% { 
                    opacity: 1;
                    -moz-transform: scale(1);
                }
                100% {
                    opacity: 0;
                    -moz-transform: scale(2.5);
                }
            }

            @keyframes scaleFade {
                50% { 
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    opacity: 0;
                    transform: scale(2.5);
                }
            }

            /* Button 7f */
            .btn-7f:before {
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: #fff;
            }
            .btn-7f:after {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: 1;
                font-size: 26px;
                line-height: 54px;
                color: #ffe44d;
                visibility: hidden;
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: #ffe44d;
                -webkit-transform: scale(4);
                -moz-transform: scale(4);
                -ms-transform: scale(4);
                transform: scale(4);
                opacity: 0;
                -webkit-transition: none;
                -moz-transition: none;
                transition: none;
            }

            .btn-7f.btn-activated:after {
                visibility: visible;
                -webkit-animation: dropDown 0.3s forwards;
                -moz-animation: dropDown 0.3s forwards;
                animation: dropDown 0.3s forwards;
            } 

            @-webkit-keyframes dropDown {
                to { 
                    opacity: 1;
                    -webkit-transform: scale(1);
                }
            }

            @-moz-keyframes dropDown {
                to { 
                    opacity: 1;
                    -moz-transform: scale(1);
                }
            }

            @keyframes dropDown {
                to { 
                    opacity: 1;
                    transform: scale(1);
                }
            }

            /* Button 7g */
            .btn-7g:after {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: 1;
                font-size: 26px;
                line-height: 54px;
                color: #0a833d;
                visibility: hidden;
                -webkit-transform: scale(2);
                -moz-transform: scale(2);
                -ms-transform: scale(2);
                transform: scale(2);
                opacity: 0;
                -webkit-transition: none;
                -moz-transition: none;
                transition: none;
            }

            .btn-7g.btn-activated:after {
                visibility: visible;
                -webkit-animation: dropDownFade 0.5s forwards;
                -moz-animation: dropDownFade 0.5s forwards;
                animation: dropDownFade 0.5s forwards;
            } 

            @-webkit-keyframes dropDownFade {
                50% { 
                    opacity: 1;
                    -webkit-transform: scale(1);
                }
                100% { 
                    opacity: 0;
                    -webkit-transform: scale(1.5);
                }
            }

            @-moz-keyframes dropDownFade {
                50% { 
                    opacity: 1;
                    -moz-transform: scale(1);
                }
                100% { 
                    opacity: 0;
                    -moz-transform: scale(1.5);
                }
            }

            @keyframes dropDownFade {
                50% { 
                    opacity: 1;
                    transform: scale(1);
                }
                100% { 
                    opacity: 0;
                    transform: scale(1.5);
                }
            }

            /* Button 7h */

            .btn-7h span {
                display: inline-block;
                width: 100%;
            }

            .btn-7h:before {
                position: absolute;
                left: 0;
                width: 40%;
                font-size: 160%;
                line-height: 0.8;
                color: #0a833d;
            }

            /* Success and error */

            .btn-success,
            .btn-error {
                color: transparent;
            }

            .btn-success:after,
            .btn-error:after {
                z-index: 1;
                color: #fff;
                left: 40%;
            }

            .btn-success:before {
                content: "\e001";
            }

            .btn-success:after {
                content: "Success!";
                -webkit-animation: moveUp 0.5s;
                -moz-animation: moveUp 0.5s;
                animation: moveUp 0.5s;
            }

            @-webkit-keyframes moveUp {
                0% {
                    -webkit-transform: translateY(50%);
                    opacity: 0;
                }
                100% { 
                    opacity: 1;
                    -webkit-transform: translateY(0);
                }
            }

            @-moz-keyframes moveUp {
                0% {
                    -moz-transform: translateY(50%);
                    opacity: 0;
                }
                100% { 
                    opacity: 1;
                    -moz-transform: translateY(0);
                }
            }

            @keyframes moveUp {
                0% {
                    transform: translateY(50%);
                    opacity: 0;
                }
                100% { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .btn-error {
                -webkit-animation: shake 0.5s;
                -moz-animation: shake 0.5s;
                animation: shake 0.5s;
            }

            /* From Dan Eden's animate.css: http://daneden.me/animate/ */
            @-webkit-keyframes shake {
                0%, 100% {-webkit-transform: translateX(0);}
                10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-10px);}
                20%, 40%, 60%, 80% {-webkit-transform: translateX(10px);}
            }

            @-moz-keyframes shake {
                0%, 100% {-moz-transform: translateX(0);}
                10%, 30%, 50%, 70%, 90% {-moz-transform: translateX(-10px);}
                20%, 40%, 60%, 80% {-moz-transform: translateX(10px);}
            }

            @keyframes shake {
                0%, 100% {transform: translateX(0);}
                10%, 30%, 50%, 70%, 90% {transform: translateX(-10px);}
                20%, 40%, 60%, 80% {transform: translateX(10px);}
            }

            .btn-error:before {
                content: "\e002";
            }

            .btn-error:after {
                content: "Error!";
                -webkit-animation: scaleFromUp 0.5s;
                -moz-animation: scaleFromUp 0.5s;
                animation: scaleFromUp 0.5s;
            }

            @-webkit-keyframes scaleFromUp {
                0% {
                    -webkit-transform: scale(0);
                    opacity: 0;
                }
                100% { 
                    opacity: 1;
                    -webkit-transform: scale(1);
                }
            }

            @-moz-keyframes scaleFromUp {
                0% {
                    -moz-transform: scale(0);
                    opacity: 0;
                }
                100% { 
                    opacity: 1;
                    -moz-transform: scale(1);
                }
            }

            @keyframes scaleFromUp {
                0% {
                    transform: scale(0);
                    opacity: 0;
                }
                100% { 
                    opacity: 1;
                    transform: scale(1);
                }
            }

            /* Special trash effect */
            .trash-effect {
                position: relative;
                max-width: 320px;
                margin: 60px auto 0;
            } 

            .trash-effect .icon-file {
                font-size: 30px;
                position: absolute;
                width: 50px;
                height: 50px;
                left: 50%;
                top: 50%;
                margin: -45px 0 0 -25px;
                -webkit-transition: all 0.3s ease-out;
                -moz-transition: all 0.3s ease-out;
                transition: all 0.3s ease-out;
                -webkit-transform: translateX(90px) translateY(20px) scale(1);
                -moz-transform: translateX(90px) translateY(20px) scale(1);
                -ms-transform: translateX(90px) translateY(20px) scale(1);
                transform: translateX(90px) translateY(20px) scale(1);
            }

            .trash-effect .icon-file:nth-child(2) {
                -webkit-transform: translateX(140px) translateY(-10px) scale(1);
                -moz-transform: translateX(140px) translateY(-10px) scale(1);
                -ms-transform: translateX(140px) translateY(-10px) scale(1);
                transform: translateX(140px) translateY(-10px) scale(1);
                -webkit-transition-delay: 0.1s;
                -moz-transition-delay: 0.1s;
                transition-delay: 0.1s;
            }

            .trash-effect .icon-file:nth-child(3) {
                -webkit-transform: translateX(140px) translateY(50px) scale(1);
                -moz-transform: translateX(140px) translateY(50px) scale(1);
                -ms-transform: translateX(140px) translateY(50px) scale(1);
                transform: translateX(140px) translateY(50px) scale(1);
                -webkit-transition-delay: 0.2s;
                -moz-transition-delay: 0.2s;
                transition-delay: 0.2s;
            }

            .trash-effect.trash-effect-active .icon-file {
                -webkit-transform: translateX(-100px) translateY(-10px) scale(0);
                -moz-transform: translateX(-100px) translateY(-10px) scale(0);
                -ms-transform: translateX(-100px) translateY(-10px) scale(0);
                transform: translateX(-100px) translateY(-10px) scale(0);
            }

            /* Button 7i */
            .btn-7i {
                box-shadow: none;
                border-radius: 0 0 7px 7px;
                padding: 27px 33px;
                -webkit-transform: translateX(-100px);
                -moz-transform: translateX(-100px);
                -ms-transform: translateX(-100px);
                transform: translateX(-100px);
            }

            .btn-7i:before {
                line-height: 45px;
            }

            .btn-7i:after {
                height: 11px; /* should be 10px but in Chrome Version 34.0.1847.131 there's a gap because of the transform of the button */
                width: 100%;
                background: #17aa56;
                border-radius: 7px 7px 0 0;
                left: 0;
                top: -10px;
                z-index: 1;
                -webkit-transform-origin: 0 100%;
                -moz-transform-origin: 0 100%;
                -ms-transform-origin: 0 100%;
                transform-origin: 0 100%;
            }

            .trash-effect-active .btn-7i:after {
                -webkit-animation: openTrash 0.5s;
                -moz-animation: openTrash 0.5s;
                animation: openTrash 0.5s;
            }

            @-webkit-keyframes openTrash {
                50% {
                    -webkit-transform: rotate(-35deg);
                }
                100% { 
                    -webkit-transform: rotate(0deg);
                }
            }

            @-moz-keyframes openTrash {
                50% {
                    -moz-transform: rotate(-35deg);
                }
                100% { 
                    -moz-transform: rotate(0deg);
                }
            }

            @keyframes openTrash {
                50% {
                    transform: rotate(-35deg);
                }
                100% { 
                    transform: rotate(0deg);
                }
            }

            /* Button 8 */
            .perspective {
                -webkit-perspective: 800px;
                -moz-perspective: 800px;
                perspective: 800px;
                display: inline-block;
            }

            .btn-8 {
                display: block;
                background: #5cbcf6;
                outline: 1px solid transparent; /* FF jagged edges fix */
                -webkit-transform-style: preserve-3d;
                -moz-transform-style: preserve-3d;
                transform-style: preserve-3d;
            }

            .btn-8:active {
                background: #55b7f3;
            }

            /* Button 8a */
            .btn-8a:after {
                width: 100%;
                height: 42%; /* should be 40% but there's a gap in Chrome Version 34.0.1847.131 */
                left: 0;
                top: -40%;
                background: #49a7df;
                -webkit-transform-origin: 0% 100%;
                -webkit-transform: rotateX(90deg);
                -moz-transform-origin: 0% 100%;
                -moz-transform: rotateX(90deg);
                transform-origin: 0% 100%;
                transform: rotateX(90deg);
            }

            .btn-8a:hover {
                -webkit-transform: rotateX(-15deg);
                -moz-transform: rotateX(-15deg);
                -ms-transform: rotateX(-15deg);
                transform: rotateX(-15deg);
            }

            /* Button 8b */
            .btn-8b:after {
                width: 100%;
                height: 40%;
                left: 0;
                top: 100%;
                background: #49a7df;
                -webkit-transform-origin: 0% 0%;
                -webkit-transform: rotateX(-90deg);
                -moz-transform-origin: 0% 0%;
                -moz-transform: rotateX(-90deg);
                -ms-transform-origin: 0% 0%;
                -ms-transform: rotateX(-90deg);
                transform-origin: 0% 0%;
                transform: rotateX(-90deg);
            }

            .btn-8b:hover {
                -webkit-transform: rotateX(15deg);
                -moz-transform: rotateX(15deg);
                -ms-transform: rotateX(15deg);
                transform: rotateX(15deg);
            }

            /* Button 8c */
            .btn-8c:after {
                width: 21%;
                height: 100%;
                left: -20%;
                top: 0;
                background: #49a7df;
                -webkit-transform-origin: 100% 0%;
                -webkit-transform: rotateY(-90deg);
                -moz-transform-origin: 100% 0%;
                -moz-transform: rotateY(-90deg);
                -ms-transform-origin: 100% 0%;
                -ms-transform: rotateY(-90deg);
                transform-origin: 100% 0%;
                transform: rotateY(-90deg);
            }

            .btn-8c:hover {
                -webkit-transform: rotateY(15deg);
                -moz-transform: rotateY(15deg);
                -ms-transform: rotateY(15deg);
                transform: rotateY(15deg);
            }

            /* Button 8d */
            .btn-8d:after {
                width: 20%;
                height: 100%;
                left: 100%;
                top: 0;
                background: #49a7df;
                -webkit-transform-origin: 0% 0%;
                -webkit-transform: rotateY(90deg);
                -moz-transform-origin: 0% 0%;
                -moz-transform: rotateY(90deg);
                -ms-transform-origin: 0% 0%;
                -ms-transform: rotateY(90deg);
                transform-origin: 0% 0%;
                transform: rotateY(90deg);
            }

            .btn-8d:hover {
                -webkit-transform: rotateY(-15deg);
                -moz-transform: rotateY(-15deg);
                -ms-transform: rotateY(-15deg);
                transform: rotateY(-15deg);
            }

            /* Button 8e */
            .btn-8e {
                -webkit-transform: rotateX(-15deg);
                -moz-transform: rotateX(-15deg);
                -ms-transform: rotateX(-15deg);
                transform: rotateX(-15deg);
            }

            .btn-8e:after {
                width: 100%;
                height: 42%; /* should be 40% but there's a gap in Chrome Version 34.0.1847.131 */
                left: 0;
                top: -40%;
                background: #49a7df;
                -webkit-transform-origin: 0% 100%;
                -webkit-transform: rotateX(90deg);
                -moz-transform-origin: 0% 100%;
                -moz-transform: rotateX(90deg);
                -ms-transform-origin: 0% 100%;
                -ms-transform: rotateX(90deg);
                transform-origin: 0% 100%;
                transform: rotateX(90deg);
            }

            .btn-8e:active {
                -webkit-transform: rotateX(0deg);
                -moz-transform: rotateX(0deg);
                -ms-transform: rotateX(0deg);
                transform: rotateX(0deg);
            }

            /* Button 8f */
            .btn-8f {
                -webkit-transform: rotateX(15deg);
                -moz-transform: rotateX(15deg);
                -ms-transform: rotateX(15deg);
                transform: rotateX(15deg);
            }

            .btn-8f:after {
                width: 100%;
                height: 40%;
                left: 0;
                top: 100%;
                background: #49a7df;
                -webkit-transform-origin: 0% 0%;
                -webkit-transform: rotateX(-90deg);
                -moz-transform-origin: 0% 0%;
                -moz-transform: rotateX(-90deg);
                -ms-transform-origin: 0% 0%;
                -ms-transform: rotateX(-90deg);
                transform-origin: 0% 0%;
                transform: rotateX(-90deg);
            }

            .btn-8f:active {
                -webkit-transform: rotateX(0deg);
                -moz-transform: rotateX(0deg);
                -ms-transform: rotateX(0deg);
                transform: rotateX(0deg);
            }

            /* Button 8g */
            .btn-8g {
                background: #fff;
                color: #999;
            }

            .btn-8g:active {
                background: #fff;
            }

            .btn-8g:after,
            .btn-8g:before {
                text-transform: uppercase;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                line-height: 70px;
            }

            .btn-8g:after {
                top: -98%; /* should be -100% but there's a gap in Chrome Version 34.0.1847.131 */
                background: #7aca7c;
                color: #358337;
                content: 'It worked!';
                -webkit-transform-origin: 0% 100%;
                -webkit-transform: rotateX(90deg);
                -moz-transform-origin: 0% 100%;
                -moz-transform: rotateX(90deg);
                -ms-transform-origin: 0% 100%;
                -ms-transform: rotateX(90deg);
                transform-origin: 0% 100%;
                transform: rotateX(90deg);
            }

            .btn-8g:before {
                top: 100%;
                background: #e96a6a;
                color: #a33a3a;
                content: 'Error!';
                font-weight: 700;
                font-family: 'Lato', Calibri, Arial, sans-serif;
                -webkit-transform-origin: 0% 0%;
                -webkit-transform: rotateX(-90deg);
                -moz-transform-origin: 0% 0%;
                -moz-transform: rotateX(-90deg);
                -ms-transform-origin: 0% 0%;
                -ms-transform: rotateX(-90deg);
                transform-origin: 0% 0%;
                transform: rotateX(-90deg);
            }

            .btn-8g.btn-success3d {
                background: #aaa;
                -webkit-transform-origin: 50% 100%;
                -webkit-transform: rotateX(-90deg) translateY(100%);
                -moz-transform-origin: 50% 100%;
                -moz-transform: rotateX(-90deg) translateY(100%);
                -ms-transform-origin: 50% 100%;
                -ms-transform: rotateX(-90deg) translateY(100%);
                transform-origin: 50% 100%;
                transform: rotateX(-90deg) translateY(100%);
            }

            .btn-8g.btn-error3d  {
                background: #aaa;
                -webkit-transform-origin: 50% 0%;
                -webkit-transform: rotateX(90deg) translateY(-100%);
                -moz-transform-origin: 50% 0%;
                -moz-transform: rotateX(90deg) translateY(-100%);
                -ms-transform-origin: 50% 0%;
                -ms-transform: rotateX(90deg) translateY(-100%);
                transform-origin: 50% 0%;
                transform: rotateX(90deg) translateY(-100%);
            }

            #physik{
                width:900px;
                display: none;
            }

            .mfp-hide {
                display: none!important;
                z-index: 100;
            }
            .button {
                padding: 20px 40px;
                border-color: #f3f3f3;
                font-size: 17px;
                font-size: 1.7rem;
                font-family: "museo-sans", Arial, Verdana;
                font-weight: 500;
                margin-top: 40px;
                display: inline-block;
            }
            .button {
                border: 2px solid #fff;
                color: #fff;
                text-transform: uppercase;
                transition: all 0.15s ease-in-out;
            }
            .button .fa {
                margin-left: 20px;
            }
            .button:hover {
                background-color: rgba(0,0,0,0.7); 
            }
            h1 {
                color: #fff;
                font-size: 50px;
                font-family: "museo-sans", Arial, Verdana;
                text-transform: uppercase;
                line-height: 72px;
                letter-spacing: -5px;
                margin: 185px 0 0 0;
            }
            span {
                font-size: 23px;
                font-size: 2.3rem;
                display: block;
                font-family: "museo-sans", Arial, Verdana;
                font-weight: 500;
                letter-spacing: 0px;
                line-height: 25px;
            }
            * {
                margin: 0;
                padding: 0;
                border: 0;
                outline: none;
            }
            .content {
                text-align: center;
            }

            .overlay {
                z-index: 3;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.7);
                transition: opacity 500ms;
                visibility: hidden;
                opacity: 0;
            }
            .overlay:target {
                visibility: visible;
                opacity: 1;
            }

            .popup {
                margin: 10px auto;
                padding: 10px;
                background: #fceaea;
                border-radius: 5px;
                width: 30%;
                position: relative;
                transition: all 5s ease-in-out;
            }

            .popup h2 {
                margin-top: 0;
                color: #333;
                font-family: Tahoma, Arial, sans-serif;
            }
            .popup .close {
                position: absolute;
                top: 20px;
                right: 30px;
                transition: all 200ms;
                font-size: 30px;
                font-weight: bold;
                text-decoration: none;
                color: #f43d3d;
            }
            .popup .close:hover {
                color: #06D85F;
            }
            .popup .content {
                max-height: 60%;
                overflow: auto;
            }
            @media (pointer: coarse){
                .popup{
                    width: 90%;
                    height: 50%;
                }
                .popup .close{
                    font-size: 100px;
                }
                .popup .content {
                    max-height: 20%;
                }

            }
        </style>
    </head>
    <body style="color: rgb(0, 0, 0);background-color: rgb(20, 20, 20)" alink="#ee0000" link="#0000ee" vlink="#551a8b">
        <div style="text-align: center;"><span style="color: rgb(255, 255, 255);"><br></span>
            <button  style="position: absolute; top: 30px; left: 47%; z-index:2; " onclick="location.href='#allgraphs'" class="btn-circle btn-lg" ><i class="fas fa-cog"></i></button>   
            <table border="0" align="center">
                <tr>
                    <td style="background-color: #FFFFFF">
                        <div id="func" style="width:100%; height:100%; "></div>
                        <script type="text/javascript">

                            var checks=[true,true,true,true,true,true,true];

                            g2 = new Dygraph(document.getElementById("func"),
                                             <?php
                                             $mysql_host = "localhost";
                                             $mysql_db = "id4216250_raummessungen";
                                             $mysql_user = "id4216250_juliushussl";
                                             $mysql_pw = "RaumKlima";
                                             $table1 = "altbau";
                                             $table2 = "neubau";
                                             $table3 = "betonkerntemperierung";
                                             $mode = 1;
                                             $temperature=true;
                                             $luftdruck=true;
                                             $luftfeuchtigkeit=true;
                                             $licht=true;


                                             //    $connection = mysql_connect($mysql_host, $mysql_user, $mysql_pw) or die("Verbindung zur Datenbank fehlgeschlagen.");
                                             $connection = new mysqli($mysql_host, $mysql_user, $mysql_pw, $mysql_db);   // Check connection
                                             if ($connection->connect_error) {
                                                 die("Connection failed: " . $connection->connect_error);
                                             } 
                                             $abfrage1 = "SELECT DATE_FORMAT(Zeit, '%Y/%m/%d %H:%i:%s') AS date, Temperatur, Luftfeuchtigkeit, Luftdruck, Licht FROM ".$table1;       //   2009/07/12 12:34:56
                                             $abfrage2 = "SELECT DATE_FORMAT(Zeit, '%Y/%m/%d %H:%i:%s') AS date, Temperatur, Luftfeuchtigkeit, Luftdruck, Licht FROM ".$table2;       //   2009/07/12 12:34:56
                                             $abfrage3 = "SELECT DATE_FORMAT(Zeit, '%Y/%m/%d %H:%i:%s') AS date, Temperatur, Luftfeuchtigkeit, Luftdruck, Licht FROM ".$table3;       //   2009/07/12 12:34:56
                                             $ergebnis1 = mysqli_query($connection,$abfrage1);
                                             $ergebnis2 = mysqli_query($connection,$abfrage2);
                                             $ergebnis3 = mysqli_query($connection,$abfrage3);

                                             echo "[";                                  // start of the 2 dimensional array
                                             while($row = mysqli_fetch_array($ergebnis1))
                                             {
                                                 $utime = strtotime($row[datum]);
                                                 $diffutime = $utime - $lastutime;
                                                 if ($diffutime > 600) {
                                                     echo "["."new Date(\"".$row[date]."\")".",NaN,NaN],";
                                                 }
                                                 else {
                                                     if($mode==1){
                                                         echo "["."new Date(\"".$row[date]."\")".",";
                                                         if($temperature){
                                                             echo $row[Temperatur];
                                                         } 
                                                         echo ",";
                                                         if($luftdruck){
                                                             echo ($row['Luftdruck']/1000);
                                                         }
                                                         echo ",";
                                                         if($luftfeuchtigkeit){
                                                             echo $row[Luftfeuchtigkeit];
                                                         }
                                                         echo ",";
                                                         if($licht){
                                                             echo $row[Licht];
                                                         }
                                                         echo ",,,,,,,,,],";

                                                     }else{
                                                         echo "["."new Date(\"".$row[date]."\")".",".$row[Temperatur].",".($row['Luftdruck']/1000).",".$row[Luftfeuchtigkeit].",".$row[Licht]."],";
                                                     }
                                                 }
                                                 $lastutime = strtotime($row[datum]);
                                             }

                                             while($row = mysqli_fetch_array($ergebnis2))
                                             {
                                                 $utime = strtotime($row[datum]);
                                                 $diffutime = $utime - $lastutime;
                                                 if ($diffutime > 600) {
                                                     echo "["."new Date(\"".$row[date]."\")".",NaN,NaN],";
                                                 }
                                                 else {
                                                     if($mode==1){
                                                         echo "["."new Date(\"".$row[date]."\")".",,,,,";
                                                         if($temperature){
                                                             echo $row[Temperatur];
                                                         } 
                                                         echo ",";
                                                         if($luftdruck){
                                                             echo ($row['Luftdruck']/1000);
                                                         }
                                                         echo ",";
                                                         if($luftfeuchtigkeit){
                                                             echo $row[Luftfeuchtigkeit];
                                                         }
                                                         echo ",";
                                                         if($licht){
                                                             echo $row[Licht];
                                                         }
                                                         echo ",,,,],";

                                                     }else{
                                                         echo "["."new Date(\"".$row[date]."\")".",".$row[Temperatur].",".($row['Luftdruck']/1000).",".$row[Luftfeuchtigkeit].",".$row[Licht]."],";
                                                     }
                                                 }
                                                 $lastutime = strtotime($row[datum]);
                                             }
                                             while($row = mysqli_fetch_array($ergebnis3))
                                             {
                                                 $utime = strtotime($row[datum]);
                                                 $diffutime = $utime - $lastutime;
                                                 if ($diffutime > 600) {
                                                     echo "["."new Date(\"".$row[date]."\")".",NaN,NaN],";
                                                 }
                                                 else {
                                                     if($mode==1){
                                                         echo "["."new Date(\"".$row[date]."\")".",,,,,,,,,";
                                                         if($temperature){
                                                             echo $row[Temperatur];
                                                         } 
                                                         echo ",";
                                                         if($luftdruck){
                                                             echo ($row['Luftdruck']/1000);
                                                         }
                                                         echo ",";
                                                         if($luftfeuchtigkeit){
                                                             echo $row[Luftfeuchtigkeit];
                                                         }
                                                         echo ",";
                                                         if($licht){
                                                             echo $row[Licht];
                                                         }
                                                         echo "],";

                                                     }else{
                                                         echo "["."new Date(\"".$row[date]."\")".",".$row[Temperatur].",".($row['Luftdruck']/1000).",".$row[Luftfeuchtigkeit].",".$row[Licht]."],";
                                                     }
                                                 }
                                                 $lastutime = strtotime($row[datum]);
                                             }
                                             echo "]";
                                             mysqli_close($connection);
                                             ?>,{ 
                                             showRoller: true,
                                             connectSeparatedPoints: true,
                                             animatedZooms: true,
                                             strokeWidth:2,
                                             labels: [ 'Zeit', 'altbauTemperatur', 'altbauLuftdruck','altbauLuftfeuchtigkeit', 'altbauLicht', 'neubauTemperatur', 'neubauLuftdruck','neubauLuftfeuchtigkeit', 'neubauLicht', 'betTemperatur', 'betLuftdruck','betLuftfeuchtigkeit', 'betLicht'],
                                             visibility: [true, true, true,true, true, true,true, true, true,true, true, true,true]
                                             });

                            function change(el) {
                                switch(el.id){
                                    case "1":
                                        checks[0]=el.checked;
                                        if(!el.checked){
                                            g2.setVisibility(0, el.checked);
                                            g2.setVisibility(1, el.checked);
                                            g2.setVisibility(2, el.checked);
                                            g2.setVisibility(3, el.checked);
                                        }else{
                                            if(checks[3]){
                                                g2.setVisibility(0, el.checked);
                                            }
                                            if(checks[4]){
                                                g2.setVisibility(1, el.checked);
                                            }
                                            if(checks[5]){
                                                g2.setVisibility(2, el.checked);
                                            }
                                            if(checks[6]){
                                                g2.setVisibility(3, el.checked);
                                            }
                                        }
                                        break;
                                    case "2":
                                        checks[1]=el.checked;
                                        if(!el.checked){
                                            g2.setVisibility(4, el.checked);
                                            g2.setVisibility(5, el.checked);
                                            g2.setVisibility(6, el.checked);
                                            g2.setVisibility(7, el.checked);
                                        }else{
                                            if(checks[3]){
                                                g2.setVisibility(4, el.checked);
                                            }
                                            if(checks[4]){
                                                g2.setVisibility(5, el.checked);
                                            }
                                            if(checks[5]){
                                                g2.setVisibility(6, el.checked);
                                            }
                                            if(checks[6]){
                                                g2.setVisibility(7, el.checked);
                                            }
                                        }
                                        break;
                                    case "3":
                                        checks[2]=el.checked;
                                        if(!el.checked){
                                            g2.setVisibility(8, el.checked);
                                            g2.setVisibility(9, el.checked);
                                            g2.setVisibility(10, el.checked);
                                            g2.setVisibility(11, el.checked);
                                        }else{
                                            if(checks[3]){
                                                g2.setVisibility(8, el.checked);
                                            }
                                            if(checks[4]){
                                                g2.setVisibility(9, el.checked);
                                            }
                                            if(checks[5]){
                                                g2.setVisibility(10, el.checked);
                                            }
                                            if(checks[6]){
                                                g2.setVisibility(11, el.checked);
                                            }
                                        }
                                        break;
                                    case "4":
                                        checks[3]=el.checked;
                                        if(checks[0]){
                                            g2.setVisibility(0, el.checked);
                                        }
                                        if(checks[1]){
                                            g2.setVisibility(4, el.checked);
                                        }
                                        if(checks[2]) {
                                            g2.setVisibility(8, el.checked);
                                        }
                                        break;
                                    case "5":
                                        checks[4]=el.checked;
                                        if(checks[0]){
                                            g2.setVisibility(2, el.checked);
                                        }
                                        if(checks[1]){
                                            g2.setVisibility(6, el.checked);
                                        }
                                        if(checks[2]){
                                            g2.setVisibility(10, el.checked);
                                        }
                                        break;
                                    case "6":
                                        checks[5]=el.checked;
                                        if(checks[0]){
                                            g2.setVisibility(1, el.checked);
                                        }
                                        if(checks[1]){
                                            g2.setVisibility(5, el.checked);
                                        }
                                        if(checks[2]){
                                            g2.setVisibility(9, el.checked);
                                        }
                                        break;
                                    case "7":
                                        checks[6]=el.checked;
                                        if(checks[0]){
                                            g2.setVisibility(3, el.checked);
                                        }
                                        if(checks[1]){
                                            g2.setVisibility(7, el.checked);
                                        }
                                        if(checks[2]){
                                            g2.setVisibility(11, el.checked);
                                        }
                                        break;
                                }

                            }
                        </script>
                    </td>
                </tr>
            </table>
        </div>

        <div id="allgraphs" class="overlay">
            <div class="popup">
                <a class="close" href="#">&times;</a>
                <div style="margin-top:40px;" class="content">
                    <div class="control-group">
                        <label class="control control-checkbox">
                            Altbau
                            <input type="checkbox" checked="checked" id=1 onClick="change(this)"/>
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-checkbox">
                            Neubau
                            <input type="checkbox" checked="checked"  id=2 onClick="change(this)"/>
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-checkbox">
                            Betonkerntemperierung
                            <input type="checkbox" checked="checked"  id=3 onClick="change(this)"/>
                            <div class="control_indicator"></div>
                        </label>
                        <br>
                        <label class="control control-checkbox">
                            Werte:
                        </label>
                        <br>
                        <label class="control control-checkbox">
                            Temperatur
                            <input type="checkbox" checked="checked"  id=4 onClick="change(this)"/>
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-checkbox">
                            Luftfeuchtigkeit
                            <input type="checkbox" checked="checked" id=5 onClick="change(this)"/>
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-checkbox">
                            Luftdruck
                            <input type="checkbox" checked="checked" id=6 onClick="change(this)"/>
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-checkbox">
                            Licht
                            <input type="checkbox" checked="checked" id=7 onClick="change(this)"/>
                            <div class="control_indicator"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>