// preloader
window.addEventListener("load", () => {
  function preloader() {
    const preloader = document.querySelector('.preloader');

    if (!preloader) return
    preloader.classList.add('loaded');

    setTimeout(() => {

      preloader.remove()
    }, 990)
  }

  setTimeout(() => {
    preloader()
  }, 1000)
})

const btnLeave = document.querySelector('.ui-btn.leave');

if(btnLeave) {
  btnLeave.addEventListener('click', () => {
    const confirmForm = document.querySelector('.confirm-form')
    const confirmFailBlock = document.querySelector('.confirm-fail');

    confirmForm.remove()
    confirmFailBlock.classList.add('active')
  })
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});