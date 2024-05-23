export const Header = () => {
  return (
    <header>
      <div className="container bg-red-300 flex items-center">
        <div>
          <p className="p-3 bg-red-300">Logo</p>
        </div>
        <div className="hidden md:block desktop_links">
          <div className="flex items-center gap-3 ">
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
          </div>
        </div>
        <div className="md:hidden mobile_menu">
          <div className="flex flex-col gap-3 ">
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
          </div>
        </div>
      </div>
    </header>
  );
};
