import styles from "../styles/menu.module.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link as MUILink } from '@mui/material';
import NextLink from 'next/link'

export default function mainPage(){
   
    return(
       

       <Grid container justifyContent={"center"}>
        <div className="app" style={{display:"flex",justifyContent:"center",alignItems:'center',color:'#f5f5f5'}}>
        <h1 style={{backgroundColor :"red",display:"inline",position:"fixed"}}>bem vindo a página inicial da green ocean</h1>
       
       
       
       
        </div>
      
        </Grid>
        )
}
