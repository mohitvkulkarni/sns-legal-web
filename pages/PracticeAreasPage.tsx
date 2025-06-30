import React from 'react';
import { PRACTICE_AREAS } from '../constants';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PracticeAreasPage = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Our Practice Areas
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2, maxWidth: '750px', mx: 'auto' }}>
            We provide comprehensive legal services across a wide spectrum of practice areas, addressing the complex needs of individuals, businesses, and institutions.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {PRACTICE_AREAS.map((area) => (
            <Grid item xs={12} sm={6} md={4} key={area.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                }
              }}>
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography variant="button" sx={{ color: 'secondary.main', mb: 1, display: 'block' }}>
                    {area.category.split('. ')[1]}
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {area.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {area.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PracticeAreasPage;