import{i as f,S as L,a as S}from"./assets/vendor-527658dd.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const p="/goit-js-hw-12/assets/error-7115e62e.svg",c=document.querySelector(".gallery");let g=0;function w(s){if(g=Math.ceil(s.totalHits/15),s.total===0)u(),f.error({iconUrl:p,iconColor:"color: #fff",message:"<p>Sorry, there are no images matching</p> <p>your search query. Please try again!</p>",messageColor:"#fafafb",messageSize:"16px",position:"topRight",theme:"dark",backgroundColor:"#ef4040"});else if(g===a)n.toggle("bnt-isvisible",!0),f.error({iconUrl:p,iconColor:"color: #fff",message:"<p>We're sorry, but you've reached the end of search results.</p>",messageColor:"#fafafb",messageSize:"16px",position:"topRight",theme:"dark",backgroundColor:"#ef4040"});else{const i=s.hits.slice(0,20);if(a===1&&u(),c.insertAdjacentHTML("beforeend",i.map(({webformatURL:t,largeImageURL:e,tags:o,likes:r,views:b,comments:h,downloads:v})=>`<div class="container">
                        <div class="card">
                            <a class="gallery-link" href="${e}">
                                <img
                                class="image-card"
                                src="${t}"
                                alt="${o}"
                                />
                            </a> 
                            <ul class="list">
                            <li class="list-item">
                                <p class="title">Likes</p>
                                <p class="value">${r}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Views</p>
                                <p class="value">${b}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Comments</p>
                                <p class="value">${h}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Downloads</p>
                                <p class="value">${v}</p>
                            </li>
                            </ul>
                        </div>
                    </div>`).join("")),a>1){const t=c.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}n.toggle("bnt-isvisible",!1)}const l=new L(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});l.refresh(),l.on("shown.simplelightbox",()=>{const i=document.querySelector(".sl-wrapper"),t=document.querySelector(".sl-counter"),e=document.querySelector(".sl-close"),o=document.querySelectorAll(".sl-wrapper .sl-navigation button");i.style.backgroundColor="rgba(46, 47, 66, 0.8)",t.style.color="#fff",t.style.fontFamily="Montserrat",t.style.top="16px",e.style.color="#fff",o.forEach(r=>r.style.color="#fff")})}function u(){c.innerHTML="",n.toggle("bnt-isvisible",!0)}const C="42515618-500ad6d8e1f921b5ea984b145",q=document.querySelector(".isVisible"),d=q.classList,P=document.querySelector(".bnt-isvisible"),n=P.classList;let a=1;function $(){a=1}function I(){a++}function m(s){d.toggle("isVisible",!1),n.toggle("bnt-isvisible",!0);const l=`https://pixabay.com/api/?key=${C}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${a}`;(async()=>{const t=await S.get(l);return d.toggle("isVisible",!0),n.toggle("bnt-isvisible",!1),t.data})().then(t=>w(t)).catch(t=>{console.log(t),u()})}const x=document.querySelector("button[data-start]"),k=document.querySelector("#data-search"),M=document.querySelector("button[data-loadmore]");let y;x.addEventListener("click",()=>{const s=k.value.trim();$(),s!==""&&(m(s.trim()),y=s)});M.addEventListener("click",()=>{I(),m(y)});
//# sourceMappingURL=commonHelpers.js.map
