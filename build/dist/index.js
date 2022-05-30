const datas = [
  {
    day: "mon",
    amount: 17.45
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 25.48
  }
];
const stats = document.querySelector(".stats");
const create = (height, day) => {
  return `
    <div class="block">
            <span class="top">$${height}</span>
            <div class="bar" data-height=${height}></div>
            <span>${day}</span>
          </div>
  `;
};
datas.forEach((data) => {
  stats.innerHTML += create(data.amount, data.day);
});
const bars = document.querySelectorAll(".bar");
bars.forEach((bar) => {
  const height = bar.dataset.height;
  bar.style.height = height * 4 + "px";
  bar.addEventListener("mouseover", () => {
    bar.previousElementSibling.style.display = "block";
  });
  bar.addEventListener("mouseout", () => {
    bar.previousElementSibling.style.display = "none";
  });
});
