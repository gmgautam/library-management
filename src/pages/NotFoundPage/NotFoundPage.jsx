import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import lostpage from "../../../public/images/404pic.png";
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        component="img"
        src={lostpage}
        alt="404 Not Found"
        sx={{
          maxWidth: "30%",
          height: "auto",
          marginBottom: "20px",
        }}
      />
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#1a1a1a",
          textAlign: "center",
        }}
      >
        Oops! Lost in the Book Universe? 📚
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginBottom: "20px",
          color: "#4f4f4f",
          textAlign: "center",
          lineHeight: "1.8",
        }}
      >
        Looks like you’ve taken a wrong turn. Maybe the page you’re looking for
        has gone on an epic book quest or you typed the wrong URL. Don't worry,
        we’ve all been there!
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontStyle: "italic",
          marginBottom: "30px",
          color: "#4f4f4f",
          textAlign: "center",
        }}
      >
        "Did you mean to enter a library? Because it feels like we're in the
        fiction section right now!"
      </Typography>

      {/* Buttons */}
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1a1a1a",
            color: "#fff",
            padding: "10px 25px",
            marginRight: "10px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          onClick={() => navigate("/")}
        >
          Go Home 🏠
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#1a1a1a",
            color: "#1a1a1a",
            padding: "10px 25px",
            textTransform: "none",
            "&:hover": {
              borderColor: "#333",
              color: "#333",
            },
          }}
          onClick={() => navigate(-1)}
        >
          Go Back ↩️
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
