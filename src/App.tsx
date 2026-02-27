import { Toaster } from "react-hot-toast";

import BrandWidget from "./pages/BrandWidget";
import AppRoutes from "./routes/AppRoutes";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navigation />

      <AppRoutes />

      <BrandWidget />
    </>
  );
}

export default App;
