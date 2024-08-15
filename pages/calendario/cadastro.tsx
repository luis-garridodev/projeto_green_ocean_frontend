import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { cadastrarData } from "@/api/api";

export default function cadastrasDatasPacientesPage() {
    const [pacienteId, setPacienteId] = useState("");
    const [emocao, setEmocao] = useState("");


    async function cadastrarDataPaciente() {
        console.log(pacienteId, emocao)
        await cadastrarData({
            paciente_id: pacienteId,
            emocao: emocao
        })
    } 
    
    return (
        <Grid container justifyContent={"center"}>
            <Grid container justifyContent={"center"}>
                <Grid item xs={12} md={12} lg={12} padding={2}>
                    <TextField onChange={(e) => { setPacienteId(e.target.value) }} fullWidth id="standard-basic" label="digite o seu id:"></TextField>
                    <TextField onChange={(e) => { setEmocao(e.target.value) }} fullWidth id="standard-basic" label="digite a sua emoção hoje:"></TextField>
                </Grid>
                <Grid container justifyContent={"center"}> <Button variant="contained" onClick={cadastrarDataPaciente}>cadastrar</Button></Grid>
            </Grid>
        </Grid>
    )
}