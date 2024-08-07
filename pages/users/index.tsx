import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { listarUsuario } from '@/api/api';
import { Button, Grid, TablePagination } from '@mui/material';
import { Link as MUILink } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];


const column :GridColDef[] =[
  {field:'id' },
  {field:'nome'},
  {field:'idade'},
  {field:'cpf'},
  {field:'data_de_nascimento'},
  {field:"numero_de_associacao"},
  {field:'created_at'},
  {field:'updated_at'},
  {field:'deleted_at'},
  
]
export default function ListaPage() {
  const [dados,setDados]=React.useState([])
 
  const obterDados=async()=>{
    const dadosfromapi=await listarUsuario()
    const converter= dadosfromapi
    setDados(converter.data.pacientes)
    console.log(converter)
  }
  useEffect(()=>{
    obterDados();
  },[])
  return (
   <Grid container>
     <Grid container p={1} justifyContent={'flex-end'}>
      <MUILink  href={"/users/cadastro"}  >
            <Button  variant="contained"> cadastro de  paciente</Button>
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
