function indexOf(text: string, substring: string): number {
    const textLength = text.length;
    const substringLength = substring.length;

    for (let i = 0; i <= textLength - substringLength; i++) {

        let currentSlice = "";

        for(let j = 0; j < substringLength; j++){
            currentSlice += text[i+j];
        }
        if(currentSlice === substring){
            return i;
        }
    }

    return -1;
}

const result1 = indexOf("hello world", "world");
const result2 = indexOf("hello world", "abc");
const result3 = indexOf("abcd", "bcd");

console.log(result1);
console.log(result2);
console.log(result3);