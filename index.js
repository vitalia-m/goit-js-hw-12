import{a as w,S as b,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v="49700975-4dc06388df5f2ad47df406614",P=15;async function q(o,t){return(await w.get("https://pixabay.com/api/",{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:P}})).data}const u=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more-btn"),S=new b(".gallery a",{captionsData:"alt",captionDelay:250});function B(o){const t=o.map(({largeImageURL:i,webformatURL:s,tags:e,likes:r,views:a,comments:p,downloads:L})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${s}" alt="${e}" width="360" height="152" />
          </a>
          <ul class="gallery-info">
            <li class="gallery-info-item"><b>Likes</b> ${r}</li>
            <li class="gallery-info-item"><b>Views</b> ${a}</li>
            <li class="gallery-info-item"><b>Comments</b> ${p}</li>
            <li class="gallery-info-item"><b>Downloads</b> ${L}</li>
          </ul>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",t),S.refresh()}function M(){u.innerHTML=""}function x(){g.classList.remove("is-hidden")}function f(){g.classList.add("is-hidden")}function $(){h.classList.remove("is-hidden")}function m(){h.classList.add("is-hidden")}const n="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_210)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V12V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89916%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89916%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80622C16.3037%206.76848%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76848%2016.7874%206.80622C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12152%2017.1938%207.21263C17.2315%207.30374%2017.2509%207.40139%2017.2509%207.5C17.2509%207.59862%2017.2315%207.69627%2017.1938%207.78738C17.156%207.87849%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30367%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_210'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",d=document.querySelector(".form"),A=document.querySelector(".gallery-button");let y=1,c="";d.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim().toLowerCase();if(t===""){l.error({message:"Please enter a search query.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",class:"error-icon",iconUrl:n});return}t!==c&&(c=t,y=1,M(),m()),await C(!0),d.reset()});A.addEventListener("click",async()=>{await C()});async function C(o=!1){x();try{const t=await q(c,y);if(t.hits.length===0&&o){l.error({message:"Sorry, there are no images matching<br/> your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",class:"error-icon",iconUrl:n});return}if(B(t.hits),curentPage++,!o){const i=document.querySelector(".gallery .gallery-item");if(i){const s=i.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}t.hits.length===15?$():(m(),l.show({message:"We're sorry, but you've reached the end of search results.",title:"End of results",position:"topRight"}),f())}catch{l.error({message:"Something went wrong. Please try again later!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",class:"error-icon",iconUrl:n})}finally{f()}}
//# sourceMappingURL=index.js.map
