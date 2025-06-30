import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';

const AboutPage = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Meet Our Leadership
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2, maxWidth: '750px', mx: 'auto' }}>
            A blend of deep experience, interdisciplinary knowledge, and a commitment to client-focused outcomes.
          </Typography>
        </Box>

        <Stack spacing={{ xs: 8, md: 12 }}>
          {TEAM_MEMBERS.map((member, index) => (
            <Grid container spacing={{ xs: 4, md: 8 }} key={member.name} direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    src={member.imageUrl || undefined}
                    alt={member.name}
                    sx={{ 
                      width: 200, 
                      height: 200, 
                      mb: 2, 
                      bgcolor: 'grey.200',
                      border: '4px solid',
                      borderColor: 'background.paper',
                      boxShadow: 5
                    }}
                  >
                    {!member.imageUrl && <PersonIcon sx={{ fontSize: 100 }} />}
                  </Avatar>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>{member.name}</Typography>
                  <Typography variant="body1" color="secondary.main">{member.title}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box>
                  {member.bio.map((paragraph, i) => (
                    <Typography key={i} paragraph variant="body1" sx={{ color: 'text.secondary' }}>
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutPage;