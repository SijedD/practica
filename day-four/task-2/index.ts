type userWithGadget = {
    id: string,
    name: string,
    gadget: {
        id: string,
        name: string,
        price: string | undefined
    }
}

const input: userWithGadget[] = [
    {
        id: "1",
        name: "Maga",
        gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
        id: "2",
        name: "Abdulla",
        gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
        id: "1",
        name: "Maga",
        gadget: { id: "103", name: "Laptop", price: "1500" },
    },
];


interface userWithGadgets {
    id: string,
    name: string,
    gadgets: {
        id: string,
        name: string,
        price?: string
    } []
}

function groupUser(users: userWithGadget[]): userWithGadgets[]{
    // Создаем Map для временного хранения пользователей с их гаджетами,
    // чтобы избежать дублирования пользователей
    const userMap = new Map<string, userWithGadgets>();
    for(const user of users){
        const { gadget, ...rest } = user;
        if(userMap.has(rest.id)){
            userMap.get(rest.id)!.gadgets.push(gadget);
        }else {
            userMap.set(rest.id, {
                ...rest,
                gadgets: [{...gadget}],
            });
        }

    }
    // Преобразуем Map обратно в массив
    return Array.from(userMap.values());
}

const groupedUsers = groupUser(input);
console.log(groupedUsers);