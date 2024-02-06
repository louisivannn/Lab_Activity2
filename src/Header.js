import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1>React Bootstrap</h1>
      <h3>The most popular front-end framework, rebuilt for React.</h3>
      <div className="buttonDiv">
        <button className="button">Get started</button>
        <button className="button">Components</button>
      </div>
      <p>Current version: 2.10.0</p>
    </div>
  );
}
export default Header;
