export const CalculatePaint = ({ area, coats, coverage, }) => {
  return Number(
    ((area * coats) / coverage).toFixed(2)
  );
};

export const CalculatePrimer = ({ area, coverage, }) => {
  return Number(
    (area / coverage).toFixed(2)
  );
};

export const GetRecommendedPacks = (litres) => {
  const packs = [];

  let remaining = litres;

  if (remaining >= 20) {
    packs.push("20L");
    remaining -= 20;
  }

  if (remaining >= 10) {
    packs.push("10L");
    remaining -= 10;
  }

  if (remaining >= 4) {
    packs.push("4L");
    remaining -= 4;
  }

  if (remaining >= 1) {
    packs.push("1L");
    remaining -= 1;
  }

  if (remaining > 0) {
    packs.push("500ml");
  }

  return packs;
};