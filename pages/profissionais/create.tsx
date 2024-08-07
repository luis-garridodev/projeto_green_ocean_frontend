import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { cadastrarProfissional } from "@/api/api";

export default function CadastroProfissional(){
    const [cpf, setCpf] = useState("");
    const [nome,setNome] = useState("");
    const[idade,setIdade] = useState("");
    const[dataN,setDataN]= useState("");
    const[identificador,setIdentificador]=useState("");
    const[tipoIdentificador,settipoIdentificador]=useState("");
    const[especialidade,setEspecialidade]=useState("");
    const url='https://img.freepik.com/fotos-premium/lindo-ceu-e-ilhas-de-agua-praia-papel-de-parede-para-pc_758374-671.jpg'
    function CadastrarProfissionalSaude(){
    console.log('CadastrarProfissionalSaude')
        cadastrarProfissional({
            cpf:cpf,
            nome:nome,
            idade:idade,
            data_de_nascimento:dataN,
            identificador:identificador,
            tipo_de_identificador:tipoIdentificador,
            especialidade:especialidade
        })
        
     }return(
    
        <Grid container justifyContent={"center"}>
            <Grid container justifyContent={"center"}>
            

    <Grid item xs={12} md={8} lg={8} padding={2}>
        < TextField onChange={(e)=>{setCpf(e.target.value)}}  fullWidth id="standard-basic"label="cpf"></TextField>
    </Grid>
    <Grid item xs={12} md={8} lg={8} padding={2}>
    <TextField onChange={(e)=>{setNome(e.target.value)}} fullWidth id="standard-basic"label="nome" ></TextField>
    </Grid>
    <Grid item xs={12} md={8} lg={8} padding={2}>
    <TextField onChange={(e)=>{setIdade(e.target.value)}} fullWidth id="standard-basic"label="idade" ></TextField>
    </Grid>
    <Grid item xs={12} md={8} lg={8} padding={2}>
    <TextField onChange={(e)=>{setDataN(e.target.value)}} fullWidth id="standard-basic"label="data de nascimento" ></TextField>
    </Grid>
    <Grid item xs={12} md={8} lg={8} padding={2}>
    <TextField onChange={(e)=>{setIdentificador(e.target.value)}} fullWidth id="standard-basic"label="identificador" ></TextField>
    </Grid>
    <Grid item xs={12} md={8} lg={8} padding={2}>
    <TextField onChange={(e)=>{settipoIdentificador(e.target.value)}} fullWidth id="standard-basic"label="tipo de identificador" ></TextField>
    </Grid>
    <Grid item xs={12} md={8} lg={8} padding={2}>
    <TextField onChange={(e)=>{setEspecialidade(e.target.value)}} fullWidth id="standard-basic"label="diga a sua especialidade" ></TextField>
    </Grid>

            </Grid>
            <Grid container  justifyContent={"center"}> <Button variant="contained" onClick={CadastrarProfissionalSaude}>cadastrar</Button></Grid>
            </Grid>
            
     )
}

 