 ### Description: ######
The server side for a hospital(Only The API). An API for the doctors of a Hospital for testing and quarantine + well being of COVID-19 patients
<ul>
  <li>There can be 2 types of Users
        <ol>
        <li>Doctors.</li>
        <li>Patients.</li>
        </ol>
  </li>
  <li>Doctors can log in.</li>
  <li>Each time a patient visits, the doctor will follow 2 steps:-
        <ol>
        <li>Register the patient in the app.(using phone number, if the patient already exists,then it just return the patient info in the API) </li>
        <li>After the checkup, creates a Report.</li>
        </ol>
  </li>
  <li>Patient Report has the following fields:-
        <ol>
        <li>Created by doctor.(Doctor's Details) </li>
        <li>Patient's Id. </li>
        <li>Status.(With enum As Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit ) </li>
        </ol>
  </li>
   <li>Required Routes
        <ol>
        <li>/doctors/register → with name,email and password.(Http method:- POST)</li>
        <li>/doctors/login → with email and password and it returns the JWT to be used.(Http method:- POST)</li>
        <li>/patients/register → with name,mobileno and JWT (wich you get after doctor's login). (Http method:- POST)</li>
        <li>/patients/:id/create_report → with status, patient's id and JWT (wich you get after doctor's login). (Http method:- POST) </li>
        <li>/patients/:id/all_reports → with patient's id and JWT (wich you get after doctor's login).This list all the reports of a patient oldest to latest. (Http method:- GET).</li>
        <li>/reports/:status → with status. This list all the reports of all the patients filtered by a specific status. (Http method:- GET).</li>
        </ol>
  </li>
</ul>

### Screenshot: ######
</br>
</br>
<img src="https://github.com/krishanweb2206/HospitalApi/blob/main/screenshots/routes.JPG" />
</br>
</br>

### Technologies Stack: ######
<ul>
  <li><a href="https://code.visualstudio.com/">Vs Code </a>- awesome web-based text editor </li>
  <li><a href="https://nodejs.org/en//">node.js </a>- evented I/O for the backend </li>
  <li><a href="https://expressjs.com/">Express </a>- fast web framework for node.js </li>
  <li><a href="https://www.mongodb.com/">mongoDB </a>- the database for modern applications </li>
  <li><a href="https://www.npmjs.com/package/jsonwebtoken/">JsonWebToken </a>- For Authentication purpose </li>
  <li>etc </li>
</ul>

### Modules Used: ######
    
    "bcrypt": "^5.0.1"</br>
    "express": "^4.17.2"</br>
    "jsonwebtoken": "^8.5.1"</br>
    "mongoose": "^6.1.5"
 
 ### How to Install : ######
 
Clone the project onto your local machine.

Run 'npm install' to install required dependencies.

Run 'npm start' to start thg application.

Visit the application at http://localhost:8991

