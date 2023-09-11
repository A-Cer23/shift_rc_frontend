import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://10.0.0.187:8080/admin/";


const getAdminAllUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const getPublicContent = () => {
    return axios.get(API_URL + "public")
}

const UserService = {
    getAdminAllUsers,
    getPublicContent
};

export default UserService;
