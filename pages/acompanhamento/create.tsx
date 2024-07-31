import { Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { cadastrarAcompanhamentos } from "@/api/api";

export default function CadastrarAcompanhamentoPage(){
    const [pacienteId, setPacienteId] = useState("");
    const [profissionalId,setProfissionalId] = useState("");
    const[receitas,setReceitas]=useState("");
    const[status,setStatus]=useState("");
    const[estado,setEstado]=useState("");
    const[observacoes,setObservacoes]=useState("");
    const[contato,setContato]=useState("");
    const[numeroContato,setnumeroContato]=useState("");
    const[numeroParente,setnumeroPaciente]=useState("");
    const url='https://img.freepik.com/fotos-premium/lindo-ceu-e-ilhas-de-agua-praia-papel-de-parede-para-pc_758374-671.jpg'
    
    function cadastrarAcompanhamento(){
        cadastrarAcompanhamentos({
         paciente_id:pacienteId,
            profissional_id:profissionalId,
            receitas:receitas,
            status:status,
            estado:estado,
            observacoes:observacoes,
            contato:contato,
             numero_contato:numeroContato,
            numero_parente:numeroParente
        })
    }
    
    return(
        <div className="app" style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
            <Grid container justifyContent={"center"}>
            <img src={url} alt="fundo do app" width={'700px'}/>

    <Grid item xs={12} md={12} lg={12}>
        < TextField onChange={(e)=>{setPacienteId(e.target.value)}}  fullWidth id="standard-basic"label="digite o id do paciente"></TextField>
    </Grid>
   
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setProfissionalId(e.target.value)}} fullWidth id="standard-basic"label="digite o id do profissional encarregado" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setReceitas(e.target.value)}} fullWidth id="standard-basic"label="digite a receita para o paciente" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setStatus(e.target.value)}} fullWidth id="standard-basic"label="digite o status do paciente" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setEstado(e.target.value)}} fullWidth id="standard-basic"label="digite o estado do paciente" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setObservacoes(e.target.value)}} fullWidth id="standard-basic"label="digite a observação" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setContato(e.target.value)}} fullWidth id="standard-basic"label="digite o contato" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setnumeroContato(e.target.value)}} fullWidth id="standard-basic"label="digite o numero do contato" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setnumeroPaciente(e.target.value)}} fullWidth id="standard-basic"label="digite o numero do paciente" ></TextField>
    </Grid>

   
    

            </Grid>
            <button onClick={cadastrarAcompanhamento}>cadastrar</button>
        </div>
    )
}