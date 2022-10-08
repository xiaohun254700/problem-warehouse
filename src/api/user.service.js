import axios from "axios";

class UserService {
  static getAll() {
    return axios.get("/user-all");
  }
  static getById(id) {
    return axios.get(`/user/${id}`);
  }
}

export default UserService;
