/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, Button } from "@mui/material";
import about from "../../../public/images/aboutRB.png";
const AboutPage = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f9f9f9", // Light gray background
        color: "#1a1a1a",
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "30px",
          alignItems: "center",
        }}
      >
        {/* Left Section - Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <img
            src={about}
            alt="Library Overview"
            style={{
              width: "100%",
              borderRadius: "10px",
              // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>

        {/* Right Section - Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#1a1a1a",
            }}
          >
            About Our Library Management System
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "20px",
              color: "#4f4f4f",
              lineHeight: "1.8",
            }}
          >
            Our website is designed to provide a seamless and efficient way to
            manage your library's books. Whether you’re an avid reader, a
            librarian, or someone who loves organizing book collections, this
            system is for you!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "20px",
              color: "#4f4f4f",
              lineHeight: "1.8",
            }}
          >
            Key features of our system include:
          </Typography>
          <ul
            style={{
              textAlign: "left",
              paddingLeft: "20px",
              color: "#4f4f4f",
              lineHeight: "1.8",
            }}
          >
            <li>
              <strong>Add Books:</strong> Quickly add new books with detailed
              information, such as title, author, genre, and publication year.
            </li>
            <li>
              <strong>Edit Book Details:</strong> Update existing records to
              keep your collection accurate and up-to-date.
            </li>
            <li>
              <strong>Delete Books:</strong> Remove books that are no longer
              part of your collection effortlessly.
            </li>
            <li>
              <strong>Browse Collection:</strong> View your library in a clean,
              user-friendly layout with advanced search options.
            </li>
            <li>
              <strong>Responsive Design:</strong> Access your library from
              desktops, tablets, or mobile devices with an optimized interface.
            </li>
            <li>
              <strong>Intuitive Navigation:</strong> Navigate between
              functionalities like adding, editing, or viewing books with ease.
            </li>
          </ul>
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              padding: "10px 25px",
              backgroundColor: "#1a1a1a",
              color: "#f5f5f5",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Explore Our Books
          </Button>
        </Box>
      </Box>

      {/* Additional Information */}
      <Box
        sx={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#eaeaea",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}
        >
          Why Choose Our Platform?
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "20px", color: "#4f4f4f", lineHeight: "1.8" }}
        >
          Managing a library has never been easier. Our platform is built to
          save you time and effort while providing a modern and reliable
          experience.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#4f4f4f", lineHeight: "1.8" }}
        >
          Whether you're managing a personal book collection or a community
          library, this tool is the perfect solution. Start exploring today and
          discover how simple library management can be!
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
