import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
	baseURL: SERVER_URL,
});

console.log(instance.baseURL)

// 조회
const getTodos = async () => {
    const response = await axios.get(`${SERVER_URL}/todos`);
    return response.data;
};

// 추가
const addTodo = async (newTodo) => {
    return await axios.post(`${SERVER_URL}/todos`, newTodo);
};

// 삭제
const deleteTodo = async (id) => {
    return await axios.delete(`${SERVER_URL}/todos/${id}`);
};
// instance.interceptors.request.use(deleteTodo);

// 수정
const modifyTodo = async (id, edit) => {
    return axios.patch(`${SERVER_URL}/todos/${id}`, edit);
};

export { getTodos, addTodo, deleteTodo, modifyTodo }