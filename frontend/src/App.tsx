import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeListPage from "./pages/RecipeList";
import RecipeInfoPage from "./pages/RecipeInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipe/:id" element={<RecipeInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
