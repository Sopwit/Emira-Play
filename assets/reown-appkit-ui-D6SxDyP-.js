const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PhArrowCircleDown-Ct5n4kR0.js","assets/react-vendor-Angmm_rT.js","assets/lit-element-Ct-YVhn4.js","assets/PhArrowClockwise-BkUrZ-rQ.js","assets/PhArrowDown-DzIZZptU.js","assets/PhArrowLeft-DNTTX6mg.js","assets/PhArrowRight-BLh2cylA.js","assets/PhArrowSquareOut-DOMCZcLC.js","assets/PhArrowsDownUp-BtScdtTV.js","assets/PhArrowsLeftRight-CJDq3d4E.js","assets/PhArrowUp-Dlj5ioAU.js","assets/PhArrowUpRight-CwRopcPS.js","assets/PhArrowsClockwise-cktRAfTc.js","assets/PhBank-aX3CBUlt.js","assets/PhBrowser-DVONUU6Z.js","assets/PhCaretDown-qqRaRkJT.js","assets/PhCaretLeft-BDeoWRWZ.js","assets/PhCaretRight-xvRXT7j_.js","assets/PhCaretUp-DZpUbNKI.js","assets/PhCheck-BaU_1zqG.js","assets/PhCircleHalf-07X2pjr4.js","assets/PhClock-CtmDHZzP.js","assets/PhCompass-BuiARUfy.js","assets/PhCopy-y7MKGELV.js","assets/PhCreditCard-CkXvyH2m.js","assets/PhCurrencyDollar-CNj-s887.js","assets/PhDesktop-CQYBcDNo.js","assets/PhDeviceMobile-KgKZ8VRL.js","assets/PhDotsThree-C-ZlIxjd.js","assets/PhVault-DERqHqSp.js","assets/PhEnvelope-BDSLxGSu.js","assets/PhFunnelSimple-BXrzLJwa.js","assets/PhGlobe-CASYyKBd.js","assets/PhIdentificationCard-B_KZclde.js","assets/PhImage-DLla2UyB.js","assets/PhInfo-C8GDCu4R.js","assets/PhLightbulb-Ddq-7yVY.js","assets/PhMagnifyingGlass-EyGxCDWj.js","assets/PhPaperPlaneRight-Bdys4SFJ.js","assets/PhPlus-CY4jejJi.js","assets/PhPower-CAqZK6TE.js","assets/PhPuzzlePiece-DgT18s4s.js","assets/PhQrCode-ClaQusT8.js","assets/PhQuestion-DFVNUIfi.js","assets/PhQuestionMark-BdL-CMot.js","assets/PhSealCheck-CfV9oXWK.js","assets/PhSignOut-BmVee9f2.js","assets/PhSpinner-CWZimeDM.js","assets/PhTrash-eBSrMmRb.js","assets/PhUser-CkdBiwuN.js","assets/PhWallet-DbI_HyDe.js","assets/PhWarning-RW7nWxSn.js","assets/PhWarningCircle-BZCAKWey.js","assets/PhX-Bjym4js4.js"])))=>i.map(i=>d[i]);
import{h as Wo,i as X,k as ae,n as c,l as Zo,e as Uo}from"./react-vendor-Angmm_rT.js";import{_,A as qo}from"./reown-appkit-controllers-7ENft7pu.js";const Ha={interpolate(e,t,o){if(e.length!==2||t.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const i=e[0]||0,n=e[1]||0,r=t[0]||0,a=t[1]||0;return o<i?r:o>n?a:(a-r)/(n-i)*(o-i)+r}};const vr=globalThis,Tr=e=>e,_t=vr.trustedTypes,Lr=_t?_t.createPolicy("lit-html",{createHTML:e=>e}):void 0,xo="$lit$",xe=`lit$${Math.random().toFixed(9).slice(2)}$`,$o="?"+xe,Ko=`<${$o}>`,Te=document,at=()=>Te.createComment(""),st=e=>e===null||typeof e!="object"&&typeof e!="function",yr=Array.isArray,Go=e=>yr(e)||typeof e?.[Symbol.iterator]=="function",jt=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ir=/-->/g,Br=/>/g,Ee=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mr=/'/g,Hr=/"/g,Co=/^(?:script|style|textarea|title)$/i,_o=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),h=_o(1),I=_o(2),Le=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Or=new WeakMap,ze=Te.createTreeWalker(Te,129);function ko(e,t){if(!yr(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lr!==void 0?Lr.createHTML(t):t}const Yo=(e,t)=>{const o=e.length-1,i=[];let n,r=t===2?"<svg>":t===3?"<math>":"",a=ot;for(let s=0;s<o;s++){const l=e[s];let u,d,p=-1,m=0;for(;m<l.length&&(a.lastIndex=m,d=a.exec(l),d!==null);)m=a.lastIndex,a===ot?d[1]==="!--"?a=Ir:d[1]!==void 0?a=Br:d[2]!==void 0?(Co.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=Ee):d[3]!==void 0&&(a=Ee):a===Ee?d[0]===">"?(a=n??ot,p=-1):d[1]===void 0?p=-2:(p=a.lastIndex-d[2].length,u=d[1],a=d[3]===void 0?Ee:d[3]==='"'?Hr:Mr):a===Hr||a===Mr?a=Ee:a===Ir||a===Br?a=ot:(a=Ee,n=void 0);const f=a===Ee&&e[s+1].startsWith("/>")?" ":"";r+=a===ot?l+Ko:p>=0?(i.push(u),l.slice(0,p)+xo+l.slice(p)+xe+f):l+xe+(p===-2?s:f)}return[ko(e,r+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class lt{constructor({strings:t,_$litType$:o},i){let n;this.parts=[];let r=0,a=0;const s=t.length-1,l=this.parts,[u,d]=Yo(t,o);if(this.el=lt.createElement(u,i),ze.currentNode=this.el.content,o===2||o===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=ze.nextNode())!==null&&l.length<s;){if(n.nodeType===1){if(n.hasAttributes())for(const p of n.getAttributeNames())if(p.endsWith(xo)){const m=d[a++],f=n.getAttribute(p).split(xe),C=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:C[2],strings:f,ctor:C[1]==="."?Qo:C[1]==="?"?Xo:C[1]==="@"?ei:It}),n.removeAttribute(p)}else p.startsWith(xe)&&(l.push({type:6,index:r}),n.removeAttribute(p));if(Co.test(n.tagName)){const p=n.textContent.split(xe),m=p.length-1;if(m>0){n.textContent=_t?_t.emptyScript:"";for(let f=0;f<m;f++)n.append(p[f],at()),ze.nextNode(),l.push({type:2,index:++r});n.append(p[m],at())}}}else if(n.nodeType===8)if(n.data===$o)l.push({type:2,index:r});else{let p=-1;for(;(p=n.data.indexOf(xe,p+1))!==-1;)l.push({type:7,index:r}),p+=xe.length-1}r++}}static createElement(t,o){const i=Te.createElement("template");return i.innerHTML=t,i}}function Ke(e,t,o=e,i){if(t===Le)return t;let n=i!==void 0?o._$Co?.[i]:o._$Cl;const r=st(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(e),n._$AT(e,o,i)),i!==void 0?(o._$Co??=[])[i]=n:o._$Cl=n),n!==void 0&&(t=Ke(e,n._$AS(e,t.values),n,i)),t}class Jo{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:i}=this._$AD,n=(t?.creationScope??Te).importNode(o,!0);ze.currentNode=n;let r=ze.nextNode(),a=0,s=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new pt(r,r.nextSibling,this,t):l.type===1?u=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(u=new ti(r,this,t)),this._$AV.push(u),l=i[++s]}a!==l?.index&&(r=ze.nextNode(),a++)}return ze.currentNode=Te,n}p(t){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,o),o+=i.strings.length-2):i._$AI(t[o])),o++}}class pt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,i,n){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Ke(this,t,o),st(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==Le&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Go(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==N&&st(this._$AH)?this._$AA.nextSibling.data=t:this.T(Te.createTextNode(t)),this._$AH=t}$(t){const{values:o,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=lt.createElement(ko(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(o);else{const r=new Jo(n,this),a=r.u(this.options);r.p(o),this.T(a),this._$AH=r}}_$AC(t){let o=Or.get(t.strings);return o===void 0&&Or.set(t.strings,o=new lt(t)),o}k(t){yr(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,n=0;for(const r of t)n===o.length?o.push(i=new pt(this.O(at()),this.O(at()),this,this.options)):i=o[n],i._$AI(r),n++;n<o.length&&(this._$AR(i&&i._$AB.nextSibling,n),o.length=n)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t!==this._$AB;){const i=Tr(t).nextSibling;Tr(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class It{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,i,n,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=o,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}_$AI(t,o=this,i,n){const r=this.strings;let a=!1;if(r===void 0)t=Ke(this,t,o,0),a=!st(t)||t!==this._$AH&&t!==Le,a&&(this._$AH=t);else{const s=t;let l,u;for(t=r[0],l=0;l<r.length-1;l++)u=Ke(this,s[i+l],o,l),u===Le&&(u=this._$AH[l]),a||=!st(u)||u!==this._$AH[l],u===N?t=N:t!==N&&(t+=(u??"")+r[l+1]),this._$AH[l]=u}a&&!n&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Qo extends It{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class Xo extends It{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class ei extends It{constructor(t,o,i,n,r){super(t,o,i,n,r),this.type=5}_$AI(t,o=this){if((t=Ke(this,t,o,0)??N)===Le)return;const i=this._$AH,n=t===N&&i!==N||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==N&&(i===N||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ti{constructor(t,o,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ke(this,t)}}const ri=vr.litHtmlPolyfillSupport;ri?.(lt,pt),(vr.litHtmlVersions??=[]).push("3.3.2");const oi=(e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const r=o?.renderBefore??null;i._$litPart$=n=new pt(t.insertBefore(at(),r),r,void 0,o??{})}return n._$AI(e),n};const xr=globalThis;let L=class extends Wo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=oi(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Le}};L._$litElement$=!0,L.finalized=!0,xr.litElementHydrateSupport?.({LitElement:L});const ii=xr.litElementPolyfillSupport;ii?.({LitElement:L});(xr.litElementVersions??=[]).push("4.2.2");const ni={black:"#202020",white:"#FFFFFF",white010:"rgba(255, 255, 255, 0.1)",accent010:"rgba(9, 136, 240, 0.1)",accent020:"rgba(9, 136, 240, 0.2)",accent030:"rgba(9, 136, 240, 0.3)",accent040:"rgba(9, 136, 240, 0.4)",accent050:"rgba(9, 136, 240, 0.5)",accent060:"rgba(9, 136, 240, 0.6)",accent070:"rgba(9, 136, 240, 0.7)",accent080:"rgba(9, 136, 240, 0.8)",accent090:"rgba(9, 136, 240, 0.9)",accent100:"rgba(9, 136, 240, 1.0)",accentSecondary010:"rgba(199, 185, 148, 0.1)",accentSecondary020:"rgba(199, 185, 148, 0.2)",accentSecondary030:"rgba(199, 185, 148, 0.3)",accentSecondary040:"rgba(199, 185, 148, 0.4)",accentSecondary050:"rgba(199, 185, 148, 0.5)",accentSecondary060:"rgba(199, 185, 148, 0.6)",accentSecondary070:"rgba(199, 185, 148, 0.7)",accentSecondary080:"rgba(199, 185, 148, 0.8)",accentSecondary090:"rgba(199, 185, 148, 0.9)",accentSecondary100:"rgba(199, 185, 148, 1.0)",productWalletKit:"#FFB800",productAppKit:"#FF573B",productCloud:"#0988F0",productDocumentation:"#008847",neutrals050:"#F6F6F6",neutrals100:"#F3F3F3",neutrals200:"#E9E9E9",neutrals300:"#D0D0D0",neutrals400:"#BBB",neutrals500:"#9A9A9A",neutrals600:"#6C6C6C",neutrals700:"#4F4F4F",neutrals800:"#363636",neutrals900:"#2A2A2A",neutrals1000:"#252525",semanticSuccess010:"rgba(48, 164, 107, 0.1)",semanticSuccess020:"rgba(48, 164, 107, 0.2)",semanticSuccess030:"rgba(48, 164, 107, 0.3)",semanticSuccess040:"rgba(48, 164, 107, 0.4)",semanticSuccess050:"rgba(48, 164, 107, 0.5)",semanticSuccess060:"rgba(48, 164, 107, 0.6)",semanticSuccess070:"rgba(48, 164, 107, 0.7)",semanticSuccess080:"rgba(48, 164, 107, 0.8)",semanticSuccess090:"rgba(48, 164, 107, 0.9)",semanticSuccess100:"rgba(48, 164, 107, 1.0)",semanticError010:"rgba(223, 74, 52, 0.1)",semanticError020:"rgba(223, 74, 52, 0.2)",semanticError030:"rgba(223, 74, 52, 0.3)",semanticError040:"rgba(223, 74, 52, 0.4)",semanticError050:"rgba(223, 74, 52, 0.5)",semanticError060:"rgba(223, 74, 52, 0.6)",semanticError070:"rgba(223, 74, 52, 0.7)",semanticError080:"rgba(223, 74, 52, 0.8)",semanticError090:"rgba(223, 74, 52, 0.9)",semanticError100:"rgba(223, 74, 52, 1.0)",semanticWarning010:"rgba(243, 161, 63, 0.1)",semanticWarning020:"rgba(243, 161, 63, 0.2)",semanticWarning030:"rgba(243, 161, 63, 0.3)",semanticWarning040:"rgba(243, 161, 63, 0.4)",semanticWarning050:"rgba(243, 161, 63, 0.5)",semanticWarning060:"rgba(243, 161, 63, 0.6)",semanticWarning070:"rgba(243, 161, 63, 0.7)",semanticWarning080:"rgba(243, 161, 63, 0.8)",semanticWarning090:"rgba(243, 161, 63, 0.9)",semanticWarning100:"rgba(243, 161, 63, 1.0)"},kt={core:{backgroundAccentPrimary:"#0988F0",backgroundAccentCertified:"#C7B994",backgroundWalletKit:"#FFB800",backgroundAppKit:"#FF573B",backgroundCloud:"#0988F0",backgroundDocumentation:"#008847",backgroundSuccess:"rgba(48, 164, 107, 0.20)",backgroundError:"rgba(223, 74, 52, 0.20)",backgroundWarning:"rgba(243, 161, 63, 0.20)",textAccentPrimary:"#0988F0",textAccentCertified:"#C7B994",textWalletKit:"#FFB800",textAppKit:"#FF573B",textCloud:"#0988F0",textDocumentation:"#008847",textSuccess:"#30A46B",textError:"#DF4A34",textWarning:"#F3A13F",borderAccentPrimary:"#0988F0",borderSecondary:"#C7B994",borderSuccess:"#30A46B",borderError:"#DF4A34",borderWarning:"#F3A13F",foregroundAccent010:"rgba(9, 136, 240, 0.1)",foregroundAccent020:"rgba(9, 136, 240, 0.2)",foregroundAccent040:"rgba(9, 136, 240, 0.4)",foregroundAccent060:"rgba(9, 136, 240, 0.6)",foregroundSecondary020:"rgba(199, 185, 148, 0.2)",foregroundSecondary040:"rgba(199, 185, 148, 0.4)",foregroundSecondary060:"rgba(199, 185, 148, 0.6)",iconAccentPrimary:"#0988F0",iconAccentCertified:"#C7B994",iconSuccess:"#30A46B",iconError:"#DF4A34",iconWarning:"#F3A13F",glass010:"rgba(255, 255, 255, 0.1)",zIndex:"9999"},dark:{overlay:"rgba(0, 0, 0, 0.50)",backgroundPrimary:"#202020",backgroundInvert:"#FFFFFF",textPrimary:"#FFFFFF",textSecondary:"#9A9A9A",textTertiary:"#BBBBBB",textInvert:"#202020",borderPrimary:"#2A2A2A",borderPrimaryDark:"#363636",borderSecondary:"#4F4F4F",foregroundPrimary:"#252525",foregroundSecondary:"#2A2A2A",foregroundTertiary:"#363636",iconDefault:"#9A9A9A",iconInverse:"#FFFFFF"},light:{overlay:"rgba(230 , 230, 230, 0.5)",backgroundPrimary:"#FFFFFF",borderPrimaryDark:"#E9E9E9",backgroundInvert:"#202020",textPrimary:"#202020",textSecondary:"#9A9A9A",textTertiary:"#6C6C6C",textInvert:"#FFFFFF",borderPrimary:"#E9E9E9",borderSecondary:"#D0D0D0",foregroundPrimary:"#F3F3F3",foregroundSecondary:"#E9E9E9",foregroundTertiary:"#D0D0D0",iconDefault:"#9A9A9A",iconInverse:"#202020"}},ai={1:"4px",2:"8px",10:"10px",3:"12px",4:"16px",6:"24px",5:"20px",8:"32px",16:"64px",20:"80px",32:"128px",64:"256px",128:"512px",round:"9999px"},si={0:"0px","01":"2px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",14:"56px",16:"64px",20:"80px",32:"128px",64:"256px"},li={regular:"KHTeka",mono:"KHTekaMono"},ci={regular:"400",medium:"500"},ui={h1:"50px",h2:"44px",h3:"38px",h4:"32px",h5:"26px",h6:"20px",large:"16px",medium:"14px",small:"12px"},di={"h1-regular-mono":{lineHeight:"50px",letterSpacing:"-3px"},"h1-regular":{lineHeight:"50px",letterSpacing:"-1px"},"h1-medium":{lineHeight:"50px",letterSpacing:"-0.84px"},"h2-regular-mono":{lineHeight:"44px",letterSpacing:"-2.64px"},"h2-regular":{lineHeight:"44px",letterSpacing:"-0.88px"},"h2-medium":{lineHeight:"44px",letterSpacing:"-0.88px"},"h3-regular-mono":{lineHeight:"38px",letterSpacing:"-2.28px"},"h3-regular":{lineHeight:"38px",letterSpacing:"-0.76px"},"h3-medium":{lineHeight:"38px",letterSpacing:"-0.76px"},"h4-regular-mono":{lineHeight:"32px",letterSpacing:"-1.92px"},"h4-regular":{lineHeight:"32px",letterSpacing:"-0.32px"},"h4-medium":{lineHeight:"32px",letterSpacing:"-0.32px"},"h5-regular-mono":{lineHeight:"26px",letterSpacing:"-1.56px"},"h5-regular":{lineHeight:"26px",letterSpacing:"-0.26px"},"h5-medium":{lineHeight:"26px",letterSpacing:"-0.26px"},"h6-regular-mono":{lineHeight:"20px",letterSpacing:"-1.2px"},"h6-regular":{lineHeight:"20px",letterSpacing:"-0.6px"},"h6-medium":{lineHeight:"20px",letterSpacing:"-0.6px"},"lg-regular-mono":{lineHeight:"16px",letterSpacing:"-0.96px"},"lg-regular":{lineHeight:"18px",letterSpacing:"-0.16px"},"lg-medium":{lineHeight:"18px",letterSpacing:"-0.16px"},"md-regular-mono":{lineHeight:"14px",letterSpacing:"-0.84px"},"md-regular":{lineHeight:"16px",letterSpacing:"-0.14px"},"md-medium":{lineHeight:"16px",letterSpacing:"-0.14px"},"sm-regular-mono":{lineHeight:"12px",letterSpacing:"-0.72px"},"sm-regular":{lineHeight:"14px",letterSpacing:"-0.12px"},"sm-medium":{lineHeight:"14px",letterSpacing:"-0.12px"}},hi={"ease-out-power-2":"cubic-bezier(0.23, 0.09, 0.08, 1.13)","ease-out-power-1":"cubic-bezier(0.12, 0.04, 0.2, 1.06)","ease-in-power-2":"cubic-bezier(0.92, -0.13, 0.77, 0.91)","ease-in-power-1":"cubic-bezier(0.88, -0.06, 0.8, 0.96)","ease-inout-power-2":"cubic-bezier(0.77, 0.09, 0.23, 1.13)","ease-inout-power-1":"cubic-bezier(0.88, 0.04, 0.12, 1.06)"},pi={xl:"400ms",lg:"200ms",md:"125ms",sm:"75ms"},mr={colors:ni,fontFamily:li,fontWeight:ci,textSize:ui,typography:di,tokens:{core:kt.core,theme:kt.dark},borderRadius:ai,spacing:si,durations:pi,easings:hi},Dr="--apkt";function xt(e){if(!e)return{};const t={};return t["font-family"]=e["--apkt-font-family"]??e["--w3m-font-family"]??"KHTeka",t.accent=e["--apkt-accent"]??e["--w3m-accent"]??"#0988F0",t["color-mix"]=e["--apkt-color-mix"]??e["--w3m-color-mix"]??"#000",t["color-mix-strength"]=e["--apkt-color-mix-strength"]??e["--w3m-color-mix-strength"]??0,t["font-size-master"]=e["--apkt-font-size-master"]??e["--w3m-font-size-master"]??"10px",t["border-radius-master"]=e["--apkt-border-radius-master"]??e["--w3m-border-radius-master"]??"4px",e["--apkt-z-index"]!==void 0?t["z-index"]=e["--apkt-z-index"]:e["--w3m-z-index"]!==void 0&&(t["z-index"]=e["--w3m-z-index"]),t}const ge={createCSSVariables(e){const t={},o={};function i(r,a,s=""){for(const[l,u]of Object.entries(r)){const d=s?`${s}-${l}`:l;u&&typeof u=="object"&&Object.keys(u).length?(a[l]={},i(u,a[l],d)):typeof u=="string"&&(a[l]=`${Dr}-${d}`)}}function n(r,a){for(const[s,l]of Object.entries(r))l&&typeof l=="object"?(a[s]={},n(l,a[s])):typeof l=="string"&&(a[s]=`var(${l})`)}return i(e,t),n(t,o),{cssVariables:t,cssVariablesVarPrefix:o}},assignCSSVariables(e,t){const o={};function i(n,r,a){for(const[s,l]of Object.entries(n)){const u=a?`${a}-${s}`:s,d=r[s];l&&typeof l=="object"?i(l,d,u):typeof d=="string"&&(o[`${Dr}-${u}`]=d)}}return i(e,t),o},createRootStyles(e,t){const o={...mr,tokens:{...mr.tokens,theme:e==="light"?kt.light:kt.dark}},{cssVariables:i}=ge.createCSSVariables(o),n=ge.assignCSSVariables(i,o),r=ge.generateW3MVariables(t),a=ge.generateW3MOverrides(t),s=ge.generateScaledVariables(t),l=ge.generateBaseVariables(n),u={...n,...l,...r,...a,...s},d=ge.applyColorMixToVariables(t,u),p={...u,...d};return`:root {${Object.entries(p).map(([f,C])=>`${f}:${C.replace("/[:;{}</>]/g","")};`).join("")}}`},generateW3MVariables(e){if(!e)return{};const t=xt(e),o={};return o["--w3m-font-family"]=t["font-family"],o["--w3m-accent"]=t.accent,o["--w3m-color-mix"]=t["color-mix"],o["--w3m-color-mix-strength"]=`${t["color-mix-strength"]}%`,o["--w3m-font-size-master"]=t["font-size-master"],o["--w3m-border-radius-master"]=t["border-radius-master"],o},generateW3MOverrides(e){if(!e)return{};const t=xt(e),o={};if(e["--apkt-accent"]||e["--w3m-accent"]){const i=t.accent;o["--apkt-tokens-core-iconAccentPrimary"]=i,o["--apkt-tokens-core-borderAccentPrimary"]=i,o["--apkt-tokens-core-textAccentPrimary"]=i,o["--apkt-tokens-core-backgroundAccentPrimary"]=i}return(e["--apkt-font-family"]||e["--w3m-font-family"])&&(o["--apkt-fontFamily-regular"]=t["font-family"]),t["z-index"]!==void 0&&(o["--apkt-tokens-core-zIndex"]=`${t["z-index"]}`),o},generateScaledVariables(e){if(!e)return{};const t=xt(e),o={};if(e["--apkt-font-size-master"]||e["--w3m-font-size-master"]){const i=parseFloat(t["font-size-master"].replace("px",""));o["--apkt-textSize-h1"]=`${Number(i)*5}px`,o["--apkt-textSize-h2"]=`${Number(i)*4.4}px`,o["--apkt-textSize-h3"]=`${Number(i)*3.8}px`,o["--apkt-textSize-h4"]=`${Number(i)*3.2}px`,o["--apkt-textSize-h5"]=`${Number(i)*2.6}px`,o["--apkt-textSize-h6"]=`${Number(i)*2}px`,o["--apkt-textSize-large"]=`${Number(i)*1.6}px`,o["--apkt-textSize-medium"]=`${Number(i)*1.4}px`,o["--apkt-textSize-small"]=`${Number(i)*1.2}px`}if(e["--apkt-border-radius-master"]||e["--w3m-border-radius-master"]){const i=parseFloat(t["border-radius-master"].replace("px",""));o["--apkt-borderRadius-1"]=`${Number(i)}px`,o["--apkt-borderRadius-2"]=`${Number(i)*2}px`,o["--apkt-borderRadius-3"]=`${Number(i)*3}px`,o["--apkt-borderRadius-4"]=`${Number(i)*4}px`,o["--apkt-borderRadius-5"]=`${Number(i)*5}px`,o["--apkt-borderRadius-6"]=`${Number(i)*6}px`,o["--apkt-borderRadius-8"]=`${Number(i)*8}px`,o["--apkt-borderRadius-16"]=`${Number(i)*16}px`,o["--apkt-borderRadius-20"]=`${Number(i)*20}px`,o["--apkt-borderRadius-32"]=`${Number(i)*32}px`,o["--apkt-borderRadius-64"]=`${Number(i)*64}px`,o["--apkt-borderRadius-128"]=`${Number(i)*128}px`}return o},generateColorMixCSS(e,t){if(!e?.["--w3m-color-mix"]||!e["--w3m-color-mix-strength"])return"";const o=e["--w3m-color-mix"],i=e["--w3m-color-mix-strength"];if(!i||i===0)return"";const n=Object.keys(t||{}).filter(a=>{const s=a.includes("-tokens-core-background")||a.includes("-tokens-core-text")||a.includes("-tokens-core-border")||a.includes("-tokens-core-foreground")||a.includes("-tokens-core-icon")||a.includes("-tokens-theme-background")||a.includes("-tokens-theme-text")||a.includes("-tokens-theme-border")||a.includes("-tokens-theme-foreground")||a.includes("-tokens-theme-icon"),l=a.includes("-borderRadius-")||a.includes("-spacing-")||a.includes("-textSize-")||a.includes("-fontFamily-")||a.includes("-fontWeight-")||a.includes("-typography-")||a.includes("-duration-")||a.includes("-ease-")||a.includes("-path-")||a.includes("-width-")||a.includes("-height-")||a.includes("-visual-size-")||a.includes("-modal-width")||a.includes("-cover");return s&&!l});return n.length===0?"":` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${n.map(a=>{const s=t?.[a]||"";return s.includes("color-mix")||s.startsWith("#")||s.startsWith("rgb")?`${a}: color-mix(in srgb, ${o} ${i}%, ${s});`:`${a}: color-mix(in srgb, ${o} ${i}%, var(${a}-base, ${s}));`}).join("")}
      }
    }`},generateBaseVariables(e){const t={},o=e["--apkt-tokens-theme-backgroundPrimary"];o&&(t["--apkt-tokens-theme-backgroundPrimary-base"]=o);const i=e["--apkt-tokens-core-backgroundAccentPrimary"];return i&&(t["--apkt-tokens-core-backgroundAccentPrimary-base"]=i),t},applyColorMixToVariables(e,t){const o={};t?.["--apkt-tokens-theme-backgroundPrimary"]&&(o["--apkt-tokens-theme-backgroundPrimary"]="var(--apkt-tokens-theme-backgroundPrimary-base)"),t?.["--apkt-tokens-core-backgroundAccentPrimary"]&&(o["--apkt-tokens-core-backgroundAccentPrimary"]="var(--apkt-tokens-core-backgroundAccentPrimary-base)");const i=xt(e),n=i["color-mix"],r=i["color-mix-strength"];if(!r||r===0)return o;const a=Object.keys(t||{}).filter(s=>{const l=s.includes("-tokens-core-background")||s.includes("-tokens-core-text")||s.includes("-tokens-core-border")||s.includes("-tokens-core-foreground")||s.includes("-tokens-core-icon")||s.includes("-tokens-theme-background")||s.includes("-tokens-theme-text")||s.includes("-tokens-theme-border")||s.includes("-tokens-theme-foreground")||s.includes("-tokens-theme-icon")||s.includes("-tokens-theme-overlay"),u=s.includes("-borderRadius-")||s.includes("-spacing-")||s.includes("-textSize-")||s.includes("-fontFamily-")||s.includes("-fontWeight-")||s.includes("-typography-")||s.includes("-duration-")||s.includes("-ease-")||s.includes("-path-")||s.includes("-width-")||s.includes("-height-")||s.includes("-visual-size-")||s.includes("-modal-width")||s.includes("-cover");return l&&!u});return a.length===0||a.forEach(s=>{const l=t?.[s]||"";s.endsWith("-base")||(s==="--apkt-tokens-theme-backgroundPrimary"||s==="--apkt-tokens-core-backgroundAccentPrimary"?o[s]=`color-mix(in srgb, ${n} ${r}%, var(${s}-base))`:l.includes("color-mix")||l.startsWith("#")||l.startsWith("rgb")?o[s]=`color-mix(in srgb, ${n} ${r}%, ${l})`:o[s]=`color-mix(in srgb, ${n} ${r}%, var(${s}-base, ${l}))`)}),o}},{cssVariablesVarPrefix:D}=ge.createCSSVariables(mr);function H(e,...t){return X(e,...t.map(o=>typeof o=="function"?ae(o(D)):ae(o)))}let Pe,Re,se,oe,St;const fe={"KHTeka-500-woff2":"https://fonts.reown.com/KHTeka-Medium.woff2","KHTeka-400-woff2":"https://fonts.reown.com/KHTeka-Regular.woff2","KHTeka-300-woff2":"https://fonts.reown.com/KHTeka-Light.woff2","KHTekaMono-400-woff2":"https://fonts.reown.com/KHTekaMono-Regular.woff2","KHTeka-500-woff":"https://fonts.reown.com/KHTeka-Light.woff","KHTeka-400-woff":"https://fonts.reown.com/KHTeka-Regular.woff","KHTeka-300-woff":"https://fonts.reown.com/KHTeka-Light.woff","KHTekaMono-400-woff":"https://fonts.reown.com/KHTekaMono-Regular.woff"};function At(e,t="dark"){Pe&&document.head.removeChild(Pe),Pe=document.createElement("style"),Pe.textContent=ge.createRootStyles(t,e),document.head.appendChild(Pe)}function Da(e,t="dark"){if(St=e,Re=document.createElement("style"),se=document.createElement("style"),oe=document.createElement("style"),Re.textContent=qe(e).core.cssText,se.textContent=qe(e).dark.cssText,oe.textContent=qe(e).light.cssText,document.head.appendChild(Re),document.head.appendChild(se),document.head.appendChild(oe),At(e,t),Nr(t),!(e?.["--apkt-font-family"]||e?.["--w3m-font-family"]))for(const[i,n]of Object.entries(fe)){const r=document.createElement("link");r.rel="preload",r.href=n,r.as="font",r.type=i.includes("woff2")?"font/woff2":"font/woff",r.crossOrigin="anonymous",document.head.appendChild(r)}Nr(t)}function Nr(e="dark"){se&&oe&&Pe&&(e==="light"?(At(St,e),se.removeAttribute("media"),oe.media="enabled"):(At(St,e),oe.removeAttribute("media"),se.media="enabled"))}function Na(e){if(St=e,Re&&se&&oe){Re.textContent=qe(e).core.cssText,se.textContent=qe(e).dark.cssText,oe.textContent=qe(e).light.cssText;const t=e?.["--apkt-font-family"]||e?.["--w3m-font-family"];t&&(Re.textContent=Re.textContent?.replace("font-family: KHTeka",`font-family: ${t}`),se.textContent=se.textContent?.replace("font-family: KHTeka",`font-family: ${t}`),oe.textContent=oe.textContent?.replace("font-family: KHTeka",`font-family: ${t}`))}if(Pe){const t=oe?.media==="enabled"?"light":"dark";At(e,t)}}function qe(e){const t=!!(e?.["--apkt-font-family"]||e?.["--w3m-font-family"]);return{core:X`
      ${t?X``:X`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ae(fe["KHTeka-400-woff2"])}) format('woff2'),
                url(${ae(fe["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ae(fe["KHTeka-300-woff2"])}) format('woff2'),
                url(${ae(fe["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${ae(fe["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${ae(fe["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ae(fe["KHTeka-400-woff2"])}) format('woff2'),
                url(${ae(fe["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,dark:X`
      :root {
      }
    `,light:X`
      :root {
      }
    `}}const M=X`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`,j=X`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,$t=".",V={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--apkt-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--apkt-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},formatCurrency(e=0,t={}){const o=Number(e);return isNaN(o)?"$0.00":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2,...t}).format(o)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:o,truncate:i}){return e.length<=t+o?e:i==="end"?`${e.substring(0,t)}...`:i==="start"?`...${e.substring(e.length-o)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(o))}`},generateAvatarColors(e){const o=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),i=this.hexToRgb(o),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(n?.replace("px","")),s=`${a}% ${a}% at 65% 40%`,l=[];for(let u=0;u<5;u+=1){const d=this.tintColor(i,.15*u);l.push(`rgb(${d[0]}, ${d[1]}, ${d[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(e){const t=parseInt(e,16),o=t>>16&255,i=t>>8&255,n=t&255;return[o,i,n]},tintColor(e,t){const[o,i,n]=e,r=Math.round(o+(255-o)*t),a=Math.round(i+(255-i)*t),s=Math.round(n+(255-n)*t);return[r,a,s]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,o){return e.toString().length>=t?Number(e).toFixed(o):e},cssDurationToNumber(e){return e.endsWith("s")?Number(e.replace("s",""))*1e3:e.endsWith("ms")?Number(e.replace("ms","")):0},maskInput({value:e,decimals:t,integers:o}){if(e=e.replace(",","."),e===$t)return`0${$t}`;const[i="",n]=e.split($t).map(d=>d.replace(/[^0-9]/gu,"")),r=o?i.substring(0,o):i,a=r.length===2?String(Number(r)):r,s=typeof t=="number"?n?.substring(0,t):n,l=typeof t!="number"||t>0;return(typeof s=="string"&&l?[a,s].join($t):a)??""},capitalize(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}};function fi(e,t){const{kind:o,elements:i}=t;return{kind:o,elements:i,finisher(n){customElements.get(e)||customElements.define(e,n)}}}function gi(e,t){return customElements.get(e)||customElements.define(e,t),t}function B(e){return function(o){return typeof o=="function"?gi(e,o):fi(e,o)}}const mi=X`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var K=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let F=class extends L{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&V.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&V.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&V.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&V.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&V.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&V.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&V.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&V.getSpacingStyles(this.margin,3)};
      width: ${this.width};
    `,h`<slot></slot>`}};F.styles=[M,mi];K([c()],F.prototype,"flexDirection",void 0);K([c()],F.prototype,"flexWrap",void 0);K([c()],F.prototype,"flexBasis",void 0);K([c()],F.prototype,"flexGrow",void 0);K([c()],F.prototype,"flexShrink",void 0);K([c()],F.prototype,"alignItems",void 0);K([c()],F.prototype,"justifyContent",void 0);K([c()],F.prototype,"columnGap",void 0);K([c()],F.prototype,"rowGap",void 0);K([c()],F.prototype,"gap",void 0);K([c()],F.prototype,"padding",void 0);K([c()],F.prototype,"margin",void 0);K([c()],F.prototype,"width",void 0);F=K([B("wui-flex")],F);const J=e=>e??N;const So=Symbol.for(""),wi=e=>{if(e?.r===So)return e?._$litStatic$},bi=e=>({_$litStatic$:e,r:So}),Vr=new Map,vi=e=>(t,...o)=>{const i=o.length;let n,r;const a=[],s=[];let l,u=0,d=!1;for(;u<i;){for(l=t[u];u<i&&(r=o[u],(n=wi(r))!==void 0);)l+=n+t[++u],d=!0;u!==i&&s.push(r),a.push(l),u++}if(u===i&&a.push(t[i]),d){const p=a.join("$$lit$$");(t=Vr.get(p))===void 0&&(a.raw=a,Vr.set(p,t=a)),o=s}return e(t,...o)},jr=vi(h),yi=I`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_87_33)">
    <path d="M23.9367 2.29447e-07H6.05917C5.26333 -0.000218805 4.47526 0.156384 3.73997 0.46086C3.00469 0.765337 2.33661 1.21172 1.77391 1.7745C1.21121 2.33727 0.764917 3.00542 0.460542 3.74074C0.156167 4.47607 -0.000327963 5.26417 5.16031e-07 6.06V23.9433C4.48257e-07 24.7389 0.156744 25.5267 0.461276 26.2617C0.765808 26.9967 1.21216 27.6645 1.77484 28.2269C2.33752 28.7894 3.0055 29.2355 3.74061 29.5397C4.47573 29.8439 5.26358 30.0003 6.05917 30H23.9417C25.5486 29.9996 27.0895 29.3609 28.2257 28.2245C29.3618 27.0881 30 25.5469 30 23.94V6.06C29.9993 4.45241 29.3602 2.91091 28.2232 1.77449C27.0861 0.638064 25.5443 -0.000220881 23.9367 2.29447e-07Z" fill="url(#paint0_linear_87_33)"/>
    <path d="M14.8708 6.89259L15.4783 5.84259C15.5679 5.68703 15.6873 5.55064 15.8296 5.44122C15.9719 5.3318 16.1344 5.25148 16.3078 5.20486C16.4812 5.15824 16.662 5.14622 16.8401 5.1695C17.0181 5.19277 17.1898 5.25088 17.3453 5.34051C17.5009 5.43013 17.6373 5.54952 17.7467 5.69186C17.8561 5.83419 17.9364 5.99669 17.9831 6.17006C18.0297 6.34344 18.0417 6.5243 18.0184 6.70232C17.9952 6.88034 17.9371 7.05203 17.8474 7.20759L11.9949 17.3401H16.2283C17.5999 17.3401 18.3691 18.9526 17.7724 20.0701H5.36159C5.18215 20.0707 5.00436 20.0359 4.83845 19.9675C4.67254 19.8992 4.5218 19.7986 4.39492 19.6718C4.26803 19.5449 4.16751 19.3941 4.09915 19.2282C4.03079 19.0623 3.99593 18.8845 3.99659 18.7051C3.99659 17.9476 4.60492 17.3401 5.36159 17.3401H8.84159L13.2958 9.61926L11.9041 7.20426C11.738 6.89096 11.7 6.52543 11.7982 6.18469C11.8963 5.84395 12.1229 5.5546 12.4301 5.37763C12.7374 5.20065 13.1014 5.14987 13.4454 5.23599C13.7893 5.3221 14.0864 5.53838 14.2741 5.83926L14.8708 6.89259ZM9.60659 21.4759L8.29409 23.7526C8.20446 23.9082 8.08506 24.0446 7.94271 24.1541C7.80035 24.2636 7.63783 24.344 7.46441 24.3906C7.291 24.4373 7.11009 24.4493 6.93202 24.4261C6.75395 24.4028 6.58221 24.3447 6.42659 24.2551C6.27097 24.1655 6.13454 24.0461 6.02506 23.9037C5.91559 23.7613 5.83523 23.5988 5.78857 23.4254C5.74191 23.252 5.72986 23.0711 5.75311 22.893C5.77637 22.715 5.83446 22.5432 5.92409 22.3876L6.89909 20.7001C8.00159 20.3584 8.89742 20.6209 9.60659 21.4759ZM20.9066 17.3476H24.4583C25.2158 17.3476 25.8233 17.9551 25.8233 18.7126C25.8233 19.4701 25.2149 20.0776 24.4583 20.0776H22.4858L23.8166 22.3876C24.1916 23.0443 23.9708 23.8726 23.3149 24.2551C23.0006 24.4359 22.6274 24.4845 22.2772 24.3903C21.927 24.2961 21.6286 24.0667 21.4474 23.7526C19.2058 19.8643 17.5216 16.9534 16.4041 15.0151C15.2608 13.0426 16.0783 11.0626 16.8841 10.3909C17.7799 11.9293 19.1191 14.2501 20.9074 17.3476H20.9066Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_87_33" x1="15" y1="2.29447e-07" x2="15" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB"/>
      <stop offset="1" stop-color="#2072F3"/>
    </linearGradient>
    <clipPath id="clip0_87_33">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>`,xi=I`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,$i=I`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,Ci=I`<svg viewBox="0 0 32 32" fill="none">
<path d="M29.0612 10.0613L13.0612 26.0613C12.9218 26.2011 12.7563 26.3121 12.5739 26.3878C12.3916 26.4635 12.1961 26.5024 11.9987 26.5024C11.8013 26.5024 11.6058 26.4635 11.4235 26.3878C11.2411 26.3121 11.0756 26.2011 10.9362 26.0613L3.9362 19.0613C3.79667 18.9217 3.68599 18.7561 3.61047 18.5738C3.53496 18.3915 3.49609 18.1961 3.49609 17.9988C3.49609 17.8014 3.53496 17.606 3.61047 17.4237C3.68599 17.2414 3.79667 17.0758 3.9362 16.9363C4.07573 16.7967 4.24137 16.686 4.42367 16.6105C4.60598 16.535 4.80137 16.4962 4.9987 16.4962C5.19602 16.4962 5.39141 16.535 5.57372 16.6105C5.75602 16.686 5.92167 16.7967 6.0612 16.9363L11.9999 22.875L26.9387 7.93876C27.2205 7.65697 27.6027 7.49866 28.0012 7.49866C28.3997 7.49866 28.7819 7.65697 29.0637 7.93876C29.3455 8.22055 29.5038 8.60274 29.5038 9.00126C29.5038 9.39977 29.3455 9.78197 29.0637 10.0638L29.0612 10.0613Z" fill="currentColor"/>
</svg>
`,_i=I`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M14.9978 7.80003H27.4668C26.2032 5.61107 24.3857 3.79333 22.1968 2.52955C20.008 1.26577 17.525 0.600485 14.9975 0.600586C12.47 0.600687 9.98712 1.26617 7.79838 2.53012C5.60964 3.79408 3.79221 5.61197 2.52881 7.80103L8.76281 18.599L8.76881 18.598C8.13412 17.5044 7.79906 16.2628 7.79743 14.9983C7.79579 13.7339 8.12764 12.4914 8.7595 11.3961C9.39136 10.3008 10.3009 9.39159 11.3963 8.76005C12.4918 8.12851 13.7344 7.79702 14.9988 7.79903L14.9978 7.80003Z" fill="url(#paint0_linear_87_32)"/>
<path d="M21.237 18.5981L15.003 29.3961C17.5305 29.3961 20.0134 28.7308 22.2022 27.467C24.391 26.2032 26.2086 24.3854 27.4721 22.1965C28.7356 20.0075 29.4006 17.5245 29.4003 14.997C29.3999 12.4695 28.7342 9.9867 27.47 7.7981H15.002L15 7.8041C16.2642 7.80168 17.5067 8.13257 18.6022 8.76342C19.6977 9.39428 20.6076 10.3028 21.2401 11.3974C21.8726 12.492 22.2053 13.734 22.2048 14.9982C22.2042 16.2623 21.8704 17.504 21.237 18.5981Z" fill="url(#paint1_linear_87_32)"/>
<path d="M8.76502 18.601L2.53102 7.80298C1.26664 9.99172 0.600848 12.4748 0.600586 15.0025C0.600324 17.5302 1.2656 20.0134 2.52953 22.2024C3.79345 24.3914 5.61145 26.209 7.80071 27.4725C9.98998 28.736 12.4733 29.4008 15.001 29.4L21.236 18.602L21.232 18.598C20.6022 19.6941 19.6944 20.6049 18.6003 21.2383C17.5062 21.8717 16.2644 22.2055 15.0002 22.2059C13.7359 22.2063 12.4939 21.8733 11.3994 21.2406C10.3049 20.6079 9.39657 19.6977 8.76602 18.602L8.76502 18.601Z" fill="url(#paint2_linear_87_32)"/>
<path d="M14.9998 22.2C16.9094 22.2 18.7407 21.4415 20.091 20.0912C21.4412 18.741 22.1998 16.9096 22.1998 15C22.1998 13.0905 21.4412 11.2591 20.091 9.90888C18.7407 8.55862 16.9094 7.80005 14.9998 7.80005C13.0902 7.80005 11.2589 8.55862 9.90864 9.90888C8.55837 11.2591 7.7998 13.0905 7.7998 15C7.7998 16.9096 8.55837 18.741 9.90864 20.0912C11.2589 21.4415 13.0902 22.2 14.9998 22.2Z" fill="white"/>
<path d="M14.9998 20.7C16.5115 20.7 17.9614 20.0995 19.0303 19.0306C20.0993 17.9616 20.6998 16.5118 20.6998 15C20.6998 13.4883 20.0993 12.0385 19.0303 10.9695C17.9614 9.90058 16.5115 9.30005 14.9998 9.30005C13.4881 9.30005 12.0383 9.90058 10.9693 10.9695C9.90034 12.0385 9.2998 13.4883 9.2998 15C9.2998 16.5118 9.90034 17.9616 10.9693 19.0306C12.0383 20.0995 13.4881 20.7 14.9998 20.7Z" fill="#1A73E8"/>
<defs>
  <linearGradient id="paint0_linear_87_32" x1="3.29381" y1="2.99503" x2="38.0998" y2="2.99503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D93025"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="paint1_linear_87_32" x1="17.953" y1="29.1431" x2="34.194" y2="-0.298904" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FCC934"/>
    <stop offset="1" stop-color="#FBBC04"/>
  </linearGradient>
  <linearGradient id="paint2_linear_87_32" x1="22.873" y1="28.2" x2="6.63202" y2="-1.24102" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1E8E3E"/>
    <stop offset="1" stop-color="#34A853"/>
  </linearGradient>
</defs>
</svg>`,ki=I`<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M23 11.1962V10.5C23 7.365 18.2712 5 12 5C5.72875 5 1 7.365 1 10.5V15.5C1 18.1112 4.28125 20.1863 9 20.8075V21.5C9 24.635 13.7288 27 20 27C26.2712 27 31 24.635 31 21.5V16.5C31 13.9125 27.8225 11.835 23 11.1962ZM7 18.3587C4.55125 17.675 3 16.5487 3 15.5V13.7413C4.02 14.4637 5.38625 15.0463 7 15.4375V18.3587ZM17 15.4375C18.6138 15.0463 19.98 14.4637 21 13.7413V15.5C21 16.5487 19.4487 17.675 17 18.3587V15.4375ZM15 24.3587C12.5513 23.675 11 22.5487 11 21.5V20.9788C11.3287 20.9913 11.6613 21 12 21C12.485 21 12.9587 20.9837 13.4237 20.9562C13.9403 21.1412 14.4665 21.2981 15 21.4263V24.3587ZM15 18.7812C14.0068 18.928 13.004 19.0011 12 19C10.996 19.0011 9.99324 18.928 9 18.7812V15.8075C9.99472 15.9371 10.9969 16.0014 12 16C13.0031 16.0014 14.0053 15.9371 15 15.8075V18.7812ZM23 24.7812C21.0106 25.0729 18.9894 25.0729 17 24.7812V21.8C17.9944 21.9337 18.9967 22.0005 20 22C21.0031 22.0014 22.0053 21.9371 23 21.8075V24.7812ZM29 21.5C29 22.5487 27.4487 23.675 25 24.3587V21.4375C26.6138 21.0462 27.98 20.4637 29 19.7412V21.5Z" fill="currentColor"/>
</svg>
`,Si=I` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Ai=I`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Ei=I`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,Pi=I`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,zi=I`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ri=I`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,Ti=I`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Li=I`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,Ii=I`<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.875 0C3.91082 0 2.96829 0.285914 2.1666 0.821586C1.36491 1.35726 0.740067 2.11863 0.371089 3.00942C0.00211226 3.90021 -0.094429 4.88041 0.093674 5.82607C0.281777 6.77172 0.746076 7.64036 1.42786 8.32215C2.10964 9.00393 2.97828 9.46823 3.92394 9.65633C4.86959 9.84443 5.84979 9.74789 6.74058 9.37891C7.63137 9.00994 8.39274 8.38509 8.92842 7.5834C9.46409 6.78171 9.75 5.83918 9.75 4.875C9.74864 3.58249 9.23458 2.34331 8.32064 1.42936C7.4067 0.515418 6.16751 0.00136492 4.875 0ZM4.6875 2.25C4.79875 2.25 4.90751 2.28299 5.00001 2.3448C5.09251 2.40661 5.16461 2.49446 5.20718 2.59724C5.24976 2.70002 5.2609 2.81312 5.23919 2.92224C5.21749 3.03135 5.16392 3.13158 5.08525 3.21025C5.00658 3.28891 4.90635 3.34249 4.79724 3.36419C4.68813 3.3859 4.57503 3.37476 4.47224 3.33218C4.36946 3.28961 4.28161 3.21751 4.2198 3.12501C4.15799 3.03251 4.125 2.92375 4.125 2.8125C4.125 2.66332 4.18427 2.52024 4.28975 2.41475C4.39524 2.30926 4.53832 2.25 4.6875 2.25ZM5.25 7.5C5.05109 7.5 4.86032 7.42098 4.71967 7.28033C4.57902 7.13968 4.5 6.94891 4.5 6.75V4.875C4.40055 4.875 4.30516 4.83549 4.23484 4.76516C4.16451 4.69484 4.125 4.59946 4.125 4.5C4.125 4.40054 4.16451 4.30516 4.23484 4.23484C4.30516 4.16451 4.40055 4.125 4.5 4.125C4.69891 4.125 4.88968 4.20402 5.03033 4.34467C5.17098 4.48532 5.25 4.67609 5.25 4.875V6.75C5.34946 6.75 5.44484 6.78951 5.51517 6.85983C5.58549 6.93016 5.625 7.02554 5.625 7.125C5.625 7.22446 5.58549 7.31984 5.51517 7.39017C5.44484 7.46049 5.34946 7.5 5.25 7.5Z" fill="#9A9A9A"/>
</svg>
`,Bi=I`<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28.925 5.5425C28.925 5.5425 28.925 5.555 28.925 5.56125L21.65 29.5537C21.5399 29.9434 21.3132 30.2901 21.0004 30.5473C20.6876 30.8045 20.3036 30.9598 19.9 30.9925C19.8425 30.9975 19.785 31 19.7275 31C19.3493 31.0012 18.9786 30.8941 18.6592 30.6915C18.3398 30.4888 18.085 30.199 17.925 29.8563L13.375 20.5187C13.3295 20.4252 13.3143 20.3197 13.3315 20.2171C13.3488 20.1145 13.3976 20.0198 13.4713 19.9463L20.7113 12.7063C20.8909 12.5172 20.9895 12.2654 20.9862 12.0047C20.9829 11.7439 20.8778 11.4948 20.6934 11.3104C20.509 11.126 20.2599 11.0209 19.9991 11.0176C19.7383 11.0142 19.4866 11.1129 19.2975 11.2925L12.0538 18.5325C11.9802 18.6061 11.8855 18.655 11.7829 18.6722C11.6803 18.6895 11.5748 18.6743 11.4813 18.6287L2.13502 14.08C1.76954 13.9047 1.46598 13.6224 1.26454 13.2706C1.06311 12.9189 0.973316 12.5142 1.00707 12.1102C1.04082 11.7063 1.19652 11.3221 1.45354 11.0087C1.71056 10.6952 2.05676 10.4673 2.44627 10.355L26.4388 3.08H26.4575C26.7991 2.98403 27.1601 2.98066 27.5034 3.07025C27.8468 3.15984 28.1601 3.33916 28.4113 3.58981C28.6624 3.84045 28.8424 4.15341 28.9326 4.49656C29.0229 4.83971 29.0203 5.2007 28.925 5.5425Z" fill="currentColor"/>
</svg>
`,Mi=I` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,Hi=I`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 5.83334C11.6666 2.61168 14.2783 0 17.5 0H25.8334C29.055 0 31.6666 2.61168 31.6666 5.83334V14.1666C31.6666 17.3883 29.055 20 25.8334 20H17.5C14.2783 20 11.6666 17.3883 11.6666 14.1666V5.83334Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M19.5068 13.7499L22.4309 5.83331H23.2895L20.3654 13.7499H19.5068Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M0 5.41666C0 2.42513 2.42513 0 5.41666 0C8.40821 0 10.8334 2.42513 10.8334 5.41666V14.5833C10.8334 17.5748 8.40821 20 5.41666 20C2.42513 20 0 17.5748 0 14.5833V5.41666Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M4.89581 12.4997V11.458H5.93747V12.4997H4.89581Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M32.5 10C32.5 4.47715 36.6896 0 41.8578 0H65.6422C70.8104 0 75 4.47715 75 10C75 15.5229 70.8104 20 65.6422 20H41.8578C36.6896 20 32.5 15.5229 32.5 10Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M61.7108 12.4475V7.82751H62.5266V8.52418C62.8199 8.01084 63.4157 7.70834 64.0757 7.70834C65.0749 7.70834 65.7715 8.34084 65.7715 9.56918V12.4475H64.9649V9.61503C64.9649 8.80831 64.5066 8.38668 63.8374 8.38668C63.1132 8.38668 62.5266 8.9642 62.5266 9.78001V12.4475H61.7108Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M56.5671 12.4475L55.7147 7.82748H56.4846L57.0896 11.6409L57.8871 9.12916H58.6479L59.4363 11.6134L60.0505 7.82748H60.8204L59.9679 12.4475H59.0513L58.2721 10.0458L57.4838 12.4475H56.5671Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M52.9636 12.5666C51.5611 12.5666 50.7361 11.5217 50.7361 10.1375C50.7361 8.76254 51.5611 7.70834 52.9636 7.70834C54.3661 7.70834 55.1911 8.76254 55.1911 10.1375C55.1911 11.5217 54.3661 12.5666 52.9636 12.5666ZM52.9636 11.8883C53.9719 11.8883 54.357 11.0266 54.357 10.1283C54.357 9.23914 53.9719 8.38668 52.9636 8.38668C51.9552 8.38668 51.5702 9.23914 51.5702 10.1283C51.5702 11.0266 51.9552 11.8883 52.9636 11.8883Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M47.8507 12.5666C46.494 12.5666 45.6415 11.5308 45.6415 10.1375C45.6415 8.75337 46.494 7.70834 47.8507 7.70834C48.9965 7.70834 50.0048 8.35917 49.8948 10.3483H46.4756C46.5398 11.2009 46.934 11.8975 47.8507 11.8975C48.4648 11.8975 48.8681 11.5217 49.0057 11.0908H49.8123C49.684 11.8609 48.9598 12.5666 47.8507 12.5666ZM46.494 9.73416H49.1065C49.0423 8.80831 48.6114 8.37751 47.8507 8.37751C47.0165 8.37751 46.604 8.98254 46.494 9.73416Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M41.7284 12.4475V7.82748H42.5625V8.60665C42.8559 8.09332 43.3601 7.82748 43.8825 7.82748H44.9917V8.60665H43.8184C43.0851 8.60665 42.5625 9.08331 42.5625 10.0092V12.4475H41.7284Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>

`,Oi=I`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,Di=I`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,Ni=I`
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
  <path d="M8.37651 0H1.62309C0.381381 0 -0.405611 1.33944 0.219059 2.42225L4.38701 9.64649C4.659 10.1182 5.3406 10.1182 5.61259 9.64649L9.78139 2.42225C10.4052 1.34117 9.61822 0 8.37736 0H8.37651ZM4.38362 7.48005L3.47591 5.72329L1.2857 1.80606C1.14121 1.55534 1.31968 1.23405 1.62225 1.23405H4.38278V7.4809L4.38362 7.48005ZM8.71221 1.80521L6.52284 5.72414L5.61513 7.48005V1.2332H8.37566C8.67823 1.2332 8.85669 1.55449 8.71221 1.80521Z" fill="var(--apkt-tokens-theme-textPrimary)" />
</svg>
`,Vi=I`
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 64 64">
    <path fill="var(--apkt-tokens-theme-textPrimary)" d="M61.55 19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82 3.82 0 0 0-1.11-.62l0 0C41.56 7 3.63-.09 2.89 0a1.4 1.4 0 0 0-.58.22L2.12.37a2.23 2.23 0 0 0-.52.84l-.05.13v.71l0 .11C5.82 14.05 22.68 53 26 62.14c.2.62.58 1.8 1.29 1.86h.16c.38 0 2-2.14 2-2.14S58.41 26.74 61.34 23a9.46 9.46 0 0 0 1-1.48A2.41 2.41 0 0 0 61.55 19.28ZM36.88 23.37 49.24 13.12l7.25 6.68Zm-4.8-.67L10.8 5.26l34.43 6.35ZM34 27.27l21.78-3.51-24.9 30ZM7.91 7 30.3 26 27.06 53.78Z"/>
  </svg>
`,ji=I`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Fi=I`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Wi=I`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,Zi=I`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,Ui=I`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,qi=I`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,Fr=I`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,Ki=X`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    height: inherit;
    width: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var ft=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const Gi={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",wallet:"ph-wallet",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",coins:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",paperPlaneTitle:"",reown:"",solana:"",ton:"",tron:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:"",infoSeal:"",checkmark:""},Yi={"ph-arrow-circle-down":()=>_(()=>import("./PhArrowCircleDown-Ct5n4kR0.js"),__vite__mapDeps([0,1,2])),"ph-arrow-clockwise":()=>_(()=>import("./PhArrowClockwise-BkUrZ-rQ.js"),__vite__mapDeps([3,1,2])),"ph-arrow-down":()=>_(()=>import("./PhArrowDown-DzIZZptU.js"),__vite__mapDeps([4,1,2])),"ph-arrow-left":()=>_(()=>import("./PhArrowLeft-DNTTX6mg.js"),__vite__mapDeps([5,1,2])),"ph-arrow-right":()=>_(()=>import("./PhArrowRight-BLh2cylA.js"),__vite__mapDeps([6,1,2])),"ph-arrow-square-out":()=>_(()=>import("./PhArrowSquareOut-DOMCZcLC.js"),__vite__mapDeps([7,1,2])),"ph-arrows-down-up":()=>_(()=>import("./PhArrowsDownUp-BtScdtTV.js"),__vite__mapDeps([8,1,2])),"ph-arrows-left-right":()=>_(()=>import("./PhArrowsLeftRight-CJDq3d4E.js"),__vite__mapDeps([9,1,2])),"ph-arrow-up":()=>_(()=>import("./PhArrowUp-Dlj5ioAU.js"),__vite__mapDeps([10,1,2])),"ph-arrow-up-right":()=>_(()=>import("./PhArrowUpRight-CwRopcPS.js"),__vite__mapDeps([11,1,2])),"ph-arrows-clockwise":()=>_(()=>import("./PhArrowsClockwise-cktRAfTc.js"),__vite__mapDeps([12,1,2])),"ph-bank":()=>_(()=>import("./PhBank-aX3CBUlt.js"),__vite__mapDeps([13,1,2])),"ph-browser":()=>_(()=>import("./PhBrowser-DVONUU6Z.js"),__vite__mapDeps([14,1,2])),"ph-caret-down":()=>_(()=>import("./PhCaretDown-qqRaRkJT.js"),__vite__mapDeps([15,1,2])),"ph-caret-left":()=>_(()=>import("./PhCaretLeft-BDeoWRWZ.js"),__vite__mapDeps([16,1,2])),"ph-caret-right":()=>_(()=>import("./PhCaretRight-xvRXT7j_.js"),__vite__mapDeps([17,1,2])),"ph-caret-up":()=>_(()=>import("./PhCaretUp-DZpUbNKI.js"),__vite__mapDeps([18,1,2])),"ph-check":()=>_(()=>import("./PhCheck-BaU_1zqG.js"),__vite__mapDeps([19,1,2])),"ph-circle-half":()=>_(()=>import("./PhCircleHalf-07X2pjr4.js"),__vite__mapDeps([20,1,2])),"ph-clock":()=>_(()=>import("./PhClock-CtmDHZzP.js"),__vite__mapDeps([21,1,2])),"ph-compass":()=>_(()=>import("./PhCompass-BuiARUfy.js"),__vite__mapDeps([22,1,2])),"ph-copy":()=>_(()=>import("./PhCopy-y7MKGELV.js"),__vite__mapDeps([23,1,2])),"ph-credit-card":()=>_(()=>import("./PhCreditCard-CkXvyH2m.js"),__vite__mapDeps([24,1,2])),"ph-currency-dollar":()=>_(()=>import("./PhCurrencyDollar-CNj-s887.js"),__vite__mapDeps([25,1,2])),"ph-desktop":()=>_(()=>import("./PhDesktop-CQYBcDNo.js"),__vite__mapDeps([26,1,2])),"ph-device-mobile":()=>_(()=>import("./PhDeviceMobile-KgKZ8VRL.js"),__vite__mapDeps([27,1,2])),"ph-dots-three":()=>_(()=>import("./PhDotsThree-C-ZlIxjd.js"),__vite__mapDeps([28,1,2])),"ph-vault":()=>_(()=>import("./PhVault-DERqHqSp.js"),__vite__mapDeps([29,1,2])),"ph-envelope":()=>_(()=>import("./PhEnvelope-BDSLxGSu.js"),__vite__mapDeps([30,1,2])),"ph-funnel-simple":()=>_(()=>import("./PhFunnelSimple-BXrzLJwa.js"),__vite__mapDeps([31,1,2])),"ph-globe":()=>_(()=>import("./PhGlobe-CASYyKBd.js"),__vite__mapDeps([32,1,2])),"ph-identification-card":()=>_(()=>import("./PhIdentificationCard-B_KZclde.js"),__vite__mapDeps([33,1,2])),"ph-image":()=>_(()=>import("./PhImage-DLla2UyB.js"),__vite__mapDeps([34,1,2])),"ph-info":()=>_(()=>import("./PhInfo-C8GDCu4R.js"),__vite__mapDeps([35,1,2])),"ph-lightbulb":()=>_(()=>import("./PhLightbulb-Ddq-7yVY.js"),__vite__mapDeps([36,1,2])),"ph-magnifying-glass":()=>_(()=>import("./PhMagnifyingGlass-EyGxCDWj.js"),__vite__mapDeps([37,1,2])),"ph-paper-plane-right":()=>_(()=>import("./PhPaperPlaneRight-Bdys4SFJ.js"),__vite__mapDeps([38,1,2])),"ph-plus":()=>_(()=>import("./PhPlus-CY4jejJi.js"),__vite__mapDeps([39,1,2])),"ph-power":()=>_(()=>import("./PhPower-CAqZK6TE.js"),__vite__mapDeps([40,1,2])),"ph-puzzle-piece":()=>_(()=>import("./PhPuzzlePiece-DgT18s4s.js"),__vite__mapDeps([41,1,2])),"ph-qr-code":()=>_(()=>import("./PhQrCode-ClaQusT8.js"),__vite__mapDeps([42,1,2])),"ph-question":()=>_(()=>import("./PhQuestion-DFVNUIfi.js"),__vite__mapDeps([43,1,2])),"ph-question-circle":()=>_(()=>import("./PhQuestionMark-BdL-CMot.js"),__vite__mapDeps([44,1,2])),"ph-seal-check":()=>_(()=>import("./PhSealCheck-CfV9oXWK.js"),__vite__mapDeps([45,1,2])),"ph-sign-out":()=>_(()=>import("./PhSignOut-BmVee9f2.js"),__vite__mapDeps([46,1,2])),"ph-spinner":()=>_(()=>import("./PhSpinner-CWZimeDM.js"),__vite__mapDeps([47,1,2])),"ph-trash":()=>_(()=>import("./PhTrash-eBSrMmRb.js"),__vite__mapDeps([48,1,2])),"ph-user":()=>_(()=>import("./PhUser-CkdBiwuN.js"),__vite__mapDeps([49,1,2])),"ph-wallet":()=>_(()=>import("./PhWallet-DbI_HyDe.js"),__vite__mapDeps([50,1,2])),"ph-warning":()=>_(()=>import("./PhWarning-RW7nWxSn.js"),__vite__mapDeps([51,1,2])),"ph-warning-circle":()=>_(()=>import("./PhWarningCircle-BZCAKWey.js"),__vite__mapDeps([52,1,2])),"ph-x":()=>_(()=>import("./PhX-Bjym4js4.js"),__vite__mapDeps([53,1,2]))},Ji={appStore:yi,apple:xi,bitcoin:$i,coins:ki,chromeStore:_i,cursor:Si,discord:Ai,ethereum:Ei,etherscan:Pi,facebook:zi,farcaster:Ri,github:Ti,google:Li,playStore:Mi,paperPlaneTitle:Bi,reown:Hi,solana:Oi,ton:Ni,tron:Vi,telegram:Di,twitch:ji,twitter:Fr,twitterIcon:Fi,walletConnect:Wi,walletConnectInvert:Zi,walletConnectBrown:qi,walletConnectLightBrown:Ui,x:Fr,infoSeal:Ii,checkmark:Ci},Qi={"accent-primary":D.tokens.core.iconAccentPrimary,"accent-certified":D.tokens.core.iconAccentCertified,"foreground-secondary":D.tokens.theme.foregroundSecondary,default:D.tokens.theme.iconDefault,success:D.tokens.core.iconSuccess,error:D.tokens.core.iconError,warning:D.tokens.core.iconWarning,inverse:D.tokens.theme.iconInverse};let Ie=class extends L{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){const t={xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"};this.style.cssText=`
      --local-width: ${this.size==="inherit"?"inherit":`var(--apkt-spacing-${t[this.size]})`};
      --local-color: ${this.color==="inherit"?"inherit":Qi[this.color]}
    `;const o=Gi[this.name];if(o&&o!==""){const i=Yi[o];i&&i();const n=bi(o);return jr`<${n} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${n}>`}return Ji[this.name]||jr``}};Ie.styles=[M,Ki];ft([c()],Ie.prototype,"size",void 0);ft([c()],Ie.prototype,"name",void 0);ft([c()],Ie.prototype,"weight",void 0);ft([c()],Ie.prototype,"color",void 0);Ie=ft([B("wui-icon")],Ie);const Ao={ATTRIBUTE:1,CHILD:2},Eo=e=>(...t)=>({_$litDirective$:e,values:t});class Po{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,i){this._$Ct=t,this._$AM=o,this._$Ci=i}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const Xi=Eo(class extends Po{constructor(e){if(super(e),e.type!==Ao.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const o=e.element.classList;for(const i of this.st)i in t||(o.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||this.nt?.has(i)||(n?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return Le}}),en=H`
  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* -- Headings --------------------------------------------------- */
  .wui-font-h1-regular-mono {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-md-regular {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`;var Qe=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const tn={primary:D.tokens.theme.textPrimary,secondary:D.tokens.theme.textSecondary,tertiary:D.tokens.theme.textTertiary,invert:D.tokens.theme.textInvert,error:D.tokens.core.textError,success:D.tokens.core.textSuccess,warning:D.tokens.core.textWarning,"accent-primary":D.tokens.core.textAccentPrimary};let $e=class extends L{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0,this.display="inline-flex"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      display: ${this.display};
      --local-align: ${this.align};
      --local-color: ${this.color==="inherit"?"inherit":tn[this.color??"primary"]};
      `,h`<slot class=${Xi(t)}></slot>`}};$e.styles=[M,en];Qe([c()],$e.prototype,"variant",void 0);Qe([c()],$e.prototype,"color",void 0);Qe([c()],$e.prototype,"align",void 0);Qe([c()],$e.prototype,"lineClamp",void 0);Qe([c()],$e.prototype,"display",void 0);$e=Qe([B("wui-text")],$e);const rn=H`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var gt=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Be=class extends L{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,h`
      <wui-icon size=${J(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};Be.styles=[M,j,rn];gt([c()],Be.prototype,"icon",void 0);gt([c()],Be.prototype,"size",void 0);gt([c()],Be.prototype,"padding",void 0);gt([c()],Be.prototype,"color",void 0);Be=gt([B("wui-icon-box")],Be);const on=H`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var ue=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let ee=class extends L{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const t={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?h`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?h`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:h`<img src=${J(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};ee.styles=[M,on];ue([c()],ee.prototype,"src",void 0);ue([c()],ee.prototype,"logo",void 0);ue([c()],ee.prototype,"icon",void 0);ue([c()],ee.prototype,"iconColor",void 0);ue([c()],ee.prototype,"alt",void 0);ue([c()],ee.prototype,"size",void 0);ue([c({type:Boolean})],ee.prototype,"boxed",void 0);ue([c({type:Boolean})],ee.prototype,"rounded",void 0);ue([c({type:Boolean})],ee.prototype,"fullSize",void 0);ee=ue([B("wui-image")],ee);const nn=H`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var Ne=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let me=class extends L{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return this.size==="lg"?t="4":this.size==="md"?t="2":this.size==="sm"&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),h`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?h`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:h`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};me.styles=[M,nn];Ne([c()],me.prototype,"size",void 0);Ne([c()],me.prototype,"name",void 0);Ne([c()],me.prototype,"imageSrc",void 0);Ne([c()],me.prototype,"walletIcon",void 0);Ne([c({type:Boolean})],me.prototype,"installed",void 0);Ne([c()],me.prototype,"badgeSize",void 0);me=Ne([B("wui-wallet-image")],me);const an=H`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var zo=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const Ft=4;let Et=class extends L{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Ft;return h`${this.walletImages.slice(0,Ft).map(({src:o,walletName:i})=>h`
          <wui-wallet-image
            size="sm"
            imageSrc=${o}
            name=${J(i)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(Ft-this.walletImages.length)].map(()=>h` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};Et.styles=[M,an];zo([c({type:Array})],Et.prototype,"walletImages",void 0);Et=zo([B("wui-all-wallets-image")],Et);const sn=H`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var Bt=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Ge=class extends L{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"md-medium":"sm-medium",o=this.size==="md"?"md":"sm";return h`
      ${this.icon?h`<wui-icon size=${o} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${t}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};Ge.styles=[M,sn];Bt([c()],Ge.prototype,"variant",void 0);Bt([c()],Ge.prototype,"size",void 0);Bt([c()],Ge.prototype,"icon",void 0);Ge=Bt([B("wui-tag")],Ge);const ln=H`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`;var G=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const cn={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton",tron:"tron"};let W=class extends L{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,h`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${J(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){return this.namespaces?.length?h`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((t,o)=>h`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${(this.namespaces?.length??0)*2-o}
              class="namespace-icon"
            >
              <wui-icon
                name=${J(cn[t])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`)}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?h` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?h` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?h`<wui-wallet-image
        size=${J(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?h`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?h`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?h`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};W.styles=[M,j,ln];G([c({type:Array})],W.prototype,"walletImages",void 0);G([c()],W.prototype,"imageSrc",void 0);G([c()],W.prototype,"name",void 0);G([c()],W.prototype,"size",void 0);G([c()],W.prototype,"tagLabel",void 0);G([c()],W.prototype,"tagVariant",void 0);G([c()],W.prototype,"walletIcon",void 0);G([c()],W.prototype,"tabIdx",void 0);G([c({type:Array})],W.prototype,"namespaces",void 0);G([c({type:Boolean})],W.prototype,"disabled",void 0);G([c({type:Boolean})],W.prototype,"showAllWallets",void 0);G([c({type:Boolean})],W.prototype,"loading",void 0);G([c({type:String})],W.prototype,"loadingSpinnerColor",void 0);W=G([B("wui-list-wallet")],W);const un=H`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var mt=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const dn={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},hn={lg:"md",md:"sm",sm:"sm"};let Me=class extends L{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return h`
      <button data-active=${this.active}>
        ${this.icon?h`<wui-icon size=${hn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${dn[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Me.styles=[M,j,un];mt([c()],Me.prototype,"icon",void 0);mt([c()],Me.prototype,"size",void 0);mt([c()],Me.prototype,"label",void 0);mt([c({type:Boolean})],Me.prototype,"active",void 0);Me=mt([B("wui-tab-item")],Me);const pn=H`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var wt=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let He=class extends L{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,o)=>{const i=o===this.activeTab;return h`
        <wui-tab-item
          @click=${()=>this.onTabClick(o)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${t.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};He.styles=[M,j,pn];wt([c({type:Array})],He.prototype,"tabs",void 0);wt([c()],He.prototype,"onTabChange",void 0);wt([c()],He.prototype,"size",void 0);wt([Zo()],He.prototype,"activeTab",void 0);He=wt([B("wui-tabs")],He);const fn=X`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var $r=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let ct=class extends L{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const t={primary:D.tokens.theme.textPrimary,secondary:D.tokens.theme.textSecondary,tertiary:D.tokens.theme.textTertiary,invert:D.tokens.theme.textInvert,error:D.tokens.core.textError,warning:D.tokens.core.textWarning,"accent-primary":D.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${this.color==="inherit"?"inherit":t[this.color]};
      `,this.dataset.size=this.size,h`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};ct.styles=[M,fn];$r([c()],ct.prototype,"color",void 0);$r([c()],ct.prototype,"size",void 0);ct=$r([B("wui-loading-spinner")],ct);const gn=H`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var Ve=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const mn={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},wn={lg:"md",md:"md",sm:"sm"};let we=class extends L{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??mn[this.size];return h`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=wn[this.size],o=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return h`<wui-loading-spinner color=${o} size=${t}></wui-loading-spinner>`}return null}};we.styles=[M,j,gn];Ve([c()],we.prototype,"size",void 0);Ve([c({type:Boolean})],we.prototype,"disabled",void 0);Ve([c({type:Boolean})],we.prototype,"fullWidth",void 0);Ve([c({type:Boolean})],we.prototype,"loading",void 0);Ve([c()],we.prototype,"variant",void 0);Ve([c()],we.prototype,"textVariant",void 0);we=Ve([B("wui-button")],we);const bn=H`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var bt=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const vn={sm:"sm-medium",md:"md-medium"},yn={accent:"accent-primary",secondary:"secondary"};let Oe=class extends L{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return h`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${yn[this.variant]}
          variant=${vn[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?h`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};Oe.styles=[M,j,bn];bt([c()],Oe.prototype,"size",void 0);bt([c({type:Boolean})],Oe.prototype,"disabled",void 0);bt([c()],Oe.prototype,"variant",void 0);bt([c()],Oe.prototype,"icon",void 0);Oe=bt([B("wui-link")],Oe);const xn=H`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ro=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Pt=class extends L{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,i=36-t,n=116+i,r=245+i,a=360+i*1.75;return h`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${n} ${r}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};Pt.styles=[M,xn];Ro([c({type:Number})],Pt.prototype,"radius",void 0);Pt=Ro([B("wui-loading-thumbnail")],Pt);const $n=H`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Mt=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Ye=class extends L{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return h`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ye.styles=[M,j,$n];Mt([c({type:Boolean})],Ye.prototype,"disabled",void 0);Mt([c()],Ye.prototype,"label",void 0);Mt([c()],Ye.prototype,"buttonLabel",void 0);Ye=Mt([B("wui-cta-button")],Ye);var Ue={},Wt,Wr;function Cn(){return Wr||(Wr=1,Wt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Wt}var Zt={},ye={},Zr;function je(){if(Zr)return ye;Zr=1;let e;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ye.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},ye.getSymbolTotalCodewords=function(i){return t[i]},ye.getBCHDigit=function(o){let i=0;for(;o!==0;)i++,o>>>=1;return i},ye.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');e=i},ye.isKanjiModeEnabled=function(){return typeof e<"u"},ye.toSJIS=function(i){return e(i)},ye}var Ut={},Ur;function Cr(){return Ur||(Ur=1,(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+o)}}e.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},e.from=function(i,n){if(e.isValid(i))return i;try{return t(i)}catch{return n}}})(Ut)),Ut}var qt,qr;function _n(){if(qr)return qt;qr=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(t){const o=Math.floor(t/8);return(this.buffer[o]>>>7-t%8&1)===1},put:function(t,o){for(let i=0;i<o;i++)this.putBit((t>>>o-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),t&&(this.buffer[o]|=128>>>this.length%8),this.length++}},qt=e,qt}var Kt,Kr;function kn(){if(Kr)return Kt;Kr=1;function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return e.prototype.set=function(t,o,i,n){const r=t*this.size+o;this.data[r]=i,n&&(this.reservedBit[r]=!0)},e.prototype.get=function(t,o){return this.data[t*this.size+o]},e.prototype.xor=function(t,o,i){this.data[t*this.size+o]^=i},e.prototype.isReserved=function(t,o){return this.reservedBit[t*this.size+o]},Kt=e,Kt}var Gt={},Gr;function Sn(){return Gr||(Gr=1,(function(e){const t=je().getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const n=Math.floor(i/7)+2,r=t(i),a=r===145?26:Math.ceil((r-13)/(2*n-2))*2,s=[r-7];for(let l=1;l<n-1;l++)s[l]=s[l-1]-a;return s.push(6),s.reverse()},e.getPositions=function(i){const n=[],r=e.getRowColCoords(i),a=r.length;for(let s=0;s<a;s++)for(let l=0;l<a;l++)s===0&&l===0||s===0&&l===a-1||s===a-1&&l===0||n.push([r[s],r[l]]);return n}})(Gt)),Gt}var Yt={},Yr;function An(){if(Yr)return Yt;Yr=1;const e=je().getSymbolSize,t=7;return Yt.getPositions=function(i){const n=e(i);return[[0,0],[n-t,0],[0,n-t]]},Yt}var Jt={},Jr;function En(){return Jr||(Jr=1,(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const r=n.size;let a=0,s=0,l=0,u=null,d=null;for(let p=0;p<r;p++){s=l=0,u=d=null;for(let m=0;m<r;m++){let f=n.get(p,m);f===u?s++:(s>=5&&(a+=t.N1+(s-5)),u=f,s=1),f=n.get(m,p),f===d?l++:(l>=5&&(a+=t.N1+(l-5)),d=f,l=1)}s>=5&&(a+=t.N1+(s-5)),l>=5&&(a+=t.N1+(l-5))}return a},e.getPenaltyN2=function(n){const r=n.size;let a=0;for(let s=0;s<r-1;s++)for(let l=0;l<r-1;l++){const u=n.get(s,l)+n.get(s,l+1)+n.get(s+1,l)+n.get(s+1,l+1);(u===4||u===0)&&a++}return a*t.N2},e.getPenaltyN3=function(n){const r=n.size;let a=0,s=0,l=0;for(let u=0;u<r;u++){s=l=0;for(let d=0;d<r;d++)s=s<<1&2047|n.get(u,d),d>=10&&(s===1488||s===93)&&a++,l=l<<1&2047|n.get(d,u),d>=10&&(l===1488||l===93)&&a++}return a*t.N3},e.getPenaltyN4=function(n){let r=0;const a=n.data.length;for(let l=0;l<a;l++)r+=n.data[l];return Math.abs(Math.ceil(r*100/a/5)-10)*t.N4};function o(i,n,r){switch(i){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(n,r){const a=r.size;for(let s=0;s<a;s++)for(let l=0;l<a;l++)r.isReserved(l,s)||r.xor(l,s,o(n,l,s))},e.getBestMask=function(n,r){const a=Object.keys(e.Patterns).length;let s=0,l=1/0;for(let u=0;u<a;u++){r(u),e.applyMask(u,n);const d=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(u,n),d<l&&(l=d,s=u)}return s}})(Jt)),Jt}var Ct={},Qr;function To(){if(Qr)return Ct;Qr=1;const e=Cr(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Ct.getBlocksCount=function(n,r){switch(r){case e.L:return t[(n-1)*4+0];case e.M:return t[(n-1)*4+1];case e.Q:return t[(n-1)*4+2];case e.H:return t[(n-1)*4+3];default:return}},Ct.getTotalCodewordsCount=function(n,r){switch(r){case e.L:return o[(n-1)*4+0];case e.M:return o[(n-1)*4+1];case e.Q:return o[(n-1)*4+2];case e.H:return o[(n-1)*4+3];default:return}},Ct}var Qt={},it={},Xr;function Pn(){if(Xr)return it;Xr=1;const e=new Uint8Array(512),t=new Uint8Array(256);return(function(){let i=1;for(let n=0;n<255;n++)e[n]=i,t[i]=n,i<<=1,i&256&&(i^=285);for(let n=255;n<512;n++)e[n]=e[n-255]})(),it.log=function(i){if(i<1)throw new Error("log("+i+")");return t[i]},it.exp=function(i){return e[i]},it.mul=function(i,n){return i===0||n===0?0:e[t[i]+t[n]]},it}var eo;function zn(){return eo||(eo=1,(function(e){const t=Pn();e.mul=function(i,n){const r=new Uint8Array(i.length+n.length-1);for(let a=0;a<i.length;a++)for(let s=0;s<n.length;s++)r[a+s]^=t.mul(i[a],n[s]);return r},e.mod=function(i,n){let r=new Uint8Array(i);for(;r.length-n.length>=0;){const a=r[0];for(let l=0;l<n.length;l++)r[l]^=t.mul(n[l],a);let s=0;for(;s<r.length&&r[s]===0;)s++;r=r.slice(s)}return r},e.generateECPolynomial=function(i){let n=new Uint8Array([1]);for(let r=0;r<i;r++)n=e.mul(n,new Uint8Array([1,t.exp(r)]));return n}})(Qt)),Qt}var Xt,to;function Rn(){if(to)return Xt;to=1;const e=zn();function t(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(i){this.degree=i,this.genPoly=e.generateECPolynomial(this.degree)},t.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(i.length+this.degree);n.set(i);const r=e.mod(n,this.genPoly),a=this.degree-r.length;if(a>0){const s=new Uint8Array(this.degree);return s.set(r,a),s}return r},Xt=t,Xt}var er={},tr={},rr={},ro;function Lo(){return ro||(ro=1,rr.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),rr}var ne={},oo;function Io(){if(oo)return ne;oo=1;const e="[0-9]+",t="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+`)(?:.|[\r
]))+`;ne.KANJI=new RegExp(o,"g"),ne.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),ne.BYTE=new RegExp(i,"g"),ne.NUMERIC=new RegExp(e,"g"),ne.ALPHANUMERIC=new RegExp(t,"g");const n=new RegExp("^"+o+"$"),r=new RegExp("^"+e+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return ne.testKanji=function(l){return n.test(l)},ne.testNumeric=function(l){return r.test(l)},ne.testAlphanumeric=function(l){return a.test(l)},ne}var io;function Fe(){return io||(io=1,(function(e){const t=Lo(),o=Io();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return o.testNumeric(r)?e.NUMERIC:o.testAlphanumeric(r)?e.ALPHANUMERIC:o.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function i(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(r,a){if(e.isValid(r))return r;try{return i(r)}catch{return a}}})(tr)),tr}var no;function Tn(){return no||(no=1,(function(e){const t=je(),o=To(),i=Cr(),n=Fe(),r=Lo(),a=7973,s=t.getBCHDigit(a);function l(m,f,C){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,C,m))return y}function u(m,f){return n.getCharCountIndicator(m,f)+4}function d(m,f){let C=0;return m.forEach(function(y){const E=u(y.mode,f);C+=E+y.getBitsLength()}),C}function p(m,f){for(let C=1;C<=40;C++)if(d(m,C)<=e.getCapacity(C,f,n.MIXED))return C}e.from=function(f,C){return r.isValid(f)?parseInt(f,10):C},e.getCapacity=function(f,C,y){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=n.BYTE);const E=t.getSymbolTotalCodewords(f),b=o.getTotalCodewordsCount(f,C),w=(E-b)*8;if(y===n.MIXED)return w;const v=w-u(y,f);switch(y){case n.NUMERIC:return Math.floor(v/10*3);case n.ALPHANUMERIC:return Math.floor(v/11*2);case n.KANJI:return Math.floor(v/13);case n.BYTE:default:return Math.floor(v/8)}},e.getBestVersionForData=function(f,C){let y;const E=i.from(C,i.M);if(Array.isArray(f)){if(f.length>1)return p(f,E);if(f.length===0)return 1;y=f[0]}else y=f;return l(y.mode,y.getLength(),E)},e.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let C=f<<12;for(;t.getBCHDigit(C)-s>=0;)C^=a<<t.getBCHDigit(C)-s;return f<<12|C}})(er)),er}var or={},ao;function Ln(){if(ao)return or;ao=1;const e=je(),t=1335,o=21522,i=e.getBCHDigit(t);return or.getEncodedBits=function(r,a){const s=r.bit<<3|a;let l=s<<10;for(;e.getBCHDigit(l)-i>=0;)l^=t<<e.getBCHDigit(l)-i;return(s<<10|l)^o},or}var ir={},nr,so;function In(){if(so)return nr;so=1;const e=Fe();function t(o){this.mode=e.NUMERIC,this.data=o.toString()}return t.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let n,r,a;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),a=parseInt(r,10),i.put(a,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),a=parseInt(r,10),i.put(a,s*3+1))},nr=t,nr}var ar,lo;function Bn(){if(lo)return ar;lo=1;const e=Fe(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(i){this.mode=e.ALPHANUMERIC,this.data=i}return o.getBitsLength=function(n){return 11*Math.floor(n/2)+6*(n%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(n){let r;for(r=0;r+2<=this.data.length;r+=2){let a=t.indexOf(this.data[r])*45;a+=t.indexOf(this.data[r+1]),n.put(a,11)}this.data.length%2&&n.put(t.indexOf(this.data[r]),6)},ar=o,ar}var sr,co;function Mn(){return co||(co=1,sr=function(t){for(var o=[],i=t.length,n=0;n<i;n++){var r=t.charCodeAt(n);if(r>=55296&&r<=56319&&i>n+1){var a=t.charCodeAt(n+1);a>=56320&&a<=57343&&(r=(r-55296)*1024+a-56320+65536,n+=1)}if(r<128){o.push(r);continue}if(r<2048){o.push(r>>6|192),o.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){o.push(r>>12|224),o.push(r>>6&63|128),o.push(r&63|128);continue}if(r>=65536&&r<=1114111){o.push(r>>18|240),o.push(r>>12&63|128),o.push(r>>6&63|128),o.push(r&63|128);continue}o.push(239,191,189)}return new Uint8Array(o).buffer}),sr}var lr,uo;function Hn(){if(uo)return lr;uo=1;const e=Mn(),t=Fe();function o(i){this.mode=t.BYTE,typeof i=="string"&&(i=e(i)),this.data=new Uint8Array(i)}return o.getBitsLength=function(n){return n*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(i){for(let n=0,r=this.data.length;n<r;n++)i.put(this.data[n],8)},lr=o,lr}var cr,ho;function On(){if(ho)return cr;ho=1;const e=Fe(),t=je();function o(i){this.mode=e.KANJI,this.data=i}return o.getBitsLength=function(n){return n*13},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(i){let n;for(n=0;n<this.data.length;n++){let r=t.toSJIS(this.data[n]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[n]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),i.put(r,13)}},cr=o,cr}var ur={exports:{}},po;function Dn(){return po||(po=1,(function(e){var t={single_source_shortest_paths:function(o,i,n){var r={},a={};a[i]=0;var s=t.PriorityQueue.make();s.push(i,0);for(var l,u,d,p,m,f,C,y,E;!s.empty();){l=s.pop(),u=l.value,p=l.cost,m=o[u]||{};for(d in m)m.hasOwnProperty(d)&&(f=m[d],C=p+f,y=a[d],E=typeof a[d]>"u",(E||y>C)&&(a[d]=C,s.push(d,C),r[d]=u))}if(typeof n<"u"&&typeof a[n]>"u"){var b=["Could not find a path from ",i," to ",n,"."].join("");throw new Error(b)}return r},extract_shortest_path_from_predecessor_list:function(o,i){for(var n=[],r=i;r;)n.push(r),o[r],r=o[r];return n.reverse(),n},find_path:function(o,i,n){var r=t.single_source_shortest_paths(o,i,n);return t.extract_shortest_path_from_predecessor_list(r,n)},PriorityQueue:{make:function(o){var i=t.PriorityQueue,n={},r;o=o||{};for(r in i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=o.sorter||i.default_sorter,n},default_sorter:function(o,i){return o.cost-i.cost},push:function(o,i){var n={value:o,cost:i};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(ur)),ur.exports}var fo;function Nn(){return fo||(fo=1,(function(e){const t=Fe(),o=In(),i=Bn(),n=Hn(),r=On(),a=Io(),s=je(),l=Dn();function u(b){return unescape(encodeURIComponent(b)).length}function d(b,w,v){const g=[];let O;for(;(O=b.exec(v))!==null;)g.push({data:O[0],index:O.index,mode:w,length:O[0].length});return g}function p(b){const w=d(a.NUMERIC,t.NUMERIC,b),v=d(a.ALPHANUMERIC,t.ALPHANUMERIC,b);let g,O;return s.isKanjiModeEnabled()?(g=d(a.BYTE,t.BYTE,b),O=d(a.KANJI,t.KANJI,b)):(g=d(a.BYTE_KANJI,t.BYTE,b),O=[]),w.concat(v,g,O).sort(function(P,A){return P.index-A.index}).map(function(P){return{data:P.data,mode:P.mode,length:P.length}})}function m(b,w){switch(w){case t.NUMERIC:return o.getBitsLength(b);case t.ALPHANUMERIC:return i.getBitsLength(b);case t.KANJI:return r.getBitsLength(b);case t.BYTE:return n.getBitsLength(b)}}function f(b){return b.reduce(function(w,v){const g=w.length-1>=0?w[w.length-1]:null;return g&&g.mode===v.mode?(w[w.length-1].data+=v.data,w):(w.push(v),w)},[])}function C(b){const w=[];for(let v=0;v<b.length;v++){const g=b[v];switch(g.mode){case t.NUMERIC:w.push([g,{data:g.data,mode:t.ALPHANUMERIC,length:g.length},{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.ALPHANUMERIC:w.push([g,{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.KANJI:w.push([g,{data:g.data,mode:t.BYTE,length:u(g.data)}]);break;case t.BYTE:w.push([{data:g.data,mode:t.BYTE,length:u(g.data)}])}}return w}function y(b,w){const v={},g={start:{}};let O=["start"];for(let $=0;$<b.length;$++){const P=b[$],A=[];for(let x=0;x<P.length;x++){const R=P[x],k=""+$+x;A.push(k),v[k]={node:R,lastCount:0},g[k]={};for(let z=0;z<O.length;z++){const S=O[z];v[S]&&v[S].node.mode===R.mode?(g[S][k]=m(v[S].lastCount+R.length,R.mode)-m(v[S].lastCount,R.mode),v[S].lastCount+=R.length):(v[S]&&(v[S].lastCount=R.length),g[S][k]=m(R.length,R.mode)+4+t.getCharCountIndicator(R.mode,w))}}O=A}for(let $=0;$<O.length;$++)g[O[$]].end=0;return{map:g,table:v}}function E(b,w){let v;const g=t.getBestModeForData(b);if(v=t.from(w,g),v!==t.BYTE&&v.bit<g.bit)throw new Error('"'+b+'" cannot be encoded with mode '+t.toString(v)+`.
 Suggested mode is: `+t.toString(g));switch(v===t.KANJI&&!s.isKanjiModeEnabled()&&(v=t.BYTE),v){case t.NUMERIC:return new o(b);case t.ALPHANUMERIC:return new i(b);case t.KANJI:return new r(b);case t.BYTE:return new n(b)}}e.fromArray=function(w){return w.reduce(function(v,g){return typeof g=="string"?v.push(E(g,null)):g.data&&v.push(E(g.data,g.mode)),v},[])},e.fromString=function(w,v){const g=p(w,s.isKanjiModeEnabled()),O=C(g),$=y(O,v),P=l.find_path($.map,"start","end"),A=[];for(let x=1;x<P.length-1;x++)A.push($.table[P[x]].node);return e.fromArray(f(A))},e.rawSplit=function(w){return e.fromArray(p(w,s.isKanjiModeEnabled()))}})(ir)),ir}var go;function Vn(){if(go)return Zt;go=1;const e=je(),t=Cr(),o=_n(),i=kn(),n=Sn(),r=An(),a=En(),s=To(),l=Rn(),u=Tn(),d=Ln(),p=Fe(),m=Nn();function f($,P){const A=$.size,x=r.getPositions(P);for(let R=0;R<x.length;R++){const k=x[R][0],z=x[R][1];for(let S=-1;S<=7;S++)if(!(k+S<=-1||A<=k+S))for(let T=-1;T<=7;T++)z+T<=-1||A<=z+T||(S>=0&&S<=6&&(T===0||T===6)||T>=0&&T<=6&&(S===0||S===6)||S>=2&&S<=4&&T>=2&&T<=4?$.set(k+S,z+T,!0,!0):$.set(k+S,z+T,!1,!0))}}function C($){const P=$.size;for(let A=8;A<P-8;A++){const x=A%2===0;$.set(A,6,x,!0),$.set(6,A,x,!0)}}function y($,P){const A=n.getPositions(P);for(let x=0;x<A.length;x++){const R=A[x][0],k=A[x][1];for(let z=-2;z<=2;z++)for(let S=-2;S<=2;S++)z===-2||z===2||S===-2||S===2||z===0&&S===0?$.set(R+z,k+S,!0,!0):$.set(R+z,k+S,!1,!0)}}function E($,P){const A=$.size,x=u.getEncodedBits(P);let R,k,z;for(let S=0;S<18;S++)R=Math.floor(S/3),k=S%3+A-8-3,z=(x>>S&1)===1,$.set(R,k,z,!0),$.set(k,R,z,!0)}function b($,P,A){const x=$.size,R=d.getEncodedBits(P,A);let k,z;for(k=0;k<15;k++)z=(R>>k&1)===1,k<6?$.set(k,8,z,!0):k<8?$.set(k+1,8,z,!0):$.set(x-15+k,8,z,!0),k<8?$.set(8,x-k-1,z,!0):k<9?$.set(8,15-k-1+1,z,!0):$.set(8,15-k-1,z,!0);$.set(x-8,8,1,!0)}function w($,P){const A=$.size;let x=-1,R=A-1,k=7,z=0;for(let S=A-1;S>0;S-=2)for(S===6&&S--;;){for(let T=0;T<2;T++)if(!$.isReserved(R,S-T)){let ve=!1;z<P.length&&(ve=(P[z]>>>k&1)===1),$.set(R,S-T,ve),k--,k===-1&&(z++,k=7)}if(R+=x,R<0||A<=R){R-=x,x=-x;break}}}function v($,P,A){const x=new o;A.forEach(function(T){x.put(T.mode.bit,4),x.put(T.getLength(),p.getCharCountIndicator(T.mode,$)),T.write(x)});const R=e.getSymbolTotalCodewords($),k=s.getTotalCodewordsCount($,P),z=(R-k)*8;for(x.getLengthInBits()+4<=z&&x.put(0,4);x.getLengthInBits()%8!==0;)x.putBit(0);const S=(z-x.getLengthInBits())/8;for(let T=0;T<S;T++)x.put(T%2?17:236,8);return g(x,$,P)}function g($,P,A){const x=e.getSymbolTotalCodewords(P),R=s.getTotalCodewordsCount(P,A),k=x-R,z=s.getBlocksCount(P,A),S=x%z,T=z-S,ve=Math.floor(x/z),rt=Math.floor(k/z),Vo=rt+1,Pr=ve-rt,jo=new l(Pr);let Ot=0;const yt=new Array(z),zr=new Array(z);let Dt=0;const Fo=new Uint8Array($.buffer);for(let Ze=0;Ze<z;Ze++){const Vt=Ze<T?rt:Vo;yt[Ze]=Fo.slice(Ot,Ot+Vt),zr[Ze]=jo.encode(yt[Ze]),Ot+=Vt,Dt=Math.max(Dt,Vt)}const Nt=new Uint8Array(x);let Rr=0,de,he;for(de=0;de<Dt;de++)for(he=0;he<z;he++)de<yt[he].length&&(Nt[Rr++]=yt[he][de]);for(de=0;de<Pr;de++)for(he=0;he<z;he++)Nt[Rr++]=zr[he][de];return Nt}function O($,P,A,x){let R;if(Array.isArray($))R=m.fromArray($);else if(typeof $=="string"){let ve=P;if(!ve){const rt=m.rawSplit($);ve=u.getBestVersionForData(rt,A)}R=m.fromString($,ve||40)}else throw new Error("Invalid data");const k=u.getBestVersionForData(R,A);if(!k)throw new Error("The amount of data is too big to be stored in a QR Code");if(!P)P=k;else if(P<k)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+k+`.
`);const z=v(P,A,R),S=e.getSymbolSize(P),T=new i(S);return f(T,P),C(T),y(T,P),b(T,A,0),P>=7&&E(T,P),w(T,z),isNaN(x)&&(x=a.getBestMask(T,b.bind(null,T,A))),a.applyMask(x,T),b(T,A,x),{modules:T,version:P,errorCorrectionLevel:A,maskPattern:x,segments:R}}return Zt.create=function(P,A){if(typeof P>"u"||P==="")throw new Error("No input text");let x=t.M,R,k;return typeof A<"u"&&(x=t.from(A.errorCorrectionLevel,t.M),R=u.from(A.version),k=a.from(A.maskPattern),A.toSJISFunc&&e.setToSJISFunction(A.toSJISFunc)),O(P,R,x,k)},Zt}var dr={},hr={},mo;function Bo(){return mo||(mo=1,(function(e){function t(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let i=o.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+o);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const n=parseInt(i.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const n=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,a=i.scale||4;return{width:r,scale:r?4:a,margin:n,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,n){return n.width&&n.width>=i+n.margin*2?n.width/(i+n.margin*2):n.scale},e.getImageWidth=function(i,n){const r=e.getScale(i,n);return Math.floor((i+n.margin*2)*r)},e.qrToImageData=function(i,n,r){const a=n.modules.size,s=n.modules.data,l=e.getScale(a,r),u=Math.floor((a+r.margin*2)*l),d=r.margin*l,p=[r.color.light,r.color.dark];for(let m=0;m<u;m++)for(let f=0;f<u;f++){let C=(m*u+f)*4,y=r.color.light;if(m>=d&&f>=d&&m<u-d&&f<u-d){const E=Math.floor((m-d)/l),b=Math.floor((f-d)/l);y=p[s[E*a+b]?1:0]}i[C++]=y.r,i[C++]=y.g,i[C++]=y.b,i[C]=y.a}}})(hr)),hr}var wo;function jn(){return wo||(wo=1,(function(e){const t=Bo();function o(n,r,a){n.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=a,r.width=a,r.style.height=a+"px",r.style.width=a+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(r,a,s){let l=s,u=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(u=i()),l=t.getOptions(l);const d=t.getImageWidth(r.modules.size,l),p=u.getContext("2d"),m=p.createImageData(d,d);return t.qrToImageData(m.data,r,l),o(p,u,d),p.putImageData(m,0,0),u},e.renderToDataURL=function(r,a,s){let l=s;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const u=e.render(r,a,l),d=l.type||"image/png",p=l.rendererOpts||{};return u.toDataURL(d,p.quality)}})(dr)),dr}var pr={},bo;function Fn(){if(bo)return pr;bo=1;const e=Bo();function t(n,r){const a=n.a/255,s=r+'="'+n.hex+'"';return a<1?s+" "+r+'-opacity="'+a.toFixed(2).slice(1)+'"':s}function o(n,r,a){let s=n+r;return typeof a<"u"&&(s+=" "+a),s}function i(n,r,a){let s="",l=0,u=!1,d=0;for(let p=0;p<n.length;p++){const m=Math.floor(p%r),f=Math.floor(p/r);!m&&!u&&(u=!0),n[p]?(d++,p>0&&m>0&&n[p-1]||(s+=u?o("M",m+a,.5+f+a):o("m",l,0),l=0,u=!1),m+1<r&&n[p+1]||(s+=o("h",d),d=0)):l++}return s}return pr.render=function(r,a,s){const l=e.getOptions(a),u=r.modules.size,d=r.modules.data,p=u+l.margin*2,m=l.color.light.a?"<path "+t(l.color.light,"fill")+' d="M0 0h'+p+"v"+p+'H0z"/>':"",f="<path "+t(l.color.dark,"stroke")+' d="'+i(d,u,l.margin)+'"/>',C='viewBox="0 0 '+p+" "+p+'"',E='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+C+' shape-rendering="crispEdges">'+m+f+`</svg>
`;return typeof s=="function"&&s(null,E),E},pr}var vo;function Wn(){if(vo)return Ue;vo=1;const e=Cn(),t=Vn(),o=jn(),i=Fn();function n(r,a,s,l,u){const d=[].slice.call(arguments,1),p=d.length,m=typeof d[p-1]=="function";if(!m&&!e())throw new Error("Callback required as last argument");if(m){if(p<2)throw new Error("Too few arguments provided");p===2?(u=s,s=a,a=l=void 0):p===3&&(a.getContext&&typeof u>"u"?(u=l,l=void 0):(u=l,l=s,s=a,a=void 0))}else{if(p<1)throw new Error("Too few arguments provided");return p===1?(s=a,a=l=void 0):p===2&&!a.getContext&&(l=s,s=a,a=void 0),new Promise(function(f,C){try{const y=t.create(s,l);f(r(y,a,l))}catch(y){C(y)}})}try{const f=t.create(s,l);u(null,r(f,a,l))}catch(f){u(f)}}return Ue.create=t.create,Ue.toCanvas=n.bind(null,o.render),Ue.toDataURL=n.bind(null,o.renderToDataURL),Ue.toString=n.bind(null,function(r,a,s){return i.render(r,s)}),Ue}var Zn=Wn();const Un=Uo(Zn),qn=.1,yo=2.5,pe=7;function fr(e,t,o){return e===t?!1:(e-t<0?t-e:e-t)<=o+qn}function Kn(e,t){const o=Array.prototype.slice.call(Un.create(e,{errorCorrectionLevel:t}).modules.data,0),i=Math.sqrt(o.length);return o.reduce((n,r,a)=>(a%i===0?n.push([r]):n[n.length-1].push(r))&&n,[])}const Gn={generate({uri:e,size:t,logoSize:o,padding:i=8,dotColor:n="var(--apkt-colors-black)"}){const a=[],s=Kn(e,"Q"),l=(t-2*i)/s.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:y,y:E})=>{const b=(s.length-pe)*l*y+i,w=(s.length-pe)*l*E+i,v=.45;for(let g=0;g<u.length;g+=1){const O=l*(pe-g*2);a.push(I`
            <rect
              fill=${g===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${g===0?O-10:O}
              rx= ${g===0?(O-10)*v:O*v}
              ry= ${g===0?(O-10)*v:O*v}
              stroke=${n}
              stroke-width=${g===0?10:0}
              height=${g===0?O-10:O}
              x= ${g===0?w+l*g+10/2:w+l*g}
              y= ${g===0?b+l*g+10/2:b+l*g}
            />
          `)}});const d=Math.floor((o+25)/l),p=s.length/2-d/2,m=s.length/2+d/2-1,f=[];s.forEach((y,E)=>{y.forEach((b,w)=>{if(s[E][w]&&!(E<pe&&w<pe||E>s.length-(pe+1)&&w<pe||E<pe&&w>s.length-(pe+1))&&!(E>p&&E<m&&w>p&&w<m)){const v=E*l+l/2+i,g=w*l+l/2+i;f.push([v,g])}})});const C={};return f.forEach(([y,E])=>{C[y]?C[y]?.push(E):C[y]=[E]}),Object.entries(C).map(([y,E])=>{const b=E.filter(w=>E.every(v=>!fr(w,v,l)));return[Number(y),b]}).forEach(([y,E])=>{E.forEach(b=>{a.push(I`<circle cx=${y} cy=${b} fill=${n} r=${l/yo} />`)})}),Object.entries(C).filter(([y,E])=>E.length>1).map(([y,E])=>{const b=E.filter(w=>E.some(v=>fr(w,v,l)));return[Number(y),b]}).map(([y,E])=>{E.sort((w,v)=>w<v?-1:1);const b=[];for(const w of E){const v=b.find(g=>g.some(O=>fr(w,O,l)));v?v.push(w):b.push([w])}return[y,b.map(w=>[w[0],w[w.length-1]])]}).forEach(([y,E])=>{E.forEach(([b,w])=>{a.push(I`
              <line
                x1=${y}
                x2=${y}
                y1=${b}
                y2=${w}
                stroke=${n}
                stroke-width=${l/(yo/2)}
                stroke-linecap="round"
              />
            `)})}),a}},Yn=H`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var Se=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let le=class extends L{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),h`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return I`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Gn.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?h`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:h`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};le.styles=[M,Yn];Se([c()],le.prototype,"uri",void 0);Se([c({type:Number})],le.prototype,"size",void 0);Se([c()],le.prototype,"theme",void 0);Se([c()],le.prototype,"imageSrc",void 0);Se([c()],le.prototype,"alt",void 0);Se([c({type:Boolean})],le.prototype,"arenaClear",void 0);Se([c({type:Boolean})],le.prototype,"farcaster",void 0);le=Se([B("wui-qr-code")],le);const Jn=H`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundPrimary} 0%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 50%,
      ${({tokens:e})=>e.theme.foregroundPrimary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;var vt=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let De=class extends L{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",h`<slot></slot>`}};De.styles=[Jn];vt([c()],De.prototype,"width",void 0);vt([c()],De.prototype,"height",void 0);vt([c()],De.prototype,"variant",void 0);vt([c({type:Boolean})],De.prototype,"rounded",void 0);De=vt([B("wui-shimmer")],De);const Qn="https://reown.com",Xn=H`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var ea=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let wr=class extends L{render(){return h`
      <a
        data-testid="ux-branding-reown"
        href=${Qn}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};wr.styles=[M,j,Xn];wr=ea([B("wui-ux-by-reown")],wr);const ta=e=>e.strings===void 0;const nt=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const i of o)i._$AO?.(t,!1),nt(i,t);return!0},zt=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},Mo=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),ia(t)}};function ra(e){this._$AN!==void 0?(zt(this),this._$AM=e,Mo(this)):this._$AM=e}function oa(e,t=!1,o=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let r=o;r<i.length;r++)nt(i[r],!1),zt(i[r]);else i!=null&&(nt(i,!1),zt(i));else nt(this,e)}const ia=e=>{e.type==Ao.CHILD&&(e._$AP??=oa,e._$AQ??=ra)};class na extends Po{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,i){super._$AT(t,o,i),Mo(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(nt(this,t),zt(this))}setValue(t){if(ta(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const _r=()=>new aa;class aa{}const gr=new WeakMap,kr=Eo(class extends na{render(e){return N}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),N}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=gr.get(t);o===void 0&&(o=new WeakMap,gr.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?gr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),sa=H`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var Ht=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Je=class extends L{constructor(){super(...arguments),this.inputElementRef=_r(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return h`
      <label data-size=${this.size}>
        <input
          ${kr(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Je.styles=[M,j,sa];Ht([c({type:Boolean})],Je.prototype,"checked",void 0);Ht([c({type:Boolean})],Je.prototype,"disabled",void 0);Ht([c()],Je.prototype,"size",void 0);Je=Ht([B("wui-toggle")],Je);const la=H`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Ho=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Rt=class extends L{constructor(){super(...arguments),this.checked=!1}render(){return h`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Rt.styles=[M,j,la];Ho([c({type:Boolean})],Rt.prototype,"checked",void 0);Rt=Ho([B("wui-certified-switch")],Rt);const ca=H`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var te=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let U=class extends L{constructor(){super(...arguments),this.inputElementRef=_r(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return h` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${kr(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${J(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?h`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?h`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?h`<wui-icon name="spinner" size="md"></wui-icon>`:h`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?h`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?h`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};U.styles=[M,j,ca];te([c()],U.prototype,"icon",void 0);te([c({type:Boolean})],U.prototype,"disabled",void 0);te([c({type:Boolean})],U.prototype,"loading",void 0);te([c()],U.prototype,"placeholder",void 0);te([c()],U.prototype,"type",void 0);te([c()],U.prototype,"value",void 0);te([c()],U.prototype,"errorText",void 0);te([c()],U.prototype,"warningText",void 0);te([c()],U.prototype,"onSubmit",void 0);te([c()],U.prototype,"size",void 0);te([c({attribute:!1})],U.prototype,"onKeyDown",void 0);U=te([B("wui-input-text")],U);const ua=H`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var Oo=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Tt=class extends L{constructor(){super(...arguments),this.inputComponentRef=_r(),this.inputValue=""}render(){return h`
      <wui-input-text
        ${kr(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?h`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const o=this.inputComponentRef.value?.inputElementRef.value;o&&(o.value="",this.inputValue="",o.focus(),o.dispatchEvent(new Event("input")))}};Tt.styles=[M,ua];Oo([c()],Tt.prototype,"inputValue",void 0);Tt=Oo([B("wui-search-bar")],Tt);const Do=I`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,da=H`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var No=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Lt=class extends L{constructor(){super(...arguments),this.type="wallet"}render(){return h`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?h` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Do}`:h`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};Lt.styles=[M,j,da];No([c()],Lt.prototype,"type",void 0);Lt=No([B("wui-card-select-loader")],Lt);const ha=X`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var re=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let q=class extends L{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&V.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&V.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&V.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&V.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&V.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&V.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&V.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&V.getSpacingStyles(this.margin,3)};
    `,h`<slot></slot>`}};q.styles=[M,ha];re([c()],q.prototype,"gridTemplateRows",void 0);re([c()],q.prototype,"gridTemplateColumns",void 0);re([c()],q.prototype,"justifyItems",void 0);re([c()],q.prototype,"alignItems",void 0);re([c()],q.prototype,"justifyContent",void 0);re([c()],q.prototype,"alignContent",void 0);re([c()],q.prototype,"columnGap",void 0);re([c()],q.prototype,"rowGap",void 0);re([c()],q.prototype,"gap",void 0);re([c()],q.prototype,"padding",void 0);re([c()],q.prototype,"margin",void 0);q=re([B("wui-grid")],q);const pa=H`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Y=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Z=class extends L{constructor(){super(...arguments),this.type="primary",this.imageSrc="google",this.imageSize=void 0,this.loading=!1,this.boxColor="foregroundPrimary",this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",this.dataset.type=this.type,h`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${J(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?h`<wui-image
        icon=${this.icon}
        iconColor=${J(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:h`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${J(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?h`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:h`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};Z.styles=[M,j,pa];Y([c()],Z.prototype,"type",void 0);Y([c()],Z.prototype,"imageSrc",void 0);Y([c()],Z.prototype,"imageSize",void 0);Y([c()],Z.prototype,"icon",void 0);Y([c()],Z.prototype,"iconColor",void 0);Y([c({type:Boolean})],Z.prototype,"loading",void 0);Y([c()],Z.prototype,"tabIdx",void 0);Y([c()],Z.prototype,"boxColor",void 0);Y([c({type:Boolean})],Z.prototype,"disabled",void 0);Y([c({type:Boolean})],Z.prototype,"rightIcon",void 0);Y([c({type:Boolean})],Z.prototype,"boxed",void 0);Y([c({type:Boolean})],Z.prototype,"rounded",void 0);Y([c({type:Boolean})],Z.prototype,"fullSize",void 0);Z=Y([B("wui-list-item")],Z);const fa=H`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var ga=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let br=class extends L{render(){return h`<slot></slot>`}};br.styles=[M,fa];br=ga([B("wui-card")],br);const ma=H`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var Sr=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const wa={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let ut=class extends L{constructor(){super(...arguments),this.message="",this.type="info"}render(){return h`
      <wui-flex
        data-type=${J(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${wa[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){qo.close()}};ut.styles=[M,ma];Sr([c()],ut.prototype,"message",void 0);Sr([c()],ut.prototype,"type",void 0);ut=Sr([B("wui-alertbar")],ut);const ba=H`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Ae=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let ce=class extends L{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return h`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${J(this.iconSize)}></wui-icon>
    </button>`}};ce.styles=[M,j,ba];Ae([c()],ce.prototype,"icon",void 0);Ae([c()],ce.prototype,"variant",void 0);Ae([c()],ce.prototype,"type",void 0);Ae([c()],ce.prototype,"size",void 0);Ae([c()],ce.prototype,"iconSize",void 0);Ae([c({type:Boolean})],ce.prototype,"fullWidth",void 0);Ae([c({type:Boolean})],ce.prototype,"disabled",void 0);ce=Ae([B("wui-icon-button")],ce);const va=H`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var Xe=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const ya={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},xa={lg:"lg",md:"md",sm:"sm"};let Ce=class extends L{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return h`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const t=ya[this.size];return this.text?h`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return h`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const t=xa[this.size];return h` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};Ce.styles=[M,j,va];Xe([c()],Ce.prototype,"imageSrc",void 0);Xe([c()],Ce.prototype,"text",void 0);Xe([c()],Ce.prototype,"size",void 0);Xe([c()],Ce.prototype,"type",void 0);Xe([c({type:Boolean})],Ce.prototype,"disabled",void 0);Ce=Xe([B("wui-select")],Ce);const $a=H`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var et=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let _e=class extends L{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){const t={accent:"accent-primary",primary:"inverse",secondary:"default"};return h`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${t[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};_e.styles=[M,j,$a];et([c()],_e.prototype,"size",void 0);et([c({type:Boolean})],_e.prototype,"disabled",void 0);et([c()],_e.prototype,"icon",void 0);et([c()],_e.prototype,"iconColor",void 0);et([c()],_e.prototype,"variant",void 0);_e=et([B("wui-icon-link")],_e);const Ca=I`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,_a=I`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,ka=H`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var We=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let be=class extends L{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:_a,md:Do,lg:Ca},this.selected=!1,this.round=!1}render(){const t={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${t[this.size]});
    `,h`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:h`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};be.styles=[M,ka];We([c()],be.prototype,"size",void 0);We([c()],be.prototype,"name",void 0);We([c({type:Object})],be.prototype,"networkImagesBySize",void 0);We([c()],be.prototype,"imageSrc",void 0);We([c({type:Boolean})],be.prototype,"selected",void 0);We([c({type:Boolean})],be.prototype,"round",void 0);be=We([B("wui-network-image")],be);const Sa=H`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var Ar=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let dt=class extends L{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,h`${this.template()}`}template(){return this.text?h`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};dt.styles=[M,Sa];Ar([c()],dt.prototype,"text",void 0);Ar([c()],dt.prototype,"bgColor",void 0);dt=Ar([B("wui-separator")],dt);const Aa=H`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var tt=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};const Ea=3,Pa=2,za=.3,Ra="200px",Ta={"accent-primary":D.tokens.core.backgroundAccentPrimary};let ke=class extends L{constructor(){super(...arguments),this.rings=Ea,this.duration=Pa,this.opacity=za,this.size=Ra,this.variant="accent-primary"}render(){const t=Ta[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${t};
      --pulse-opacity: ${this.opacity};
    `;const o=Array.from({length:this.rings},(i,n)=>this.renderRing(n,this.rings));return h`
      <div class="pulse-container">
        <div class="pulse-rings">${o}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(t,o){const n=`animation-delay: ${t/o*this.duration}s;`;return h`<div class="pulse-ring" style=${n}></div>`}};ke.styles=[M,Aa];tt([c({type:Number})],ke.prototype,"rings",void 0);tt([c({type:Number})],ke.prototype,"duration",void 0);tt([c({type:Number})],ke.prototype,"opacity",void 0);tt([c()],ke.prototype,"size",void 0);tt([c()],ke.prototype,"variant",void 0);ke=tt([B("wui-pulse")],ke);const La=H`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var ie=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let Q=class extends L{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return h`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const t=this.icon?h`<wui-icon
          size=${J(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:h`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return h`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${t}
        ${this.enableGreenCircle?h`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return h`
      <wui-text variant="lg-regular" color="primary">
        ${V.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return h`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};Q.styles=[M,j,La];ie([c()],Q.prototype,"address",void 0);ie([c()],Q.prototype,"profileName",void 0);ie([c()],Q.prototype,"alt",void 0);ie([c()],Q.prototype,"imageSrc",void 0);ie([c()],Q.prototype,"icon",void 0);ie([c()],Q.prototype,"iconSize",void 0);ie([c({type:Boolean})],Q.prototype,"enableGreenCircle",void 0);ie([c({type:Boolean})],Q.prototype,"loading",void 0);ie([c({type:Number})],Q.prototype,"charsStart",void 0);ie([c({type:Number})],Q.prototype,"charsEnd",void 0);Q=ie([B("wui-wallet-switch")],Q);const Ia=H`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var Er=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let ht=class extends L{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return h`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){const t={success:"success",error:"error",warning:"warning",info:"default"},o={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};return this.variant==="loading"?h`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:h`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${o[this.variant]}
    ></wui-icon-box>`}};ht.styles=[M,Ia];Er([c()],ht.prototype,"message",void 0);Er([c()],ht.prototype,"variant",void 0);ht=Er([B("wui-snackbar")],ht);export{Ha as M,V as U,Na as a,h as b,B as c,H as d,Da as e,Xi as f,L as i,J as o,Nr as s,D as v};
