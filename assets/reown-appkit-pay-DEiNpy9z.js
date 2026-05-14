import{l as m,i as be,n as Q}from"./react-vendor-Angmm_rT.js";import{d as U,c as $,i as R,b as u,o as g,U as Ee,f as he,M as ae}from"./reown-appkit-ui-D6SxDyP-.js";import{P as Ae,k as T,e as _,J as Ie,O as ee,K as re,C as h,L as Ne,l as P,r as q,w as C,N as Pe,M as F,Q as Te,U as Se,a as I,R as D}from"./reown-appkit-controllers-7ENft7pu.js";import{C as A,d as ke,b as f,N as b}from"./reown-appkit-common-DYg8cbr8.js";import{H as N}from"./reown-appkit-utils-CIaJbXwx.js";const d={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS",UNABLE_TO_GET_TOKEN_BALANCES:"UNABLE_TO_GET_TOKEN_BALANCES",UNABLE_TO_GET_QUOTE:"UNABLE_TO_GET_QUOTE",UNABLE_TO_GET_QUOTE_STATUS:"UNABLE_TO_GET_QUOTE_STATUS",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"INVALID_RECIPIENT_ADDRESS_FOR_ASSET"},v={[d.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[d.INVALID_RECIPIENT]:"Invalid recipient address",[d.INVALID_ASSET]:"Invalid asset specified",[d.INVALID_AMOUNT]:"Invalid payment amount",[d.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:"Invalid recipient address for the asset selected",[d.UNKNOWN_ERROR]:"Unknown payment error occurred",[d.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[d.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[d.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[d.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[d.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[d.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[d.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status",[d.UNABLE_TO_GET_TOKEN_BALANCES]:"Unable to get token balances",[d.UNABLE_TO_GET_QUOTE]:"Unable to get quote. Please choose a different token",[d.UNABLE_TO_GET_QUOTE_STATUS]:"Unable to get quote status"};class p extends Error{get message(){return v[this.code]}constructor(e,n){super(v[e]),this.name="AppKitPayError",this.code=e,this.details=n,Error.captureStackTrace&&Error.captureStackTrace(this,p)}}const Ce="https://rpc.walletconnect.org/v1/json-rpc",oe="reown_test";function _e(){const{chainNamespace:t}=f.parseCaipNetworkId(c.state.paymentAsset.network);if(!_.isAddress(c.state.recipient,t))throw new p(d.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${t}"`)}async function ve(t,e,n){if(e!==A.CHAIN.EVM)throw new p(d.INVALID_CHAIN_NAMESPACE);if(!n.fromAddress)throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");const s=typeof n.amount=="string"?parseFloat(n.amount):n.amount;if(isNaN(s))throw new p(d.INVALID_PAYMENT_CONFIG);const i=t.metadata?.decimals??18,a=T.parseUnits(s.toString(),i);if(typeof a!="bigint")throw new p(d.GENERIC_PAYMENT_ERROR);return await T.sendTransaction({chainNamespace:e,to:n.recipient,address:n.fromAddress,value:a,data:"0x"})??void 0}async function $e(t,e){if(!e.fromAddress)throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");const n=t.asset,s=e.recipient,i=Number(t.metadata.decimals),a=T.parseUnits(e.amount.toString(),i);if(a===void 0)throw new p(d.GENERIC_PAYMENT_ERROR);return await T.writeContract({fromAddress:e.fromAddress,tokenAddress:n,args:[s,a],method:"transfer",abi:ke.getERC20Abi(n),chainNamespace:A.CHAIN.EVM})??void 0}async function Re(t,e){if(t!==A.CHAIN.SOLANA)throw new p(d.INVALID_CHAIN_NAMESPACE);if(!e.fromAddress)throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");const n=typeof e.amount=="string"?parseFloat(e.amount):e.amount;if(isNaN(n)||n<=0)throw new p(d.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!Ae.getProvider(t))throw new p(d.GENERIC_PAYMENT_ERROR,"No Solana provider available.");const i=await T.sendTransaction({chainNamespace:A.CHAIN.SOLANA,to:e.recipient,value:n,tokenMint:e.tokenMint});if(!i)throw new p(d.GENERIC_PAYMENT_ERROR,"Transaction failed.");return i}catch(s){throw s instanceof p?s:new p(d.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${s}`)}}async function Oe({sourceToken:t,toToken:e,amount:n,recipient:s}){const i=T.parseUnits(n,t.metadata.decimals),a=T.parseUnits(n,e.metadata.decimals);return Promise.resolve({type:X,origin:{amount:i?.toString()??"0",currency:t},destination:{amount:a?.toString()??"0",currency:e},fees:[{id:"service",label:"Service Fee",amount:"0",currency:e}],steps:[{requestId:X,type:"deposit",deposit:{amount:i?.toString()??"0",currency:t.asset,receiver:s}}],timeInSeconds:6})}function K(t){if(!t)return null;const e=t.steps[0];return!e||e.type!==ze?null:e}function Y(t,e=0){if(!t)return[];const n=t.steps.filter(i=>i.type===He),s=n.filter((i,a)=>a+1>e);return n.length>0&&n.length<3?s:[]}const te=new Ie({baseUrl:_.getApiUrl(),clientId:null});class Ue extends Error{}function Le(){const t=ee.getSnapshot().projectId;return`${Ce}?projectId=${t}`}function ne(){const{projectId:t,sdkType:e,sdkVersion:n}=ee.state;return{projectId:t,st:e||"appkit",sv:n||"html-wagmi-4.2.2"}}async function se(t,e){const n=Le(),{sdkType:s,sdkVersion:i,projectId:a}=ee.getSnapshot(),o={jsonrpc:"2.0",id:1,method:t,params:{...e||{},st:s,sv:i,projectId:a}},x=await(await fetch(n,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}})).json();if(x.error)throw new Ue(x.error.message);return x}async function ce(t){return(await se("reown_getExchanges",t)).result}async function ue(t){return(await se("reown_getExchangePayUrl",t)).result}async function qe(t){return(await se("reown_getExchangeBuyStatus",t)).result}async function De(t){const e=b.bigNumber(t.amount).times(10**t.toToken.metadata.decimals).toString(),{chainId:n,chainNamespace:s}=f.parseCaipNetworkId(t.sourceToken.network),{chainId:i,chainNamespace:a}=f.parseCaipNetworkId(t.toToken.network),o=t.sourceToken.asset==="native"?re(s):t.sourceToken.asset,l=t.toToken.asset==="native"?re(a):t.toToken.asset;return await te.post({path:"/appkit/v1/transfers/quote",body:{user:t.address,originChainId:n.toString(),originCurrency:o,destinationChainId:i.toString(),destinationCurrency:l,recipient:t.recipient,amount:e},params:ne()})}async function Fe(t){const e=N.isLowerCaseMatch(t.sourceToken.network,t.toToken.network),n=N.isLowerCaseMatch(t.sourceToken.asset,t.toToken.asset);return e&&n?Oe(t):De(t)}async function Be(t){return await te.get({path:"/appkit/v1/transfers/status",params:{requestId:t.requestId,...ne()}})}async function Me(t){return await te.get({path:`/appkit/v1/transfers/assets/exchanges/${t}`,params:ne()})}const We=["eip155","solana"],je={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},le={56:"714",204:"714"};function z(t,e){const{chainNamespace:n,chainId:s}=f.parseCaipNetworkId(t),i=je[n];if(!i)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let a=i.native.assetNamespace,o=i.native.assetReference;return e!=="native"?(a=i.defaultTokenNamespace,o=e):n==="eip155"&&le[s]&&(o=le[s]),`${`${n}:${s}`}/${a}:${o}`}function Qe(t){const{chainNamespace:e}=f.parseCaipNetworkId(t);return We.includes(e)}function Ge(t){const n=h.getAllRequestedCaipNetworks().find(i=>i.caipNetworkId===t.chainId);let s=t.address;if(!n)throw new Error(`Target network not found for balance chainId "${t.chainId}"`);if(N.isLowerCaseMatch(t.symbol,n.nativeCurrency.symbol))s="native";else if(_.isCaipAddress(s)){const{address:i}=f.parseCaipAddress(s);s=i}else if(!s)throw new Error(`Balance address not found for balance symbol "${t.symbol}"`);return{network:n.caipNetworkId,asset:s,metadata:{name:t.name,symbol:t.symbol,decimals:Number(t.quantity.decimals),logoURI:t.iconUrl},amount:t.quantity.numeric}}function Ve(t){return{chainId:t.network,address:`${t.network}:${t.asset}`,symbol:t.metadata.symbol,name:t.metadata.name,iconUrl:t.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:t.metadata.decimals.toString()}}}function M(t){const e=b.bigNumber(t,{safe:!0});return e.lt(.001)?"<0.001":e.round(4).toString()}function Ye(t){const n=h.getAllRequestedCaipNetworks().find(s=>s.caipNetworkId===t.network);return n?!!n.testnet:!1}const de=0,H="unknown",X="direct-transfer",ze="deposit",He="transaction",r=Ne({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[A.CHAIN.EVM]:[],[A.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),c={state:r,subscribe(t){return Se(r,()=>t(r))},subscribeKey(t,e){return Te(r,t,e)},async handleOpenPay(t){this.resetState(),this.setPaymentConfig(t),this.initializeAnalytics(),_e(),await this.prepareTokenLogo(),r.isConfigured=!0,q.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:r.exchanges,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount}}}),await F.open({view:"Pay"})},resetState(){r.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},r.recipient="0x0",r.amount=0,r.isConfigured=!1,r.error=null,r.isPaymentInProgress=!1,r.isLoading=!1,r.currentPayment=void 0,r.selectedExchange=void 0,r.exchangeUrlForQuote=void 0,r.requestId=void 0},resetQuoteState(){r.quote=void 0,r.quoteStatus="waiting",r.quoteError=null,r.isFetchingQuote=!1,r.requestId=void 0},setPaymentConfig(t){if(!t.paymentAsset)throw new p(d.INVALID_PAYMENT_CONFIG);try{r.choice=t.choice??"pay",r.paymentAsset=t.paymentAsset,r.recipient=t.recipient,r.amount=t.amount,r.openInNewTab=t.openInNewTab??!0,r.redirectUrl=t.redirectUrl,r.payWithExchange=t.payWithExchange,r.error=null}catch(e){throw new p(d.INVALID_PAYMENT_CONFIG,e.message)}},setSelectedPaymentAsset(t){r.selectedPaymentAsset=t},setSelectedExchange(t){r.selectedExchange=t},setRequestId(t){r.requestId=t},setPaymentInProgress(t){r.isPaymentInProgress=t},getPaymentAsset(){return r.paymentAsset},getExchanges(){return r.exchanges},async fetchExchanges(){try{r.isLoading=!0;const t=await ce({page:de});r.exchanges=t.exchanges.slice(0,2)}catch{throw C.showError(v.UNABLE_TO_GET_EXCHANGES),new p(d.UNABLE_TO_GET_EXCHANGES)}finally{r.isLoading=!1}},async getAvailableExchanges(t){try{const e=t?.asset&&t?.network?z(t.network,t.asset):void 0;return await ce({page:t?.page??de,asset:e,amount:t?.amount?.toString()})}catch{throw new p(d.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(t,e,n=!1){try{const s=Number(e.amount),i=await ue({exchangeId:t,asset:z(e.network,e.asset),amount:s.toString(),recipient:`${e.network}:${e.recipient}`});return q.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:t},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:s},currentPayment:{type:"exchange",exchangeId:t},headless:n}}),n&&(this.initiatePayment(),q.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:r.paymentId||H,configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:s},currentPayment:{type:"exchange",exchangeId:t}}})),i}catch(s){throw s instanceof Error&&s.message.includes("is not supported")?new p(d.ASSET_NOT_SUPPORTED):new Error(s.message)}},async generateExchangeUrlForQuote({exchangeId:t,paymentAsset:e,amount:n,recipient:s}){const i=await ue({exchangeId:t,asset:z(e.network,e.asset),amount:n.toString(),recipient:s});r.exchangeSessionId=i.sessionId,r.exchangeUrlForQuote=i.url},async openPayUrl(t,e,n=!1){try{const s=await this.getPayUrl(t.exchangeId,e,n);if(!s)throw new p(d.UNABLE_TO_GET_PAY_URL);const a=t.openInNewTab??!0?"_blank":"_self";return _.openHref(s.url,a),s}catch(s){throw s instanceof p?r.error=s.message:r.error=v.GENERIC_PAYMENT_ERROR,new p(d.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:t,fromAddress:e,toAddress:n,amount:s,paymentAsset:i}){if(r.currentPayment={type:"wallet",status:"IN_PROGRESS"},!r.isPaymentInProgress)try{this.initiatePayment();const o=h.getAllRequestedCaipNetworks().find(x=>x.caipNetworkId===i.network);if(!o)throw new Error("Target network not found");const l=h.state.activeCaipNetwork;switch(N.isLowerCaseMatch(l?.caipNetworkId,o.caipNetworkId)||await h.switchActiveNetwork(o),t){case A.CHAIN.EVM:i.asset==="native"&&(r.currentPayment.result=await ve(i,t,{recipient:n,amount:s,fromAddress:e})),i.asset.startsWith("0x")&&(r.currentPayment.result=await $e(i,{recipient:n,amount:s,fromAddress:e})),r.currentPayment.status="SUCCESS";break;case A.CHAIN.SOLANA:r.currentPayment.result=await Re(t,{recipient:n,amount:s,fromAddress:e,tokenMint:i.asset==="native"?void 0:i.asset}),r.currentPayment.status="SUCCESS";break;default:throw new p(d.INVALID_CHAIN_NAMESPACE)}}catch(a){throw a instanceof p?r.error=a.message:r.error=v.GENERIC_PAYMENT_ERROR,r.currentPayment.status="FAILED",C.showError(r.error),a}finally{r.isPaymentInProgress=!1}},async onSendTransaction(t){try{const{namespace:e,transactionStep:n}=t;c.initiatePayment();const i=h.getAllRequestedCaipNetworks().find(o=>o.caipNetworkId===r.paymentAsset?.network);if(!i)throw new Error("Target network not found");const a=h.state.activeCaipNetwork;if(N.isLowerCaseMatch(a?.caipNetworkId,i.caipNetworkId)||await h.switchActiveNetwork(i),e===A.CHAIN.EVM){const{from:o,to:l,data:x,value:V}=n.transaction;await T.sendTransaction({address:o,to:l,data:x,value:BigInt(V),chainNamespace:e})}else if(e===A.CHAIN.SOLANA){const{instructions:o}=n.transaction;await T.writeSolanaTransaction({instructions:o})}}catch(e){throw e instanceof p?r.error=e.message:r.error=v.GENERIC_PAYMENT_ERROR,C.showError(r.error),e}finally{r.isPaymentInProgress=!1}},getExchangeById(t){return r.exchanges.find(e=>e.id===t)},validatePayConfig(t){const{paymentAsset:e,recipient:n,amount:s}=t;if(!e)throw new p(d.INVALID_PAYMENT_CONFIG);if(!n)throw new p(d.INVALID_RECIPIENT);if(!e.asset)throw new p(d.INVALID_ASSET);if(s==null||s<=0)throw new p(d.INVALID_AMOUNT)},async handlePayWithExchange(t){try{r.currentPayment={type:"exchange",exchangeId:t};const{network:e,asset:n}=r.paymentAsset,s={network:e,asset:n,amount:r.amount,recipient:r.recipient},i=await this.getPayUrl(t,s);if(!i)throw new p(d.UNABLE_TO_INITIATE_PAYMENT);return r.currentPayment.sessionId=i.sessionId,r.currentPayment.status="IN_PROGRESS",r.currentPayment.exchangeId=t,this.initiatePayment(),{url:i.url,openInNewTab:r.openInNewTab}}catch(e){return e instanceof p?r.error=e.message:r.error=v.GENERIC_PAYMENT_ERROR,r.isPaymentInProgress=!1,C.showError(r.error),null}},async getBuyStatus(t,e){try{const n=await qe({sessionId:e,exchangeId:t});return(n.status==="SUCCESS"||n.status==="FAILED")&&q.sendEvent({type:"track",event:n.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:n.status==="FAILED"?_.parseError(r.error):void 0,source:"pay",paymentId:r.paymentId||H,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount},currentPayment:{type:"exchange",exchangeId:r.currentPayment?.exchangeId,sessionId:r.currentPayment?.sessionId,result:n.txHash}}}),n}catch{throw new p(d.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:t,caipNetwork:e,namespace:n}){if(!t)return[];const{address:s}=f.parseCaipAddress(t);let i=e;return n===A.CHAIN.EVM&&(i=void 0),await Pe.getMyTokensWithBalance({address:s,caipNetwork:i})},async fetchTokensFromExchange(){if(!r.selectedExchange)return[];const t=await Me(r.selectedExchange.id),e=Object.values(t.assets).flat();return await Promise.all(e.map(async s=>{const i=Ve(s),{chainNamespace:a}=f.parseCaipNetworkId(i.chainId);let o=i.address;if(_.isCaipAddress(o)){const{address:x}=f.parseCaipAddress(o);o=x}const l=await P.getImageByToken(o??"",a).catch(()=>{});return i.iconUrl=l??"",i}))},async fetchTokens({caipAddress:t,caipNetwork:e,namespace:n}){try{r.isFetchingTokenBalances=!0;const a=await(!!r.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:t,caipNetwork:e,namespace:n}));r.tokenBalances={...r.tokenBalances,[n]:a}}catch(s){const i=s instanceof Error?s.message:"Unable to get token balances";C.showError(i)}finally{r.isFetchingTokenBalances=!1}},async fetchQuote({amount:t,address:e,sourceToken:n,toToken:s,recipient:i}){try{c.resetQuoteState(),r.isFetchingQuote=!0;const a=await Fe({amount:t,address:r.selectedExchange?void 0:e,sourceToken:n,toToken:s,recipient:i});if(r.selectedExchange){const o=K(a);if(o){const l=`${n.network}:${o.deposit.receiver}`,x=b.formatNumber(o.deposit.amount,{decimals:n.metadata.decimals??0,round:8});await c.generateExchangeUrlForQuote({exchangeId:r.selectedExchange.id,paymentAsset:n,amount:x.toString(),recipient:l})}}r.quote=a}catch(a){let o=v.UNABLE_TO_GET_QUOTE;if(a instanceof Error&&a.cause&&a.cause instanceof Response)try{const l=await a.cause.json();l.error&&typeof l.error=="string"&&(o=l.error)}catch{}throw r.quoteError=o,C.showError(o),new p(d.UNABLE_TO_GET_QUOTE)}finally{r.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:t}){try{if(t===X){const n=r.selectedExchange,s=r.exchangeSessionId;if(n&&s){switch((await this.getBuyStatus(n.id,s)).status){case"IN_PROGRESS":r.quoteStatus="waiting";break;case"SUCCESS":r.quoteStatus="success",r.isPaymentInProgress=!1;break;case"FAILED":r.quoteStatus="failure",r.isPaymentInProgress=!1;break;case"UNKNOWN":r.quoteStatus="waiting";break;default:r.quoteStatus="waiting";break}return}r.quoteStatus="success";return}const{status:e}=await Be({requestId:t});r.quoteStatus=e}catch{throw r.quoteStatus="failure",new p(d.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){r.isPaymentInProgress=!0,r.paymentId=crypto.randomUUID()},initializeAnalytics(){r.analyticsSet||(r.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",t=>{if(r.currentPayment?.status&&r.currentPayment.status!=="UNKNOWN"){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[r.currentPayment.status];q.sendEvent({type:"track",event:e,properties:{message:r.currentPayment.status==="FAILED"?_.parseError(r.error):void 0,source:"pay",paymentId:r.paymentId||H,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount},currentPayment:{type:r.currentPayment.type,exchangeId:r.currentPayment.exchangeId,sessionId:r.currentPayment.sessionId,result:r.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!r.paymentAsset.metadata.logoURI)try{const{chainNamespace:t}=f.parseCaipNetworkId(r.paymentAsset.network),e=await P.getImageByToken(r.paymentAsset.asset,t);r.paymentAsset.metadata.logoURI=e}catch{}}},Ke=U`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[8]};
    border-top-left-radius: ${({borderRadius:t})=>t[8]};
  }
`;var O=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};let S=class extends R{constructor(){super(),this.unsubscribe=[],this.amount=c.state.amount,this.namespace=void 0,this.paymentAsset=c.state.paymentAsset,this.activeConnectorIds=I.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=c.state.exchanges,this.isLoading=c.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(c.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(I.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(c.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(c.subscribeKey("isLoading",e=>this.isLoading=e)),c.fetchExchanges(),c.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return u`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){const e=h.state.activeChain;this.namespace=e,this.caipAddress=h.getAccountData(e)?.caipAddress,this.unsubscribe.push(h.subscribeChainProp("accountState",n=>{this.caipAddress=n?.caipAddress},e))}paymentDetailsTemplate(){const n=h.getAllRequestedCaipNetworks().find(s=>s.caipNetworkId===this.paymentAsset.network);return u`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${M(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${n?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${g(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${g(P.getNetworkImage(n))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return Qe(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():u``}connectedWalletTemplate(){const{name:e,image:n}=this.getWalletProperties({namespace:this.namespace});return u`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${g(n)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return u`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return u`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter(n=>Ye(this.paymentAsset)?n.id===oe:n.id!==oe);return e.length===0?u`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(n=>u`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(n)}
          data-testid="exchange-option-${n.id}"
          ?chevron=${!0}
          imageSrc=${g(n.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${n.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return u`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?D.push("PayQuote"):(await I.connect(),await F.open({view:"PayQuote"}))}onExchangePayment(e){c.setSelectedExchange(e),D.push("PayQuote")}async onDisconnect(){try{await T.disconnect(),await F.open({view:"Pay"})}catch{console.error("Failed to disconnect"),C.showError("Failed to disconnect")}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};const s=I.getConnector({id:n,namespace:e});if(!s)return{name:void 0,image:void 0};const i=P.getConnectorImage(s);return{name:s.name,image:i}}};S.styles=Ke;O([m()],S.prototype,"amount",void 0);O([m()],S.prototype,"namespace",void 0);O([m()],S.prototype,"paymentAsset",void 0);O([m()],S.prototype,"activeConnectorIds",void 0);O([m()],S.prototype,"caipAddress",void 0);O([m()],S.prototype,"exchanges",void 0);O([m()],S.prototype,"isLoading",void 0);S=O([$("w3m-pay-view")],S);const pe=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],me=["success","submitted","failure","timeout","refund"],Xe=U`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:t})=>t[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    border: 3px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    border: 3px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:t})=>t.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 1px solid ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[6]};
    border-top-left-radius: ${({borderRadius:t})=>t[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:t})=>t.round};
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }
`;var k=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};const Je={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},Ze=3e3;let E=class extends R{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=c.state.paymentAsset,this.quoteStatus=c.state.quoteStatus,this.quote=c.state.quote,this.amount=c.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=I.state.activeConnectorIds,this.selectedExchange=c.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(c.subscribeKey("quoteStatus",e=>this.quoteStatus=e),c.subscribeKey("quote",e=>this.quote=e),I.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),c.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const e=M(this.amount||"0"),n=this.paymentAsset.metadata.symbol??"Unknown",i=h.getAllRequestedCaipNetworks().find(l=>l.caipNetworkId===this.paymentAsset.network),a=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund";return this.quoteStatus==="success"||this.quoteStatus==="submitted"?u`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a?u`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:u`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${g(P.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${n}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return u`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return u`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(n=>this.renderStep(n))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){const e=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund",n=this.quoteStatus==="success"||this.quoteStatus==="submitted";if(e)return u`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(n)return u`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const s=this.quote?.timeInSeconds??0;return u`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${s} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){const n=h.getAllRequestedCaipNetworks().find(o=>{const l=this.quote?.origin.currency.network;if(!l)return!1;const{chainId:x}=f.parseCaipNetworkId(l);return N.isLowerCaseMatch(o.id.toString(),x.toString())}),s=b.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString(),i=M(s),a=this.quote?.origin.currency.metadata.symbol??"Unknown";return u`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${i}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${a}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${g(P.getNetworkImage(n))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${n?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return u`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){const{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:n}=this.caipAddress?f.parseCaipAddress(this.caipAddress):{},s=this.selectedExchange?.name;return this.selectedExchange?u`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${s}</wui-text>
          <wui-image src=${g(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:u`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${Ee.getTruncateString({string:this.profileName||n||s||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${g(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund"?pe.map(n=>({...n,status:"failed"})):pe.map(n=>{const i=(Je[n.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...n,status:i}})}renderStep({title:e,icon:n,status:s}){return u`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${n} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${he({"step-icon-box":!0,success:s==="completed"})}>
            ${this.renderStatusIndicator(s)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return e==="completed"?u`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:e==="failed"?u`<wui-icon size="sm" color="error" name="close"></wui-icon>`:e==="pending"?u`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},Ze))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=c.state.requestId;if(!e||me.includes(this.quoteStatus))this.stopPolling();else try{await c.fetchQuoteStatus({requestId:e}),me.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){const e=h.state.activeChain;this.namespace=e,this.caipAddress=h.getAccountData(e)?.caipAddress,this.profileName=h.getAccountData(e)?.profileName??null,this.unsubscribe.push(h.subscribeChainProp("accountState",n=>{this.caipAddress=n?.caipAddress,this.profileName=n?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};const s=I.getConnector({id:n,namespace:e});if(!s)return{name:void 0,image:void 0};const i=P.getConnectorImage(s);return{name:s.name,image:i}}};E.styles=Xe;k([m()],E.prototype,"paymentAsset",void 0);k([m()],E.prototype,"quoteStatus",void 0);k([m()],E.prototype,"quote",void 0);k([m()],E.prototype,"amount",void 0);k([m()],E.prototype,"namespace",void 0);k([m()],E.prototype,"caipAddress",void 0);k([m()],E.prototype,"profileName",void 0);k([m()],E.prototype,"activeConnectorIds",void 0);k([m()],E.prototype,"selectedExchange",void 0);E=k([$("w3m-pay-loading-view")],E);const et=be`
  :host {
    display: block;
  }
`;var tt=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};let J=class extends R{render(){return u`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};J.styles=[et];J=tt([$("w3m-pay-fees-skeleton")],J);const nt=U`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }
`;var ge=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};let W=class extends R{constructor(){super(),this.unsubscribe=[],this.quote=c.state.quote,this.unsubscribe.push(c.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=b.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return u`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(n=>this.renderFee(n)):null}
      </wui-flex>
    `}renderFee(e){const n=e.id==="network",s=b.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(n){const a=h.getAllRequestedCaipNetworks().find(o=>N.isLowerCaseMatch(o.caipNetworkId,e.currency.network));return u`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${s} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${g(P.getNetworkImage(a))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${a?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return u`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${s} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};W.styles=[nt];ge([m()],W.prototype,"quote",void 0);W=ge([$("w3m-pay-fees")],W);const st=U`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:t})=>t[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:t})=>t[8]};
    height: ${({spacing:t})=>t[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var we=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};let j=class extends R{constructor(){super(),this.unsubscribe=[],this.selectedExchange=c.state.selectedExchange,this.unsubscribe.push(c.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=!!this.selectedExchange;return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:u`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};j.styles=[st];we([Q({type:Array})],j.prototype,"selectedExchange",void 0);j=we([$("w3m-pay-options-empty")],j);const it=U`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:t})=>t.theme.foregroundSecondary};
  }
`;var at=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};let Z=class extends R{render(){return u`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return u`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};Z.styles=[it];Z=at([$("w3m-pay-options-skeleton")],Z);const rt=U`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var G=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};const ot=300;let L=class extends R{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(n=>n()),this.resizeObserver?.disconnect(),this.shadowRoot?.querySelector(".pay-options-container")?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return u`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){const{network:n,metadata:s,asset:i,amount:a="0"}=e,l=h.getAllRequestedCaipNetworks().find(xe=>xe.caipNetworkId===n),x=`${n}:${i}`,V=`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,fe=x===V,ie=b.bigNumber(a,{safe:!0}),ye=ie.gt(0);return u`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${g(s.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${g(P.getNetworkImage(l))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${s.symbol}</wui-text>
            ${ye?u`<wui-text variant="sm-regular" color="secondary">
                  ${ie.round(6).toString()} ${s.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${fe?u`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){const e=this.shadowRoot?.querySelector(".pay-options-container");if(!e)return;e.scrollHeight>ot?(e.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--options-scroll--top-opacity",ae.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",ae.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0"))}};L.styles=[rt];G([Q({type:Array})],L.prototype,"options",void 0);G([Q()],L.prototype,"selectedPaymentAsset",void 0);G([Q()],L.prototype,"onSelect",void 0);L=G([$("w3m-pay-options")],L);const ct=U`
  .payment-methods-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[5]};
    border-top-left-radius: ${({borderRadius:t})=>t[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[5]};
    padding: ${({spacing:t})=>t[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var y=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};const B={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},ut={eip155:{icon:B.eip155,label:"EVM"},solana:{icon:B.solana,label:"Solana"},bip122:{icon:B.bip122,label:"Bitcoin"},ton:{icon:B.ton,label:"Ton"}};let w=class extends R{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=c.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=c.state.amount,this.recipient=c.state.recipient,this.activeConnectorIds=I.state.activeConnectorIds,this.selectedPaymentAsset=c.state.selectedPaymentAsset,this.selectedExchange=c.state.selectedExchange,this.isFetchingQuote=c.state.isFetchingQuote,this.quoteError=c.state.quoteError,this.quote=c.state.quote,this.isFetchingTokenBalances=c.state.isFetchingTokenBalances,this.tokenBalances=c.state.tokenBalances,this.isPaymentInProgress=c.state.isPaymentInProgress,this.exchangeUrlForQuote=c.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(c.subscribeKey("paymentAsset",e=>this.paymentAsset=e)),this.unsubscribe.push(c.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(c.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(I.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(c.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(c.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e)),this.unsubscribe.push(c.subscribeKey("quoteError",e=>this.quoteError=e)),this.unsubscribe.push(c.subscribeKey("quote",e=>this.quote=e)),this.unsubscribe.push(c.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(c.subscribeKey("recipient",e=>this.recipient=e)),this.unsubscribe.push(c.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e)),this.unsubscribe.push(c.subscribeKey("selectedExchange",e=>this.selectedExchange=e)),this.unsubscribe.push(c.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return u`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){const o=b.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return u`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?u`<wui-text variant="lg-regular" color="primary">
                ${b.bigNumber(o,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:u`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const e=_.getPlainAddress(this.caipAddress)??"",{name:n,image:s}=this.getWalletProperties({namespace:this.namespace}),{icon:i,label:a}=ut[this.namespace]??{};return u`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${g(this.profileName)}
          address=${g(e)}
          imageSrc=${g(s)}
          alt=${g(n)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${g(a)}
          address=${g(e)}
          icon=${g(i)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${g(a)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){const e=h.state.activeChain;this.namespace=e,this.caipAddress=h.getAccountData(e)?.caipAddress,this.profileName=h.getAccountData(e)?.profileName??null,this.unsubscribe.push(h.subscribeChainProp("accountState",n=>this.onAccountStateChanged(n),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:n,chainNamespace:s}=f.parseCaipAddress(this.caipAddress),i=`${s}:${n}`;e=h.getAllRequestedCaipNetworks().find(o=>o.caipNetworkId===i)}await c.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?f.parseCaipAddress(this.caipAddress):{};c.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};const s=I.getConnector({id:n,namespace:e});if(!s)return{name:void 0,image:void 0};const i=P.getConnectorImage(s);return{name:s.name,image:i}}paymentOptionsViewTemplate(){return u`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return u`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(e.length===0)return u`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const n={disabled:this.isFetchingQuote};return u`<w3m-pay-options
      class=${he(n)}
      .options=${e}
      .selectedPaymentAsset=${g(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?u`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:u`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){const e=this.isFetchingQuote||this.isFetchingTokenBalances,n=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,s=b.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||n?u`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:u`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:u`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||n?u`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:u`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${M(s)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:n})}
      </wui-flex>
    `}actionButtonTemplate(e){const n=Y(this.quote),{isLoading:s,isDisabled:i}=e;let a="Pay";return n.length>1&&this.completedTransactionsCount===0&&(a="Approve"),u`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${s||this.isPaymentInProgress}
        ?disabled=${i||this.isPaymentInProgress}
        @click=${()=>{n.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${a}
        ${s?null:u`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(i=>{try{return Ge(i)}catch{return null}}).filter(i=>!!i).filter(i=>{const{chainId:a}=f.parseCaipNetworkId(i.network),{chainId:o}=f.parseCaipNetworkId(this.paymentAsset.network);return N.isLowerCaseMatch(i.asset,this.paymentAsset.asset)?!0:this.selectedExchange?!N.isLowerCaseMatch(a.toString(),o.toString()):!0}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;const[n]=this.getPaymentAssetFromTokenBalances();n&&c.setSelectedPaymentAsset(n)}async onConnectOtherWallet(){await I.connect(),await F.open({view:"PayQuote"})}onAccountStateChanged(e){const{address:n}=this.caipAddress?f.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,n){const{address:s}=this.caipAddress?f.parseCaipAddress(this.caipAddress):{};s?N.isLowerCaseMatch(s,n)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):F.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||c.setSelectedPaymentAsset(e)}async onTransfer(){const e=K(this.quote);if(e){if(!N.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const s=this.selectedPaymentAsset?.amount??"0",i=b.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.bigNumber(s).gte(i)){C.showError("Insufficient funds");return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:o}=f.parseCaipAddress(this.caipAddress);await c.onTransfer({chainNamespace:this.namespace,fromAddress:o,toAddress:e.deposit.receiver,amount:i,paymentAsset:this.selectedPaymentAsset}),c.setRequestId(e.requestId),D.push("PayLoading")}}}async onSendTransactions(){const e=this.selectedPaymentAsset?.amount??"0",n=b.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.bigNumber(e).gte(n)){C.showError("Insufficient funds");return}const i=Y(this.quote),[a]=Y(this.quote,this.completedTransactionsCount);a&&this.namespace&&(await c.onSendTransaction({namespace:this.namespace,transactionStep:a}),this.completedTransactionsCount+=1,this.completedTransactionsCount===i.length&&(c.setRequestId(a.requestId),D.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=_.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const n=K(this.quote);n&&c.setRequestId(n.requestId),c.initiatePayment(),D.push("PayLoading")}}resetAssetsState(){c.setSelectedPaymentAsset(null)}resetQuoteState(){c.resetQuoteState()}};w.styles=ct;y([m()],w.prototype,"profileName",void 0);y([m()],w.prototype,"paymentAsset",void 0);y([m()],w.prototype,"namespace",void 0);y([m()],w.prototype,"caipAddress",void 0);y([m()],w.prototype,"amount",void 0);y([m()],w.prototype,"recipient",void 0);y([m()],w.prototype,"activeConnectorIds",void 0);y([m()],w.prototype,"selectedPaymentAsset",void 0);y([m()],w.prototype,"selectedExchange",void 0);y([m()],w.prototype,"isFetchingQuote",void 0);y([m()],w.prototype,"quoteError",void 0);y([m()],w.prototype,"quote",void 0);y([m()],w.prototype,"isFetchingTokenBalances",void 0);y([m()],w.prototype,"tokenBalances",void 0);y([m()],w.prototype,"isPaymentInProgress",void 0);y([m()],w.prototype,"exchangeUrlForQuote",void 0);y([m()],w.prototype,"completedTransactionsCount",void 0);w=y([$("w3m-pay-quote-view")],w);export{c as P};
