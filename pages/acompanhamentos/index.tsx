import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { listarAcompanhamentos, listarConsultas, listarPaciente, listarUsuario } from '@/api/api';
import { Button, Grid, TablePagination } from '@mui/material';
import { Link as MUILink } from '@mui/material';

const column :GridColDef[] =[
    {field:'id' },
    {field:'paciente_id'},
    {field:'profissional_id'},
    {field:'estado'},
    {field:'receitas'},
    {field:'status'},
    {field:'observações'},
    {field:'contato'},
    {field:'numero_contato'},
    {field:"numero_paciente"},
   
    {field:'created_at'},
    {field:'updated_at'},
    {field:'deleted_at'},
    
  ]
  export default function ListaPage() {
    const [dados,setDados]=React.useState([])
   
    const obterDados=async()=>{
      const dadosfromapi=await listarAcompanhamentos()
      const converter= dadosfromapi
      setDados(converter.data.acompanhamento)
      console.log(converter)
    }
    useEffect(()=>{
      obterDados();
    },[])
    return (
     <Grid container>
       <Grid container p={1} justifyContent={'flex-end'}>
        <MUILink  href={"/acompanhamentos/create"}  >
              <Button  variant="contained"> cadastro de  acompanhamento</Button>
              </MUILink></Grid>
        <DataGrid
        
          rows={dados}
          columns={column}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      
      </Grid>
    );
  }




