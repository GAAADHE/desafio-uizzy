import UserProfilePic from './MenuColumn/componentes/UserProfilePic';
import MainMenu from './MenuColumn/componentes/MainMenu';
import LogOutButton from './MenuColumn/componentes/LogOutButton';

export default function (){
  return (<div id="MenuColumn"> 
    <UserProfilePic/>
    <MainMenu/>
    <LogOutButton/>
  </div>);
}