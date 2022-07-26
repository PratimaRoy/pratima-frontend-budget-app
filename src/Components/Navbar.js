import { Link } from 'react-router-dom';
import "./Nav.css"

function Navbar() {
  return (
    <nav className="nav">
      <h1>🕉 Vishnupriya Budget App 🕉</h1>
      <Link to="/">
        <button className="homePage">Home Page</button>
      </Link>
      <Link to="/transactions">
        <button className="showTransactions">Show Transactions</button>
      </Link>
      <Link to="/transactions/new">
        <button className="newTransactions">New Transaction</button>
      </Link>
    </nav>
  );
}

export default Navbar;