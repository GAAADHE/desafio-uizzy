
let patient_name = "Joana D\'arc";
let since_year = "2015";
const { city, home_adress, date_of_birth, cellphone, email } = {"city":"New York","home_adress":"515, Madisom Ave, NY 10022","date_of_birth":"10/02/1982, 31 years old","cellphone":"22234234","email":"efigueroa@yahoo.com.br"};
export default function (){
  return (<div class="patient_informations"> 
    <h2 class="patient_name_title">{patient_name}</h2>
    <div class="since_year">Patient since {since_year}</div>
    <ul class="petient_pessoal_informations">
      <li>Cyte: <a class="constrast-text">{ city }</a></li>
      <li>Home address: <a class="constrast-text">{ home_adress }</a></li>
      <li>Data of birth: <a class="constrast-text">{ date_of_birth }</a></li>
      <li>Cellphone: <a class="constrast-text">{ cellphone }</a></li>
      <li>Email: <a class="constrast-text">{ email }</a></li>
    </ul>
  </div>);
}