import { Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { cadastrarProfissional } from "@/api/api";
import { cadastrarConsultas } from "@/api/api";

export default function CadastroConsulta(){
    const [paciente, setPaciente] = useState("");
    const [profissional,setProfissional] = useState("");
    const [pacienteId, setPacienteId] = useState("");
    const [profissionalId,setProfissionalId] = useState("");
    const[idade,setIdade] = useState("");
    const[dataConsulta,setDataConsulta]= useState("");
    const[dataFim,setdataFim]=useState("");
    const[localConsulta,setlocalConsulta]=useState("");
    const[ urlConsulta,seturlConsulta]=useState("");
    const url='https://img.freepik.com/fotos-premium/lindo-ceu-e-ilhas-de-agua-praia-papel-de-parede-para-pc_758374-671.jpg'
    function cadastrarConsulta(){
        cadastrarConsultas({
           
            paciente_id:pacienteId,
            profissional_id:profissionalId,
           
            idade:idade,
            data_hora_consulta:dataConsulta,
            data_finalizacao:dataFim,
            local_consulta:localConsulta,
            url_consulta:urlConsulta
        })
     }return(
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
    <TextField onChange={(e)=>{setDataConsulta(e.target.value)}} fullWidth id="standard-basic"label="data de consulta" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setdataFim(e.target.value)}} fullWidth id="standard-basic"label="data de fim de consulta" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setlocalConsulta(e.target.value)}} fullWidth id="standard-basic"label="digite o local da consulta" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{seturlConsulta(e.target.value)}} fullWidth id="standard-basic"label="diga o link da consulta" ></TextField>
    </Grid>

            </Grid>
            <button onClick={cadastrarConsulta}>cadastrar</button>
        </div>
     )
}
 