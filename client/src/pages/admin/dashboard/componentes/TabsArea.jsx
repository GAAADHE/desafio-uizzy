import PatientTimeline from './TabsArea/componentes/PatientTimeline';
import PatientMedias from './TabsArea/componentes/PatientMedias';
import PatientAttachments from './TabsArea/componentes/PatientAttachments';
import PatientTreatments from './TabsArea/componentes/PatientTreatments';

export default function (){
  return (<div class="tabs_container"> 
    <PatientTreatments/>
    <PatientTimeline/>
    <PatientMedias/>
    <PatientAttachments/>
  </div>);
}