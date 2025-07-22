import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // ✅

const CTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // ✅

  const handleClick = () => {
    navigate("/videos"); // ✅ boshqa sahifaga yo‘naltiradi
  };

  return (
    <Box sx={{ backgroundColor: '#1976d2', py: 6, mt: 4 }}>
      <Container sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          {t("ctaText")}
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          onClick={handleClick} // ✅ navigatsiya qilish
        >
          {t("ctaButton")}
        </Button>
      </Container>
    </Box>
  );
};

export default CTA;
