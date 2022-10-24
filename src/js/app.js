"use struct";
document.addEventListener("DOMContentLoaded", function () {
  const backgroundCards = document.querySelectorAll(".card-rooms__background");
  const cardButtons = document.querySelectorAll(".card-rooms__button");
  const roomsCards = document.querySelectorAll(".card-rooms");
  const reservedBlocks = document.querySelectorAll(".card-rooms__reserved");

  for (let index = 0; index < roomsCards.length; index++) {
    const roomsCard = roomsCards[index];
    const backgroundCard = backgroundCards[index];
    const reservedBlock = reservedBlocks[index];
    const cardButton = cardButtons[index];
    roomsCard.addEventListener("click", function (e) {
      if (e.target.closest(".card-rooms__button")) {
        const mediaQuery = window.matchMedia("(min-width: 992px)");
        if (mediaQuery.matches) {
          e.target.classList.add("_active");
          roomsCard.addEventListener("mouseleave", function handleMouse() {
            roomsCard.classList.add("_reserved");
            backgroundCard.classList.add("card-rooms__background--active");
            reservedBlock.classList.add("card-rooms__reserved--active");
            roomsCard.removeEventListener("mouseleave", handleMouse);
          });
        } else {
          e.target.classList.add("_active");
          roomsCard.classList.add("_reserved");
          backgroundCard.classList.add("card-rooms__background--active");
          reservedBlock.classList.add("card-rooms__reserved--active");
        }
      }
      if (
        !e.target.closest(".card-rooms__button") &
        !e.target.closest(".card-rooms__link")
      ) {
        if (
          backgroundCard.classList.contains("card-rooms__background--active")
        ) {
          backgroundCard.classList.remove("card-rooms__background--active");
          reservedBlock.classList.remove("card-rooms__reserved--active");
          cardButton.classList.remove("_active");
          roomsCard.classList.remove("_reserved");
        }
      }
    });
  }
});
