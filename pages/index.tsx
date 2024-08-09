import styles from "../styles/menu.module.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link as MUILink, ThemeProvider, Typography, colors, createTheme } from '@mui/material';
import NextLink from 'next/link'
import { grey } from "@mui/material/colors";
const theme= createTheme({
    palette:{
        primary:{
            main:grey[50]
        }
    }
})
export default function mainPage(){
   
    return(
       
<ThemeProvider theme={theme}>
       <Grid container justifyContent={"center"} sx={{height:"100vh"}} alignItems={"center"}>
        
        <Typography variant="h6" component="h1" >Bem vindo a página inicial da green ocean</Typography>
       
       
       
       
       
      
        </Grid>
        </ThemeProvider>
        )
}
