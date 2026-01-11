function Navbar() {
  return (
    <nav className="fixed w-full bg-black text-white p-4 z-10">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold">Kamma Bhargav</h1>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
