import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center">
      <div>
        <h1>welcome to the world of GTA</h1>
      </div>
    </main>
  );
};

export default App;
