import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: 'ISBN', headerName: "ISBN", flex: 1},
    { field: 'author', headerName: "Author", flex: 1},
    { field: 'book_length', headerName: "Book Length", flex: 1},
    { field: 'book_title', headerName: "Book Title", flex: 1},
    { field: 'cover_type', headerName: "Cover Type", flex: 1}
]


function BookInfo() {
    let [ open, setOpen ] = useState(false);
    const { bookData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
       
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded text-2xl">My Books</h2>
            <DataGrid rows={bookData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default BookInfo