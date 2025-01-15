async function fakeApi(): Promise<any>{

    const user = {
        id: "b479be3a-0341-4cc9-b745-3a24a08be907",
        name: "danil",
        phone: "89141965015",
        email: "@123123gmail.com",
        location: "Tomsk",
        status: "active",
    }

    return new Promise((resolve)=>{
        setTimeout(()=>resolve(user),2000)
    })
        .then((result) => {
            console.log(result);
        })
}

fakeApi();