import{r as o,e as x,a as r,F as b,j as e}from"./index.3a54e3a6.js";const h="_form_15bn0_8",p="_newsLetterText_15bn0_18",m="_link_15bn0_22",u="_error_15bn0_35",C="_related_15bn0_41",g="_selectLabel_15bn0_53",k="_suggestedContainer_15bn0_85",w="_inputLabel_15bn0_89",v="_checkContainer_15bn0_100",L="_box_15bn0_104",N="_checkBox_15bn0_111",f={form:h,newsLetterText:p,link:m,error:u,related:C,selectLabel:g,suggestedContainer:k,inputLabel:w,checkContainer:v,box:L,checkBox:N};function y({initialSelect:i,label:d}){o.exports.useContext(x);const[t,n]=o.exports.useState(!1),[_,c]=o.exports.useState(i),[a,l]=o.exports.useState(!0);return r(b,{children:[e("div",{className:"App",style:{border:!a&&"1px solid tomato"},children:r("div",{className:"dropdown",children:[r("div",{onClick:s=>{n(!t)},className:"dropdown-btn",style:{border:a&&"1px solid #C4C4C4"},children:[_,e("span",{className:t?"down":"up",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"10",height:"10",children:e("path",{d:"M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z"})})})]}),r("div",{className:"dropdown-content",style:{display:t?"block":"none"},children:[e("div",{onClick:s=>{c(s.target.textContent),n(!t),l(!0)},className:"item",children:"One"}),e("div",{className:"item",onClick:s=>{c(s.target.textContent),n(!t),l(!0)},children:"Two"}),e("div",{className:"item",onClick:s=>{c(s.target.textContent),n(!t),l(!0)},children:"Three"})]})]})}),e("p",{className:f.error,children:a?"":`please enter valid ${d}`})]})}export{y as S,f as c};
