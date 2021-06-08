const names = ["Alex Costa", "John Doe", "Bob Sung"];
const opinions = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ratione",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ratione eligendi mollitia sint cum atque?"
];
const nameField = document.querySelector("h4");

const contentField = document.querySelector(".content");
const profilePic = document.querySelector(".customerImg");
const btns = document.querySelectorAll(".arrow");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    profilePic.src = "https://source.unsplash.com/random";
    const randomNo = Math.floor(Math.random() * names.length);
    nameField.textContent = names[randomNo];
    contentField.textContent = opinions[randomNo];
  });
});
