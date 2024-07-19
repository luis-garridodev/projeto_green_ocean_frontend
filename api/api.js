import axios  from "axios";
const api=axios.create({
    baseURL:"http://localhost:8080"
})
export async function cadastrarUsuario(usuario){
    console.log(usuario,'UESE')
    api.post("/paciente/create",usuario)  
}
export async function cadastrarProfissional(profissional){
  api.post("/profissionais/create",profissional)
}
export default api;
