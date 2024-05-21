"use client";
import Link from 'next/link';
import { Box } from '@mui/material';

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
      <h1>Welcome to the Template Project!</h1>
      <Link href="/about">
      </Link>
    </Box>
  );
}

export default HomePage;