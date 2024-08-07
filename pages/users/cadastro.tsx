
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import{cadastrarUsuario}from '../../api/api'
export default function Cadastro() {
    const [cpf, setCpf] = useState("");
    const [nome,setNome] = useState("");
    const[idade,setIdade] = useState("");
    const[dataN,setDataN]= useState("");
    const[numeroA,setnumeroA]= useState("");
   
  
    

  

    function cadastrarUsuarioFront() {
        console.log(cpf);
        cadastrarUsuario({
            cpf:cpf,
            nome:nome,
            idade:idade,
            data_de_nascimento:dataN,
            numero_de_associacao:numeroA

        })
    }
   

    return (
     <>  
    <Grid container justifyContent={"center"}>


    <Grid item xs={12} md={8} lg={8} padding={2}>
        < TextField onChange={(e)=>{setCpf(e.target.value)}}  fullWidth id="standard-basic"label="cpf"></TextField>
    </Grid>
    <Grid item xs={12} md={8} lg={8}  padding={2}>
    <TextField onChange={(e)=>{setNome(e.target.value)}} fullWidth id="standard-basic"label="nome" ></TextField>
    </Grid>
    <Grid item xs={12}  md={8} lg={8}  padding={2}>
    <TextField onChange={(e)=>{setIdade(e.target.value)}} fullWidth id="standard-basic"label="idade" ></TextField>
    </Grid>
    <Grid item xs={12} md={8} lg={8}  padding={2}>
    <TextField onChange={(e)=>{setDataN(e.target.value)}} fullWidth id="standard-basic"label="data de nascimento" ></TextField>
    </Grid>
    <Grid item xs={12}  md={8} lg={8}  padding={2}>
    <TextField onChange={(e)=>{setnumeroA(e.target.value)}} fullWidth id="standard-basic"label="numero de associação" />
    </Grid>
    </Grid>
   
    <Grid container  justifyContent={"center"}> <Button variant="contained" onClick={cadastrarUsuarioFront} >cadastro</Button></Grid>
    </>
    )
  }
  

