import axios  from "axios";
const api=axios.create({
    baseURL:"http://localhost:3000"
})
export async function cadastrarUsuario(usuario){
    console.log(usuario)
  axios.post("/paciente/create",usuario)  
}
export default api;
