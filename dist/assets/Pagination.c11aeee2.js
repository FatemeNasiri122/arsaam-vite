import{_ as S,r as j,j as i}from"./index.3a54e3a6.js";import{_ as E,s as F}from"./styled.9425413e.js";import{f as A}from"./createSvgIcon.926fa02e.js";const W="_paginationContainer_23qpx_1",q={paginationContainer:W},D=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function O(l={}){const{boundaryCount:t=1,componentName:s="usePagination",count:e=1,defaultPage:u=1,disabled:c=!1,hideNextButton:r=!1,hidePrevButton:P=!1,onChange:h,page:f,showFirstButton:y=!1,showLastButton:_=!1,siblingCount:d=1}=l,B=E(l,D),[a,k]=A({controlled:f,default:u,name:s,state:"page"}),b=(n,o)=>{f||k(o),h&&h(n,o)},p=(n,o)=>{const L=o-n+1;return Array.from({length:L},(G,N)=>n+N)},w=p(1,Math.min(t,e)),g=p(Math.max(e-t+1,t+1),e),x=Math.max(Math.min(a-d,e-t-d*2-1),t+2),C=Math.min(Math.max(a+d,t+d*2+2),g.length>0?g[0]-2:e-1),M=[...y?["first"]:[],...P?[]:["previous"],...w,...x>t+2?["start-ellipsis"]:t+1<e-t?[t+1]:[],...p(x,C),...C<e-t-1?["end-ellipsis"]:e-t>t?[e-t]:[],...g,...r?[]:["next"],..._?["last"]:[]],m=n=>{switch(n){case"first":return 1;case"previous":return a-1;case"next":return a+1;case"last":return e;default:return null}},v=M.map(n=>typeof n=="number"?{onClick:o=>{b(o,n)},type:"page",page:n,selected:n===a,disabled:c,"aria-current":n===a?"true":void 0}:{onClick:o=>{b(o,m(n))},type:n,page:m(n),selected:!1,disabled:c||n.indexOf("ellipsis")===-1&&(n==="next"||n==="last"?a>=e:a<=1)});return S({items:v},B)}const z=F("ul")({listStyle:"none",padding:0,margin:0,display:"flex"});function K(){j.exports.useState(!1);const{items:l}=O({count:10});return i("nav",{className:q.paginationContainer,children:i(z,{children:l.map(({page:t,type:s,selected:e,...u},c)=>{let r=null;return s==="start-ellipsis"||s==="end-ellipsis"?r="\u2026":s==="page"?r=i("button",{type:"button",style:{fontWeight:e?"bold":void 0,border:"none",outline:"none",background:e?"linear-gradient(#EFE27C,#A6872D)":"transparent",color:e?"white":"black",padding:"5px 10px",cursor:"pointer"},...u,children:t}):r=i("button",{style:{border:"none",outline:"none",backgroundColor:"transparent",padding:"5px 10px",cursor:"pointer"},type:"button",...u,children:s}),i("li",{children:r},c)})})})}export{K as P};