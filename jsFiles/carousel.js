let index = 0;
const carouselLeftController = document.querySelector(
  ".carousel-left-controller"
);
const carouselRightController = document.querySelector(
  ".carousel-right-controller"
);

const achievementsList = document.querySelectorAll(".achievements-list");

carouselLeftController.addEventListener("click", () => {
  if (index == 0) index = achievementsList.length - 1;
  else index--;
  hideAndShowAchievement(index);
});

carouselRightController.addEventListener("click", () => {
  if (index == achievementsList.length - 1) index = 0;
  else index++;
  hideAndShowAchievement(index);
});

function hideAndShowAchievement(index) {
  achievementsList[index].style.display = "block";
  for (let i = 0; i < achievementsList.length; i++) {
    if (index == i) continue;
    achievementsList[i].style.display = "none";
  }
}
