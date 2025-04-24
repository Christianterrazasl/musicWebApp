import Logo from "./Logo";

const Layout = ({ children }) => {
  return (
    <div className='m-0 p-0 container-fluid w-100 vh-100' style={{ backgroundColor: "#000" }}>
        <div className="p-3 pt-5 bg-dark">
            <Logo/>
        </div>
        {children}
    </div>

  );
}

export default Layout;