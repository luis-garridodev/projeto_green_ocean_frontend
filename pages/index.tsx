import styles from "../styles/menu.module.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function mainPage(){
    const url='https://img.freepik.com/fotos-premium/lindo-ceu-e-ilhas-de-agua-praia-papel-de-parede-para-pc_758374-671.jpg'
    return(
        <>
       <Grid container justifyContent={"center"}>
        <div className="app" style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
        <h1 style={{backgroundColor :"red",display:"inline",position:"fixed"}}>bem vindo a página inicial da green ocean</h1>
       
        <img src={url} alt="fundo do app" width={'700px'}/>
      

        </div>
        </Grid>
        <Grid container justifyContent={"center"}>
            
            <Grid item xs={3} sx={{justifyContent:'center', display: 'flex', bgcolor:'green'}}>
           
            <Button  variant="contained">cadastro</Button>
          
            </Grid>
 
        </Grid>
        </>
        )
}
