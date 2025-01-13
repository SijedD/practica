function longestWord (str:string){

    const word = str.split(" ")

    let longest = "";

    for (const words of word){
        if(words.length > longest.length){
            longest = words;
        }
    }
    return longest;

}

const result = longestWord("паровозик сделал бум")
console.log(result)