(self.webpackChunkfrontend_nft=self.webpackChunkfrontend_nft||[]).push([[623],{6325:function(n,e,t){"use strict";t.d(e,{$:function(){return c}});var r,i,o=t(168),a=(t(2791),t(2360)),u=t(184),c=function(n){var e=n.className;return(0,u.jsx)(s.Footer,{className:e,children:(0,u.jsx)(s.Span,{children:"Copyright @2023 CryptoTrades All Rights Reserved"})})},s={Footer:a.ZP.footer(r||(r=(0,o.Z)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    background: ",";\n    position: absolute;\n  "])),(function(n){return n.theme.white})),Span:a.ZP.span(i||(i=(0,o.Z)(["\n    font-family: ",";\n    font-weight: 400;\n    text-decoration: none;\n    font-size: 16px;\n    color: ",";\n    padding: 11px;\n  "])),(function(n){return n.theme.fonts.primary}),(function(n){return n.theme.black}))}},5576:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var r,i,o,a,u,c,s,l,d,p=t(168),f=t(4165),m=t(5861),h=t(9439),g=t(9919),x=t(9389),b=t(7309),v=t(6641),Z=t(2791),w=t(7689),y=t(1087),k=t(2360),j=t(8679),C=t(4373),S=t(9274),_=t(2174),I=function(n,e){var t=!0;return void 0!=e&&""!=e||((0,S.VW)(n+" is required"),t=!1),t},P=t(1013),E=t(171),B=t(2717),N=t(9478),A=t(7508),M=t(9911),U=t(184);function O(){var n=(0,w.s0)(),e=(0,y.lr)(),t=(0,h.Z)(e,1)[0],r=t.get("mode"),i=t.get("collectionId"),o=(0,g.l)(M.qj),a=(0,g.l)(M.cE),u=(0,Z.useState)(),c=(0,h.Z)(u,2),s=c[0],l=c[1],d=(0,Z.useState)(""),p=(0,h.Z)(d,2),x=p[0],b=p[1],v=(0,Z.useState)(""),k=(0,h.Z)(v,2),j=k[0],O=k[1],W=(0,Z.useState)(""),R=(0,h.Z)(W,2),F=R[0],V=R[1],X=(0,Z.useState)(!0),q=(0,h.Z)(X,2),L=q[0],z=q[1],D=(0,Z.useState)(!0),Y=(0,h.Z)(D,2),G=Y[0],H=Y[1],$=(0,Z.useState)("auto"),K=(0,h.Z)($,2),Q=K[0],J=K[1],nn=(0,Z.useState)("auto"),en=(0,h.Z)(nn,2),tn=en[0],rn=en[1],on=(0,Z.useState)(!1),an=(0,h.Z)(on,2),un=an[0],cn=an[1];(0,Z.useEffect)((function(){"update"==r&&sn()}),[r]);var sn=function(){var n=(0,m.Z)((0,f.Z)().mark((function n(){var e,t;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={_id:i},n.next=3,(0,_.SX)(e,o);case 3:(t=n.sent)&&(b(t.name),l(t.description),O(t.image),V(t.banner),z(!1),J("100%"),H(!1),rn("100%"));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ln=(0,g.l)(A.rc),dn=(0,g.l)(A.eL),pn=(0,N.jU)(o).mint;(0,Z.useEffect)((function(){!dn&&ln&&"createCollection"===ln.type&&ln.confirmed&&!un&&((0,S.t5)("Collection created successfully! You will be redirected to the myCollection page in a few seconds"),n("/collection/mycollection"),(0,A.b2)())}),[ln,dn,un]);var fn=function(){var n=(0,m.Z)((0,f.Z)().mark((function n(e,t){var r,i,o,a,u,c,s;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=!0,i=e.target.files,o=new File([],""),a=0,u=Object.keys(i);case 4:if(!(a<u.length)){n.next=13;break}if(c=u[a],!1!==/\.(jpe?g|png|gif|bmp)$/i.test(i[c].name)){n.next=9;break}return r=!1,n.abrupt("break",13);case 9:o=i[c];case 10:a++,n.next=4;break;case 13:if(r){n.next=16;break}return(0,S.VW)("Not image format"),n.abrupt("return");case 16:return n.next=18,(0,E.U)().uploadImageToIpfs(o);case 18:if(s=n.sent,console.log(s),""!==s.cid){n.next=23;break}return(0,S.VW)(s.error),n.abrupt("return");case 23:"logo_img"==t?(O((0,P.Xw)(s.cid)),z(!1),J("100%")):(V((0,P.Xw)(s.cid)),H(!1),rn("100%"));case 24:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),mn=function(n,e){"logo_img"==e?(O(""),z(!0),J("auto")):(V(""),H(!0),rn("auto"))},hn=function(){var n=(0,m.Z)((0,f.Z)().mark((function n(){var e,t;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(cn(!0),I("Collection name",x)){n.next=3;break}return n.abrupt("return");case 3:if(I("Logo",j)){n.next=5;break}return n.abrupt("return");case 5:if(I("Banner",F)){n.next=7;break}return n.abrupt("return");case 7:if("create"!=r){n.next=12;break}e={name:x,symbol:x,description:s,logo:j,banner:F},a&&(0,_.b4)(pn.minterAddress,e,a,o),n.next=16;break;case 12:return t={_id:i,name:x,symbol:x,description:s,logo:j,banner:F},n.next=15,(0,_.YR)(t);case 15:n.sent;case 16:cn(!1);case 17:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,U.jsx)(B.U,{noMargin:!0,fullWidth:!0,children:(0,U.jsx)(T.Content,{children:(0,U.jsxs)("div",{children:[(0,U.jsx)("header",{children:"Add Your Collection"}),(0,U.jsxs)(T.subContent,{children:[(0,U.jsx)(T.Span,{children:"Name"}),(0,U.jsx)(T.Input,{maxLength:10,value:x,placeholder:"Enter Collection Name",onChange:function(n){return b(n.target.value)},onKeyPress:function(n){return function(n,e){n.key}(n)},readOnly:"update"===r}),(0,U.jsx)(T.Span,{children:"Description"}),(0,U.jsx)(T.TextArea,{maxLength:1e3,showCount:!0,rows:2,id:"Descript",placeholder:"Enter Description",value:s,onChange:function(n){return l(n.target.value)}}),(0,U.jsx)(T.Span,{children:"Collection Logo"}),(0,U.jsx)(T.Help,{children:"This image will also be used for navigation. 350 x 350 recommended."}),(0,U.jsxs)(T.ImageArea,{children:[(0,U.jsx)("img",{src:""===j?"":j,alt:"",style:{width:"100%",objectFit:"cover",height:Q}}),L?(0,U.jsx)(C.S2h,{id:"logo_icon",style:{width:"50px",height:"50px"}}):null,L?(0,U.jsx)("span",{children:"No Logo Selected"}):null,L?(0,U.jsxs)(T.Button,{id:"logo_img",children:[(0,U.jsx)(C.qiC,{style:{width:"20px",height:"20px",marginBottom:"-5px",marginRight:"5px"}}),"Select Image",(0,U.jsx)(T.ImageInput,{id:"logo_input",type:"file",name:"logo",onChange:function(n){return fn(n,"logo_img")}})]}):null,L?null:(0,U.jsx)("button",{className:"returnbtn",onClick:function(n){return mn(0,"logo_img")},children:"REMOVE"})]}),(0,U.jsx)(T.Span,{children:"Collection Banner"}),(0,U.jsx)(T.Help,{children:"This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 400 recommended."}),(0,U.jsxs)(T.ImageArea,{children:[(0,U.jsx)("img",{src:""==F?"":F,alt:"",style:{width:"100%",objectFit:"cover",height:tn}}),G?(0,U.jsx)(C.S2h,{style:{width:"50px",height:"50px"}}):null,G?(0,U.jsx)("span",{children:"No Banner Selected"}):null,G?(0,U.jsxs)(T.Button,{id:"logo_img",children:[(0,U.jsx)(C.qiC,{style:{width:"20px",height:"20px",marginBottom:"-5px",marginRight:"5px"}}),"Select Image",(0,U.jsx)(T.ImageInput,{type:"file",name:"banner",onChange:function(n){return fn(n,"banner_img")}})]}):null,G?null:(0,U.jsx)("button",{className:"returnbtn",onClick:function(n){return mn(0,"banner_img")},children:"REMOVE"})]}),(0,U.jsx)(T.Button,{style:{width:"100px"},id:"login",loading:un,onClick:hn,children:"create"==r?"Create":"Update"})]})]})})})}var T={Content:k.ZP.div(r||(r=(0,p.Z)(["\n    display: flex;\n    color: ",";\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    div:nth-child(1) {\n      border: 1px solid ",";\n      border-radius: 5px;\n      line-height: 1.5rem;\n      @media (min-width: ",") {\n        width: 80%;\n        margin-top: 40px;\n        margin-bottom: 40px;\n      }\n\n      @media (min-width: ",") {\n        width: 60%;\n        margin-top: 100px;\n        margin-bottom: 100px;\n      }\n      header {\n        height: 40px;\n        background: ",";\n        border-bottom: 1px solid ",";\n        padding: 7px 20px;\n      }\n    }\n  "])),(function(n){return n.theme.gray[4]}),(function(n){return n.theme.gray[1]}),(function(n){return n.theme.viewport.tablet}),(function(n){return n.theme.viewport.desktopXl}),(function(n){return n.theme.gray[0]}),(function(n){return n.theme.gray[1]})),subContent:k.ZP.div(i||(i=(0,p.Z)(["\n    padding: 10px 20px 20px 20px;\n  "]))),Span:k.ZP.span(o||(o=(0,p.Z)(["\n    color: ",";\n    font-family: ",";\n  "])),(function(n){return n.theme.black}),(function(n){return n.theme.fonts.primary})),ImageInput:(0,k.ZP)(x.Z)(a||(a=(0,p.Z)(["\n    opacity: 0;\n    position: absolute;\n    width: 150px;\n    height: 30px;\n    right:0px !important;\n    appearance: none;\n    cursor: default;\n    align-items: baseline;\n    color: inherit;\n    text-overflow: ellipsis;\n    white-space: pre;\n    text-align: start !important;  \n    background-color: ",";\n    margin: 0em;\n    padding: 1px 2px;\n    border-width: 2px;\n    border-style: inset;\n    border: none;\n    border-image: initial;\n  "])),(function(n){return n.theme.gray[0]})),Button:(0,k.ZP)(b.ZP)(u||(u=(0,p.Z)(["\n    border-radius: 5px;\n    background-color: rgb(34, 106, 237);\n    color: ",";\n    border: none;\n    box-shadow: none;\n    width: 150px;\n    font-size: 16px;\n    font-weight: bold;\n    height: 40px;\n    padding-bottom: 7px;\n\n    &:hover,\n    &:active,\n    &:focus {\n      background-color: rgb(34, 106, 237);\n      color: ",";\n      opacity: 0.8;\n      box-shadow: none;\n      border: none;\n    }\n  "])),j.O9.white,j.O9.white),Input:(0,k.ZP)(x.Z)(c||(c=(0,p.Z)(["\n    border-radius: 3px;\n    box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 30%);\n    margin-top: 8px;\n    margin-bottom: 15px;\n    color: ",";\n    background: ",";\n    border: 1px solid ",";\n  "])),(function(n){return n.theme.gray[4]}),(function(n){return n.theme.gray[0]}),(function(n){return n.theme.gray[1]})),TextArea:(0,k.ZP)(v.Z)(s||(s=(0,p.Z)(["\n    border-radius: 8px;\n    border: none;\n    margin-bottom: 15px;\n    box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 5%);\n    .ant-input {\n      color: ",";\n      background: ",";\n      border: 1px solid ",";\n    }\n  "])),(function(n){return n.theme.gray[4]}),(function(n){return n.theme.gray[0]}),(function(n){return n.theme.gray[1]})),Help:k.ZP.div(l||(l=(0,p.Z)(["\n    margin-top: 5px;\n    font-size: 12px;\n    color: #999;\n  "]))),ImageArea:k.ZP.div(d||(d=(0,p.Z)(["\n    border:1px solid ",";\n    text-align: center; \n    height: 200px; \n    position: relative; \n    display: flex; \n    justify-content: center; \n    flex: 1; \n    margin-bottom:20px;\n    align-items: center; \n    flex-direction: column; \n    background-color: ",";\n    .returnbtn {\n      position: absolute;\n      top:0;\n      right: 0;\n      border-radius: 5px;\n      background-color:  rgb(34, 106, 237);\n      color: ",";\n      border: none;\n      box-shadow: none;\n      width: 100px;\n      font-size: 14px;\n      font-weight: bold;\n      height: 30px;\n      padding-bottom: 7px;\n\n      &:hover,\n      &:active,\n      &:focus {\n        background-color: ",";\n        color: ",";\n        opacity: 0.8;\n        box-shadow: none;\n        border: none;\n      }\n    }\n  "])),(function(n){return n.theme.gray[1]}),(function(n){return n.theme.gray[0]}),j.O9.white,j.O9.red2,j.O9.white)}},2717:function(n,e,t){"use strict";t.d(e,{U:function(){return x}});var r,i,o,a,u,c,s,l=t(168),d=t(9439),p=t(2791),f=t(2360),m=t(6325),h=t(2186),g=t(184);function x(n){var e=n.children,t=n.bgGray,r=n.noMargin,i=n.fullWidth,o=n.sidebar,a=(0,p.useState)(!1),u=(0,d.Z)(a,2),c=u[0],s=u[1];return(0,p.useEffect)((function(){void 0!=o&&s(!0)}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h.h,{}),(0,g.jsx)(b.Main,{bgGray:!!t,noMargin:!!r,sidebar:o,isSidebar:c,children:(0,g.jsx)(b.Container,{fullWidth:!!i,children:e})}),(0,g.jsx)(m.$,{})]})}var b={Main:f.ZP.main(r||(r=(0,l.Z)(["\n    min-height: calc(100vh - 72px);\n    background: ",";\n    display: block;\n    align-items: center;\n    padding-top: 100px !important;\n\n    ","\n\n    ","\n    ","\n    \n    @media (min-width: ",") {\n      min-height: calc(100vh - 48.2px);\n    }\n    @media (min-width: ",") {\n      min-height: calc(100vh - 72px);\n      padding: ",";\n      ","\n      ","\n    }\n\n    @media (min-width: ",") {\n      padding: ",";\n      ","\n      ","\n      ","\n    }\n\n    .infinite-scroll-component {\n      vertical-align: top !important;\n    }\n  "])),(function(n){return n.theme.white}),(function(n){return n.bgGray&&(0,f.iv)(i||(i=(0,l.Z)(["\n        background: ",";\n      "])),n.theme.gray[0])}),(function(n){return(0,f.iv)(o||(o=(0,l.Z)(["\n        padding: ",";\n      "])),n.noMargin?0:n.theme.margin.small)}),(function(n){return n.isSidebar&&!n.sidebar&&"padding-left: 74px !important;"}),(function(n){return n.theme.viewport.mobile}),(function(n){return n.theme.viewport.tablet}),(function(n){return n.theme.margin.small}),(function(n){return(0,f.iv)(a||(a=(0,l.Z)(["\n          padding: ","};\n        "])),n.noMargin?0:n.theme.margin.small)}),(function(n){return n.isSidebar&&!n.sidebar&&"padding-left: 74px !important;"}),(function(n){return n.theme.viewport.desktop}),(function(n){return n.theme.margin.small}),(function(n){return(0,f.iv)(u||(u=(0,l.Z)(["\n          padding: ",";\n        "])),n.noMargin?0:n.theme.margin.small)}),(function(n){return n.sidebar&&"padding-left: 324px !important;"}),(function(n){return n.isSidebar&&!n.sidebar&&"padding-left: 74px !important;"})),Container:f.ZP.div(c||(c=(0,l.Z)(["\n    width: 100%;\n    margin: 0 auto;\n    ","\n  "])),(function(n){return!n.fullWidth&&(0,f.iv)(s||(s=(0,l.Z)(["\n        max-width: ",";\n      "])),n.theme.viewport.desktopXl)}))}},2174:function(n,e,t){"use strict";t.d(e,{P4:function(){return u},SX:function(){return o},YR:function(){return a},b4:function(){return c},bv:function(){return s}});var r=t(4165),i=t(5861),o=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{name:"",image:"",banner:"",item_count:0,contract_address:""});case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",!1);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i,o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));return function(e,t,r,i){return n.apply(this,arguments)}}(),s=function(){return{getCollectionItems:function(n,e){var t=arguments;return(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.length>2&&void 0!==t[2]?t[2]:0,[],{},n.abrupt("return",[{id:"coll1",name:"member1",item_count:3,banner:"string",logo:"string"},{id:"coll2",name:"member2",item_count:6,banner:"string",logo:"string"},{id:"coll3",name:"member2",item_count:6,banner:"string",logo:"string"},{id:"coll4",name:"member2",item_count:6,banner:"string",logo:"string"},{id:"coll5",name:"member2",item_count:6,banner:"string",logo:"string"},{id:"coll6",name:"member2",item_count:6,banner:"string",logo:"string"}]);case 4:case"end":return n.stop()}}),n)})))()}}}},171:function(n,e,t){"use strict";t.d(e,{U:function(){return u},u:function(){return a}});var r=t(4165),i=t(5861),o=t(5972),a=function(){(0,o.Ue)({host:"ipfs.infura.io",port:5001,protocol:"https"});return{uploadNFTToIpfs:function(n,e,t,o){return(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.abrupt("return",{cid:"QmSppX72tE98tQ7xUEbeNqehDhVqZ67u2AEKnsUkJEWpBb",error:""});case 4:return n.prev=4,n.t0=n.catch(0),n.abrupt("return",{cid:"",error:"upload failed"});case 7:case"end":return n.stop()}}),n,null,[[0,4]])})))()}}},u=function(){var n=(0,o.Ue)({host:"ipfs.infura.io",port:5001,protocol:"https"});return{uploadImageToIpfs:function(e){return(0,i.Z)((0,r.Z)().mark((function t(){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.add(e);case 3:return i=t.sent,t.abrupt("return",{cid:i.path,error:""});case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{cid:"",error:"upload failed"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}},9274:function(n,e,t){"use strict";t.d(e,{VW:function(){return o},cB:function(){return a},t5:function(){return i}});var r=t(7027),i=function(n){r.ZP.success(n)},o=function(n){r.ZP.warning(n)},a=function(n,e){r.ZP.error(n),e&&console.error(e)}},9880:function(){}}]);
//# sourceMappingURL=623.8adeef1f.chunk.js.map