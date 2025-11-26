import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { BLOG_POSTS } from "../constants";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "@mui/material/Link";

const BlogPage = () => {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 12 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Legal Insights
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: "750px", mx: "auto" }}
          >
            Exploring legal trends, analysis, and commentary from our team.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {BLOG_POSTS.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <Card sx={{ borderRadius: 3, display: "flex" }}>
                <CardActionArea component={RouterLink} to={`/blog/${post.id}`}>
                  <CardContent
                    sx={{
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box>
                      <Typography variant="h4" component="h2" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontStyle: "italic",
                          borderLeft: 3,
                          borderColor: "secondary.light",
                          pl: 2,
                          my: 2,
                        }}
                      >
                        "{post.quote}"
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: "block", mb: 0.5 }}
                        >
                          {post.date} • By {post.author}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="primary.main"
                          sx={{ fontWeight: 500 }}
                        >
                          {post.readTime}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 3, pt: 2 }}>
                      <Link
                        component="div"
                        variant="button"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "secondary.main",
                          textDecoration: "none",
                        }}
                      >
                        Read More{" "}
                        <ArrowForwardIcon sx={{ ml: 1, fontSize: "1rem" }} />
                      </Link>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;
