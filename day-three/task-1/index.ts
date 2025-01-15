function delayedPromise(delay:number, message: string): Promise<string>{
    return new Promise((resolve, reject) => {
        if (typeof delay !== 'number' || delay < 0){
            reject(new Error('Delay не является числом'));
            return;
        }
        if (typeof message !== 'string'){
            reject(new Error('сообщение не является строкой'));
            return;
        }
        setTimeout(() => {
            resolve(message);
        }, delay);

    });
}

delayedPromise(2000, "Я выполнился")
    .then((result) => {
        console.log(result);
    })
    .catch((error: Error) => {
        console.error(error.message);
    });