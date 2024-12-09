import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
const DetailOfBooks = () => {
  const prams = useParams();
  const navigate = useNavigate();
  const { bookData: data } = useSelector((state) => state.books);
  const oneImage = data.filter((data) => data.id == prams.id);
  console.log(oneImage, "oneimage");
  return (
    <Box className={`${prams.id ? "w-[500px]" : "hidden"}  p-2`}>
      {oneImage.map((book, index) => {
        return (
          <Box
            component={Paper}
            elevation={13}
            key={index}
            sx={{
              minHeight: "600px",
              padding: "25px",
              overflow: "auto",
              borderRadius: "0px",
            }}
          >
            <Button
              component={Paper}
              elevation={34}
              // sx={{border:"1px solid black",fontSize:"18px",borderRadius:"100%",width:"20px",height:"20px"}}
              onClick={() => navigate("/books")}
              className="!border-1 border-none  !rounded-[100%] !h-[40px] !min-w-0 !w-[40px] !text-sm absolute  top-[-10px] left-[-10px] !z-[40] "
              variant="outlined"
              sx={{
                backgroundColor: "#757575",
                color: "white",
                border: "none",
                ":hover": { backgroundColor: "black", border: "none" },
              }}
            >
              X
            </Button>
            <div className="image  flex justify-center  ">
              <img src={book.image} className="rounded-[15px]" alt="" />
            </div>
            <Box className="mt-5">
              <Divider sx={{ marginBottom: "15px" }} />
              <Typography
                sx={{ display: "flex", alignItems: "center", fontSize: "20px" }}
                variant="h4"
              >
                <span className="font-[500]">Title:</span>
                <p className="text-[18px] ml-2">
                  <span className="!text-[16px]">{book.Title}</span>
                </p>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                  marginTop: "10px",
                }}
                variant="h4"
              >
                <span className="font-[500] ">Year:</span>
                <span className="ml-4 !text-[16px]">
                  {" "}
                  {book.Publication_Year}
                </span>
              </Typography>

              {/* about */}
              <Typography
                sx={{ display: "flex", fontSize: "20px", marginTop: "10px" }}
                variant="h4"
              >
                <span className="font-[500]  ">Genre:</span>
                <span className="ml-4 !text-[16px]">{book.Genre}</span>
              </Typography>
              <Typography
                sx={{ display: "flex", fontSize: "20px", marginTop: "10px" }}
                variant="h4"
              >
                <span className="font-[500]  ">About:</span>
                <span className="ml-4 !text-[14px] ">
                  {book.About_Book ? (
                    book.About_Book
                  ) : (
                    <>
                      -Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis esse, recusandae deserunt dolorum dolore repellat
                      maxime qui eaque quos?
                    </>
                  )}
                </span>
              </Typography>
              <Divider sx={{ marginTop: "14px" }} />
              <Box>
                <Typography
                  component={Paper}
                  sx={{
                    padding: "4px",
                    width: "130px",
                    margin: "15px",
                    backgroundColor: "#0A5EB0",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {book.Downloads}
                  <CloudDownloadIcon
                    sx={{ marginLeft: "4px", fontSize: "25px" }}
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default DetailOfBooks;
