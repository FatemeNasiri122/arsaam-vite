import{r as a,j as e,a as i,u as K,F as D,R as G,O as F}from"./index.3a54e3a6.js";import{C as t,d as n}from"./Add.fe319e0e.js";import"./Transition.8d16f785.js";import"./createSvgIcon.926fa02e.js";import"./styled.9425413e.js";import"./jsx-runtime_commonjs-proxy.72d19f8d.js";const S=48,U=({color:d="currentColor",direction:l="left",distance:c="md",duration:A=.4,easing:m="cubic-bezier(0, 0, 0, 1)",hideOutline:N=!0,label:v,lines:s=3,onToggle:g,render:T,rounded:O=!1,size:R=32,toggle:L,toggled:p})=>{const[x,$]=a.exports.useState(!1),o=Math.max(12,Math.min(S,R)),C=Math.round((S-o)/2),u=o/12,h=Math.round(u),E=o/(s*((c==="lg"?.25:c==="sm"?.75:.5)+(s===3?1:1.25))),f=Math.round(E),r=h*s+f*(s-1),k=Math.round((S-r)/2),B=s===3?c==="lg"?4.0425:c==="sm"?5.1625:4.6325:c==="lg"?6.7875:c==="sm"?8.4875:7.6675,M=(u-h+(E-f))/(s===3?1:2),W=parseFloat((o/B-M/(4/3)).toFixed(2)),I=Math.max(0,A),y={cursor:"pointer",height:`${S}px`,position:"relative",transition:`${I}s ${m}`,userSelect:"none",width:`${S}px`},w={background:d,height:`${h}px`,left:`${C}px`,position:"absolute"};N&&(y.outline="none"),O&&(w.borderRadius="9em");const P=L||$,H=p!==void 0?p:x;return T({barHeight:h,barStyles:w,burgerStyles:y,easing:m,handler:()=>{P(!H),typeof g=="function"&&g(!H)},isLeft:l==="left",isToggled:H,label:v,margin:f,move:W,time:I,topOffset:k,width:o})};const V=d=>e(U,{...d,render:l=>i("div",{className:"hamburger-react","aria-label":l.label,"aria-expanded":l.isToggled,onClick:l.handler,onKeyUp:c=>c.key==="Enter"&&l.handler(),role:"button",style:l.burgerStyles,tabIndex:0,children:[e("div",{style:{transition:`${l.time/2}s ${l.easing} ${l.isToggled?"0s":`${l.time/2}s`}`,transform:`${l.isToggled?`translateY(${l.barHeight+l.margin}px)`:"none"}`},children:e("div",{style:{...l.barStyles,width:`${l.width}px`,top:`${l.topOffset}px`,transition:`${l.time/2}s ${l.easing} ${l.isToggled?`${l.time/2}s`:"0s"}`,transform:`${l.isToggled?"rotate(45deg)":"none"}`}})}),e("div",{style:{transition:`${l.time/2}s ${l.easing}`,opacity:`${l.isToggled?"0":"1"}`},children:e("div",{style:{...l.barStyles,width:`${l.width}px`,top:`${l.topOffset+l.barHeight+l.margin}px`,transition:`${l.time/2}s ${l.easing}`}})}),e("div",{style:{transition:`${l.time/2}s ${l.easing} ${l.isToggled?"0s":`${l.time/2}s`}`,transform:`${l.isToggled?`translateY(-${l.barHeight+l.margin}px)`:"none"}`},children:e("div",{style:{...l.barStyles,width:`${l.width}px`,top:`${l.topOffset+l.barHeight*2+l.margin*2}px`,transition:`${l.time/2}s ${l.easing} ${l.isToggled?`${l.time/2}s`:"0s"}`,transform:`${l.isToggled?"rotate(-45deg)":"none"}`}})})]})}),z="/assets/phone.56cbb5d1.svg",Y="/assets/search.5c1efade.svg",Z="/assets/user.abf78902.svg",j="/assets/favs.5d0b4bc9.svg",Q="/assets/globe.2746362b.svg",_="/assets/shopping-bag.984af3c2.svg",q="/assets/logo.14c9d729.svg";function X(){const d=K(),l=d.pathname==="/",c=!(d.pathname==="/SigninOrRegister"||d.pathname==="/Register"),[A,m]=a.exports.useState(!1),[N,v]=a.exports.useState(!1),[s,g]=a.exports.useState(!1),[T,O]=a.exports.useState(!1),[R,L]=a.exports.useState(!1),[p,x]=a.exports.useState(!1),[$,o]=a.exports.useState(!1),[C,u]=a.exports.useState(!1),[h,b]=a.exports.useState(!0),[E,f]=a.exports.useState(!1);return i("div",{className:"header-main",children:[l&&i("div",{className:"limited",style:{display:h?"flex":"none"},children:[i("div",{className:"limitedFixed",children:[e("a",{href:"",children:"Summer Sale: -50% on Spring/Summer 2022 | limited time only"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"10",height:"10",fill:"white",onClick:()=>b(!1),cursor:"pointer",children:e("path",{d:"M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"})})]}),e("div",{style:{marginTop:h&&"30px"}})]}),e("div",{className:"content",children:i("div",{className:"topsec",children:[i("div",{className:"contact-search-sec",children:[i("div",{className:"globeSec",children:[e("img",{src:Q,alt:""}),"EN"]}),e("img",{src:z,alt:""}),e("img",{src:Y,alt:""})]}),e("img",{className:"logo",src:q,alt:""}),i("div",{className:"profile-sec",children:[c?e("img",{src:Z,alt:""}):i("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"18",height:"18",fill:"#EFE27C",children:[e("path",{d:"M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"}),e("path",{d:"M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"})]}),e("img",{src:j,alt:""}),l?e("img",{src:_,alt:""}):e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"18",height:"18",children:e("path",{d:"M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z"})}),"(0)"]})]})}),e("nav",{className:"nav",children:i("ul",{className:"menu-items",children:[i("li",{className:"nav-item",children:[e("a",{href:"",className:"menu-item expand-btn",children:"MEN"}),e("div",{className:"mega-menu expandable",children:i("div",{className:"mega-menu-content",style:{marginTop:l&&h&&"29px"},children:[e("div",{className:"triangle-container",style:{marginBottom:l&&h&&"25px"},children:i("ul",{children:[i("li",{children:[e("div",{className:"item-1"}),e("div",{className:"item-2"}),e("div",{className:"item-3"})]}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{})]})}),i("div",{className:"list-container",children:[i("ul",{children:[e("li",{children:e("a",{children:"WHAT'S NEW"})}),e("li",{children:e("a",{children:"FALL/WINTER 2022"})})]}),i("ul",{children:[e("li",{children:e("a",{href:"",children:"CLOTHING"})}),e("li",{children:e("a",{href:"",children:"ALL CLOTHING"})}),e("li",{children:e("a",{href:"",children:"OUTERWEAR & COATS"})}),e("li",{children:e("a",{href:"",children:"LEATHER"})}),e("li",{children:e("a",{href:"",children:"SARTORIAL"})}),e("li",{children:e("a",{href:"",children:"KNITWEAR"})}),e("li",{children:e("a",{href:"",children:"SWEATSHIRTS & HOODIES"})}),e("li",{children:e("a",{href:"",children:"POLOSHIRTS"})}),e("li",{children:e("a",{href:"",children:"T-SHIRTS"})}),e("li",{children:e("a",{href:"",children:"SHIRTS"})}),e("li",{children:e("a",{href:"",children:"DENIM"})}),e("li",{children:e("a",{href:"",children:"TROUSERS & SHORTS"})}),e("li",{children:e("a",{href:"",children:"ACTIVEWEAR"})}),e("li",{children:e("a",{href:"",children:"UNDERWEAR & SOCKS"})}),e("li",{children:e("a",{href:"",children:"BEACHWEAR"})}),e("li",{children:e("a",{href:"",children:"BATHROBES"})})]}),i("ul",{children:[e("li",{children:e("a",{href:"",children:"SHOES"})}),e("li",{children:e("a",{href:"",children:"LOW TOP SNEAKERS"})}),e("li",{children:e("a",{href:"",children:"HIGH TOP SNEAKERS"})}),e("li",{children:e("a",{href:"",children:"RUNNER"})}),e("li",{children:e("a",{href:"",children:"SANDALS & SLIDES"})}),e("li",{children:e("a",{href:"",children:"BOOTS"})}),e("li",{children:e("a",{href:"",children:"LOAFERS & MOCASSINS"})}),e("li",{children:e("a",{href:"",children:"ESPADRILLAS"})})]}),i("ul",{children:[e("li",{children:e("a",{href:"",children:"MOST WANTED FOR HIM"})}),e("li",{children:e("a",{href:"",children:"THE $KELETON\u2122"})}),e("li",{children:e("a",{href:"",children:"PHANTOM KICK$"})}),e("li",{children:e("a",{href:"",children:"MONEY BEA$T"})}),e("li",{children:e("a",{href:"",children:"SILVER $URFER"})})]}),i("ul",{children:[e("li",{children:e("a",{href:"",children:"BAGS"})}),e("li",{children:e("a",{href:"",children:"ALL BAGS"})}),e("li",{children:e("a",{href:"",children:"BACKPACKS"})}),e("li",{children:e("a",{href:"",children:"MESSENGER AND CROSSBODY BAGS"})}),e("li",{children:e("a",{href:"",children:"TOTES"})}),e("li",{children:e("a",{href:"",children:"SMALL BAGS AND BELT BAGS"})})]}),i("ul",{children:[e("li",{children:e("a",{href:"",children:"ACCESSORIES"})}),e("li",{children:e("a",{href:"",children:"WATCHES"})}),e("li",{children:e("a",{href:"",children:"EYEWEAR"})}),e("li",{children:e("a",{href:"",children:"HATS & CAPS"})}),e("li",{children:e("a",{href:"",children:"BELTS"})}),e("li",{children:e("a",{href:"",children:"TIES & POCKET SQUARES"})}),e("li",{children:e("a",{href:"",children:"WALLETS & SMALL LEATHER GOODS"})}),e("li",{children:e("a",{href:"",children:"SCARVES & BANDANAS"})}),e("li",{children:e("a",{href:"",children:"GLOVES"})}),e("li",{children:e("a",{href:"",children:"SOCKS"})})]})]})]})}),e("div",{className:"submenu"})]}),e("li",{className:"nav-item",children:e("a",{href:"",children:"WOMEN"})}),e("li",{className:"nav-item",children:e("a",{href:"",children:"SNEAKERS"})}),e("li",{className:"nav-item",children:e("a",{href:"",children:"BAGS"})}),e("li",{className:"nav-item",children:e("a",{href:"",children:"WATCHES"})}),e("li",{className:"nav-item",children:e("a",{href:"",children:"EYEWEAR"})})]})}),e("button",{className:"hamburger-button",onClick:()=>m(r=>!r),children:e(V,{toggled:E,toggle:f})}),e("div",{className:"mobile-menu",children:e(t,{orientation:"horizontal",in:A,children:i("ul",{className:"mobile-menu-wrapper",children:[i("li",{children:[i("div",{className:"link-container",children:[e("a",{href:"",children:"MEN"}),e(n,{sx:{cursor:"pointer"},onClick:()=>v(r=>!r)})]}),e(t,{orientation:"horizontal",in:N,children:i("ul",{children:[i("li",{children:[i("div",{className:"link-container",children:[e("a",{href:"",children:"WHAT'S NEW"}),e(n,{sx:{cursor:"pointer"},onClick:()=>g(r=>!r)})]}),e(t,{orientation:"horizontal",in:s,children:e("ul",{children:e("li",{children:e("a",{children:"FALL/WINTER 2022"})})})})]}),i("li",{children:[i("div",{className:"link-container",children:[e("a",{href:"",children:"CLOTHING"}),e(n,{sx:{cursor:"pointer"},onClick:()=>O(r=>!r)})]}),e(t,{orientation:"horizontal",in:T,children:i("ul",{children:[e("li",{children:e("a",{href:"",children:"ALL CLOTHING"})}),e("li",{children:e("a",{href:"",children:"OUTERWEAR & COATS"})}),e("li",{children:e("a",{href:"",children:"LEATHER"})}),e("li",{children:e("a",{href:"",children:"SARTORIAL"})}),e("li",{children:e("a",{href:"",children:"KNITWEAR"})}),e("li",{children:e("a",{href:"",children:"SWEATSHIRTS & HOODIES"})}),e("li",{children:e("a",{href:"",children:"POLOSHIRTS"})}),e("li",{children:e("a",{href:"",children:"T-SHIRTS"})}),e("li",{children:e("a",{href:"",children:"SHIRTS"})}),e("li",{children:e("a",{href:"",children:"DENIM"})}),e("li",{children:e("a",{href:"",children:"TROUSERS & SHORTS"})}),e("li",{children:e("a",{href:"",children:"ACTIVEWEAR"})}),e("li",{children:e("a",{href:"",children:"UNDERWEAR & SOCKS"})}),e("li",{children:e("a",{href:"",children:"BEACHWEAR"})}),e("li",{children:e("a",{href:"",children:"BATHROBES"})})]})})]}),i("li",{children:[i("div",{className:"link-container",children:[e("a",{href:"",children:"SHOES"}),e(n,{sx:{cursor:"pointer"},onClick:()=>L(r=>!r)})]}),e(t,{orientation:"horizontal",in:R,children:i("ul",{children:[e("li",{children:e("a",{href:"",children:"LOW TOP SNEAKERS"})}),e("li",{children:e("a",{href:"",children:"HIGH TOP SNEAKERS"})}),e("li",{children:e("a",{href:"",children:"RUNNER"})}),e("li",{children:e("a",{href:"",children:"SANDALS & SLIDES"})}),e("li",{children:e("a",{href:"",children:"BOOTS"})}),e("li",{children:e("a",{href:"",children:"LOAFERS & MOCASSINS"})}),e("li",{children:e("a",{href:"",children:"ESPADRILLAS"})})]})})]}),i("li",{children:[i("div",{className:"link-container",children:[e("a",{href:"",children:"MOST WANTED FOR HIM"}),e(n,{sx:{cursor:"pointer"},onClick:()=>x(r=>!r)})]}),e(t,{orientation:"horizontal",in:p,children:i("ul",{children:[e("li",{children:e("a",{href:"",children:"THE $KELETON\u2122"})}),e("li",{children:e("a",{href:"",children:"PHANTOM KICK$"})}),e("li",{children:e("a",{href:"",children:"MONEY BEA$T"})}),e("li",{children:e("a",{href:"",children:"SILVER $URFER"})})]})})]}),i("li",{children:[i("div",{className:"link-container",children:[e("a",{href:"",children:"BAGS"}),e(n,{sx:{cursor:"pointer"},onClick:()=>o(r=>!r)})]}),e(t,{orientation:"horizontal",in:$,children:i("ul",{children:[e("li",{children:e("a",{href:"",children:"ALL BAGS"})}),e("li",{children:e("a",{href:"",children:"BACKPACKS"})}),e("li",{children:e("a",{href:"",children:"MESSENGER AND CROSSBODY BAGS"})}),e("li",{children:e("a",{href:"",children:"TOTES"})}),e("li",{children:e("a",{href:"",children:"SMALL BAGS AND BELT BAGS"})})]})})]}),i("li",{children:[i("div",{className:"link-container",children:[e("a",{href:"",children:"ACCESSORIES"}),e(n,{sx:{cursor:"pointer"},onClick:()=>u(r=>!r)})]}),e(t,{orientation:"horizontal",in:C,children:i("ul",{children:[e("li",{children:e("a",{href:"",children:"WATCHES"})}),e("li",{children:e("a",{href:"",children:"EYEWEAR"})}),e("li",{children:e("a",{href:"",children:"HATS & CAPS"})}),e("li",{children:e("a",{href:"",children:"BELTS"})}),e("li",{children:e("a",{href:"",children:"TIES & POCKET SQUARES"})}),e("li",{children:e("a",{href:"",children:"WALLETS & SMALL LEATHER GOODS"})}),e("li",{children:e("a",{href:"",children:"SCARVES & BANDANAS"})}),e("li",{children:e("a",{href:"",children:"GLOVES"})}),e("li",{children:e("a",{href:"",children:"SOCKS"})})]})})]})]})})]}),e("li",{children:i("div",{className:"link-container",children:[e("a",{href:"",children:"WOMEN"}),e(n,{sx:{cursor:"pointer"}})]})}),e("li",{children:i("div",{className:"link-container",children:[e("a",{href:"",children:"SNEAKERS"}),e(n,{sx:{cursor:"pointer"}})]})}),e("li",{children:i("div",{className:"link-container",children:[e("a",{href:"",children:"BAGS"}),e(n,{sx:{cursor:"pointer"}})]})}),e("li",{children:i("div",{className:"link-container",children:[e("a",{href:"",children:"WATCHES"}),e(n,{sx:{cursor:"pointer"}})]})}),e("li",{children:i("div",{className:"link-container",children:[e("a",{href:"",children:"EYEWEAR"}),e(n,{sx:{cursor:"pointer"}})]})})]})})}),e("div",{className:"gold-line"})]})}const J="/assets/029-instagram.46b1ebaf.svg",ee="/assets/036-facebook.36de0eef.svg",ie="/assets/telegram.7f90c9e1.svg",le="/assets/027-linkedin.16de6e4c.svg",re="/assets/008-twitter.4194c4f9.svg";function ne(){return i(D,{children:[e("div",{className:"gold-line-footer"}),e("div",{className:"footer-main",children:i("div",{className:"content",children:[i("div",{className:"footer-top",children:[i("div",{className:"singup-txt",children:[e("h3",{children:"Sign up to shop first"}),e("p",{children:"Sign up for exclusive access to our Promotions plus the Latest Arrivals."})]}),i("div",{className:"signup-input",children:[e("input",{placeholder:"Enter Email Address",type:"text"}),e("a",{children:"Submit"})]})]}),e("div",{className:"gold-line"}),i("div",{className:"footer-links",children:[i("div",{className:"col",children:[e("h4",{children:"Our World"}),e("a",{children:"About Arsaam"}),e("a",{children:"Campaign"}),e("a",{children:"Collections"}),e("a",{children:"Store Locator"}),e("a",{children:"News"})]}),i("div",{className:"col",children:[e("h4",{children:"Customer care"}),e("a",{children:"Payments"}),e("a",{children:"Delivery and return"}),e("a",{children:"Pickup in store"}),e("a",{children:"Size guide"}),e("a",{children:"FAQ"}),e("a",{children:"Contact us"})]}),i("div",{className:"col",children:[e("h4",{children:"Corporate info"}),e("a",{children:"Imprint"}),e("a",{children:"Privacy policy"}),e("a",{children:"Cookie policy"}),e("a",{children:"Terms & conditions"}),e("a",{children:"Career"}),e("a",{children:"Stop fake"})]})]}),e("div",{className:"gold-line-rev"}),i("div",{className:"copyright",children:[e("p",{children:"Copyright \xA9 2022 ARSAAM - All rights reserved."}),i("div",{children:[e("img",{src:J,alt:""}),e("img",{src:ee,alt:""}),e("img",{src:ie,alt:""}),e("img",{src:le,alt:""}),e("img",{src:re,alt:""})]})]})]})})]})}function fe(){return i("div",{children:[e(X,{}),e(G.Suspense,{fallback:null,children:e(F,{})}),e(ne,{})]})}export{fe as default};