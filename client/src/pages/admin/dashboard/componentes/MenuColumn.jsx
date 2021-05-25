import UserProfilePic from './MenuColumn/componentes/UserProfilePic';
import MainMenu from './MenuColumn/componentes/MainMenu';
import LogOutButton from './MenuColumn/componentes/LogOutButton';

const MenuColumn = function (){
  return (<div id="MenuColumn"> 
    <UserProfilePic/>
    <MainMenu/>
    <LogOutButton/>
  </div>);
}

export default MenuColumn;