import { useContext } from "react"
import { AuthContext } from "../context/AuthProbider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;