const popup = document.getElementById("popup-window"); // the cookie window
const toggle = document.querySelector(".toggle"); // the display none toggle class
const closeBtn = document.getElementById("closeBtn"); //close btn
const form = document.getElementById("consent-form"); // form element

const btns = document.getElementById("btns"); // thing holding all buttons accept x decline

const declineBtn = document.querySelector(".decline-btn"); //btns decline
const acceptBtn = document.querySelector(".accept-btn"); // btns accept

// mondalBtnClose.disabled = false;

setTimeout(() => {
 popup.classList.toggle("toggle");
}, 1500);

//event listeners

declineBtn.addEventListener(
 "mouseover",
 () => btns.classList.toggle("btns-toggle")
 //toggles the two so you can never switch and click decline
);

addEventListener("submit", function (event) {
 event.preventDefault();

 const formData = new FormData(form);
 console.log(formData);
 const nameFull = formData.get("fullName");
 console.log(nameFull);

 popup.innerHTML = `
 <h2>One moment please....</h2>
  <img src="/assets/images/loader.gif" class="loader">
  <p class="baked-data">Your data is being baked to perfection...</p>
 `;

 setTimeout(() => {
  document.querySelector(
   ".baked-data"
  ).innerText = `Thank you, your data has been baked to perfection....`;
 }, 2500);

 setTimeout(() => {
  closeBtn.disabled = false;
  popup.innerHTML = `
 <h1>Mhmmm nom nom nom....</h1>
 <p class="end-p">Thank you ${nameFull}! Your data was baked to perfection and is being EATEN!!!!</p> 
<img src="/assets/images/Cookie-monster.gif" class="gif">
<p> With love of course &star;</p>`;

  closeBtn.addEventListener("click", function () {
   if (closeBtn) {
    popup.classList.toggle("toggle");
    closeBtn.classList.add("close");
   }
  });
 }, 4000);
});

// settimeout to handle pop-up after 1.5sec
