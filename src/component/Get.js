
export const url = "https://my-json-server.typicode.com/zahidi14/portfolio/project/";

export const Get = ()=>{
    const db = axios.get(url);
    return db;
}