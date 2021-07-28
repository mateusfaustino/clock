(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{31:function(n,t,e){},32:function(n,t,e){},40:function(n,t,e){"use strict";e.r(t);var i,a,o,r=e(1),c=e.n(r),s=e(21),l=e.n(s),d=(e(31),e(32),e(5)),f=e(6),p=e(15),h=e(2),x=f.a.div(i||(i=Object(d.a)(['\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    flex-direction:column;\n    color: #fff;\n    font-family: "Segoe UI", sans-serif;\n    width:100%;\n    max-width:340px;\n    padding:15px 10px;\n    border:3px solid #2E94E3;\n    border-radius:5px;\n    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(255,255,255,0.1));\n    transition:0.5s;\n    transition-property:background, box-shadow ;\n    background:rgba(0,0,0, 0.4);\n    &:hover{\n        background:#2E94E3;\n        box-shadow: 0 0 30px #2E94E3;\n    }\n    .zero:before{\n        content:"0";\n    }\n    @media(max-width: 400px) {\n        max-width:80vw;\n    }\n    ']))),b=f.a.div(a||(a=Object(d.a)(['\n        font-size:20px;\n        font-weight:600;\n        letter-spacing:3px;\n        \n        span{\n            &:not(:last-child){\n                margin-right: 6px;\n            }\n            &#date1,&#date2{\n                &:after{\n                    content:" de";\n                }\n            }\n        }\n    @media(max-width: 400px) {\n        font-size:14px;\n    }\n    ']))),u=f.a.div(o||(o=Object(d.a)(['\n        display:flex;\n        align-items:center;\n        justify-content:center;    \n        font-size:60px;\n        span{\n            margin:0px 6px;\n            font-weight:600;\n            letter-spacing:3px;\n            text-align:center;\n            \n            &:not(:last-child){\n                &:after{\n                    content:":";\n                    color: ',";\n                    \n                }\n            }\n        }\n        @media(max-width: 400px) {\n            font-size:50px;\n            \n        }\n        \n    "])),(function(n){return":"===n.blink?"#fff":"transparent"}));function j(){var n=Object(r.useState)(new Date),t=Object(p.a)(n,2),e=t[0],i=t[1],a=[e.getHours(),e.getMinutes(),e.getSeconds()],o=[["Dom,","Seg,","Ter,","Qua,","Qui,","Sex,","Sab,"][e.getDay()],e.getDate(),["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e.getMonth()],e.getFullYear()];return setInterval((function(){i(new Date)}),500),Object(h.jsxs)(x,{children:[Object(h.jsx)(b,{children:o.map((function(n,t){return Object(h.jsx)("span",{id:"date"+t,className:n<10?"zero":"",children:n})}))}),Object(h.jsx)(u,{blink:e.getUTCMilliseconds()>=500?"":":",children:a.map((function(n,t){return Object(h.jsx)("span",{className:n<10?"zero":"",children:n})}))})]})}var g,m,v,O,w,y,k=e(26),_=e(25),E=e(14),F=f.a.h2(g||(g=Object(d.a)(["\n    letter-spacing: 4px;\n    font-weight: 200;\n"]))),A=f.a.div(m||(m=Object(d.a)(['\n    &.active{\n        a{\n            h2{\n                text-shadow:0 0 30px #2E94E3;\n                color:#2E94E3;\n                span{\n                    &#spanM{\n                        &:after{\n                            opacity:100%;\n                            content:"ateus";\n                            transition: 2s;\n                        }\n                        \n                    }\n                    &#spanF{\n                        transform: translateX(80px);\n                        transition: 2s;\n                        &:after{\n                            content:"austino";\n                            opacity:100%;\n                            transition: 1s;\n                        }\n                    }\n                }\n            }\n        }\n    }\n    a{\n        text-decoration:none;\n        color:#fff;\n        h2{\n            span#spanM{\n                &:after{\n                    position:absolute;\n                    content:"ateus";\n                    opacity:0;\n                    transition: 2s;\n                }\n            }\n            span#spanF{\n                transform: translateX(0);\n                transition: 2s;\n                position:absolute;\n                &:after{\n                    content:"austino";\n                    opacity:0;\n                    transition: 2s;\n                }\n            }\n            &:hover{\n                \n            }\n            \n        }\n        svg{\n            fill: #fff;\n            height: 6vh;\n            width: auto;\n        }\n    }\n    @media screen and (min-width: 755px) {\n        a{\n            h2{\n                text-shadow:0 0 30px #2E94E3;\n                color:#2E94E3;\n                span{\n                    &#spanM{\n                        &:after{\n                            opacity:100%;\n                            content:"ateus";\n                        }\n                        \n                    }\n                    &#spanF{\n                        transform: translateX(80px);\n                        &:after{\n                            content:"austino";\n                            opacity:100%;\n                        }\n                    }\n                }\n            }\n        }\n    }\n']))),C=function(n){return Object(h.jsx)(A,{className:n.isActive?"active":"",children:Object(h.jsx)(E.b,{to:"/",children:Object(h.jsxs)(F,{children:[Object(h.jsx)("span",{id:"spanM",children:"M"}),Object(h.jsx)("span",{id:"spanF",children:"F"})]})})})},z=f.a.ul(v||(v=Object(d.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 45px 40px 8px;\n    flex-direction: column;\n    background:#10101E;\n    position: fixed;\n    top: 10vh;\n    left: 0;\n    width: 100%;\n    height: 90vh;\n    z-index: 0;\n    border-top: 1px solid #fff;\n    transform: translateX(","vw);\n    transition: 1s;\n\n    li{\n        width:100%;\n        padding: 16px 0;\n        list-style:none;\n        &:not(:last-child){\n            border-bottom: 1px solid #fff;\n        }\n\n        a{\n            display: flex;\n            color: #fff;\n            font-family: sans-serif;\n            text-decoration:none;\n            font-size:16px;\n            font-weight: 200;\n        }\n        \n    }\n\n    @media screen and (min-width: 755px) {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: row;\n            background-color: transparent;\n            position:initial;\n            width: auto;\n            transform: none;\n            padding: 0;\n            height: 100%;\n            border-top:none;\n            li{\n                width:auto;\n                list-style:none;\n                padding:0;\n                &:not(:last-child){\n                    border-bottom: none;\n                }\n            a{\n                display: flex;\n                color: #fff;\n                margin-right: 16px;\n                font-family: sans-serif;\n                font-weight: 600;\n            }\n        }\n    }\n    \n"])),(function(n){return n.active?"0":"-100"})),M=function(n){return Object(h.jsxs)(z,{active:!!n.isActive,children:[Object(h.jsx)("li",{onClick:n.setIsActive,children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/mateusfaustino/digital-clock-in-react",children:"C\xf3digo Fonte"})}),Object(h.jsx)("li",{onClick:n.setIsActive,children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/mateusfaustino/",children:"Github"})}),Object(h.jsx)("li",{onClick:n.setIsActive,children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/mateus-faustino-021967172/",children:"Linkedin"})}),Object(h.jsx)("li",{onClick:n.setIsActive,children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:mateusfaustino2017@gmail.com",children:"Email"})})]})},I=f.a.div(O||(O=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 10vh;\n    background:rgba(0,0,0, 0.4);\n    color: #fff;\n    padding: 4px 10vw;\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    z-index:1;\n    \n    .nav__icon{\n        \n        height:5vh ;\n        width: auto;\n        \n        &.nav__close{\n            display:"," ;\n        }\n        &.nav__bars{\n            display:"," ;\n        }\n        &:hover{\n            cursor: pointer;\n        }\n    }\n\n    @media screen and (min-width: 755px) {\n    \n        .nav__icon {\n            display: none !important;\n        }\n        \n    \n    }\n    \n"])),(function(n){return"close"===n.icon?"block":"none"}),(function(n){return"open"===n.icon?"block":"none"})),S=function(){var n=Object(r.useState)(!1),t=Object(p.a)(n,2),e=t[0],i=t[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(I,{icon:e?"close":"open",children:[Object(h.jsx)(C,{isActive:e,setIsActive:function(){return i(!1)}}),Object(h.jsx)(M,{isActive:e,setIsActive:function(){return i(!1)}}),Object(h.jsx)(_.a,{onClick:function(){return i(!e)},className:"nav__icon nav__close"}),Object(h.jsx)(k.a,{onClick:function(){return i(!e)},className:"nav__icon nav__bars"})]})})},D=f.a.div(w||(w=Object(d.a)(["\n    height:100vh;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:center;\n    background:#10101E;\n"]))),N=f.a.h1(y||(y=Object(d.a)(["\ncolor:#fff;\npadding-bottom:32px;\n"])));function J(){return Object(h.jsxs)(D,{children:[Object(h.jsx)(S,{}),Object(h.jsx)(N,{children:"Digital Clock"}),Object(h.jsx)(j,{})]})}var T=e(3);var X=function(){return Object(h.jsx)(E.a,{children:Object(h.jsx)(T.c,{children:Object(h.jsx)(T.a,{path:"/",children:Object(h.jsx)(J,{})})})})},L=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,41)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),i(n),a(n),o(n),r(n)}))};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(X,{})}),document.getElementById("root")),L()}},[[40,1,2]]]);
//# sourceMappingURL=main.1ab05d14.chunk.js.map