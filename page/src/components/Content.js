import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Card, CardContent, Typography, CardActions, Button, Pagination, Stack } from '@mui/material';
import Axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function BasicGrid(props) {
  const{}=props

  const [content, setContent] = React.useState([])

  const content_Fetch = async () => {
    try {
      const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res.data);
      setContent(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("useEffect is calling")
    content_Fetch();
  }, [])

  return (
    <Stack direction="column" spacing={2}>
      <Grid container spacing={2}>
        {
          content.map((data) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={data.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {data.company.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.email}
                  </Typography>
                  <Typography variant="body2">
                    {data.company.catchPhrase}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
      <Pagination count={10} />
    </Stack>
  );
}
