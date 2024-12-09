import { useSelector } from "react-redux";
import BookCard from "../../components/BooksCard/BooksCard";
import { Box } from "@mui/material";
import DetailOfBooks from "../../components/DetailOfBooks/DetailOfBooks";
const AllBooksList = () => {
  const { bookData } = useSelector((state) => state.books);
  return (
    <div className="flex justify-center mt-5">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4  ">
        {bookData.map((book) => {
          return (
            <Box key={book.id} sx={{ margin: "5px" }}>
              <BookCard data={book} />
            </Box>
          );
        })}
      </div>
      <Box>
        <DetailOfBooks data={bookData} />
      </Box>
    </div>
  );
};
export default AllBooksList;
