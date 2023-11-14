import"./assets/scroll-up-2f72e7b4.js";import{a as c,N as p,l as q}from"./assets/vendor-a9f52953.js";c.defaults.headers.post["Content-Type"]="application/json";c.defaults.baseURL="https://books-backend.p.goit.global/";async function b(){return(await c.get("/books/top-books")).data}async function _(e){return(await c.get(`books/category?category=${e}`)).data}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("authModal"),t=document.getElementById("sign-in-button-main"),o=document.querySelector(".auth-form-close"),s=document.getElementById("signup-link"),l=document.getElementById("signin-link"),E=document.getElementById("signup-form");document.getElementById("signin-form");const g=document.querySelector(".btn-sign-up");t.addEventListener("click",function(){S(e)}),o.addEventListener("click",function(){e.style.display="none"}),s.addEventListener("click",function(a){a.preventDefault(),k("Sign up")}),l.addEventListener("click",function(a){a.preventDefault(),k("Sign in")}),E.addEventListener("submit",function(a){a.preventDefault();const i=document.getElementById("name").value,M=document.getElementById("email").value,w=document.getElementById("password").value;I({name:i,email:M,password:w}),e.style.display="none",this.reset()});function S(a){a.style.display="block"}function I(a){const i=JSON.parse(localStorage.getItem("users"))||[];i.push(a),localStorage.setItem("users",JSON.stringify(i))}function k(a){g&&(g.textContent=a)}});const $="https://books-backend.p.goit.global/books/",x="category-list";async function T(){try{const e=await c.get($+x);if(e.status===200){const t=e.data,o=document.querySelector(".categories-list");t.map(s=>{const l=document.createElement("li");l.textContent=s.list_name,l.classList.add("categ-item"),o.appendChild(l)})}else p.Notify.failure(`Request execution error. Status code: ${e.status}`)}catch(e){p.Notify.failure("An error occurred while sending the request."),console.error("An error occurred while sending the request:",e)}}T();const d=document.querySelector(".books"),r=document.querySelector(".categories-list"),C=document.querySelector("#books-category-name");N();async function N(){const e=await b(),t=f(e);d.insertAdjacentHTML("beforeend",t)}function f(e){return e.map(t=>L(t.list_name,t.books,!1))}function L(e,t,o){let s=o?"":`<div class = "books-list-name" >${e}</div>`;s+=`<ul class="books-container ${o?"books-container-multi":""}">
                    ${D(t)}
                </ul>`;const l=o?"":`<button class = "books-btn" type = "button" id="${e}"> SEE MORE </button>`;return s+=l,s}function D(e){return e.map(t=>`<li>
                <div data-book=${t._id} class="book-block">
                    <img src="${t.book_image}" class="book-pic" width=120 heigh=240 />
                    <p class="book-name">${t.title}</p>
                    <p class="book-author">${t.author}</p>
                </div>
         </li>`).join("")}r.addEventListener("click",async e=>{if(e.preventDefault(),e.target==r)return;const t=e.target.innerHTML;v(t)});async function v(e){for(const o of r.children)o.innerHTML!=e?o.classList.remove("is-active-item"):o.classList.add("is-active-item");let t=null;if(e=="All categories"){y("Best Sellers Books");const o=await b();t=f(o)}else{y(e);const o=await _(e);t=L(e,o,!0)}d.innerHTML=t,window.scrollTo({top:0,behavior:"smooth"})}function y(e){const t=e.split(" ");C.innerHTML=`<span class="dark-text">${t[0]}</span> ${t.slice(1).join(" ")}`}d.addEventListener("click",async e=>{if(e.target.classList.contains("books-btn")){console.log("here");const t=e.target.id;v(t)}});const n={coverModal:document.querySelector(".cover-modal"),modalCoverContant:document.querySelector(".modal-cover-contant"),closeBtn:document.querySelector(".modal-btn-close"),body:document.querySelector("body"),addBtn:document.querySelector(".add"),removeBtn:document.querySelector(".remove"),openListBtn:document.querySelector(".open-list"),modalText:document.querySelector(".modal-add-text"),booksListElement:document.querySelector(".books")};n.booksListElement.addEventListener("click",e=>{let t=null;if(e.target.classList.contains("book-block"))t=e.target.dataset.book;else if(e.target.parentNode.classList.contains("book-block"))t=e.target.parentNode.dataset.book;else return;A(t)});async function A(e){const t="https://books-backend.p.goit.global/books/";try{const s=(await c(t+e)).data;O(s),n.addBtn.addEventListener("click",()=>j(s)),H(),m(s._id),n.removeBtn.addEventListener("click",()=>J(s))}catch(o){console.log(o)}}function O(e){const t=`
                <img src="${e.book_image}" alt="book cover" class="modal-img">

                <div class="modal-contant-box">
                    <h2 class="modal-title">${e.title}</h2>
                    <h3 class="modal-book-author">${e.author}</h3>
                    <p class="modal-text">In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past
                        resurfaces
                        as
                        he gets to the know
                        the family
                        of his college sweetheart.</p>
                    <ul class="modal-list">
                        <li class="modal-item"><a href="${e.buy_links[0].url}" target="_blank" rel="noopener noreferrer nofollow"
                                class="modal-link">
                                <img src="../images/image1.png" alt="" class="modal-icon amazone-js">
                            </a></li>
                        <li class="modal-item"><a href="${e.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"
                                class="modal-link">
                                <img src="../images/image1(1).png" alt="" class="modal-icon">

                            </a></li>
                    </ul>
                </div>
    `;n.modalCoverContant.innerHTML=t}function H(){n.coverModal.classList.add("visible-element"),n.body.classList.add("no-scroll"),document.addEventListener("keydown",q.throttle(u,500))}n.coverModal.addEventListener("click",e=>{(e.target.classList.contains("cover-modal")||e.target.classList.contains("modal-btn-close"))&&(n.coverModal.classList.remove("visible-element"),n.body.classList.remove("no-scroll"),document.removeEventListener("keydown",u))});function u(e){e.key==="Escape"&&(n.coverModal.classList.remove("visible-element"),document.removeEventListener("keydown",u))}function j(e){const t=h();t[e._id]=e,B(t),m(e._id)}function J(e){const t=h();console.log(t),t[e._id]&&(delete t[e._id],B(t)),m(e._id)}function h(){return JSON.parse(localStorage.getItem("booksInList"))||{}}function B(e){localStorage.setItem("booksInList",JSON.stringify(e))}function m(e){try{(JSON.parse(localStorage.getItem("booksInList"))||{})[e]?(n.addBtn.style.display="none",n.removeBtn.style.display="block",n.modalText.style.display="block"):(n.addBtn.style.display="block",n.removeBtn.style.display="none",n.modalText.style.display="none")}catch(t){console.log(t)}}
//# sourceMappingURL=commonHelpers.js.map
