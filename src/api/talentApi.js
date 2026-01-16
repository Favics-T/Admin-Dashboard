
const BASE_URL = 'http://localhost:4000';

export const getTalent = async()=>{
    const res = await fetch (`${BASE_URL}/talents`);

    if(!res.ok){
        throw new Error('Could not fetch talent')
    }

    return res.json();
}