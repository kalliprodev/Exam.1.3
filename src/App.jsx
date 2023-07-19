import './App.scss';



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import { Home, MealDetails, Error, Category } from "./pages/index";


import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="*" element={<Error />} />

{/* filter is kk  */}

        {/* <Route path="/filterArea/:area" element={<FilterArea />} /> */}



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
