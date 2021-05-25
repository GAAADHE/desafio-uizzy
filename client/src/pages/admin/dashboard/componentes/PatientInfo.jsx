
let patient_name = "Joana D\'arc";
let since_year = "2015";
const { city, home_adress, date_of_birth, cellphone, email } = {"city":"New York","home_adress":"515, Madisom Ave, NY 10022","date_of_birth":"10/02/1982, 31 years old","cellphone":"22234234","email":"efigueroa@yahoo.com.br"};
export default function (){
  return (<div className="patient_informations"> 
    <h2 className="patient_name_title">{patient_name}</h2>
    <div className="since_year">Patient since {since_year}</div>
    <ul className="petient_pessoal_informations">
      <li>Cyte: <a className="constrast-text">{ city }</a></li>
      <li>Home address: <a className="constrast-text">{ home_adress }</a></li>
      <li>Data of birth: <a className="constrast-text">{ date_of_birth }</a></li>
      <li>Cellphone: <a className="constrast-text">{ cellphone }</a></li>
      <li>Email: <a className="constrast-text">{ email }</a></li>
    </ul>
  </div>);
}