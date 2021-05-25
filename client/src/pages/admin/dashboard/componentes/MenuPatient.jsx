import PatientAvatar from './MenuPatient/componentes/PatientAvatar';
import MenuActions from './MenuPatient/componentes/MenuActions';
  
let patient_name = ""
export default function (){
  return (<div id="profile_header"> 
    <h2 className="title_page">Patient Profile</h2>
    <PatientAvatar/>
    <MenuActions/>
  </div>);
}