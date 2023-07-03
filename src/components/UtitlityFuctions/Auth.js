import axios from "axios"
export default async function IsAuth(){
    const Result=await axios.get("http://localhost:3001/jwt")
    if(Result.status===200){
        return Result.data
    }
    return false
}