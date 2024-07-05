import Stepper from "./components/Stepper"
import { Grid, Typography, Box } from '@mui/material';

function App() {
  return (
    <>
      <div >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Typography container variant="h4" color="textPrimary" style={{ fontWeight: 'bold' }}>
            React Multistep Validation
          </Typography>
        </Box>
        <Grid container alignItems="center" justifyContent="center" style={{ height: 'full', display: 'flex', flexDirection: 'row', }} >

          <Stepper />

        </Grid>

      </div >
    </>
  );
}

export default App;
