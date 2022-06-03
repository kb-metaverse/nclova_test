import { BrowserRouter, Link ,Route, Routes } from "react-router-dom";
import Counter from "./Counter";

const TopMenu = () => {
    return(
        <BrowserRouter>
        <div style={{padding : 20 , border :'5px solid gray'}}>
            <Link to="/" style={{paddingLeft : 20}}>Home</Link>
            <Link to="/test" style={{paddingLeft : 20}}>React Testing</Link>
            <Link to="/form-validation" style={{paddingLeft : 20}}>Form Validation</Link>

            <Routes>
                <Route exact path="/" component={Counter}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default TopMenu;
