import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import FetchRepo from  "../Components/FetchRepo"
import MainPage from "../Pages/MainPage";
import ErrorHandle from "../Components/ErrorHandle";
import SingleRepo from "../Components/SingleRepo";
import Error from "../Components/Error";
// import ListData from "../Pages/ListData";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/repositories/:id" element={<SingleRepo />} />
        <Route path="/errorPage" element={<ErrorHandle />} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
