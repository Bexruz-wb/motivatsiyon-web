import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Container, Grid } from '@mui/material';
import videos from '../data/videos';

const VideoMotivation = () => {
  const { t, i18n } = useTranslation();

  // Tanlangan tilga mos videolarni olish
  const currentLang = i18n.language || 'uz';
  const videoList = videos[currentLang] || videos.uz;

  return (
    <Box id="video-section" sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          {t("videoMotivationTitle")}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {videoList.map((video, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ position: 'relative', paddingTop: '100%', paddingBottom: '100px', }}>
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                  }}
                />
              </Box>
              <Typography variant="subtitle1" align="center" mt={2}>
                {video.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoMotivation;
