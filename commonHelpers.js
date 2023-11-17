import"./assets/scroll-up-f97e5f49.js";import{a as l,l as q}from"./assets/vendor-27bc9ff5.js";l.defaults.headers.post["Content-Type"]="application/json";l.defaults.baseURL="https://books-backend.p.goit.global/";async function v(){return(await l.get("/books/top-books")).data}async function T(e){return(await l.get(`books/category?category=${e}`)).data}async function B(e){return(await l.get(`books/${e}`)).data}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("authModal"),t=document.getElementById("sign-in-button-main"),o=document.querySelector(".auth-form-close"),s=document.getElementById("signup-link"),i=document.getElementById("signin-link"),w=document.getElementById("signup-form");document.getElementById("signin-form");const g=document.querySelector(".btn-sign-up");t.addEventListener("click",function(){M(e)}),o.addEventListener("click",function(){e.style.display="none"}),s.addEventListener("click",function(a){a.preventDefault(),b("Sign up")}),i.addEventListener("click",function(a){a.preventDefault(),b("Sign in")}),w.addEventListener("submit",function(a){a.preventDefault();const c=document.getElementById("name").value,r=document.getElementById("email").value,y=document.getElementById("password").value,f={name:c,email:r,password:y};x(f),$(f),e.style.display="none",this.reset()});function M(a){a.style.display="block"}function x(a){const c=JSON.parse(localStorage.getItem("users"))||[];c.push(a),localStorage.setItem("users",JSON.stringify(c))}function b(a){g&&(g.textContent=a)}function $(a){const c=document.getElementById("sign-in-button-main");c.style.display="none";const r=document.createElement("div");r.classList.add("user-circle"),r.textContent=a.name.charAt(0).toUpperCase(),document.querySelector(".right-col").appendChild(r)}});const _="https://books-backend.p.goit.global/books/",N="category-list";async function A(){try{const e=await l.get(_+N);if(e.status===200){const t=e.data,o=document.querySelector(".categories-list");t.map(s=>{const i=document.createElement("li");i.textContent=s.list_name,i.classList.add("categ-item"),o.appendChild(i)})}else Notiflix.Notify.failure(`Request execution error. Status code: ${e.status}`)}catch(e){Notiflix.Notify.failure("An error occurred while sending the request."),console.error("An error occurred while sending the request:",e)}}A();const u=document.querySelector(".books"),d=document.querySelector(".categories-list"),D=document.querySelector("#books-category-name"),h={backgroundColor:"rgba(82,48,232, 0.85)",messageColor:"rgba(234, 198, 67, 1)",svgColor:"rgba(234, 198, 67, 1)"};H();async function H(){Notiflix.Loading.circle("Loading...",h);const e=await v(),t=E(e);u.insertAdjacentHTML("beforeend",t),Notiflix.Loading.remove()}function E(e){return e.map(t=>I(t.list_name,t.books,!1))}function I(e,t,o){let s=o?"":`
    <div class = "books-list-name" >${e}</div>`;s+=`<ul class="books-container ${o?"books-container-multi":""}">
                    ${O(t)}
                </ul>`;const i=o?"":`<button class = "books-btn" type = "button" id="${e}"> SEE MORE </button>`;return s+=i,s}function O(e){return e.map(t=>`<li class="book-block-two">
                <div data-book=${t._id} class="book-block">
                    <img src="${t.book_image}" class="book-pic" width=120 heigh=240 />
                    <p class="book-name">${t.title}</p>
                    <p class="book-author">${t.author}</p>
                </div>
         </li>`).join("")}d.addEventListener("click",async e=>{if(e.preventDefault(),e.target==d)return;const t=e.target.innerHTML;S(t)});async function S(e){Notiflix.Loading.circle("Loading...",h);for(const o of d.children)o.innerHTML!=e?o.classList.remove("is-active-item"):o.classList.add("is-active-item");let t=null;if(e=="All categories"){L("Best Sellers Books");const o=await v();t=E(o)}else{L(e);const o=await T(e);t=I(e,o,!0)}u.innerHTML=t,Notiflix.Loading.remove(),window.scrollTo({top:0,behavior:"smooth"})}function L(e){const t=e.split(" ");D.innerHTML=`<span class="dark-text">${t[0]}</span> ${t.slice(1).join(" ")}`}u.addEventListener("click",async e=>{if(e.target.classList.contains("books-btn")){const t=e.target.id;S(t)}});const n={coverModal:document.querySelector(".cover-modal"),modalCoverContent:document.querySelector(".modal-cover-content"),closeBtn:document.querySelector(".modal-btn-close"),body:document.querySelector("body"),addBtn:document.querySelector(".add"),removeBtn:document.querySelector(".remove"),openListBtn:document.querySelector(".open-list"),modalText:document.querySelector(".modal-add-text"),booksListElement:document.querySelector(".books"),body:document.querySelector("body")};n.booksListElement.addEventListener("click",e=>{let t=null;if(e.target.classList.contains("book-block"))t=e.target.dataset.book;else if(e.target.parentNode.classList.contains("book-block"))t=e.target.parentNode.dataset.book;else return;j(t)});async function j(e){try{const t=await B(e);n.modalCoverContent.dataset.selectedBookId=t._id,U(t),F(),k(t._id)}catch(t){console.log(t)}}n.removeBtn.addEventListener("click",()=>{const e=n.modalCoverContent.dataset.selectedBookId;e&&R(e)});n.addBtn.addEventListener("click",async()=>{const e=n.modalCoverContent.dataset.selectedBookId;if(e){const t=await B(e);J(t)}});function U(e){const t=`
                <img src="${e.book_image}" alt="book cover" class="modal-img">

                <div class="modal-contant-box">
                    <h2 class="modal-title">${e.title}</h2>
                    <h3 class="modal-book-author">${e.author}</h3>
                    <p class="modal-text">${e.description}</p>
                    <ul class="modal-list">
                        ${z(e.buy_links)}
                    </ul>
                </div>`;n.modalCoverContent.innerHTML=t}function z(e){return e.map(t=>{let o=null;if(n.body.classList.contains("dark-theme"))switch(t.name){case"Amazon":{o="../images/amazon-darck.png";break}case"Apple Books":{o="../images/apple.png";break}default:return""}else switch(t.name){case"Amazon":{o="../images/amazon.png";break}case"Apple Books":{o="../images/apple.png";break}default:return""}return`<li class="modal-item">

              <a href="${t.url}" target="_blank" rel="noopener noreferrer nofollow" class="modal-link">
              <img src=${o} alt=${t.name} class="modal-icon amazone-js"></a>
    </li>`}).join("")}function F(){n.coverModal.classList.add("visible-element"),n.body.classList.add("no-scroll"),document.addEventListener("keydown",q.throttle(m,500))}n.coverModal.addEventListener("click",e=>{(e.target.classList.contains("cover-modal")||e.target.classList.contains("modal-btn-close"))&&(n.coverModal.classList.remove("visible-element"),n.body.classList.remove("no-scroll"),document.removeEventListener("keydown",m))});function m(e){e.key==="Escape"&&(n.coverModal.classList.remove("visible-element"),document.removeEventListener("keydown",m))}function J(e){const t=p();t.some(s=>s._id===e._id)||(t.push(e),C(t)),k(e._id)}function p(){return JSON.parse(localStorage.getItem("booksInList"))??[]}function C(e){localStorage.setItem("booksInList",JSON.stringify(e))}function k(e){p().some(s=>s._id===e)?(n.addBtn.style.display="none",n.removeBtn.style.display="block",n.modalText.style.display="block"):(n.addBtn.style.display="block",n.removeBtn.style.display="none",n.modalText.style.display="none")}function R(e){const o=p().filter(s=>s._id!==e);C(o),k(e)}
//# sourceMappingURL=commonHelpers.js.map
