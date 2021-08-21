import axios from "axios";

export const getData = async (userID) => {
    let endpoint = `https://jsonplaceholder.typicode.com/users/${userID}`;
    const { data } = await axios(endpoint);
    console.log(data);
}