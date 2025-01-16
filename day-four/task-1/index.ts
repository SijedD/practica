interface user {
    name: string,
    email: string,
    isActive: boolean
}

type users = user[];

const usersInfo: users = [
    {
        name: " Danil   ",
        email: "sadasd@gmail.com",
        isActive: true
    },
    {
        name: "DaNnil ",
        email: "sFDSSFdasd@gmail.com",
        isActive: false
    },
    {
        name: " Danil OLEGOVICH",
        email: "sDASASDd@gmail.com",
        isActive: true
    }
]

async function cleanUserData(usersCheck: users): Promise<any>{

    try {
        if(Math.floor(Math.random() * 100)< 10) {
            throw Error('ОШИБКА')
        }
        return usersCheck.filter((usersInfo)=>usersInfo.isActive)
            .map((usersInfo)=>({
                name: usersInfo.name.trim().toLowerCase(),
                email: usersInfo.email.toLowerCase(),
                isActive: usersInfo.isActive,
            }))
    }
    catch(Error){
        return Error
    }
}
cleanUserData(usersInfo)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error)
    })