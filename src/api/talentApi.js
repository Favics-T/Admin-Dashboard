const BASE_URL = 'http://localhost:4000';

const getTalents = async ()=>{
    const res = await fetch(`${BASE_URL}/talents`);

    if(!res.ok){
        throw new Error('Talents cannot be fetched')
    }

    return res.json();
}