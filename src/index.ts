const datas = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const stats = document.querySelector(".stats");

const create = (height: number, day: string): string => {
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
  const height: number = bar.dataset.height;
  bar.style.height = height * 2.5 + "px";
  bar.addEventListener("mouseover", () => {
    bar.previousElementSibling.style.display = "block";
  });

  bar.addEventListener("mouseout", () => {
    bar.previousElementSibling.style.display = "none";
  });
});
