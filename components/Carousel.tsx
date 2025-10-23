import React, { useState, useCallback } from "react";
import { PracticeArea } from "../types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CarouselProps {
  items: PracticeArea[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  const currentItem = items[currentIndex];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        mx: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={prevSlide}
        aria-label="Previous slide"
        sx={{
          position: { xs: "absolute", md: "static" },
          left: -16,
          zIndex: 1,
          transform: { md: "translateX(0)" },
          bgcolor: "background.paper",
          boxShadow: 3,
          "&:hover": { bgcolor: "background.default" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box sx={{ width: "100%", overflow: "hidden", px: { xs: 0, md: 2 } }}>
        <Box
          key={currentIndex} // Re-trigger animation on change
          sx={{
            animation: "fadeIn 0.7s",
            "@keyframes fadeIn": {
              "0%": { opacity: 0.5, transform: "scale(0.98)" },
              "100%": { opacity: 1, transform: "scale(1)" },
            },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              border: "1px solid #2d3339",
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  color: "primary.main",
                  mb: 3,
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                {currentItem.category}
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: "medium",
                  color: "text.primary",
                  mb: 2,
                }}
              >
                {currentItem.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                }}
              >
                {currentItem.content}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <IconButton
        onClick={nextSlide}
        aria-label="Next slide"
        sx={{
          position: { xs: "absolute", md: "static" },
          right: -16,
          zIndex: 1,
          transform: { md: "translateX(0)" },
          bgcolor: "background.paper",
          boxShadow: 3,
          "&:hover": { bgcolor: "background.default" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Box
        sx={{
          position: "absolute",
          bottom: -30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          mt: 3,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={item.id}
            onClick={() => setCurrentIndex(index)}
            sx={{
              height: 8,
              width: currentIndex === index ? 24 : 8,
              borderRadius: "4px",
              bgcolor: currentIndex === index ? "primary.main" : "grey.300",
              cursor: "pointer",
              transition: "width 0.3s ease-in-out",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
