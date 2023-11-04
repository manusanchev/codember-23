const searchPatternSolution1 = (message) => {
  let acumulativeObject = {};
  let result = "";

  let words = message.toLocaleLowerCase().split(" ");

  words.forEach((word) => {
    if (!acumulativeObject[word]) {
      acumulativeObject[word] = 1;
      return;
    }

    acumulativeObject[word] += 1;
  });

  for (const [key, value] of Object.entries(acumulativeObject)) {
    result += key + value;
  }

  return result;
};

const searchPatternSolution2 = (message) => {
  const words = message.toLowerCase().split(" ");

  const acumulativeObject = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(acumulativeObject)
    .map(([key, value]) => key + value)
    .join("");
};

const searchPatternSolution3 = (message) => {
  let result = "";
  const wordCounts = new Map();

  const words = message.toLowerCase().split(/\s+/);

  words.forEach((word) => {
    if (word) {
      wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }
  });

  wordCounts.forEach((count, word) => {
    result += `${word}${count}`;
  });

  return result;
};

export {
  searchPatternSolution1,
  searchPatternSolution2,
  searchPatternSolution3,
};
