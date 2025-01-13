function identicalLetters(str1: string, str2: string): string {
    let result = "";
    let tempStr2 = str2;

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        if (tempStr2.indexOf(char) !== -1) {
            result += char;
            tempStr2 = tempStr2.slice(tempStr2.indexOf(char) + 1);
        }
    }

    return result;
}

const result = identicalLetters("agsdffg", "agsdqffwe");
console.log(result);
