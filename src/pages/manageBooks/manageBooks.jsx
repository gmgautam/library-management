import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletebooks } from "../../slices/bookSlice";
import FormAddBook from "../../components/forms/FormAddBook";
import { useState } from "react";
import { toast } from "sonner";

const ManageBooks = () => {
  const { bookData: data } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const [updateValue, setUpdateValue] = useState(null);
  // handel edit book
  const handleEdit = (row) => {
    setUpdateValue(row);
    setToggle(false);
  };

  // delete book
  const handleDelete = (id) => {
    dispatch(deletebooks(id))
      .unwrap()
      .then((data) => {
        if (data) toast.success("Book deleted successfully.");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "Title", headerName: "Title", width: 180 },
    { field: "Author", headerName: "Author", width: 180 },
    {
      field: "Publication_Year",
      headerName: "Publication Year",
      type: "number",
      width: 180,
    },
    {
      field: "Genre",
      headerName: "Genre",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 180,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            sx={{ color: "blue" }}
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box className="outer-div-for-form">
      {toggle ? (
        <Button
          component={Paper}
          sx={{
            width: "140px",
            padding: "12px",
            marginBottom: "10px",
            marginTop: "5px",
            backgroundColor: "black",
            borderRadius: "5px",
            color: "white",
            textTransform: "none",
            position: "relative",
            left: "5rem",
          }}
          onClick={() => setToggle(false)}
        >
          Add Book +
        </Button>
      ) : null}
      <Box
        className="border"
        sx={{
          padding: "15px",
          marginBottom: "15px",
          display: toggle ? "none" : "block",
        }}
      >
        <FormAddBook
          setToggle={setToggle}
          update={updateValue}
          setUpdateValue={setUpdateValue}
        />
      </Box>
      <Box
        className={`border ${
          toggle ? "block" : "hidden"
        } p-2 max-w-[90%] mx-auto overflow-auto`}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "500",
            textDecorationLine: "underline",
            color: "black",
          }}
        >
          Manage Your Book Collection
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, fontSize: "1rem", color: "text.secondary" }}
        >
          In this section, you have full control over your book collection. You
          can update book details, such as titles, authors etc to ensure
          everything is accurate and current. Additionally, you can remove any
          book from the collection when needed. This interface provides a simple
          and intuitive way to keep your library organized and up-to-date.
        </Typography>
        <Paper sx={{ overflow: "auto", margin: "20px auto" }}>
          <DataGrid
            rows={data ? data.filter((row) => row != null) : []}
            columns={columns.map((column) => ({
              ...column,
              headerAlign: "right", // Align header text to the right
              align: "right", // Align cell text to the right
            }))}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default ManageBooks;
