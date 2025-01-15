async function fetchData(api: string): Promise<any>{
    try{
        const response = await fetch(api);

        if(!response.ok){
            throw new Error(`${response.status}`)
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Ошибка при загрузке данных:, ${error}`);
        return error;
    }
}

fetchData("https://jsonplaceholder.typicode.com/users/1")
    .then((result) => console.log(result))
    .catch((error: Error) => console.error(error.message))