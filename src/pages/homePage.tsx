"use client";
import Link from 'next/link';
import { Button, Box } from '@mui/material';

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Link href="/chat" passHref>
        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          Go to ChatBot AI
        </Button>
      </Link>
    </Box>
  );
}

export default HomePage;