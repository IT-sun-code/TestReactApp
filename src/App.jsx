import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainPage from "./components/screens/mainPage/MainPage";
import EditPage from "./components/screens/editPage/EditPage";
import Header from "./components/ui/header/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
