const miniCompiler = (input) => {
    const array = input.split("");
    return array.reduce((acc, symbol) => {
        switch (symbol) {
            case '#':
                acc.num += 1;
                break;
            case '@':
                acc.num -= 1;
                break;
            case '*':
                acc.num *= acc.num;
                break;
            case '&':
                acc.output += acc.num.toString();
                break;
        }
        return acc;
    }, { num: 0, output: '' }).output;
};

export { miniCompiler };
