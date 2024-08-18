import {useEffect} from "react";
import axios from "./utils/axios.customize.js";
import Header from "./components/layout/header.jsx";
import {Outlet} from "react-router-dom";

function App() {

    useEffect(() => {
        const fetchHelloWorld = async () => {
            const res = await axios.get(`/v1/api`);
            console.log(res);
        }
        fetchHelloWorld()
    },[])

  return (
    <>
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    </>
  )
}

export default App
