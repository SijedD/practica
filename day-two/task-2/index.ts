type SourseData = {
    user_id: string;
    full_name: string;
    contact: {
        phone: string,
        email: string,
    },
    address: {
        city: string,
        zip: string,
    },
    is_active: boolean,
};

type targetData = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: string;
};

const info: SourseData = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: false,
};

function convert (sourceData:SourseData) : targetData{
    return {
        id: sourceData.user_id,
        name: sourceData.full_name,
        phone: sourceData.contact.phone,
        email: sourceData.contact.email,
        location: `${sourceData.address.city} , ${sourceData.address.zip}`,
        status: sourceData.is_active ? "active" : "not_active",
    }



}

console.log(convert(info))

