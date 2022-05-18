!function(){"use strict";var e={n:function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,{a:o}),o},d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.i18n,o=window.wp.apiFetch,n=e.n(o);var l;l=()=>{const e=document.querySelectorAll(".wp-block-themeisle-blocks-form");(e=>{var t,o;if(!window.hasOwnProperty("grecaptcha")&&null!==(t=window)&&void 0!==t&&null!==(o=t.themeisleGutenbergForm)&&void 0!==o&&o.reRecaptchaSitekey){const t=document.createElement("script");t.id="recaptcha",document.body.appendChild(t),t.addEventListener("load",(()=>{const t=setInterval((()=>{window.hasOwnProperty("grecaptcha")&&window.grecaptcha.hasOwnProperty("render")&&(e.forEach((e=>{var t;null!=e&&null!==(t=e.classList)&&void 0!==t&&t.contains("has-captcha")&&(e=>{var t,o,n;if(!window.hasOwnProperty("grecaptcha"))return;const l=e.id,r=document.createElement("div"),i=e.querySelector(".otter-form__container");null==i||i.insertBefore(r,i.lastChild);const s=null===(t=window.grecaptcha)||void 0===t?void 0:t.render(r,{sitekey:null===(o=window)||void 0===o||null===(n=o.themeisleGutenbergForm)||void 0===n?void 0:n.reRecaptchaSitekey,callback:e=>{var t;null!==(t=window.themeisleGutenberg)&&void 0!==t&&t.tokens||(window.themeisleGutenberg={},window.themeisleGutenberg.tokens={}),window.themeisleGutenberg.tokens[l]={token:e,reset:()=>{var e;return null===(e=window.grecaptcha)||void 0===e?void 0:e.reset(s)}}},"expired-callback":()=>{var e;null!==(e=window.themeisleGutenberg)&&void 0!==e&&e.tokens||(window.themeisleGutenberg={},window.themeisleGutenberg.tokens={}),window.themeisleGutenberg.tokens[l]={token:null,reset:()=>null}}})})(e)})),clearInterval(t))}),200)})),t.src="https://www.google.com/recaptcha/api.js"}})(e),e.forEach((e=>{e.classList.contains("can-submit-and-subscribe")&&r(e);const o=e.querySelector("button");null==o||o.addEventListener("click",(l=>{o.disabled||(l.preventDefault(),o.disabled=!0,((e,o)=>{var l,r,i,s;const a=null==e?void 0:e.id,c={},d=[],u=[{label:(0,t.__)("Form submission from","otter-blocks"),value:window.location.href}];null===(l=[...null==e?void 0:e.querySelectorAll(".otter-form__container .wp-block-themeisle-blocks-form-input"),...null==e?void 0:e.querySelectorAll(".otter-form__container .wp-block-themeisle-blocks-form-textarea")])||void 0===l||l.forEach((e=>{var t,o;const n=null===(t=e.querySelector(".otter-form-input-label__label, .otter-form-textarea-label__label"))||void 0===t?void 0:t.innerHTML,l=e.querySelector(".otter-form-input, .otter-form-textarea-input"),r=null===(o=e.querySelector('.otter-form-input[type="checkbox"]'))||void 0===o?void 0:o.checked;null==l||!l.hasAttribute("required")||null!=l&&l.checkValidity()||d.push(l),n&&null!=l&&l.value&&u.push({label:n,value:null==l?void 0:l.value,type:null==l?void 0:l.type,checked:r})}));const v=`.protection #${e.id||""}_nonce_field`,m=null===(r=e.querySelector(v))||void 0===r?void 0:r.value,h=e.querySelector(".wp-block-button");null==h||h.classList.add("has-submit-msg");const w=e=>{h.querySelectorAll(".otter-form-server-response").forEach((e=>h.removeChild(e))),h.appendChild(e),setTimeout((()=>{e&&h===e.parentNode&&h.removeChild(e)}),1e4)};if(0<d.length||null!=e&&null!==(i=e.classList)&&void 0!==i&&i.contains("has-captcha")&&a&&(null===(s=window.themeisleGutenberg)||void 0===s||!s.tokens[a].token)){var p,b;if(d.forEach((e=>{null==e||e.reportValidity()})),null!=e&&null!==(p=e.classList)&&void 0!==p&&p.contains("has-captcha")&&a&&(null===(b=window.themeisleGutenberg)||void 0===b||!b.tokens[a].token)){const e=document.createElement("div");e.classList.add("otter-form-server-response"),window.hasOwnProperty("grecaptcha")?e.innerHTML=(0,t.__)("⚠ Please check the captcha.","otter-blocks"):e.innerHTML=(0,t.__)("⚠ Captcha is not loaded. Please check your browser plugins to allow the Google reCaptcha.","otter-blocks"),e.classList.add("warning"),w(e)}o.disabled=!1}else{var k,f,g,y,_,L,S,E,G,T,q;c.data=u,""!==(null==e||null===(k=e.dataset)||void 0===k?void 0:k.emailSubject)&&(c.emailSubject=null==e||null===(S=e.dataset)||void 0===S?void 0:S.emailSubject),null!=e&&null!==(f=e.dataset)&&void 0!==f&&f.optionName&&(c.formOption=null==e||null===(E=e.dataset)||void 0===E?void 0:E.optionName),null!=e&&null!==(g=e.classList)&&void 0!==g&&g.contains("has-captcha")&&a&&null!==(y=window.themeisleGutenberg)&&void 0!==y&&null!==(_=y.tokens)&&void 0!==_&&_[a].token&&(c.token=null===(G=window.themeisleGutenberg)||void 0===G||null===(T=G.tokens)||void 0===T?void 0:T[a].token),null!=e&&e.id&&(c.formId=null==e?void 0:e.id),m&&(c.nonceValue=m),c.postUrl=window.location.href,null==h||h.classList.add("loading"),null!=e&&e.id&&(c.formId=null==e?void 0:e.id),e.classList.contains("is-subscription")&&(c.action="subscribe"),e.classList.contains("can-submit-and-subscribe")&&(c.action="submit-subscribe",c.consent=(null===(q=e.querySelector(".otter-form-consent input"))||void 0===q?void 0:q.checked)||!1),c.postUrl=window.location.href,null==h||h.classList.add("loading"),null===(L=n()({path:"otter/v1/forms",method:"POST",data:c}).then((e=>{var n,l;null==h||h.classList.remove("loading");const r=document.createElement("div");var i,s;r.classList.add("otter-form-server-response"),null!=e&&e.success?(r.innerHTML=(0,t.__)("Success","otter-blocks"),r.classList.add("success")):(r.classList.add("error"),"provider"===(null==e?void 0:e.error_source)?null!=e&&e.error.includes("invalid")||null!=e&&e.error.includes("fake")?(r.classList.add("warning"),r.innerHTML=(0,t.__)("⚠ The email address does not look correct!","otter-blocks")):null!=e&&e.error.includes("duplicate")||null!=e&&e.error.includes("already")?(r.classList.add("info"),r.innerHTML=(0,t.__)("🛈 The email was already registered!","otter-blocks")):r.innerHTML=(0,t.__)("Error. Something is wrong with the server! Try again later.","otter-blocks"):r.innerHTML=(0,t.__)("Error. Something is wrong with the server! Try again later.","otter-blocks"),console.error(null==e?void 0:e.error,null==e?void 0:e.reasons)),w(r),null!==(n=window.themeisleGutenberg)&&void 0!==n&&null!==(l=n.tokens)&&void 0!==l&&l[a].reset&&(null===(i=window.themeisleGutenberg)||void 0===i||null===(s=i.tokens)||void 0===s||s[a].reset()),o.disabled=!1})))||void 0===L||L.catch((e=>{var n,l;null==h||h.classList.remove("loading"),console.error(e);const r=document.createElement("div");var i,s;r.classList.add("otter-form-server-response"),r.innerHTML=(0,t.__)("Error. Something is wrong with the server! Try again later.","otter-blocks"),r.classList.add("error"),w(r),null!==(n=window.themeisleGutenberg)&&void 0!==n&&null!==(l=n.tokens)&&void 0!==l&&l[a].reset&&(null===(i=window.themeisleGutenberg)||void 0===i||null===(s=i.tokens)||void 0===s||s[a].reset()),o.disabled=!1}))}})(e,o))}))}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",l):l());const r=e=>{const o=e.querySelector(".otter-form__container"),n=e.querySelector(".wp-block-button"),l=document.createElement("div");l.classList.add("otter-form-consent"),o.insertBefore(l,n);const r=document.createElement("input");r.type="checkbox",r.name="consent",r.id="consent";const i=document.createElement("label");i.innerHTML=(0,t.__)("I consent to my name and email to be collected.","otter-blocks"),i.htmlFor="consent",l.appendChild(r),l.appendChild(i)}}();