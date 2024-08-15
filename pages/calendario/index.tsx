import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { cadastrarAgenda, cadastrarData } from '@/api/api';




export default function CadastrarAgenda() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2024-04-17'));
  const [selecao, setSelecao] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  
  const quandoOUsuarioEscolherData = (value: any) => {
    setOpen(true);
    setValue(value);

    console.log(value);
  }
  
  const handleChange = (event: any) => {
    setSelecao(event.target.value);

    console.log(selecao);
  };
const quandoClicar=async()=>{
 
 const resposta=await cadastrarData({profissional_id:1,emocao:selecao===null?0:selecao})
if(resposta.status===200){
  console.log("criado")
}
}
  // React.useEffect(() => {
  //   if (selecao != null)
  //   //  cadastrarData(value)
  // }, [selecao])

  return (
    <React.Fragment >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={value} onChange={(value) => quandoOUsuarioEscolherData(value)} />
      </LocalizationProvider>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        olá

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">digite o  estado de emoção do paciente:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={selecao}
            onChange={handleChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="feliz" />
            <FormControlLabel value={1} control={<Radio />} label="triste" />
            <Grid container justifyContent={"center"}> <Button variant="contained" onClick={quandoClicar}>cadastrar</Button></Grid>
          </RadioGroup>
        </FormControl>
      </Dialog>
    </React.Fragment>

  )
}