import { Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { cadastrarAgenda } from "@/api/api";

export default function CadastrarAgendaPage(){
const[acompanhamentoId,setacompanhamentoId] = useState("");
const[medicamentoD,setmedicamentoD]= useState("");
const[horaM,sethoraM]= useState("");
const[alarme,setalarme]= useState("");
const url='https://img.freepik.com/fotos-premium/lindo-ceu-e-ilhas-de-agua-praia-papel-de-parede-para-pc_758374-671.jpg'

function cadastrarAgendaOnClick(){
    cadastrarAgenda({
        acompanhamento_id:acompanhamentoId,
        medicamento_do_dia:medicamentoD,
        hora_marcada:horaM,
        alarme:alarme
     })
}


return(
    <div className="app" style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
    <Grid container justifyContent={"center"}>
    <img src={url} alt="fundo do app" width={'700px'}/>

<Grid item xs={12} md={12} lg={12}>
< TextField onChange={(e)=>{setacompanhamentoId(e.target.value)}}  fullWidth id="standard-basic"label="digite o id do acompanhamento"></TextField>
</Grid>
<Grid item xs={12} md={12} lg={12}>
< TextField onChange={(e)=>{setmedicamentoD(e.target.value)}}  fullWidth id="standard-basic"label="digite o id do medicamento"></TextField>
</Grid>
<Grid item xs={12} md={12} lg={12}>
< TextField onChange={(e)=>{sethoraM(e.target.value)}}  fullWidth id="standard-basic"label="digite a hora do medicamento"></TextField>
</Grid>
<Grid item xs={12} md={12} lg={12}>
< TextField onChange={(e)=>{setalarme(e.target.value)}}  fullWidth id="standard-basic"label="digite a hora do alarme"></TextField>
</Grid>





    </Grid>
    <button onClick={cadastrarAgendaOnClick}>cadastrar</button>
</div>

)

}

