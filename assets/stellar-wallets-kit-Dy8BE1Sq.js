import{y as A,g as _e,a as we,m as b,d as Wt,b as mr,C as hr,R as Ae}from"./react-vendor-Angmm_rT.js";import{Y as br}from"./wc-sign-client-BbJHN3dw.js";import{c as wr,m as yr}from"./reown-appkit-D8mgKhN-.js";var F;(function(e){e.AUTH_OPTIONS="AUTH_OPTIONS",e.HELP_PAGE="HELP_PAGE",e.PROFILE_PAGE="PROFILE_PAGE",e.HW_ACCOUNTS_FETCHER="HW_ACCOUNTS_FETCHER"})(F||(F={}));var Y;(function(e){e.FIXED="FIXED",e.BLOCK="BLOCK",e.HIDDEN="HIDDEN"})(Y||(Y={}));const ft={background:"#fcfcfcff","background-secondary":"#f8f8f8ff","foreground-strong":"#000000",foreground:"#161619ff","foreground-secondary":"#2d2d31ff",primary:"#3b82f6","primary-foreground":"#ffffff",transparent:"rgba(0, 0, 0, 0)",lighter:"#fcfcfc",light:"#f8f8f8","light-gray":"oklch(0.800 0.006 286.033)",gray:"oklch(0.600 0.006 286.033)",danger:"oklch(57.7% 0.245 27.325)",border:"rgba(0, 0, 0, 0.15)",shadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)","border-radius":"0.5rem","font-family":"sans-serif"},vr={background:"oklch(0.333 0 89.876)","background-secondary":"oklch(0 0 0)","foreground-strong":"#fff",foreground:"oklch(0.985 0 0)","foreground-secondary":"oklch(0.97 0 0)",primary:"#e0e0e0","primary-foreground":"#1e1e1e",transparent:"rgba(0, 0, 0, 0)",lighter:"#fcfcfc",light:"#f8f8f8","light-gray":"oklch(0.800 0.006 286.033)",gray:"oklch(0.600 0.006 286.033)",danger:"oklch(57.7% 0.245 27.325)",border:"rgba(58,58,58,0.15)",shadow:"0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -4px rgba(255, 255, 255, 0.1)","border-radius":"0.5rem","font-family":"sans-serif"};var P;(function(e){e.usedWalletsIds="@StellarWalletsKit/usedWalletsIds",e.activeAddress="@StellarWalletsKit/activeAddress",e.selectedModuleId="@StellarWalletsKit/selectedModuleId",e.hardwareWalletPaths="@StellarWalletsKit/hardwareWalletPaths",e.wcSessionPaths="@StellarWalletsKit/wcSessionPaths"})(P||(P={}));var ne;(function(e){e.PUBLIC="Public Global Stellar Network ; September 2015",e.TESTNET="Test SDF Network ; September 2015",e.FUTURENET="Test SDF Future Network ; October 2022",e.SANDBOX="Local Sandbox Stellar Network ; September 2022",e.STANDALONE="Standalone Network ; February 2017"})(ne||(ne={}));var We;(function(e){e.HW_WALLET="HW_WALLET",e.HOT_WALLET="HOT_WALLET",e.BRIDGE_WALLET="BRIDGE_WALLET",e.AIR_GAPED_WALLET="AIR_GAPED_WALLET"})(We||(We={}));var ee;(function(e){e.STATE_UPDATED="STATE_UPDATE",e.WALLET_SELECTED="WALLET_SELECTED",e.DISCONNECT="DISCONNECT"})(ee||(ee={}));const Ve=globalThis.localStorage,Ie=A(Y.FIXED),De=A("Connect a Wallet"),gt=A(!0),Xt=A(!0),qt=A("Install"),xr=A("https://horizon.stellar.org"),B=A(ne.PUBLIC),mt=A(ft),Ne=A(F.AUTH_OPTIONS),ae=A([F.AUTH_OPTIONS]),x=A(Ve?.getItem(P.activeAddress)||void 0),Q=A(Ve?.getItem(P.selectedModuleId)||void 0),ht=A([]),be=A([]),z=_e(()=>be.value.find(e=>e.productId===Q.value)),kr=Ve?.getItem(P.hardwareWalletPaths),ye=A(JSON.parse(kr||"[]")),$r=_e(()=>{const e=ye.value.find(({publicKey:t})=>t===x.value);if(e)return`44'/148'/${e.index}'`}),Cr=Ve?.getItem(P.wcSessionPaths),Z=A(JSON.parse(Cr||"[]"));function Jt(){ae.value=[],ye.value=[],Z.value=[],x.value=void 0,Q.value=void 0}function je(){const e=A(null);let t="active",r=null;const n=new Set,o=new Set,i=new Set;we(()=>{if(t==="active"&&e.value!==null){const a=e.value;e.value=null;for(const l of n)l(a)}});function s(){n.clear(),o.clear(),i.clear()}return{next(a){t==="active"&&(e.value=a)},error(a){if(t==="active"){t="error",r=a;for(const l of o)l(a);s()}},complete(){if(t==="active"){t="completed";for(const a of i)a();s()}},subscribe(a,l,u){return t==="error"?(l?.(r),()=>{}):t==="completed"?(u?.(),()=>{}):(a&&n.add(a),l&&o.add(l),u&&i.add(u),()=>{a&&n.delete(a),l&&o.delete(l),u&&i.delete(u)})},isCompleted(){return t==="completed"},hasError(){return t==="error"}}}const Yt=je(),ve=je(),xe=je(),bt=je(),J=globalThis.localStorage,It=globalThis.document,Sr=we(()=>{if(It)for(const[e,t]of Object.entries(mt.value))It.documentElement.style.setProperty(`--swk-${e}`,t)}),Tr=we(()=>{if(J&&z.value)try{const e=J.getItem(P.usedWalletsIds),t=e?new Set(JSON.parse(e)):new Set;t.has(z.value.productId)&&t.delete(z.value.productId),J.setItem(P.usedWalletsIds,JSON.stringify([z.value.productId,...t]))}catch(e){console.error(e)}}),Er=we(()=>{J&&(x.value?J.setItem(P.activeAddress,x.value):J.removeItem(P.activeAddress),Q.value?J.setItem(P.selectedModuleId,Q.value):J.removeItem(P.selectedModuleId),typeof ye.value<"u"&&J.setItem(P.hardwareWalletPaths,JSON.stringify(ye.value)),typeof Z.value<"u"&&J.setItem(P.wcSessionPaths,JSON.stringify(Z.value)))});let Je;function wt(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Qt(e,t=","){return e.map(wt).join(t)}let yt=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function ke(e){for(var t=9,r=e.length;r--;)t=Math.imul(t^e.charCodeAt(r),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function vt(e,t="@media "){return t+v(e).map(r=>(typeof r=="string"&&(r={min:r}),r.raw||Object.keys(r).map(n=>`(${n}-width:${r[n]})`).join(" and "))).join(",")}function v(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Ot(e){return e}function Be(){}let I={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Kt(e){return e.match(/[-=:;]/g)?.length||0}function ot(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Kt(e),15)<<18}let Ar=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function xt({n:e,i:t,v:r=[]},n,o,i){e&&(e=wt({n:e,i:t,v:r})),i=[...v(i)];for(let a of r){let l=n.theme("screens",a);for(let u of v(l&&vt(l)||n.v(a))){var s;i.push(u),o|=l?67108864|ot(u):a=="dark"?1073741824:u[0]=="@"?ot(u):(s=u,1<<~(/:([a-z-]+)/.test(s)&&~Ar.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:i,i:t}}let kt=new Map;function it(e){if(e.d){let t=[],r=Ye(e.r.reduce((n,o)=>o[0]=="@"?(t.push(o),n):o?Ye(n,i=>Ye(o,s=>{let a=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(s);if(a){let l=i.indexOf(a[1]);return~l?i.slice(0,l)+a[0]+i.slice(l+a[1].length):Qe(i,s)}return Qe(s,i)})):n,"&"),n=>Qe(n,e.n?"."+yt(e.n):""));return r&&t.push(r.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((n,o)=>o+"{"+n+"}",e.d)}}function Ye(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(r,n,o)=>t(n)+o)}function Qe(e,t){return e.replace(/&/g,t)}let Pt=new Intl.Collator("en",{numeric:!0});function er(e,t){for(var r=0,n=e.length;r<n;){let o=n+r>>1;0>=tr(e[o],t)?r=o+1:n=o}return n}function tr(e,t){let r=e.p&I.o;return r==(t.p&I.o)&&(r==I.b||r==I.o)?0:e.p-t.p||e.o-t.o||Pt.compare(Mt(e.n),Mt(t.n))||Pt.compare(Dt(e.n),Dt(t.n))}function Mt(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Dt(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Ke(e,t){return Math.round(parseInt(e,16)*t)}function oe(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:r="1",opacityVariable:n}=t,o=n?`var(${n})`:r;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let i=(e.length-1)/3,s=[17,1,.062272][i-1];return`rgba(${[Ke(e.substr(1,i),s),Ke(e.substr(1+i,i),s),Ke(e.substr(1+2*i,i),s),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function $t(e,t,r,n,o=[]){return(function i(s,{n:a,p:l,r:u=[],i:g},f){let h=[],k="",C=0,S=0;for(let w in s||{}){var O,se;let T=s[w];if(w[0]=="@"){if(!T)continue;if(w[1]=="a"){h.push(...Tt(a,l,Oe(""+T),f,l,u,g,!0));continue}if(w[1]=="l"){for(let M of v(T))h.push(...i(M,{n:a,p:(O=I[w[7]],l&-939524097|O),r:w[7]=="d"?[]:u,i:g},f));continue}if(w[1]=="i"){h.push(...v(T).map(M=>({p:-1,o:0,r:[],d:w+" "+M})));continue}if(w[1]=="k"){h.push({p:I.d,o:0,r:[w],d:i(T,{p:I.d},f).map(it).join("")});continue}if(w[1]=="f"){h.push(...v(T).map(M=>({p:I.d,o:0,r:[w],d:i(M,{p:I.d},f).map(it).join("")})));continue}}if(typeof T!="object"||Array.isArray(T))w=="label"&&T?a=T+ke(JSON.stringify([l,g,s])):(T||T===0)&&(w=w.replace(/[A-Z]/g,M=>"-"+M.toLowerCase()),S+=1,C=Math.max(C,(se=w)[0]=="-"?0:Kt(se)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(se)?+!!RegExp.$1||-!!RegExp.$2:0)+1),k+=(k?";":"")+v(T).map(M=>f.s(w,Ct(""+M,f.theme)+(g?" !important":""))).join(";"));else if(w[0]=="@"||w.includes("&")){let M=l;w[0]=="@"&&(w=w.replace(/\bscreen\(([^)]+)\)/g,(qe,me)=>{let X=f.theme("screens",me);return X?(M|=67108864,vt(X,"")):qe}),M|=ot(w)),h.push(...i(T,{n:a,p:M,r:[...u,w],i:g},f))}else h.push(...i(T,{p:l,r:[...u,w]},f))}return h.unshift({n:a,p:l,o:Math.max(0,15-S)+1.5*Math.min(C||15,15),r:u,d:k}),h.sort(tr)})(e,xt(t,r,n,o),r)}function Ct(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(r,n,o,i,s="")=>{let a=t(o,s);return typeof a=="function"&&/color|fill|stroke/i.test(o)?oe(a):""+v(a).filter(l=>Object(l)!==l)})}function St(e,t){let r,n=[];for(let o of e)o.d&&o.n?r?.p==o.p&&""+r.r==""+o.r?(r.c=[r.c,o.c].filter(Boolean).join(" "),r.d=r.d+";"+o.d):n.push(r={...o,n:o.n&&t}):n.push({...o,n:o.n&&t});return n}function Re(e,t,r=I.u,n,o){let i=[];for(let s of e)for(let a of(function(l,u,g,f,h){l={...l,i:l.i||h};let k=(function(C,S){let O=kt.get(C.n);return O?O(C,S):S.r(C.n,C.v[0]=="dark")})(l,u);return k?typeof k=="string"?({r:f,p:g}=xt(l,u,g,f),St(Re(Oe(k),u,g,f,l.i),l.n)):Array.isArray(k)?k.map(C=>{var S,O;return{o:0,...C,r:[...v(f),...v(C.r)],p:(S=g,O=C.p??g,S&-939524097|O)}}):$t(k,l,u,g,f):[{c:wt(l),p:0,o:0,r:[]}]})(s,t,r,n,o))i.splice(er(i,a),0,a);return i}function Tt(e,t,r,n,o,i,s,a){return St((a?r.flatMap(l=>Re([l],n,o,i,s)):Re(r,n,o,i,s)).map(l=>l.p&I.o&&(l.n||t==I.b)?{...l,p:l.p&-939524097|t,o:0}:l),e)}function Lr(e,t,r,n){var o;return o=(i,s)=>{let{n:a,p:l,r:u,i:g}=xt(i,s,t);return r&&Tt(a,t,r,s,l,u,g,n)},kt.set(e,o),e}function et(e,t,r){if(e[e.length-1]!="("){let n=[],o=!1,i=!1,s="";for(let a of e)if(!(a=="("||/[~@]$/.test(a))){if(a[0]=="!"&&(a=a.slice(1),o=!o),a.endsWith(":")){n[a=="dark:"?"unshift":"push"](a.slice(0,-1));continue}a[0]=="-"&&(a=a.slice(1),i=!i),a.endsWith("-")&&(a=a.slice(0,-1)),a&&a!="&"&&(s+=(s&&"-")+a)}s&&(i&&(s="-"+s),t[0].push({n:s,v:n.filter(Wr),i:o}))}}function Wr(e,t,r){return r.indexOf(e)==t}let Nt=new Map;function Oe(e){let t=Nt.get(e);if(!t){let r=[],n=[[]],o=0,i=0,s=null,a=0,l=(u,g=0)=>{o!=a&&(r.push(e.slice(o,a+g)),u&&et(r,n)),o=a+1};for(;a<e.length;a++){let u=e[a];if(i)e[a-1]!="\\"&&(i+=+(u=="[")||-(u=="]"));else if(u=="[")i+=1;else if(s)e[a-1]!="\\"&&s.test(e.slice(a))&&(s=null,o=a+RegExp.lastMatch.length);else if(u=="/"&&e[a-1]!="\\"&&(e[a+1]=="*"||e[a+1]=="/"))s=e[a+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),r.push(u);else if(u==":")e[a+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let g=r.lastIndexOf("(");if(u==")"){let f=r[g-1];if(/[~@]$/.test(f)){let h=n.shift();r.length=g,et([...r,"#"],n);let{v:k}=n[0].pop();for(let C of h)C.v.splice(+(C.v[0]=="dark")-+(k[0]=="dark"),k.length);et([...r,Lr(f.length>1?f.slice(0,-1)+ke(JSON.stringify([f,h])):f+"("+Qt(h)+")",I.a,h,/@$/.test(f))],n)}g=r.lastIndexOf("(",g-1)}r.length=g+1}else/[~@]/.test(u)&&e[a+1]=="("&&n.unshift([])}l(!0),Nt.set(e,t=n[0])}return t}function rr(e,t,r){return t.reduce((n,o,i)=>n+r(o)+e[i+1],e[0])}function Et(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?rr(e,t,r=>tt(r).trim()):t.filter(Boolean).reduce((r,n)=>r+tt(n),e?tt(e):"")}function tt(e){let t,r="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Et(e[0],e.slice(1)))&&(r+=" "+t);else for(let n in e)e[n]&&(r+=" "+n);else e!=null&&typeof e!="boolean"&&(r+=" "+e);return r}function He(e,t){return Array.isArray(e)?jt(rr(e,t,r=>r!=null&&typeof r!="boolean"?r:"")):typeof e=="string"?jt(e):[e]}let Ir=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function jt(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let r=[{}],n=[r[0]],o=[];for(;t=Ir.exec(e);)t[4]&&(r.shift(),o.shift()),t[3]?(o.unshift(t[3]),r.unshift({}),n.push(o.reduce((i,s)=>({[s]:i}),r[0]))):t[4]||(r[0][t[1]]&&(r.unshift({}),n.push(o.reduce((i,s)=>({[s]:i}),r[0]))),r[0][t[1]]=t[2]);return n}function Ge(e,...t){var r;let n=He(e,t),o=(n.find(i=>i.label)?.label||"css")+ke(JSON.stringify(n));return r=(i,s)=>St(n.flatMap(a=>$t(a,i,s,I.o)),o),kt.set(o,r),o}function c(e,t,r){return[e,at(t,r)]}function at(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?((r,n)=>({[e]:t?t(r,n):lt(r,1)})):r=>e||{[r[1]]:lt(r,2)}}function lt(e,t,r=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${r} * -1)`:r}function d(e,t,r,n){return[e,Or(t,r,n)]}function Or(e,t,r){let n=typeof t=="string"?(o,i)=>({[t]:r?r(o,i):o._}):t||(({1:o,_:i},s,a)=>({[o||a]:i}));return(o,i)=>{let s=nr(e||o[1]),a=i.theme(s,o.$$)??ie(o.$$,s,i);if(a!=null)return o._=lt(o,0,a),n(o,i,s)}}function L(e,t={},r){return[e,Pr(t,r)]}function Pr(e={},t){return(r,n)=>{let{section:o=nr(r[0]).replace("-","")+"Color"}=e,[i,s]=Mr(r.$$);if(!i)return;let a=n.theme(o,i)||ie(i,o,n);if(!a||typeof a=="object")return;let{opacityVariable:l=`--tw-${r[0].replace(/-$/,"")}-opacity`,opacitySection:u=o.replace("Color","Opacity"),property:g=o,selector:f}=e,h=n.theme(u,s||"DEFAULT")||s&&ie(s,u,n),k=t||(({_:S})=>{let O=ze(g,S);return f?{[f]:O}:O});r._={value:oe(a,{opacityVariable:l||void 0,opacityValue:h||void 0}),color:S=>oe(a,S),opacityVariable:l||void 0,opacityValue:h||void 0};let C=k(r,n);if(!r.dark){let S=n.d(o,i,a);S&&S!==a&&(r._={value:oe(S,{opacityVariable:l||void 0,opacityValue:h||"1"}),color:O=>oe(S,O),opacityVariable:l||void 0,opacityValue:h||void 0},C={"&":C,[n.v("dark")]:k(r,n)})}return C}}function Mr(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function ze(e,t){let r={};return typeof t=="string"?r[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(r[t.opacityVariable]=t.opacityValue||"1"),r[e]=t.value),r}function ie(e,t,r){if(e[0]=="["&&e.slice(-1)=="]"){if(e=Pe(Ct(e.slice(1,-1),r.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function nr(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function Pe(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,r="",n,o="")=>Pe(r)+n+Pe(o)):e.replace(/(^|[^\\])_+/g,(t,r)=>r+" ".repeat(t.length-r.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}function ue(e,...t){return Qt(Oe(Et(e,t))," ")}function or({presets:e=[],...t}){let r={darkMode:void 0,darkColor:void 0,preflight:t.preflight!==!1&&[],theme:{},variants:v(t.variants),rules:v(t.rules),ignorelist:v(t.ignorelist),hash:void 0,stringify:(n,o)=>n+":"+o,finalize:[]};for(let n of v([...e,{darkMode:t.darkMode,darkColor:t.darkColor,preflight:t.preflight!==!1&&v(t.preflight),theme:t.theme,hash:t.hash,stringify:t.stringify,finalize:t.finalize}])){let{preflight:o,darkMode:i=r.darkMode,darkColor:s=r.darkColor,theme:a,variants:l,rules:u,ignorelist:g,hash:f=r.hash,stringify:h=r.stringify,finalize:k}=typeof n=="function"?n(r):n;r={preflight:r.preflight!==!1&&o!==!1&&[...r.preflight,...v(o)],darkMode:i,darkColor:s,theme:{...r.theme,...a,extend:{...r.theme.extend,...a?.extend}},variants:[...r.variants,...v(l)],rules:[...r.rules,...v(u)],ignorelist:[...r.ignorelist,...v(g)],hash:f,stringify:h,finalize:[...r.finalize,...v(k)]}}return r}function Ft(e,t,r,n,o,i){for(let s of t){let a=r.get(s);a||r.set(s,a=n(s));let l=a(e,o,i);if(l)return l}}function Dr(e){var t;return st(e[0],typeof(t=e[1])=="function"?t:()=>t)}function Nr(e){var t,r;return Array.isArray(e)?st(e[0],at(e[1],e[2])):st(e,at(t,r))}function st(e,t){return ir(e,(r,n,o,i)=>{let s=n.exec(r);if(s)return s.$$=r.slice(s[0].length),s.dark=i,t(s,o)})}function ir(e,t){let r=v(e).map(jr);return(n,o,i)=>{for(let s of r){let a=t(n,s,o,i);if(a)return a}}}function jr(e){return typeof e=="string"?RegExp("^"+e+(e.includes("$")||e.slice(-1)=="-"?"":"$")):e}function Fr(e,t){let r=or(e),n=(function({theme:l,darkMode:u,darkColor:g=Be,variants:f,rules:h,hash:k,stringify:C,ignorelist:S,finalize:O}){let se=new Map,w=new Map,T=new Map,M=new Map,qe=ir(S,(y,D)=>D.test(y));f.push(["dark",Array.isArray(u)||u=="class"?`${v(u)[1]||".dark"} &`:typeof u=="string"&&u!="media"?u:"@media (prefers-color-scheme:dark)"]);let me=typeof k=="function"?y=>k(y,ke):k?ke:Ot;me!==Ot&&O.push(y=>({...y,n:y.n&&me(y.n),d:y.d?.replace(/--(tw(?:-[\w-]+)?)\b/g,(D,_)=>"--"+me(_).replace("#",""))}));let X={theme:(function({extend:y={},...D}){let _={},fr={get colors(){return Ce("colors")},theme:Ce,negative(){return{}},breakpoints(W){let R={};for(let H in W)typeof W[H]=="string"&&(R["screen-"+H]=W[H]);return R}};return Ce;function Ce(W,R,H,Se){if(W){if({1:W,2:Se}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(W)||[,W],/[.[]/.test(W)){let K=[];W.replace(/\[([^\]]+)\]|([^.[]+)/g,(de,Ee,gr=Ee)=>K.push(gr)),W=K.shift(),H=R,R=K.join("-")}let q=_[W]||Object.assign(Object.assign(_[W]={},Lt(D,W)),Lt(y,W));if(R==null)return q;R||(R="DEFAULT");let ce=q[R]??R.split("-").reduce((K,de)=>K?.[de],q)??H;return Se?oe(ce,{opacityValue:Ct(Se,Ce)}):ce}let Te={};for(let q of[...Object.keys(D),...Object.keys(y)])Te[q]=Ce(q);return Te}function Lt(W,R){let H=W[R];return typeof H=="function"&&(H=H(fr)),H&&/color|fill|stroke/i.test(R)?(function Se(Te,q=[]){let ce={};for(let K in Te){let de=Te[K],Ee=[...q,K];ce[Ee.join("-")]=de,K=="DEFAULT"&&(Ee=q,ce[q.join("-")]=de),typeof de=="object"&&Object.assign(ce,Se(de,Ee))}return ce})(H):H}})(l),e:yt,h:me,s(y,D){return C(y,D,X)},d(y,D,_){return g(y,D,X,_)},v(y){return se.has(y)||se.set(y,Ft(y,f,w,Dr,X)||"&:"+y),se.get(y)},r(y,D){let _=JSON.stringify([y,D]);return T.has(_)||T.set(_,!qe(y,X)&&Ft(y,h,M,Nr,X,D)),T.get(_)},f(y){return O.reduce((D,_)=>_(D,X),y)}};return X})(r),o=new Map,i=[],s=new Set;t.resume(l=>o.set(l,l),(l,u)=>{t.insert(l,i.length,u),i.push(u),s.add(l)});function a(l){let u=n.f(l),g=it(u);if(g&&!s.has(g)){s.add(g);let f=er(i,l);t.insert(g,f,l),i.splice(f,0,l)}return u.n}return Object.defineProperties(function(u){if(!o.size)for(let f of v(r.preflight))typeof f=="function"&&(f=f(n)),f&&(typeof f=="string"?Tt("",I.b,Oe(f),n,I.b,[],!1,!0):$t(f,{},n,I.b)).forEach(a);u=""+u;let g=o.get(u);if(!g){let f=new Set;for(let h of Re(Oe(u),n))f.add(h.c).add(a(h));g=[...f].filter(Boolean).join(" "),o.set(u,g).set(g,g)}return g},Object.getOwnPropertyDescriptors({get target(){return t.target},theme:n.theme,config:r,snapshot(){let l=t.snapshot(),u=new Set(s),g=new Map(o),f=[...i];return()=>{l(),s=u,o=g,i=f}},clear(){t.clear(),s=new Set,o=new Map,i=[]},destroy(){this.clear(),t.destroy()}}))}function zr(e){let t=document.querySelector(e);return(!t||t.tagName!="STYLE")&&(t=document.createElement("style"),document.head.prepend(t)),t.dataset.twind="claimed",t}function Rr(e){let t=e?.cssRules?e:zr(e).sheet;return{target:t,snapshot(){let r=Array.from(t.cssRules,n=>n.cssText);return()=>{this.clear(),r.forEach(this.insert)}},clear(){for(let r=t.cssRules.length;r--;)t.deleteRule(r)},destroy(){t.ownerNode?.remove()},insert(r,n){try{t.insertRule(r,n)}catch{t.insertRule(":root{}",n)}},resume:Be}}function Hr(e){let t=[];return{target:t,snapshot(){let r=[...t];return()=>{t.splice(0,t.length,...r)}},clear(){t.length=0},destroy(){this.clear()},insert(r,n,o){t.splice(n,0,r)},resume:Be}}let At=new Proxy(Be,{apply(e,t,r){return Je(r[0])},get(e,t){let r=Je[t];return typeof r=="function"?function(){return r.apply(Je,arguments)}:r}}),Ur=function(e,...t){(typeof this=="function"?this:At)(Ge({"@layer base":He(e,t)}))},_r=(function e(t){return new Proxy(function(n,...o){return zt(t,"",n,o)},{get(r,n){return n==="bind"?e:n in r?r[n]:function(i,...s){return zt(t,n,i,s)}}})})();function zt(e,t,r,n){return{toString(){let o=He(r,n),i=yt(t+ke(JSON.stringify([t,o])));return(typeof e=="function"?e:At)(Ge({[`@keyframes ${i}`]:He(r,n)})),i}}}let Vr=function(e,...t){return(typeof this=="function"?this:At)(Et(e,t))};var Br=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["print-color-adjust","color-adjust"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function Gr(e){return Br.get(e)}function Zr(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}function Xr(e,t){var r=/^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(e);return r?r[1]?/^sti/i.test(t)?1:0:r[2]?/^pat/i.test(t)?1:0:r[3]?/^image-/i.test(t)?1:0:r[4]?t[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(t)?4:0:0}let qr=[["-webkit-",1],["-moz-",2],["-ms-",4]];function Jr(){return({stringify:e})=>({stringify(t,r,n){let o="",i=Gr(t);i&&(o+=e(i,r,n)+";");let s=Zr(t),a=Xr(t,r);for(let l of qr)s&l[1]&&(o+=e(l[0]+t,r,n)+";"),a&l[1]&&(o+=e(t,l[0]+r,n)+";");return o+e(t,r,n)}})}let ct={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...U(4,"rem",4,.5,.5),...U(12,"rem",4,5),14:"3.5rem",...U(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:m("blur"),backdropBrightness:m("brightness"),backdropContrast:m("contrast"),backdropGrayscale:m("grayscale"),backdropHueRotate:m("hueRotate"),backdropInvert:m("invert"),backdropOpacity:m("opacity"),backdropSaturate:m("saturate"),backdropSepia:m("sepia"),backgroundColor:m("colors"),backgroundImage:{none:"none"},backgroundOpacity:m("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...U(200,"",100,0,50),...U(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:m("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:m("spacing"),borderWidth:{DEFAULT:"1px",...V(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:m("colors"),caretColor:m("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...U(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:m("borderColor"),divideOpacity:m("borderOpacity"),divideWidth:m("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:e})=>({...e("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Le(2,6),...Le(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:m("spacing"),gradientColorStops:m("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Le(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Le(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...U(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...U(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:m("spacing"),placeholderColor:m("colors"),placeholderOpacity:m("opacity"),outlineColor:m("colors"),outlineOffset:V(8,"px"),outlineWidth:V(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:m("colors"),ringOffsetWidth:V(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...V(8,"px")},rotate:{...V(2,"deg"),...V(12,"deg",3),...V(180,"deg",45)},saturate:U(200,"",100,0,50),scale:{...U(150,"",100,0,50),...U(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:m("spacing"),scrollPadding:m("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...V(2,"deg"),...V(12,"deg",3)},space:m("spacing"),stroke:({theme:e})=>({...e("colors"),none:"none"}),strokeWidth:U(2),textColor:m("colors"),textDecorationColor:m("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...V(8,"px")},textUnderlineOffset:{auto:"auto",...V(8,"px")},textIndent:m("spacing"),textOpacity:m("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:m("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Le(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...U(50,"",1,0,10),auto:"auto"}};function Le(e,t){let r={};do for(var n=1;n<e;n++)r[`${n}/${e}`]=Number((n/e*100).toFixed(6))+"%";while(++e<=t);return r}function V(e,t,r=0){let n={};for(;r<=e;r=2*r||1)n[r]=r+t;return n}function U(e,t="",r=1,n=0,o=1,i={}){for(;n<=e;n+=o)i[n]=n/r+t;return i}function m(e){return({theme:t})=>t(e)}let Yr={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${ct.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${ct.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Qr=[c("\\[([-\\w]+):(.+)]",({1:e,2:t},r)=>({"@layer overrides":{"&":{[e]:ie(`[${t}]`,"",r)}}})),c("(group|peer)([~/][^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),d("aspect-","aspectRatio"),c("container",(e,{theme:t})=>{let{screens:r=t("screens"),center:n,padding:o}=t("container"),i={width:"100%",marginRight:n&&"auto",marginLeft:n&&"auto",...s("xs")};for(let a in r){let l=r[a];typeof l=="string"&&(i[vt(l)]={"&":{maxWidth:l,...s(a)}})}return i;function s(a){let l=o&&(typeof o=="string"?o:o[a]||o.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),d("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),c("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),c("box-(border|content)","boxSizing",({1:e})=>e+"-box"),c("hidden",{display:"none"}),c("table-(auto|fixed)","tableLayout"),c(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",c("isolate","isolation"),c("object-(contain|cover|fill|none|scale-down)","objectFit"),d("object-","objectPosition"),c("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Fe),c("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),c("(static|fixed|absolute|relative|sticky)","position"),d("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),d("-?(top|bottom|left|right)(?:$|-)","inset"),c("(visible|collapse)","visibility"),c("invisible",{visibility:"hidden"}),d("-?z-","zIndex"),c("flex-((row|col)(-reverse)?)","flexDirection",Rt),c("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),d("(flex-(?:grow|shrink))(?:$|-)"),d("(flex)-"),d("grow(?:$|-)","flexGrow"),d("shrink(?:$|-)","flexShrink"),d("basis-","flexBasis"),d("-?(order)-"),"-?(order)-(\\d+)",d("grid-cols-","gridTemplateColumns"),c("grid-cols-(\\d+)","gridTemplateColumns",Vt),d("col-","gridColumn"),c("col-(span)-(\\d+)","gridColumn",_t),d("col-start-","gridColumnStart"),c("col-start-(auto|\\d+)","gridColumnStart"),d("col-end-","gridColumnEnd"),c("col-end-(auto|\\d+)","gridColumnEnd"),d("grid-rows-","gridTemplateRows"),c("grid-rows-(\\d+)","gridTemplateRows",Vt),d("row-","gridRow"),c("row-(span)-(\\d+)","gridRow",_t),d("row-start-","gridRowStart"),c("row-start-(auto|\\d+)","gridRowStart"),d("row-end-","gridRowEnd"),c("row-end-(auto|\\d+)","gridRowEnd"),c("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Fe(Rt(e))),c("grid-flow-(dense)","gridAutoFlow"),d("auto-cols-","gridAutoColumns"),d("auto-rows-","gridAutoRows"),d("gap-x(?:$|-)","gap","columnGap"),d("gap-y(?:$|-)","gap","rowGap"),d("gap(?:$|-)","gap"),"(justify-(?:items|self))-",c("justify-","justifyContent",Ht),c("(content|items|self)-",e=>({["align-"+e[1]]:Ht(e)})),c("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),d("p([xytrbl])?(?:$|-)","padding",he("padding")),d("-?m([xytrbl])?(?:$|-)","margin",he("margin")),d("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),c("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),d("w-","width"),d("min-w-","minWidth"),d("max-w-","maxWidth"),d("h-","height"),d("min-h-","minHeight"),d("max-h-","maxHeight"),d("font-","fontWeight"),d("font-","fontFamily",({_:e})=>typeof(e=v(e))[1]=="string"?{fontFamily:G(e)}:{fontFamily:G(e[0]),...e[1]}),c("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),c("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),c("italic","fontStyle"),c("not-italic",{fontStyle:"normal"}),c("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:r})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(r?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...re({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),d("tracking-","letterSpacing"),d("leading-","lineHeight"),c("list-(inside|outside)","listStylePosition"),d("list-","listStyleType"),c("list-","listStyleType"),d("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),L("placeholder-",{property:"color",selector:"&::placeholder"}),c("text-(left|center|right|justify|start|end)","textAlign"),c("text-(ellipsis|clip)","textOverflow"),d("text-opacity-","textOpacity","--tw-text-opacity"),L("text-",{property:"color"}),d("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),d("indent-","textIndent"),c("(overline|underline|line-through)","textDecorationLine"),c("no-underline",{textDecorationLine:"none"}),d("underline-offset-","textUnderlineOffset"),L("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),d("decoration-","textDecorationThickness"),c("decoration-","textDecorationStyle"),c("(uppercase|lowercase|capitalize)","textTransform"),c("normal-case",{textTransform:"none"}),c("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),c("align-","verticalAlign"),c("whitespace-","whiteSpace"),c("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),c("break-words",{overflowWrap:"break-word"}),c("break-all",{wordBreak:"break-all"}),c("break-keep",{wordBreak:"keep-all"}),L("caret-",{opacityVariable:!1,opacitySection:"opacity"}),L("accent-",{opacityVariable:!1,opacitySection:"opacity"}),c("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${pe(e," ")},var(--tw-gradient-stops))`),L("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),L("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),L("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),c("bg-(fixed|local|scroll)","backgroundAttachment"),c("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),c(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),c("bg-blend-","backgroundBlendMode"),c("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),d("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),L("bg-",{section:"backgroundColor"}),d("bg-","backgroundImage"),d("bg-","backgroundPosition"),c("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Fe),d("bg-","backgroundSize"),d("rounded(?:$|-)","borderRadius"),d("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let r={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${pe(r[0])}-radius`]:t,[`border-${pe(r[1])}-radius`]:t}}),c("border-(collapse|separate)","borderCollapse"),d("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),c("border-(solid|dashed|dotted|double|none)","borderStyle"),d("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({...re({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),L("border-([xytrbl])-",{section:"borderColor"},he("border","Color")),L("border-"),d("border-([xytrbl])(?:$|-)","borderWidth",he("border","Width")),d("border(?:$|-)","borderWidth"),d("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),c("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),c("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),d("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let r={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${pe(r[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${pe(r[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),L("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),d("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),L("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),d("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),c("ring-inset",{"--tw-ring-inset":"inset"}),L("ring-",{property:"--tw-ring-color"}),d("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({...re({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":oe(t("ringOffsetColor","","#fff")),"--tw-ring-color":oe(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),L("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),d("shadow(?:$|-)","boxShadow",({_:e})=>({...re({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":G(e),"--tw-shadow-colored":G(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),d("(opacity)-"),c("mix-blend-","mixBlendMode"),...Ut(),...Ut("backdrop-"),d("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:G(e),transitionTimingFunction:e._=="none"?void 0:G(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:G(t("transitionDuration",""))})),d("duration(?:$|-)","transitionDuration","transitionDuration",G),d("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",G),d("delay(?:$|-)","transitionDelay","transitionDelay",G),d("animate(?:$|-)","animation",(e,{theme:t,h:r,e:n})=>{let o=G(e),i=o.split(" "),s=t("keyframes",i[0]);return s?{["@keyframes "+(i[0]=n(r(i[0])))]:s,animation:i.join(" ")}:{animation:o}}),"(transform)-(none)",c("transform",dt),c("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":ar(e=="gpu")})),d("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...dt()})),d("-?(rotate)-","rotate",rt),d("-?(translate-[xy])-","translate",rt),d("-?(skew-[xy])-","skew",rt),c("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Fe),"(appearance)-",d("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",d("(cursor)-"),"(cursor)-",c("snap-(none)","scroll-snap-type"),c("snap-(x|y|both)",({1:e})=>({...re({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)"})),c("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),c("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),c("snap-(normal|always)","scroll-snap-stop"),c("scroll-(auto|smooth)","scroll-behavior"),d("scroll-p([xytrbl])?(?:$|-)","padding",he("scroll-padding")),d("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",he("scroll-margin")),c("touch-(auto|none|manipulation)","touch-action"),c("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:r})=>({...re({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${t?"pan-x":r?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)"})),c("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),c("outline",{outlineStyle:"solid"}),c("outline-(dashed|dotted|double)","outlineStyle"),d("-?(outline-offset)-"),L("outline-",{opacityVariable:!1,opacitySection:"opacity"}),d("outline-","outlineWidth"),"(pointer-events)-",d("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],c("select-(none|text|all|auto)","userSelect"),L("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),L("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),d("stroke-","strokeWidth"),c("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),c("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Fe(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Rt(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function pe(e,t="-"){let r=[];for(let n of e)r.push({t:"top",r:"right",b:"bottom",l:"left"}[n]);return r.join(t)}function G(e){return e&&""+(e._||e)}function Ht({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function he(e,t=""){return({1:r,_:n})=>{let o={x:"lr",y:"tb"}[r]||r+r;return o?{...ze(e+"-"+pe(o[0])+t,n),...ze(e+"-"+pe(o[1])+t,n)}:ze(e+t,n)}}function Ut(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),r={};for(let n of t)r[`--tw-${e}${n}`]="var(--tw-empty,/*!*/ /*!*/)";return r={...re(r),[`${e}filter`]:t.map(n=>`var(--tw-${e}${n})`).join(" ")},[`(${e}filter)-(none)`,c(`${e}filter`,r),...t.map(n=>d(`${n[0]=="h"?"-?":""}(${e}${n})(?:$|-)`,n,({1:o,_:i})=>({[`--tw-${o}`]:v(i).map(s=>`${n}(${s})`).join(" "),...r})))]}function rt({1:e,_:t}){return{["--tw-"+e]:t,...dt()}}function dt(){return{...re({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":ar()}),transform:"var(--tw-transform)"}}function ar(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function _t({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Vt({1:e}){return`repeat(${e},minmax(0,1fr))`}function re(e){return{"@layer defaults":{"*,::before,::after":e,"::backdrop":e}}}let Kr=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["(portrait|landscape)",({1:e})=>`@media (orientation:${e})`],["contrast-(more|less)",({1:e})=>`@media (prefers-contrast:${e})`],["(first-(letter|line)|placeholder|backdrop|before|after)",({1:e})=>`&::${e}`],["(marker|selection)",({1:e})=>`& *::${e},&::${e}`],["file","&::file-selector-button"],["(first|last|only)",({1:e})=>`&:${e}-child`],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["(aria|data)-",({1:e,$$:t},r)=>t&&`&[${e}-${r.theme(e,t)||ie(t,"",r)||`${t}="true"`}]`],["((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?",({2:e,3:t="",4:r,5:n="",6:o=t},{e:i,h:s,v:a})=>{let l=Pe(n)||(r[0]=="["?r:a(r.slice(1)));return`${(l.includes("&")?l:"&"+l).replace(/&/g,`:merge(.${i(s(e+o))})`)}${e[0]=="p"?"~":" "}&`}],["(ltr|rtl)",({1:e})=>`[dir="${e}"] &`],["supports-",({$$:e},t)=>{if(e&&(e=t.theme("supports",e)||ie(e,"",t)),e)return e.includes(":")||(e+=":var(--tw)"),/^\w*\s*\(/.test(e)||(e=`(${e})`),`@supports ${e.replace(/\b(and|or|not)\b/g," $1 ").trim()}`}],["max-",({$$:e},t)=>{if(e&&(e=t.theme("screens",e)||ie(e,"",t)),typeof e=="string")return`@media not all and (min-width:${e})`}],["min-",({$$:e},t)=>(e&&(e=ie(e,"",t)),e&&`@media (min-width:${e})`)],[/^\[(.+)]$/,({1:e})=>/[&@]/.test(e)&&Pe(e).replace(/[}]+$/,"").split("{")]];function en({colors:e,disablePreflight:t}={}){return{preflight:t?void 0:Yr,theme:{...ct,colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",...e}},variants:Kr,rules:Qr,finalize(r){return r.n&&r.d&&r.r.some(n=>/^&::(before|after)$/.test(n))&&!/(^|;)content:/.test(r.d)?{...r,d:"content:var(--tw-content);"+r.d}:r}}}const tn=or({preflight:!1,hash:!0,darkMode:"class",theme:{extend:{colors:{background:"var(--swk-background)","background-secondary":"var(--swk-background-secondary)","foreground-strong":"var(--swk-foreground-strong)",foreground:"var(--swk-foreground)","foreground-secondary":"var(--swk-foreground-secondary)",primary:"var(--swk-primary)","primary-foreground":"var(--swk-primary-foreground)",transparent:"var(--swk-transparent)",lighter:"var(--swk-lighter)",light:"var(--swk-light)","light-gray":"var(--swk-light-gray)",gray:"var(--swk-gray)",danger:"var(--swk-danger)",border:"var(--swk-border)"},boxShadow:{default:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"},borderRadius:{default:"var(--swk-border-radius)"},fontFamily:{default:"var(--swk-font-family)"}}},presets:[Jr(),en({disablePreflight:!0})]}),Ze=Fr(tn,typeof document>"u"?Hr():Rr("style[data-library]")),p=e=>Ze(`!(${e})`);Vr.bind(Ze);Ur.bind(Ze);_r.bind(Ze);const lr=Ge`
  .stellar-wallets-kit *,
  .stellar-wallets-kit ::after,
  .stellar-wallets-kit ::before,
  .stellar-wallets-kit ::backdrop,
  .stellar-wallets-kit ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  .stellar-wallets-kit :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family:
      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent;
  }
  .stellar-wallets-kit hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  .stellar-wallets-kit abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  .stellar-wallets-kit h1,
  .stellar-wallets-kit h2,
  .stellar-wallets-kit h3,
  .stellar-wallets-kit h4,
  .stellar-wallets-kit h5,
  .stellar-wallets-kit h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  .stellar-wallets-kit a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  .stellar-wallets-kit b,
  .stellar-wallets-kit strong {
    font-weight: bolder;
  }
  .stellar-wallets-kit code,
  .stellar-wallets-kit kbd,
  .stellar-wallets-kit samp,
  .stellar-wallets-kit pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  .stellar-wallets-kit small {
    font-size: 80%;
  }
  .stellar-wallets-kit sub,
  .stellar-wallets-kit sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  .stellar-wallets-kit sub {
    bottom: -0.25em;
  }
  .stellar-wallets-kit sup {
    top: -0.5em;
  }
  .stellar-wallets-kit table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  .stellar-wallets-kit :-moz-focusring {
    outline: auto;
  }
  .stellar-wallets-kit progress {
    vertical-align: baseline;
  }
  .stellar-wallets-kit summary {
    display: list-item;
  }
  .stellar-wallets-kit ol,
  .stellar-wallets-kit ul,
  .stellar-wallets-kit menu {
    list-style: none;
  }
  .stellar-wallets-kit img,
  .stellar-wallets-kit svg,
  .stellar-wallets-kit video,
  .stellar-wallets-kit canvas,
  .stellar-wallets-kit audio,
  .stellar-wallets-kit iframe,
  .stellar-wallets-kit embed,
  .stellar-wallets-kit object {
    display: block;
    vertical-align: middle;
  }
  .stellar-wallets-kit img,
  .stellar-wallets-kit video {
    max-width: 100%;
    height: auto;
  }
  .stellar-wallets-kit button,
  .stellar-wallets-kit input,
  .stellar-wallets-kit select,
  .stellar-wallets-kit optgroup,
  .stellar-wallets-kit textarea,
  .stellar-wallets-kit ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  .stellar-wallets-kit :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  .stellar-wallets-kit :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  .stellar-wallets-kit ::file-selector-button {
    margin-inline-end: 4px;
  }
  .stellar-wallets-kit ::placeholder {
    opacity: 1;
  }
  .stellar-wallets-kit textarea {
    resize: vertical;
  }
  .stellar-wallets-kit ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  .stellar-wallets-kit ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  .stellar-wallets-kit ::-webkit-datetime-edit {
    display: inline-flex;
  }
  .stellar-wallets-kit ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  .stellar-wallets-kit ::-webkit-datetime-edit,
  .stellar-wallets-kit ::-webkit-datetime-edit-year-field,
  .stellar-wallets-kit ::-webkit-datetime-edit-month-field,
  .stellar-wallets-kit ::-webkit-datetime-edit-day-field,
  .stellar-wallets-kit ::-webkit-datetime-edit-hour-field,
  .stellar-wallets-kit ::-webkit-datetime-edit-minute-field,
  .stellar-wallets-kit ::-webkit-datetime-edit-second-field,
  .stellar-wallets-kit ::-webkit-datetime-edit-millisecond-field,
  .stellar-wallets-kit ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  .stellar-wallets-kit ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  .stellar-wallets-kit :-moz-ui-invalid {
    box-shadow: none;
  }
  .stellar-wallets-kit button,
  .stellar-wallets-kit input:where([type="button"], [type="reset"], [type="submit"]),
  .stellar-wallets-kit ::file-selector-button {
    appearance: button;
  }
  .stellar-wallets-kit ::-webkit-inner-spin-button,
  .stellar-wallets-kit ::-webkit-outer-spin-button {
    height: auto;
  }
  .stellar-wallets-kit [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
`;var $;(function(e){e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"})($||($={}));var j;(function(e){e.primary="primary",e.secondary="secondary",e.ghost="ghost",e.free="free"})(j||(j={}));var E;(function(e){e.regular="regular",e.icon="icon"})(E||(E={}));const rn="flex items-center justify-center font-semibold easy-in-out transition leading-none";function le({size:e=$.md,mode:t=j.primary,shape:r=E.regular,classes:n,styles:o,children:i,onClick:s}){const a=ue({"border-none bg-primary text-primary-foreground shadow-default hover:opacity-70 focus:opacity-90":t===j.primary,"border-none bg-background text-foreground shadow-default hover:opacity-70 focus:opacity-90":t===j.secondary,"bg-transparent text-foreground border-transparent border-1 hover:border-light-gray":t===j.ghost}),l=ue({"rounded-default":r===E.regular,"rounded-full":r===E.icon}),u=ue({"text-xs":e===$.xs,"text-sm":e!==$.xs}),g=ue({"px-2 py-1":r===E.regular&&(e===$.xs||e===$.sm),"px-2.5 py-1.5":r===E.regular&&e===$.md,"px-3 py-2":r===E.regular&&e===$.lg,"px-3.5 py-2.5":r===E.regular&&e===$.xl,"p-1":r===E.icon&&e===$.xs,"p-1.5":r===E.icon&&e===$.sm,"p-2":r===E.icon&&e===$.md,"p-2.5":r===E.icon&&e===$.lg,"p-3":r===E.icon&&e===$.xl}),f=t===j.free?"":p(ue("cursor-pointer",rn,a,l,u,g));return b`
    <button onClick="${()=>s()}" type="button" style="${o}" class="${f} ${n}">
      ${i}
    </button>
  `}function Bt(){ae.value=[]}function Me(e){Ne.value=e,ae.value=[...ae.value,e]}function sr(){const e=ae.value;e.pop(),ae.value=e.slice(),Ne.value=e[e.length-1]}function nn({children:e,isActive:t,duration:r=300}){const[n,o]=Wt(t),[i,s]=Wt(t);if(mr(()=>{if(t)s(!0),globalThis.requestAnimationFrame(()=>o(!0));else{o(!1);const l=globalThis.setTimeout(()=>s(!1),r);return()=>globalThis.clearTimeout(l)}},[t,r]),!i)return null;const a={position:n?"relative":"absolute",inset:0,transition:`opacity ${r}ms ease, transform ${r}ms ease, position ${r}ms ease`,opacity:n?1:0};return b`<div style=${a}>${e}</div>`}function on({currentRoute:e,pages:t,duration:r=300}){const n=Object.entries(t).map(([o,i])=>b`
      <${nn} id=${o} key=${o} isActive=${e===o} duration=${r}>
        <${i} />
      <//>
    `);return b`<div style=${{position:"relative",width:"100%",height:"100%"}}>${n}</div>`}function an(){Me(F.HELP_PAGE)}function ln(){sr()}const sn=_e(()=>Ne.value!==F.AUTH_OPTIONS?ae.value.length<2?b``:b`
      <${le} onClick=${()=>ln()}
                 size="${$.md}"
                 mode="${j.ghost}"
                 shape="${E.icon}">
        
        <svg class="${p("w-4 h-4")}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
      <//>
    `:b`
      <${le} onClick=${()=>an()}
                 size="${$.md}"
                 mode="${j.ghost}"
                 shape="${E.icon}">
        <svg class="${p("w-4 h-4")}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path></svg>
      <//>
    `);function cr(){return b`
    <header class="${p("flex items-center px-3 py-2")}">
      <div class="${p("w-3/12 flex justify-start")}">
        ${sn.value}
      </div>

      <div class="${p("w-6/12 text-center")}">
        <h1 class="${p("text-foreground-strong font-semibold")}">
          ${De.value}
        </h1>
      </div>

      <div class="${p("w-3/12 flex justify-end")}">
        <${le} onClick=${()=>xe.next()}
                   size="${$.md}"
                   mode="${j.ghost}"
                   shape="${E.icon}">

          <svg class="${p("w-4 h-4")}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
        <//>
      </div>
    </header>
  `}function dr(){return b`
    <footer class="${p("w-full text-center p-2 border-t-1 border-t-border")}">
      <p class="${p("text-xs text-foreground")}">
        Powered by
        <a target="_blank" href="https://stellarwalletskit.dev/" class="${p("font-semibold underline ml-1")}">
          Stellar Wallets Kit
        </a>
      </p>
    </footer>
  `}var $e;(function(e){e.xs="w-6 h-6",e.sm="w-8 h-8",e.md="w-10 h-10",e.lg="w-12 h-12",e.xl="w-14 h-14"})($e||($e={}));const cn="inline-block rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/10";function Ue(e){return b`
    <img alt="${e.alt}" src="${e.image}" class="${p(ue(cn,e.size))}" />
  `}const nt=_e(()=>{const e=ht.value.reduce((o,i)=>({available:i.isAvailable?[...o.available,i]:o.available,unavailable:i.isAvailable?o.unavailable:[...o.unavailable,i]}),{available:[],unavailable:[]});let t;try{const o=globalThis?.localStorage.getItem(P.usedWalletsIds);t=o?JSON.parse(o):[]}catch(o){console.error(o),t=[]}const r=[],n=[];for(const o of e.available)t.find(i=>i===o.id)?r.push(o):n.push(o);return[...r.sort((o,i)=>t.indexOf(o.id)-t.indexOf(i.id)),...n,...e.unavailable]});async function Gt(e){if(!e.isAvailable){globalThis.open(e.url,"_blank");return}if(Q.value=e.id,Yt.next(e),e.type===We.HW_WALLET)Me(F.HW_ACCOUNTS_FETCHER);else try{const{address:t}=await z.value.getAddress();x.value=t,ve.next(t)}catch(t){ve.next(t)}}function dn(){De.value="Connect Wallet";const e=nt.value.find(n=>n.isPlatformWrapper);if(e)return Gt(e).then(),b`
      <div class="${p("w-full text-center px-4 py-8")}">
        <div class="${p("w-full mb-4")}">
          <${Ue} alt="${e.name} icon" image="${e.icon}" size="${$e.md}" />
        </div>

        <p class="${p("text-foreground text-lg w-full")}">
          Connecting to your wallet using <b>${e.name}</b>
        </p>
      </div>
    `;const t=b`
    <div class="${p("w-full text-center text-foreground font-semibold p-4")}">Loading wallets...</div>
  `,r=nt.value.map(n=>b`
      <li
        onClick="${()=>Gt(n)}"
        class="${p("px-2 py-2 cursor-pointer flex justify-between items-center bg-background hover:border-light-gray border-1 border-transparent rounded-default duration-150 ease active:bg-background active:border-gray")}"
      >
        <div class="${p("flex items-center gap-2")}">
          <${Ue} class="${p("mr-2")}" alt="${n.name} icon" image="${n.icon}" size="${$e.sm}" />
          <p class="${p("text-foreground font-semibold")}">${n.name}</p>
        </div>

        ${gt.value&&!n.isAvailable?b`
            <div class="${p("ml-4 flex items-center")}">
              <small
                class="${p("inline-flex items-center border-1 border-border px-2 py-1 rounded-default text-foreground-secondary text-xs bg-background-secondary")}"
              >
                ${qt.value}

                <svg class="${p("w-4 h-4")}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </small>
            </div>
          `:""}
      </li>
    `);return b`
    <ul class="${p("w-full grid gap-2 px-2 py-4")}">
      ${nt.value.length===0?t:r}
    </ul>
  `}function un(){return b`
    <section class="${p("w-full p-4 pb-8 rounded-tl-default")}">
      <div class="${p("w-full mb-6")}">
        <h3 class="${p("text-foreground-strong font-semibold text-lg mb-2")}">What is a wallet?</h3>
        <p class="${p("text-foreground text-sm")}">
          Wallets are used to send, receive, and store the keys you use to sign blockchain transactions.
        </p>
      </div>

      <div class="w-full">
        <h3 class="${p("text-foreground-strong font-semibold text-lg mb-2")}">What is Stellar?</h3>
        <p class="${p("text-foreground text-sm")}">
          Stellar is a decentralized, public blockchain that gives developers the tools to create experiences that are more
          like cash than crypto.
        </p>
      </div>
    </section>
  `}function fe(e){return{code:e?.error?.code||e?.code||-1,message:e?.error?.message||e?.message||typeof e=="string"&&e||"Unhandled error from the wallet",ext:e?.error?.ext||e?.ext}}function Xe(){z.value?.disconnect&&z.value.disconnect(),Jt(),bt.next(),xe.next()}const ut=A(!1);function pn(){if(!x.value)throw new Error("Text to copy to the clipboard can't be undefined");navigator.clipboard.writeText(x.value).then(()=>{ut.value=!0,setTimeout(()=>{ut.value=!1},2500)}).catch(e=>console.error(e))}function fn(){return De.value="",b`
    <section class="${p("w-full flex flex-col pb-8")}">
      <div class="${p("w-full flex justify-center mb-4")}">
        <${Ue} alt="${z.value?.productName} icon" image="${z.value?.productIcon}" size="${$e.xl}" />
      </div>
      
      <div class="${p("w-full flex items-center justify-center mb-2")}">
        <h1 class="${p("text-lg font-semibold text-foreground")}">
          ${x.value&&`${x.value.slice(0,6)}....${x.value.slice(-6)}`}
        </h1>
      </div>
      
      <div class="${p("w-full flex flex-col items-center justify-center gap-2")}">
        <${le} mode="${j.ghost}" onClick="${pn}" size="${$.sm}">
          ${ut.value?"Address copied!":b`Copy address`} <svg class="${p("w-4 h-4 ml-2")}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
        <//>

        <${le} mode="${j.ghost}" onClick="${Xe}" size="${$.sm}">
          Disconnect <svg class="${p("w-4 h-4 ml-2")}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11H13V13H5V16L0 12L5 8V11ZM3.99927 18H6.70835C8.11862 19.2447 9.97111 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.97111 4 8.11862 4.75527 6.70835 6H3.99927C5.82368 3.57111 8.72836 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.72836 22 5.82368 20.4289 3.99927 18Z"></path></svg>
        <//>
      </div>
    </section>
  `}const Zt={error:null,loading:!0,accounts:[]};class gn extends hr{constructor(){super(...arguments),Object.defineProperty(this,"stateSignal",{enumerable:!0,configurable:!0,writable:!0,value:A(Zt)})}componentWillMount(){De.value="Wallet Accounts",this.fetchAccounts()}async fetchAccounts(){const t=z.value;this.stateSignal.value=Zt,t.disconnect&&(await t.disconnect(),await new Promise(r=>setTimeout(r,500)));try{const r=await t.getAddresses();this.stateSignal.value={...this.stateSignal.value,loading:!1,accounts:r}}catch(r){this.stateSignal.value={...this.stateSignal.value,error:r.message}}}async selectAccount(t){x.value=t.publicKey,ve.next(t.publicKey)}render(){const t=b`
      <div class="${p("py-8 w-full flex justify-center items-center text-foreground")}">
        <svg class="${p("w-8 h-8 text-gray-200 animate-spin")}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"></path>
        </svg>
      </div>
    `,r=b`    
      <ul class="${p("w-full grid gap-2 px-2 py-4 text-foreground")}">
        ${ye.value.map(({publicKey:o,index:i})=>b`
            <li onClick=${()=>this.selectAccount({publicKey:o,index:i})}
                class="${p("px-2 py-2 cursor-pointer flex justify-between items-center bg-background hover:border-light-gray border-1 border-transparent rounded-default duration-150 ease active:bg-background active:border-gray")}">
              ${o.slice(0,6)}....${o.slice(-6)}

              <span class="dialog-text">(44'/148'/${i}')</span>
            </li>
          `)}
      </ul>
    `,n=b`
      <div class="${p("w-full text-center text-foreground py-4")}">
        <div class="${p("text-danger")}">
          <svg class="${p("inline-block mx-auto w-8 h-8 mb-2")}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM4.20568 19.0002H19.7941L11.9999 5.50017L4.20568 19.0002ZM10.9999 16.0002H12.9999V18.0002H10.9999V16.0002ZM10.9999 9.00017H12.9999V14.0002H10.9999V9.00017Z"></path>
          </svg>
        </div>
        
        <h3 class="${p("text-sm font-semibold")}">
          Error while fetching accounts with reason:
        </h3>
        
        <p class="${p("mb-4 text-sm")}">
          ${this.stateSignal.value.error}
        </p>
        
        <div class="${p("w-full flex justify-center items-center")}">
          <${le} onClick=${()=>this.fetchAccounts()} size="${$.md}">
            Retry
          <//>
        </div>
      </div>
    `;return this.stateSignal.value.error?n:this.stateSignal.value.loading?t:r}}const mn={[F.AUTH_OPTIONS]:dn,[F.HELP_PAGE]:un,[F.PROFILE_PAGE]:fn,[F.HW_ACCOUNTS_FETCHER]:gn},hn=Ge`
  .glass {
    backdrop-filter: blur(10px);
    background-color: color-mix(in srgb, var(--swk-background) 25%, transparent);
  }
`;function pt(){const e=p(ue([Ie.value===Y.FIXED?"fixed flex left-0 top-0 z-[999] w-full h-full":"inline-flex","font-default justify-center items-center"]));return b`
    <section class="stellar-wallets-kit ${e} ${p(lr)} ${p(hn)}">
      ${Ie.value===Y.FIXED?b`
          <div class="${p("absolute left-0 top-0 z-0 w-full h-full bg-[rgba(0,0,0,0.5)]")}" onClick="${()=>xe.next()}"></div>
        `:""}

      <section
        class="${p("w-full h-fit relative max-w-[22rem] max-h-[39.4375rem] grid grid-cols-1 grid-rows-[auto_1fr_auto] bg-background rounded-default shadow-default transition-all duration-[0.5s] ease-in-out overflow-hidden max-h-[400px] overflow-y-scroll")}"
      >
        <div class="${p("col-span-1 top-0 sticky z-50")} glass">
          <${cr} />
        </div>

        <div class="${p("col-span-1 relative z-10")}">
          <${on}
            currentRoute="${Ne.value}"
            pages="${mn}"
            duration="${400}"
          />
        </div>

        <div class="${p("col-span-1 bottom-0 sticky z-50")} glass">
          <${dr} />
        </div>
      </section>
    </section>
  `}async function bn(e){if(e&&e(),typeof be.value>"u")throw new Error("The kit hasn't been initiated.");!z.value||!x.value?await N.authModal():await N.profileModal()}function ur(e){const t=x.value?`${x.value.slice(0,4)}....${x.value.slice(-6)}`:"Connect Wallet";return b`
    <div class="${p(lr)} ${p("inline-block")}">      
      <${le} styles=${e.styles} 
                 classes=${e.classes}
                 mode=${e.mode||j.primary}
                 shape=${e.shape||E.regular}
                 size=${e.size}
                 onClick=${()=>bn(e.onClick)}>        
        ${e.children?e.children:t}
      <//>
    </div>
  `}class N{static init(t){be.value=t.modules,t.selectedWalletId&&N.setWallet(t.selectedWalletId),t.network&&N.setNetwork(t.network),t.theme&&N.setTheme(t.theme),t.authModal&&(typeof t.authModal.showInstallLabel<"u"&&(gt.value=t.authModal.showInstallLabel),typeof t.authModal.hideUnsupportedWallets<"u"&&(Xt.value=t.authModal.hideUnsupportedWallets))}static get selectedModule(){if(!z.value)throw{code:-3,message:"Please set the wallet first"};return z.value}static setWallet(t){const r=be.value.find(n=>n.productId===t);if(!r)throw new Error(`Wallet id "${t}" is not and existing module`);Q.value=r.productId}static setNetwork(t){B.value=t}static setTheme(t=ft){mt.value=t}static async getAddress(){if(!x.value)throw{code:-1,message:"No wallet has been connected."};return{address:x.value}}static async fetchAddress(){const{address:t}=await N.selectedModule.getAddress();return x.value=t,ve.next(t),{address:t}}static signTransaction(t,r){return N.selectedModule.signTransaction(t,{...r,networkPassphrase:r?.networkPassphrase||B.value})}static signAuthEntry(t,r){return N.selectedModule.signAuthEntry(t,{...r,networkPassphrase:r?.networkPassphrase||B.value})}static signMessage(t,r){return N.selectedModule.signMessage(t,{...r,networkPassphrase:r?.networkPassphrase||B.value})}static signAndSubmitTransaction(t,r){const n=N.selectedModule;if(!n.signAndSubmitTransaction)throw{code:-3,message:`The selected module "${n.productName}" does not support the "signAndSubmitTransaction" method.`};return n.signAndSubmitTransaction(t,{...r,networkPassphrase:r?.networkPassphrase||B.value})}static getNetwork(){return N.selectedModule.getNetwork()}static async disconnect(){Xe()}static on(t,r){switch(t){case ee.STATE_UPDATED:{let n,o;return we(()=>{(x.value!==n||B.value!==o)&&(n=x.value,o=B.value,r({eventType:ee.STATE_UPDATED,payload:{address:x.value,networkPassphrase:B.value}}))})}case ee.WALLET_SELECTED:{let n;return we(()=>{Q.value!==n&&(n=Q.value,r({eventType:ee.WALLET_SELECTED,payload:{id:Q.value}}))})}case ee.DISCONNECT:return bt.subscribe(()=>{r({eventType:ee.DISCONNECT,payload:{}})});default:throw new Error(`${t} event type is not supported`)}}static async refreshSupportedWallets(){const t=await Promise.all(be.value.map(async r=>{const n=new Promise(o=>setTimeout(()=>o(!1),1e3));return{id:r.productId,name:r.productName,type:r.moduleType,icon:r.productIcon,isAvailable:await Promise.race([n,r.isAvailable()]).catch(()=>!1),isPlatformWrapper:await Promise.race([n,r.isPlatformWrapper?r.isPlatformWrapper():Promise.resolve(!1)]).catch(()=>!1),url:r.productUrl}}));return ht.value=t,t}static async createButton(t,r={}){Ae(b`
        <${ur}
          styles="${r.styles}"
          classes="${r.classes}"
          mode="${r.mode}"
          shape="${r.shape}"
          size="${r.size}"
          onClick="${()=>r.onClick&&r.onClick()}"
          children="${r.children}"
        />
      `,t)}static async authModal(t){Bt(),Me(F.AUTH_OPTIONS),Ie.value=t?.container?Y.BLOCK:Y.FIXED;const r=document.createElement("div");(t?.container||document.body).appendChild(r),Ae(b`
        <${pt} />
      `,r),await N.refreshSupportedWallets();const n=[],o=()=>{for(const i of n)i();Ae(null,r),r.parentNode?.removeChild(r)};return new Promise((i,s)=>{const a=ve.subscribe(u=>{typeof u=="string"?i({address:u}):s(fe(u))}),l=xe.subscribe(()=>{s({code:-1,message:"The user closed the modal."})});n.push(a),n.push(l)}).then(i=>(o(),i)).catch(i=>{throw o(),i})}static async profileModal(t){if(!x.value)throw{code:-1,message:"There is no active address, the user needs to authenticate first."};Bt(),Me(F.PROFILE_PAGE),Ie.value=t?.container?Y.BLOCK:Y.FIXED;const r=document.createElement("div");(t?.container||document.body).appendChild(r),Ae(b`
        <${pt} />
      `,r);const n=xe.subscribe(()=>{n(),Ae(null,r),r.parentNode?.removeChild(r)})}}const kn=Object.freeze(Object.defineProperty({__proto__:null,Avatar:Ue,get AvatarSize(){return $e},Button:le,get ButtonMode(){return j},get ButtonShape(){return E},get ButtonSize(){return $},Footer:dr,Header:cr,get KitEventType(){return ee},get LocalStorageKeys(){return P},get ModuleType(){return We},get Networks(){return ne},StellarWalletsKit:N,SwkApp:pt,SwkAppDarkTheme:vr,SwkAppLightTheme:ft,get SwkAppMode(){return Y},get SwkAppRoute(){return F},SwkButton:ur,activeAddress:x,activeModule:z,activeModules:be,addressUpdatedEvent:ve,allowedWallets:ht,closeEvent:xe,createSubject:je,disconnect:Xe,disconnectEvent:bt,goBack:sr,hardwareWalletPaths:ye,hideUnsupportedWallets:Xt,horizonUrl:xr,installText:qt,mnemonicPath:$r,modalTitle:De,mode:Ie,moduleSelectedEvent:Yt,navigateTo:Me,parseError:fe,resetWalletState:Jt,route:Ne,routerHistory:ae,selectedModuleId:Q,selectedNetwork:B,showInstallLabel:gt,theme:mt,updateActiveSession:Er,updatedSelectedModule:Tr,updatedThemeEffect:Sr,wcSessionPaths:Z},Symbol.toStringTag,{value:"Module"})),pr="wallet_connect";class wn{constructor(t){if(Object.defineProperty(this,"wcParams",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"moduleType",{enumerable:!0,configurable:!0,writable:!0,value:We.BRIDGE_WALLET}),Object.defineProperty(this,"productIcon",{enumerable:!0,configurable:!0,writable:!0,value:"https://stellar.creit.tech/wallet-icons/walletconnect.png"}),Object.defineProperty(this,"productId",{enumerable:!0,configurable:!0,writable:!0,value:pr}),Object.defineProperty(this,"productName",{enumerable:!0,configurable:!0,writable:!0,value:"WalletConnect"}),Object.defineProperty(this,"productUrl",{enumerable:!0,configurable:!0,writable:!0,value:"https://walletconnect.com/"}),Object.defineProperty(this,"modal",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signClient",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"initiated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),!t)throw new Error("The WalletConnect modules have required params.");br.init({projectId:t.projectId,metadata:t.metadata,...t.signClientOptions||{}}).then(r=>{r.on("display_uri",n=>{this.modal.open({uri:n})}),r.on("session_delete",n=>{this.closeSession(n.topic)}),this.signClient=r}),this.modal=wr({projectId:t.projectId,manualWCControl:!0,enableReconnect:!0,networks:[yr],featuredWalletIds:["aef3112adf415ec870529e96b4d7b434f13961a079d1ee42c9738217d8adeb91","76a3d548a08cf402f5c7d021f24fd2881d767084b387a5325df88bc3d4b6f21b"],...t.appKitOptions||{}})}async isAvailable(){return!!this.signClient&&!!this.modal}async isPlatformWrapper(){return!![{provider:"freighter",platform:"mobile"}].find(({provider:r,platform:n})=>window.stellar?.provider===r&&window.stellar?.platform===n)}async runChecks(){if(!await this.isAvailable())throw fe(new Error("WalletConnect modules has not been started yet."))}async getAddress(){if(await this.runChecks(),B.value!==ne.PUBLIC&&B.value!==ne.TESTNET)throw fe(new Error(`Network ${B.value} is not supported by WalletConnect.`));const{uri:t,approval:r}=await this.signClient.connect({requiredNamespaces:{stellar:{methods:[ge.SIGN],chains:this.wcParams.allowedChains||[te.PUBLIC],events:[]}},optionalNamespaces:{stellar:{methods:[ge.SIGN_AND_SUBMIT],chains:this.wcParams.allowedChains||[te.PUBLIC],events:[]}}});t&&this.modal.open({uri:t});try{const n=await r(),o=n.namespaces.stellar.accounts.map(i=>i.split(":")[2]);return Z.value=[...Z.value,...o.map(i=>({publicKey:i,topic:n.topic}))],this.modal.close(),{address:o[0]}}catch(n){throw this.modal.close(),n}}async signTransaction(t,r){await this.runChecks();const o=Z.value.find(s=>(r?.address||x.value)===s.publicKey);if(!o)throw fe(new Error("No WalletConnect session found or it expired for the selected address."));const{signedXDR:i}=await this.signClient.request({topic:o.topic,chainId:r?.networkPassphrase===ne.PUBLIC?te.PUBLIC:te.TESTNET,request:{method:ge.SIGN,params:{xdr:t}}});return{signedTxXdr:i}}async signAndSubmitTransaction(t,r){await this.runChecks();const o=Z.value.find(s=>(r?.address||x.value)===s.publicKey);if(!o)throw fe(new Error("No WalletConnect session found or it expired for the selected address."));const i=await this.signClient.request({topic:o.topic,chainId:r?.networkPassphrase===ne.PUBLIC?te.PUBLIC:te.TESTNET,request:{method:ge.SIGN_AND_SUBMIT,params:{xdr:t}}});if(i.status!=="success"&&i.status!=="pending")throw fe(new Error(`Unexpected status from wallet: ${i.status}`));return{status:i.status}}async disconnect(){if(!this.signClient)throw new Error("WalletConnect is not running yet");const t=await this.getSessions();for(const r of t)await this.closeSession(r.topic)}async getSessions(){if(!this.signClient)throw new Error("WalletConnect is not running yet");return this.signClient.session.values}async closeSession(t,r){if(!this.signClient)throw new Error("WalletConnect is not running yet");Z.value=Z.value.filter(n=>n.topic!==t),Z.value.length===0&&Xe(),await this.signClient.disconnect({topic:t,reason:{message:r||"Session closed",code:-1}})}async signAuthEntry(){throw{code:-3,message:'WalletConnect does not support the "signAuthEntry" function'}}async signMessage(){throw{code:-3,message:'WalletConnect does not support the "signMessage" function'}}async getNetwork(){throw{code:-3,message:'WalletConnect does not support the "getNetwork" function'}}}var te;(function(e){e.PUBLIC="stellar:pubnet",e.TESTNET="stellar:testnet"})(te||(te={}));var ge;(function(e){e.SIGN="stellar_signXDR",e.SIGN_AND_SUBMIT="stellar_signAndSubmitXDR"})(ge||(ge={}));const $n=Object.freeze(Object.defineProperty({__proto__:null,WALLET_CONNECT_ID:pr,get WalletConnectAllowedMethods(){return ge},WalletConnectModule:wn,get WalletConnectTargetChain(){return te}},Symbol.toStringTag,{value:"Module"}));export{kn as m,$n as w};
