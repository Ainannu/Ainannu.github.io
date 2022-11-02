const img1 = document.getElementsByClassName("image1");
const img2 = document.getElementsByClassName("image2");
const img3 = document.getElementsByClassName("image3");
const img4 = document.getElementsByClassName("image4");
const readyAR = document.getElementsByClassName("readyARText");
const getReady = document.getElementsByClassName("getReady");
const myCard = document.getElementsByClassName("cardInner");
const mobileText = document.getElementsByClassName("mobileTextGrid");
let slidingShow;
let reveled = -1;
let pastI = -1;
let width;

// console.log(screen.width);

window.onscroll = (event) => {
  let scroll = window.pageYOffset;
  width = window.innerWidth;
  let logoSectionMobile = 690;
  let logoSection = 635;
  let newScroll = scroll - logoSection;
  let mobileScroll = scroll - logoSectionMobile;
  // console.log("Y : " + scroll);
  // console.log("width: " + width);
  const body = document.getElementsByTagName("body")[0];
  if (window.innerWidth > 770) {
    if (scroll > 300) {
      getReady[0].children[0].classList.add("changeOpacityNormal");
      getReady[0].children[1].classList.add("changeOpacitySlow");
      getReady[0].children[2].classList.add("changeOpacityFast");
    }

    if (newScroll == 0) {
      if (width > 1200) {
        img1[0].style.transform = "matrix(1,0,0,1,0,0)";
        img2[0].style.transform = "matrix(1, 0, 0, 1, 50, -390)";
        img3[0].style.transform = "matrix(1, 0, 0, 1, -50, -740)";
        img4[0].style.transform = "matrix(1, 0, 0, 1, -100, -1280)";
      } else if (width < 1200 && width > 770) {
        img1[0].style.transform = "matrix(1,0,0,1,0,0)";
        img2[0].style.transform = "matrix(1, 0, 0, 1, 50, -320)";
        img3[0].style.transform = "matrix(1, 0, 0, 1, -50, -600)";
        img4[0].style.transform = "matrix(1, 0, 0, 1, -100, -1020)";
      }
    }

    if (newScroll > 0) {
      if (newScroll < 180) {
        if (width > 1200)
          img1[0].style.transform =
            "matrix(" +
            (1 + newScroll * 0.0015) +
            ",0,0," +
            (1 + newScroll * 0.0015) +
            "," +
            -1.1 * newScroll +
            "," +
            0.5 * newScroll +
            ")";
        else if (width < 1200 && width > 770)
          img1[0].style.transform =
            "matrix(" +
            (1 + newScroll * 0.0005) +
            ",0,0," +
            (1 + newScroll * 0.0005) +
            "," +
            -1.0 * newScroll +
            "," +
            0.5 * newScroll +
            ")";

        // img1[0].lastElementChild.classList.add("hidden");
      }
      if (newScroll > 180) {
        // img1[0].lastElementChild.classList.remove("hidden");
        if (width > 1200)
          img1[0].style.transform =
            "matrix(" +
            (1 + 180 * 0.0015) +
            ",0,0," +
            (1 + 180 * 0.0015) +
            "," +
            -1.1 * 180 +
            "," +
            0.5 * 180 +
            ")";
        else if (width < 1200 && width > 770)
          img1[0].style.transform =
            "matrix(" +
            (1 + 180 * 0.0005) +
            ",0,0," +
            (1 + 180 * 0.0005) +
            "," +
            -1.0 * 180 +
            "," +
            0.5 * 180 +
            ")";
        img1[0].lastElementChild.classList.add("changeOpacityNormal");
      }
      if (newScroll < 400) {
        if (width > 1200)
          img2[0].style.transform =
            "matrix(" +
            (1 + newScroll * 0.0008) +
            ",0,0," +
            (1 + newScroll * 0.0008) +
            "," +
            (newScroll * 0.6 + 50) +
            "," +
            (0.5 * newScroll - 390) +
            ")";
        else if (width < 1200 && width > 770)
          img2[0].style.transform =
            "matrix(" +
            (1 + newScroll * 0.00008) +
            ",0,0," +
            (1 + newScroll * 0.00008) +
            "," +
            (newScroll * 0.2 + 50) +
            "," +
            (0.5 * newScroll - 320) +
            ")";

        // img2[0].lastElementChild.classList.add("hidden");
      }
      if (newScroll > 400) {
        // img2[0].lastElementChild.classList.remove("hidden");
        if (width > 1200)
          img2[0].style.transform =
            "matrix(" +
            (1 + 400 * 0.0008) +
            ",0,0," +
            (1 + 400 * 0.0008) +
            "," +
            (400 * 0.6 + 50) +
            "," +
            (0.5 * 400 - 390) +
            ")";
        else if (width < 1200 && width > 770)
          img2[0].style.transform =
            "matrix(" +
            (1 + 400 * 0.00008) +
            ",0,0," +
            (1 + 400 * 0.00008) +
            "," +
            (400 * 0.2 + 50) +
            "," +
            (0.5 * 400 - 320) +
            ")";
        img2[0].lastElementChild.classList.add("changeOpacityNormal");
      }
      if (newScroll < 500) {
        if (width > 1200)
          img3[0].style.transform =
            "matrix(" +
            (1 + newScroll * 0.0007) +
            ",0,0," +
            (1 + newScroll * 0.0007) +
            "," +
            (-newScroll * 0.29 - 50) +
            "," +
            (1.01 * newScroll - 740) +
            ")";
        else if (width < 1200 && width > 770)
          img3[0].style.transform =
            "matrix(" +
            (1 + newScroll * 0.0003) +
            ",0,0," +
            (1 + newScroll * 0.0003) +
            "," +
            (-newScroll * 0.25 - 50) +
            "," +
            (0.72 * newScroll - 600) +
            ")";

        // img3[0].lastElementChild.classList.add("hidden");
      }
      if (newScroll > 600) {
        // img3[0].lastElementChild.classList.remove("hidden");
        if (width > 1200)
          img3[0].style.transform =
            "matrix(" +
            (1 + 500 * 0.0007) +
            ",0,0," +
            (1 + 500 * 0.0007) +
            "," +
            (-500 * 0.29 - 50) +
            "," +
            (1.01 * 500 - 740) +
            ")";
        else if (width < 1200 && width > 770) {
          img3[0].style.transform =
            "matrix(" +
            (1 + 500 * 0.0003) +
            ",0,0," +
            (1 + 500 * 0.0003) +
            "," +
            (-500 * 0.25 - 50) +
            "," +
            (0.72 * 500 - 600) +
            ")";
          readyAR[0].classList.add("changeOpacityNormal");
        }
        img3[0].lastElementChild.classList.add("changeOpacityNormal");
      }
      if (newScroll < 600) {
        if (width > 1200)
          img4[0].style.transform =
            "matrix(" +
            (1 + newScroll * 0.00045) +
            ",0,0," +
            (1 + newScroll * 0.00045) +
            "," +
            (newScroll * 0.64 - 100) +
            "," +
            (1.26 * newScroll - 1280) +
            ")";
        else if (width < 1200 && width > 770)
          img4[0].style.transform =
            "matrix(" +
            (1 + newScroll * 0.00015) +
            ",0,0," +
            (1 + newScroll * 0.00015) +
            "," +
            (newScroll * 0.4 - 100) +
            "," +
            (0.92 * newScroll - 1020) +
            ")";

        // img4[0].lastElementChild.classList.add("hidden");
      }
      if (newScroll > 700) {
        // img4[0].lastElementChild.classList.remove("hidden");
        if (width > 1200)
          img4[0].style.transform =
            "matrix(" +
            (1 + 600 * 0.00045) +
            ",0,0," +
            (1 + 600 * 0.00045) +
            "," +
            (600 * 0.64 - 100) +
            "," +
            (1.26 * 600 - 1280) +
            ")";
        else if (width < 1200 && width > 770)
          img4[0].style.transform =
            "matrix(" +
            (1 + 600 * 0.00015) +
            ",0,0," +
            (1 + 600 * 0.00015) +
            "," +
            (600 * 0.4 - 100) +
            "," +
            (0.92 * 600 - 1020) +
            ")";
        img4[0].lastElementChild.classList.add("changeOpacityNormal");
      }
      if (newScroll > 1200) {
        if (width > 1200) readyAR[0].classList.add("changeOpacityNormal");
      }
      if (scroll > 2400 && width > 1200) {
        if (reveled != pastI) {
          // console.log("this is current index " +reveled);
          for (let i = 0; i <= reveled; i++) {
            reveling(i);
          }
          pastI = reveled;
        }
      } else if (scroll > 2000 && width < 1200) {
        if (reveled != pastI) {
          // console.log("this is current index " +reveled);
          for (let i = 0; i <= reveled; i++) {
            reveling(i);
          }
          pastI = reveled;
        }
      }
    }
  } else {
    if (mobileScroll > -200 && mobileScroll < 740) {
      mobileText[0].children[0].children[0].children[0].classList.add(
        "changeOpacityNormal"
      );
      mobileText[0].children[0].children[1].children[0].classList.add(
        "changeOpacitySlow"
      );
      mobileText[0].children[0].children[2].children[0].classList.add(
        "changeOpacityFast"
      );
    } else if (mobileScroll > 740) {
      if (reveled != pastI) {
        // console.log("this is current index " +reveled);
        for (let i = 0; i <= reveled; i++) {
          reveling(i);
        }
        pastI = reveled;
      }
    }
  }
};

let releaseYear = 2022;
let releaseDay = 29;
let releaseMonth = "oct";
let releaseHours = "17:";
let releaseHours2 = "21:";
let releaseMinutes = "00:";
let releaseSeconds = "00";

const countDownDateChallenge1 = new Date(
  releaseMonth +
  " " +
  releaseDay +
  ", " +
  releaseYear +
  " " +
  releaseHours +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge2 = new Date(
  releaseMonth +
  " " +
  releaseDay +
  ", " +
  releaseYear +
  " " +
  releaseHours2 +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge3 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 2) +
  ", " +
  releaseYear +
  " " +
  releaseHours +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge4 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 2) +
  ", " +
  releaseYear +
  " " +
  releaseHours2 +
  releaseMinutes +
  releaseSeconds
).getTime();
releaseDay = 2;
releaseMonth = "nov";
const countDownDateChallenge5 = new Date(
  releaseMonth +
  " " +
  releaseDay +
  ", " +
  releaseYear +
  " " +
  "19:" +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge6 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 1) +
  ", " +
  releaseYear +
  " " +
  "14:" +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge7 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 2) +
  ", " +
  releaseYear +
  " " +
  releaseHours +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge8 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 2) +
  ", " +
  releaseYear +
  " " +
  releaseHours2 +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge9 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 4) +
  ", " +
  releaseYear +
  " " +
  releaseHours +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge10 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 4) +
  ", " +
  releaseYear +
  " " +
  releaseHours2 +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge11 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 6) +
  ", " +
  releaseYear +
  " " +
  releaseHours +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge12 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 6) +
  ", " +
  releaseYear +
  " " +
  releaseHours2 +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge13 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 8) +
  ", " +
  releaseYear +
  " " +
  releaseHours +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge14 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 8) +
  ", " +
  releaseYear +
  " " +
  releaseHours2 +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge15 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 10) +
  ", " +
  releaseYear +
  " " +
  releaseHours +
  releaseMinutes +
  releaseSeconds
).getTime();
const countDownDateChallenge16 = new Date(
  releaseMonth +
  " " +
  (releaseDay + 10) +
  ", " +
  releaseYear +
  " " +
  releaseHours2 +
  releaseMinutes +
  releaseSeconds
).getTime();

const reveling = (index) => {
  myCard[index].style.transitionDelay = index / 2.5 + "s";
  myCard[index].classList.add("is-flipped");
};

let timeFormating = (time, elementName, index) => {
  const element = document.getElementById(elementName);

  let currentTime = new Date().getTime();
  let distance = time - currentTime;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let countDown;

  if (days > 0) countDown = days + "d  " + hours + "h";
  else if (hours > 0) countDown = hours + "h  " + minutes + "m";
  else if (minutes > 0) countDown = minutes + "m  " + seconds + "s";
  else countDown = seconds + "s";

  // element.innerHTML = countDown;

  if (distance <= 0) {
    element.innerText = "";
    reveled = index;
    reveling(index);
  } else element.innerText = countDown;
};
// let challenge1TimerInterval;
setInterval(timeFormating, 1000, countDownDateChallenge1, "challenge1Timer", 0);
setInterval(timeFormating, 1000, countDownDateChallenge2, "challenge2Timer", 1);
setInterval(timeFormating, 1000, countDownDateChallenge3, "challenge3Timer", 2);
setInterval(timeFormating, 1000, countDownDateChallenge4, "challenge4Timer", 3);
setInterval(timeFormating, 1000, countDownDateChallenge5, "challenge5Timer", 4);
setInterval(timeFormating, 1000, countDownDateChallenge6, "challenge6Timer", 5);
setInterval(timeFormating, 1000, countDownDateChallenge7, "challenge7Timer", 6);
setInterval(timeFormating, 1000, countDownDateChallenge8, "challenge8Timer", 7);
setInterval(timeFormating, 1000, countDownDateChallenge9, "challenge9Timer", 8);
setInterval(
  timeFormating,
  1000,
  countDownDateChallenge10,
  "challenge10Timer",
  9
);
setInterval(
  timeFormating,
  1000,
  countDownDateChallenge11,
  "challenge11Timer",
  10
);
setInterval(
  timeFormating,
  1000,
  countDownDateChallenge12,
  "challenge12Timer",
  11
);
setInterval(
  timeFormating,
  1000,
  countDownDateChallenge13,
  "challenge13Timer",
  12
);
setInterval(
  timeFormating,
  1000,
  countDownDateChallenge14,
  "challenge14Timer",
  13
);
setInterval(
  timeFormating,
  1000,
  countDownDateChallenge15,
  "challenge15Timer",
  14
);
setInterval(
  timeFormating,
  1000,
  countDownDateChallenge16,
  "challenge16Timer",
  15
);

// myCard[0].addEventListener("click", function (e) {
//     myCard[0].classList.toggle('is-flipped');
// });

// Set the date we're counting down to
const countDownDate = new Date("oct 29, 2022 16:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;
  let demo = document.getElementById("demo");

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let RcountDown;

  if (days > 0) RcountDown = days + "d  " + hours + "h";
  else if (hours > 0) RcountDown = hours + "h  " + minutes + "m";
  else if (minutes > 0) RcountDown = minutes + "m  " + seconds + "s";
  else RcountDown = seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    demo.innerHTML = "";
  } else {
    demo.innerHTML = RcountDown;
  }
}, 1000);

//mobile animation

if (screen && window.innerWidth <= 770) {
  const imageShowContainer =
    document.getElementsByClassName("imageShowContainer");
  const imageBox = document.getElementsByClassName("imageBox");
  const underText = document.getElementsByClassName("underText");
  let lightOpacity = 0.6;
  let counter = 1;
  const imageSize = imageBox[0].clientWidth + 20;
  const center = (window.innerWidth - imageSize) / 2;
  // console.log(center);
  imageShowContainer[0].style.transform =
    "matrix(1, 0, 0, 1, " + (imageSize * counter - center) + ",0)";
  underText[counter].style.opacity = 1;
  imageBox[counter - 1].style.opacity = lightOpacity;
  imageBox[counter + 1].style.opacity = lightOpacity;
  imageBox[counter].style.opacity = 1;

  const slidingImages = () => {
    imageShowContainer[0].style.transition = "transform 1s ease-in-out";
    counter++;
    // console.log(counter);
    imageShowContainer[0].style.transform =
      "matrix(1, 0, 0, 1, " + (imageSize * counter - center) + ",0)";
    if (counter == 4) {
      underText[1].style.opacity = 1;
      imageBox[1].style.opacity = 1;
    }
    underText[counter].style.opacity = 1;
    underText[counter - 1].style.opacity = 0;
    imageBox[counter - 1].style.opacity = lightOpacity;
    imageBox[counter + 1].style.opacity = lightOpacity;
    imageBox[counter].style.opacity = 1;
  };

  slidingShow = setInterval(slidingImages, 4000);

  imageShowContainer[0].addEventListener("transitionend", (event) => {
    if (counter > imageBox.length || counter < 0) {
      counter = 2;
    }

    if (
      imageBox[counter].id === "firstClone" &&
      event.propertyName === "transform"
    ) {
      imageShowContainer[0].style.transition = "none";
      counter = imageBox.length - 1 - counter;
      imageShowContainer[0].style.transform =
        "matrix(1, 0, 0, 1, " + (imageSize * counter - center) + ",0)";
      underText[counter].style.opacity = 1;
      underText[5].style.opacity = 0;
      imageBox[5].style.opacity = lightOpacity;
      imageBox[counter - 1].style.opacity = lightOpacity;
      imageBox[counter + 1].style.opacity = lightOpacity;
      imageBox[counter].style.opacity = 1;
    }
  });
}

const goDown = () => {
  let x;
  if (window.innerWidth > 1200) {
    x = 3500;
  } else if (window.innerWidth < 1200 && window.innerWidth > 770) {
    x = 2800;
  } else {
    x = 2300;
  }

  window.scrollTo({
    top: x,
    left: 0,
    behavior: "smooth",
  });
};

const goTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const GimageShowContainer = document.getElementsByClassName("GalleryContainer");
const GimageBox = document.getElementsByClassName("GalleryBox");
const GunderText = document.getElementsByClassName("GunderText");
let lightOpacity = 0.6;
let counter = 1;
const imageSize = GimageBox[0].clientWidth + 20;
console.log(imageSize);
const center = (window.innerWidth - imageSize) / 2;
console.log(center);
GimageShowContainer[0].style.transform =
  "matrix(1, 0, 0, 1, " + (imageSize * counter - center) + ",0)";
console.log(imageSize * counter - center);
GunderText[counter].style.opacity = 1;
GimageBox[counter - 1].style.opacity = lightOpacity;
GimageBox[counter + 1].style.opacity = lightOpacity;
GimageBox[counter].style.opacity = 1;

const GslidingImages = () => {
  GimageShowContainer[0].style.transition = "transform 1s ease-in-out";
  counter++;
  // console.log(counter);
  GimageShowContainer[0].style.transform =
    "matrix(1, 0, 0, 1, " + (imageSize * counter - center) + ",0)";
  if (counter == 4) {
    GunderText[1].style.opacity = 1;
    GimageBox[1].style.opacity = 1;
  }
  GunderText[counter].style.opacity = 1;
  GunderText[counter - 1].style.opacity = 0;
  GimageBox[counter - 1].style.opacity = lightOpacity;
  GimageBox[counter + 1].style.opacity = lightOpacity;
  GimageBox[counter].style.opacity = 1;
};

setInterval(GslidingImages, 4000);

GimageShowContainer[0].addEventListener("transitionend", (event) => {
  if (counter > GimageBox.length || counter < 0) {
    counter = 2;
  }

  if (
    GimageBox[counter].id === "GfirstClone" &&
    event.propertyName === "transform"
  ) {
    GimageShowContainer[0].style.transition = "none";
    counter = GimageBox.length - 1 - counter;
    GimageShowContainer[0].style.transform =
      "matrix(1, 0, 0, 1, " + (imageSize * counter - center) + ",0)";
    GunderText[counter].style.opacity = 1;
    GunderText[5].style.opacity = 0;
    GimageBox[5].style.opacity = lightOpacity;
    GimageBox[counter - 1].style.opacity = lightOpacity;
    GimageBox[counter + 1].style.opacity = lightOpacity;
    GimageBox[counter].style.opacity = 1;
  }
});
