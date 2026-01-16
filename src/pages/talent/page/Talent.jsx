import { useEffect, useState } from "react";
import { getTalent } from "../../../api/talentApi";

const Talent = ()=>{

const [loading, setLoading] = useState(false);
const [talents, setTalent] = useState([]);
const [error, setError] = useState(null)

useEffect(()=>{
    const fetchTalent = async ()=>{
        try{
            setLoading(true);
            const data = await getTalent();
            setTalent(data);
        }

        catch(err){
                setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }
    fetchTalent();
},[])

return {talents,error,loading}
}

export default Talent