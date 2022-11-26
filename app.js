const popup = document.getElementById("popup-window"); // the cookie window
const toggle = document.querySelector(".toggle"); // the display none toggle class
const closeBtn = document.getElementById("closeBtn"); //close btn
const form = document.getElementById("consent-form"); // form element
const btns = document.getElementById("btns"); // thing holding all buttons accept x decline
const declineBtn = document.querySelector(".decline-btn"); //btns decline
const acceptBtn = document.querySelector(".accept-btn"); // btns accept

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

 //  formData -- interesting little thing.
 const formData = new FormData(form);
 const nameFull = formData.get("fullName");

 popup.innerHTML = `
 <h2>One moment please....</h2>
  <img src="loader.gif" class="loader">
  <p class="baked-data">Your data is being baked to perfection...</p>
 `;

 setTimeout(() => {
  document.querySelector(
   ".baked-data"
  ).innerText = `Thank you, your data has been baked to perfection....`;
 }, 2500);

 setTimeout(() => {
  closeBtn.disabled = false; // because disabled in the html is a boolean adding this just swaps it and now will make button clickable.
  popup.innerHTML = `
 <h1>Mhmmm nom nom nom....</h1>
 <p class="end-p">Thank you ${nameFull}! Your data was baked to perfection and is being EATEN!!!!</p> 
<img src="Cookie-monster.gif" class="gif">
<p> With love of course &star;</p>`;

  // the closeBtn having a boolean value is now true, so using an if statement to see if its good. if so, close is possible, then remove the button, it has served its purpose.
  closeBtn.addEventListener("click", function () {
   //  if (closeBtn) {
   //   popup.classList.toggle("toggle");
   //   closeBtn.classList.add("close");
   //  }

   //  ternary practice: probably best to use if statement, but practice/refresher on use was needed. so, used it.
   closeBtn
    ? popup.classList.toggle("toggle") && closeBtn.classList.add("close")
    : console.log("bye");
  });
 }, 4000);
});
