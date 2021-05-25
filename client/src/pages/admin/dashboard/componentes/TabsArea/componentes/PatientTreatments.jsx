import './PatientTreatments.css';

let no_treatment_yet = <p className="no-treatment-yet">This patient doesn't have treatment plan yet.</p>;



export default function (){
  return (<>
    <div className="patient-treatment-tool-bar">
      <button id="create-new-treatment" className="btn-default">
      <i class="fas fa-plus"></i> Create a New
      </button>
      <div class="patient-search-container">
        <input type="text" className="input-search-default"></input>
        <button className="btn-search btn-default"> 
          <i class="fas fa-search"></i>
           Search
        </button>
      </div>
    </div>
    {no_treatment_yet}
  </>);
}