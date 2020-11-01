import React, {useState} from 'react';
import { Box, 
  Button, 
  Heading, 
  Grommet, 
  Collapsible,
  Layer,
  ResponsiveContext } from 'grommet';
import { FormClose ,Github } from 'grommet-icons';

const theme = {
  global: {
    colors:{
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  
  <Box
    tag = 'header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <ResponsiveContext.Consumer>
      {size => (
    <Grommet theme={theme} themeMode="dark">
      <Box>
        <AppBar> 
            <Heading level='3' margin='none'>My App</Heading>
            <Button icon={<Github />} onClick={() => setShowSidebar(!showSidebar)} />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Box flex align='center' justify='center'>
          App body
        </Box>
        {(!showSidebar || size !== 'small') ? (
        <Collapsible direction="horizontal" open={showSidebar}>
        <Box 
        flex
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='center' 
        > 
        sidebar
         </Box>
         </Collapsible>
        ): (
          <Layer>
      <Box
     fill
      background='light-2'
      align='center'
      justify='center'
     >
       <Button>
         icon = {<FormClose />}
         onClick{() => showSidebar(false)}
       </Button>
       sidebar
    </Box>
 </Layer>
        )}
         </Box>
      </Box>
    </Grommet>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default App;
