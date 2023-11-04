import { bench } from "vitest";
import {
  searchPatternSolution1,
  searchPatternSolution2,
  searchPatternSolution3,
} from "./challenge01.js";

bench(
  "first solution benchmark",
  () => {
    const message = "gato perro perro coche Gato peRRo sol";
    searchPatternSolution1(message);
  },
  {},
);

bench(
  "second  solution benchmark",
  () => {
    const message = "gato perro perro coche Gato peRRo sol";
    searchPatternSolution2(message);
  },
  {},
);

bench(
  "third solution benchmark",
  () => {
    const message = "gato perro perro coche Gato peRRo sol";
    searchPatternSolution3(message);
  },
  {},
);
