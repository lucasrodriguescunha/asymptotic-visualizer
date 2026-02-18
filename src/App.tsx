import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

export const App = () => {
   return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Home />
      </main>

      <Footer />
    </div>
  )
};
