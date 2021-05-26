import { NavLink } from 'react-router-dom';
const MainMenu = function (){
  return (<nav id="MainMenu">
  <ul>
      <li><NavLink to="/dashboard/home" activeClassName="selected">
        <i className="fas fa-home"></i>
        <div className="menu_name">Home</div></NavLink>
      </li>
      <li><NavLink to="/dashboard/members" activeClassName="selected">
        <i className="fas fa-users"></i>
        <div className="menu_name">Members</div></NavLink>
      </li>
      <li><NavLink to="/dashboard/patients" activeClassName="selected">
        <i className="fas fa-user"></i>
        <div className="menu_name">Patients</div></NavLink>
      </li>
      <li><NavLink to="/dashboard/front-desk" activeClassName="selected">
        <i className="fas fa-calendar-alt"></i>
        <div className="menu_name">Front Desk</div></NavLink>
      </li>
      <li><NavLink to="/dashboard/laboratory" activeClassName="selected">
        <i className="fas fa-calendar-minus"></i>
        <div className="menu_name">Laboratory</div></NavLink>
      </li>
      <li><NavLink to="/dashboard/lab-dash" activeClassName="selected">
        <i className="fas fa-columns"></i>
        <div className="menu_name">Lab Dash</div></NavLink>
      </li>
      <li><NavLink to="/dashboard/op-room" activeClassName="selected">
        <i className="fas fa-door-open"></i>
        <div className="menu_name">Op Room</div></NavLink>
      </li>
      <li><NavLink to="/dashboard/settings" activeClassName="selected">
        <i className="fas fa-cog"></i>
        <div className="menu_name">Setings</div></NavLink>
      </li>
  </ul>
  </nav>);
};

export default MainMenu;