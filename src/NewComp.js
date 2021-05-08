import axios from "axios";

const FETCH_URL = "http://localhost:9090/api/showAllStudents";

class NewComp {
  getData() {
    return axios.get(FETCH_URL);
  }
  deleteData(id) {
    return axios.delete(`http://localhost:9090/api/delete?rollNumber=${id}`);
  }

  saveMultipleData(data) {
    return axios.post("http://localhost:9090/api/addAllDetails", data);
  }
  saveData(data) {
    const temp = JSON.stringify(data);
    return axios.post("http://localhost:9090/api/addDetails", data);
  }

  deleteMultipleData(data) {
    return axios.delete("http://localhost:9090/api/deleteAllDetails", {
      data: data,
    });
  }

  updateData(data) {
    return axios.put("http://localhost:9090/api/update", data);
  }
}

export default new NewComp();
