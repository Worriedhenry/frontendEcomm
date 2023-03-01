import './App.css';
import Home from "./components/Home/home"
import { Box} from "@mui/material";
import Header from './components/Header';

function App() {
  return (<>
    <div >
      <Header />
      <Box style={{marginTop:"52px"}}>
          <Home />
      </Box>
    </div>
    </>
  );
}

export default App;
