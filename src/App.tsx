import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import { AppLayout } from "layouts";

// components
import { Home, Products } from "components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
