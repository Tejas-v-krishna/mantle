import { Navbar } from "./navbar-with-animated-mega-dropdown";

const DemoOne = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-32 px-10">
        <h1 className="text-4xl font-bold text-white mb-4">Navbar Demo</h1>
        <p className="text-gray-400 max-w-2xl">
          This is an animated mega-dropdown navbar integrated with the existing Mantle project structure. 
          Hover over the menu items to see the mega-menu animation and grid layouts.
        </p>
      </div>
    </div>
  );
};

export default { DemoOne };
