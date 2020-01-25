// import React from 'react';


// function HomePage() {
//   return (
//     <div>
//        <h1>Budgetttt Application</h1>

//     </div>
//   );
// }

// export default HomePage;

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#b3ffeb', height: '100vh' }} >
            <div>
                <center>
                    <h1 style={{backgroundColor: "black",color:"white"}}>Budget Application</h1>
                </center>
            </div>
      </Typography>
      </Container>
    </React.Fragment>
  );
}