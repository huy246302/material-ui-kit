import Head from "next/head";
import { DashboardLayout } from "src/components/dashboard-layout";
import { Box, Container, Grid, Typography } from '@mui/material';

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
      >
        <Typography
        align = 'center'>
          Center
        </Typography>
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
