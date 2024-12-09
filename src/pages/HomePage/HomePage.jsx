import { Box, Typography } from "@mui/material";
import boyImg from "../../../public/images/undraw.svg";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Box className="grid grid-cols-1 md:grid-cols-2 h-[90vh] bg-gray-50">
        <Box className="p-5 flex justify-center items-center">
          <img
            src={boyImg}
            className="h-auto max-w-full "
            alt="Library Illustration"
          />
        </Box>

        <Box className="flex flex-col justify-center items-start px-10 space-y-6">
          <Typography
            sx={{
              fontWeight: "bold",
              color: "black",
              fontSize: { xs: "24px", sm: "30px", md: "35px", lg: "48px" },
            }}
          >
            {/* text-gray-800 */}
            Welcome to Your Library Management System
          </Typography>

          <Typography variant="body1" className="text-gray-600 text-lg">
            Manage your library with ease! This system allows you to maintain
            and organize a collection of books effortlessly. Whether you're
            adding new titles, updating existing details, or exploring the
            collection, everything is just a click away.
          </Typography>

          <Typography variant="body1" className="text-gray-600 text-lg">
            <strong>Features:</strong>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>All Books:</strong> Explore the entire library
                collection at a glance.
              </li>
              <li>
                <strong>Manage Books:</strong> Add, edit, or delete books to
                keep the collection up-to-date.
              </li>
            </ul>
          </Typography>

          <Box className="  text-center">
            <NavLink to="/books">
              <button className="px-6 py-2 m-2 min-h-[50px] bg-black text-white  rounded-[3px] hover:bg-gray-400 hover:text-black transition duration-300">
                View All Books
              </button>
            </NavLink>
            <NavLink to="/managebook">
              <button className="px-6 m-2 min-h-[50px] py-2 bg-blue-600 text-white  rounded-[3px] hover:bg-green-700 transition duration-300">
                Manage Books
              </button>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HomePage;
