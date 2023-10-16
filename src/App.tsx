import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="bg-background text-foreground">
      <Button>Hello World</Button>
      <ThemeSwitcher />
    </div>
  );
};
export default App;
