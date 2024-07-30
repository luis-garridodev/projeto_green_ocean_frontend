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
export async function cadastrarConsultas(consulta){
  api.post("/consultas/create",consulta)
}
export async function cadastrarAcompanhamentos(acompanhamento){
  api.post("/acompanhamentos/create",acompanhamento)
}
export async function cadastrarAgenda(agenda){
  api.post("/agenda/create",agenda)
}
export default api;
