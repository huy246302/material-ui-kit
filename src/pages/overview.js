import Head from "next/head";
import { DashboardLayout } from "src/components/dashboard-layout";
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Overview = () => {
  return (
    <>
    <Head>
      <title>
        Overview | Material Kit
      </title>
    </Head>
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
    >
      <Box
        sx={{
        width:900,
        height:300,
        mt: 3,
        ml: 1,
        mr: 1,
        borderRadius: '16px',
        backgroundColor: 'primary.dark',
        '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
        },
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6pXv4O705aOAcZTyE-pJIks-3YOBZLKwYQ"
          alt="image"
        />
        Center
      </Box>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
      >
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
      </Box>
    </Grid>
  </>
  )
};
Overview.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Overview;
