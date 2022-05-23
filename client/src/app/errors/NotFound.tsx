import { Button, Divider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Catalog from '../../features/catalog/Catalog';

export default function NotFound() {
  return (
    <Container>
      <Typography gutterBottom variant='h2'>
        Oops - we could not find what you are looking for
          </Typography>
          <Divider />
          <Button LinkComponent={Catalog}>Go to store</Button>
    </Container>
  );
}
