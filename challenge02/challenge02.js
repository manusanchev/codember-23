const miniCompilerSolution1 = (input) => {
  const array = input.split("");
  const { output } = array.reduce(
    (acc, symbol) => {
      switch (symbol) {
        case "#":
          acc.num += 1;
          break;
        case "@":
          acc.num -= 1;
          break;
        case "*":
          acc.num *= acc.num;
          break;
        case "&":
          acc.output += acc.num.toString();
          break;
      }
      return acc;
    },
    { num: 0, output: "" },
  );

  return output;
};

const miniCompilerSolution2 = (input) => {
  let num = 0;
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const symbol = input[i];
    switch (symbol) {
      case "#":
        num += 1;
        break;
      case "@":
        num -= 1;
        break;
      case "*":
        num *= num;
        break;
      case "&":
        output += num.toString();
        break;
    }
  }

  return output;
};

export { miniCompilerSolution1, miniCompilerSolution2 };
