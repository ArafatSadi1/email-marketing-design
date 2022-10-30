var splide = new Splide(".splide-slider", {
  type: "loop",
  perPage: 1,
  // gap for slider margin
  gap: 30,
  focus: "center",
  perMove: 1,
  // for responsive
  breakpoints: {
  },
});

splide.mount();
