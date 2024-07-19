
import { Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import{cadastrarUsuario}from '../../api/api'
export default function Cadastro() {
    const [cpf, setCpf] = useState("");
    const [nome,setNome] = useState("");
    const[idade,setIdade] = useState("");
    const[dataN,setDataN]= useState("");
    const[numeroA,setnumeroA]= useState("");
    const url='https://img.freepik.com/fotos-premium/lindo-ceu-e-ilhas-de-agua-praia-papel-de-parede-para-pc_758374-671.jpg'

    

  

    function cadastrarUsuarioFront() {
        console.log(cpf);
        cadastrarUsuario({
            cpf:cpf,
            nome:nome,
            idade:idade,
            dataN:dataN,
            numeroA:numeroA

        })
    }

    return (
        <div className="app" style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
    <Grid container justifyContent={"center"}>

<img src={url} alt="fundo do app" width={'700px'}/>

    <Grid item xs={12} md={12} lg={12}>
        < TextField onChange={(e)=>{setCpf(e.target.value)}}  fullWidth id="standard-basic"label="cpf"></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setNome(e.target.value)}} fullWidth id="standard-basic"label="nome" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setIdade(e.target.value)}} fullWidth id="standard-basic"label="idade" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setDataN(e.target.value)}} fullWidth id="standard-basic"label="data de nascimento" ></TextField>
    </Grid>
    <Grid item xs={12} md={6} lg={12}>
    <TextField onChange={(e)=>{setnumeroA(e.target.value)}} fullWidth id="standard-basic"label="numero de associação" />
    </Grid>
    </Grid>
    <button onClick={cadastrarUsuarioFront}>cadastro</button>
    </div>
    )
  }
  

