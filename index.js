import{a as y,S as x,i as c}from"./assets/vendor-DKcYUvi-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const M=({largeImageURL:i,webformatURL:e,tags:o,likes:r,views:t,comments:s,downloads:l})=>`
  <li class="gallery-item">
      <a class="gallery-link" href="${i}">
      <img class="gallery-img" src="${e}" alt="${o}" />
      </a>
      <ul class="img-info-list">
        <li class="img-info-item">
          <p class="img-info-text">Likes</p>
          <p class="img-info-value">${r}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Views</p>
          <p class="img-info-value">${t}</p>
        </li>
        <li class="img-info-item">
           <p class="img-info-text">Comments</p>
          <p class="img-info-value">${s}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Downloads</p>
          <p class="img-info-value">${l}</p>
        </li>
      </ul>
  </li>
  `,L=i=>i.map(e=>M(e)).join("");y.defaults.baseURL="https://pixabay.com";const v=(i,e,o)=>{const r={params:{key:"45436364-f90a0cfe5f9b13d8d0e95a311",q:i,page:e,per_page:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return y.get("/api/",r)},d="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_210)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89916%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89916%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80622C16.3037%206.76848%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76848%2016.7874%206.80622C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12152%2017.1938%207.21263C17.2315%207.30374%2017.2509%207.40139%2017.2509%207.5C17.2509%207.59862%2017.2315%207.69627%2017.1938%207.78738C17.156%207.87849%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30367%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_210'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";let w=new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const n=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery"),p=document.querySelector(".js-load-btn"),C=document.querySelector(".available-photo-quantity"),a=document.querySelector(".js-loader"),u=15;let h,f="",g,b;const P=()=>{g<b?(p.classList.remove("is-hidden"),typeof h=="number"&&h>0?C.textContent=h:C.textContent=""):c.show({timeout:3e3,message:"We're sorry, but you've reached the end of search results.",position:"bottomLeft",iconUrl:d})},S=async i=>{try{if(i.preventDefault(),a.classList.remove("is-hidden"),f=n.elements.user_query.value.trim(),!f){c.show({timeout:3e3,message:"To search, fill out the form!",position:"topLeft",iconUrl:d}),m.innerHTML="",n.reset(),a.classList.add("is-hidden"),p.classList.add("is-hidden");return}g=1;const{data:e}=await v(f,g,u);if(a.classList.add("is-hidden"),e.hits.length===0){c.show({timeout:5e3,message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconUrl:d}),m.innerHTML="",n.reset(),a.classList.add("is-hidden"),p.classList.add("is-hidden");return}m.innerHTML=L(e.hits),w.refresh(),n.reset(),b=Math.ceil(e.totalHits/u),h=e.totalHits-u,P()}catch(e){c.show({timeout:5e3,message:`An error occurred: ${e.message}`,position:"topCenter",iconUrl:d})}},q=async()=>{try{g++,a.classList.remove("is-hidden"),p.classList.add("is-hidden");const{data:i}=await v(f,g,u);m.insertAdjacentHTML("beforeend",L(i.hits)),w.refresh(),a.classList.add("is-hidden"),h-=u,P();let o=m.querySelector("li").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}catch(i){c.show({timeout:5e3,message:`An error occurred: ${i.message}`,position:"topCenter",iconUrl:d})}};n.addEventListener("submit",S);p.addEventListener("click",q);
//# sourceMappingURL=index.js.map
