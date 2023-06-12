export default function IsAuth(){
    if (localStorage.getItem("user")){
        return true
    }
    return false
}