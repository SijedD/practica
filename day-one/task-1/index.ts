function identicalLetters(str1: string, str2: string): string {

    let result = "";

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        if (str2.indexOf(char) !== -1 && result.indexOf(char) === -1) {
            result += char;
        }
    }

    return result;
}

const result = identicalLetters("hello", "world");
console.log(result);
