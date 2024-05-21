import { performance, PerformanceObserver } from "perf_hooks";

const timing = {};

export const timeStart = (key) => {
  if (!key) return null;
  timing[key] = performance.now();
  return true;
};

export const timeEnd = (key, format = "ms") => {
  if (!key) return null;

  const start = timing[key];
  if (!start) return null;

  let formatValue = 1000;

  switch (format.toLowerCase()) {
    case "ns":
      formatValue = 1;
      break;
  }

  const end = performance.now();
  const result = (end - start) / formatValue;

  console.log(`${key}: ${result} ${format}`);
  delete timing[key];

  return true;
};
