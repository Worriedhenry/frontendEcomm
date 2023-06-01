import './App.css';
import Home from "./components/Home/home"
import Details from "./components/Product_details/Detail"
import { Box} from "@mui/material"
import Header from './components/Header'


function App() {
  return (<>
    <div >
        <Header />
        <Box>
          <Details/>

        </Box>
    </div>
    </>
  );
}

export default App;
