//Event Timer
let eventTitle = document.querySelector(".events .info .title");
console.log(eventTitle.innerHTML);
console.log(eventTitle.textContent);

console.log(eventTitle.innerText);

eventTitle.innerHTML = `Tech Masters Event ${new Date().getFullYear()}`;
let counter = setInterval(() => {
  let endDate = new Date(new Date().getFullYear(), 11, 31).getTime();
  let dateNow = new Date().getTime();
  let dateDiff = endDate - dateNow;
  let days = Math.floor(dateDiff / (24 * 60 * 60 * 1000));
  let fraction = dateDiff % (24 * 60 * 60 * 1000);
  let hours = Math.floor(fraction / (60 * 60 * 1000));
  fraction = fraction % (60 * 60 * 1000);
  let minutes = Math.floor(fraction / (60 * 1000));
  fraction = fraction % (60 * 1000);
  let seconds = Math.floor(fraction / 1000);

  document.querySelector(".days").innerHTML =
    days < 100 ? `00${days}` : days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff <= 0) {
    clearInterval(counter);
    startCounter();
  }
}, 1000);

//Animate And Increase Stats On Scrolling

let progressSpans = document.querySelectorAll(".the-progress span");
let skillsSection = document.querySelector(".our-skills");
let stats = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = () => {
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      stats.forEach((stat) => startCount(stat));
      started = true;
    }
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
