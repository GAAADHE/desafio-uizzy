import { Link } from 'react-router-dom';
const LogOut = function (){
  return (
    <Link className="logout">
      <i className="fas fa-sign-out-alt"></i>
      <div className="menu_name">Logout</div>
    </Link>
  );
}

export default LogOut;