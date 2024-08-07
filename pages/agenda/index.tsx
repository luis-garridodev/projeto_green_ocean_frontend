import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { listarAgendas, listarConsultas, listarPaciente, listarUsuario } from '@/api/api';
import { Button, Grid, TablePagination } from '@mui/material';
import { Link as MUILink } from '@mui/material';





const column :GridColDef[] =[
    {field:'id' },
   
    {field:'acompanhamento_id'},
    {field:'medicamento_do_dia'},
   {field:"hora_marcada"},
    {field:"alarme"},
    {field:'created_at'},
    {field:'updated_at'},
    {field:'deleted_at'},
    
    
  ]
  export default function ListaPage() {
    const [dados,setDados]=React.useState([])
   
    const obterDados=async()=>{
      const dadosfromapi=await listarAgendas()
      const converter= dadosfromapi
      setDados(converter.data.agenda)
      console.log(converter)
    }
    useEffect(()=>{
      obterDados();
    },[])
    return (
     <Grid container>
       <Grid container p={1} justifyContent={'flex-end'}>
        <MUILink  href={"/agenda/create"}  >
              <Button  variant="contained"> cadastro de  medicamentos</Button>
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
