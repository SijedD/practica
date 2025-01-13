function runLengthEncoding(str:string): string{

    let resultEncoding = "";
    let count = 1;

    for(let i = 1; i < str.length; i++){

        if(str[i]===str[i-1]){
            count ++;
        }
        else {
            resultEncoding += str[i-1]+count;
            count = 1;
        }

    }
    resultEncoding += str[str.length - 1] + count;
    return resultEncoding;

}

const encoded = runLengthEncoding("aaabbbbbbbbbbccdaa");
console.log("Encoded:", encoded);



function runLengthDecoding(str: string): string {
    let resultDecoded = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let count = 0;

        while (i + 1 < str.length && !isNaN(Number(str[i + 1]))) {
            count = count * 10 + Number(str[i + 1]);
            i++;
        }

        resultDecoded += char.repeat(count);
    }

    return resultDecoded;
}


const decoded = runLengthDecoding(encoded);
console.log("Decoded:", decoded);