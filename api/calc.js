
export default calc = (a, b, op) => {
    try {
        switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "x": return a * b;
            case "/": return a / b;
            case "^": return a ** b;
            case "%": return a % b;
            default: throw "Not a valid error!"
        }
    }
    catch (err) {
        console.error(err);
        return 0;
    }
};