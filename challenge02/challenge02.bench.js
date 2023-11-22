import { bench } from "vitest";
import { miniCompilerSolution1, miniCompilerSolution2 } from "./challenge02.js";

bench(
    "first solution benchmark challenge02",
    () => {
        const input =
            "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";
        miniCompilerSolution1(input);
    },
    {},
);
bench(
    "second solution benchmark challenge02",
    () => {
        const input =
            "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";
        miniCompilerSolution2(input);
    },
    {},
);