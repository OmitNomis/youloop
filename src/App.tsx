import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppSection } from "./components/Main";
import { Toaster } from "./components/ui/toaster";
const App = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center">
      <Toaster />
      <Header />
      <AppSection />
      <Footer />
    </div>
  );
};
export default App;
