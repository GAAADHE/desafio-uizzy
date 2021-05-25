const MainMenu = function (){
  return (<nav id="MainMenu">
  <ul>
      <li><a href="">
        <i className="fas fa-home"></i>
        <div className="menu_name">Home</div></a>
      </li>
      <li><a href="">
        <i className="fas fa-users"></i>
        <div className="menu_name">Members</div></a>
      </li>
      <li><a href="" className="selected">
        <i className="fas fa-user"></i>
        <div className="menu_name">Patients</div></a>
      </li>
      <li><a href="">
        <i className="fas fa-calendar-alt"></i>
        <div className="menu_name">Front Desk</div></a>
      </li>
      <li><a href="">
        <i className="fas fa-calendar-minus"></i>
        <div className="menu_name">Laboratory</div></a>
      </li>
      <li><a href="">
        <i className="fas fa-columns"></i>
        <div className="menu_name">Lab Dash</div></a>
      </li>
      <li><a href="">
        <i className="fas fa-door-open"></i>
        <div className="menu_name">Op Room</div></a>
      </li>
      <li><a href="">
        <i className="fas fa-cog"></i>
        <div className="menu_name">Setings</div></a>
      </li>
  </ul>
  </nav>);
};

export default MainMenu;