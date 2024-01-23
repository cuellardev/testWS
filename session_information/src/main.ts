import { connectToServer } from './socket-client';
import './style.css';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNDM4M2UyNmUtOTk5Ny00ODA3LWJkZDEtMDE1ZWYwMzM2MzQ5IiwiaWRlbnRpZmljYXRpb24iOm51bGwsIm5hbWUiOiJBdXRvbWF0aW9uIEFueXdoZXJlIiwidXNlckRvbWFpbiI6ImctYXV0YW55IiwiZW1haWwiOiJjdHMuYWFAY2FydmFqYWwuY29tIiwiam9iVGl0bGUiOiJDdWVudGEgR2Vuw6lyaWNhIEF1dG9tYXRpemFjaW9uIiwiY291bnRyeSI6IkNvbG9tYmlhIiwiY2l0eSI6IkNhbGkiLCJidXNpbmVzcyI6bnVsbCwiZGF0ZUVudHJ5IjpudWxsLCJjYXB0dXJlIjpmYWxzZSwicmVzdHJpY3RpdmVDbG9zdXJlIjpmYWxzZSwibW9iaWxlQWNjZXNzIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyNC0wMS0xMlQyMDozNDo0MS4wNzVaIiwidXBkYXRlZEF0IjoiMjAyNC0wMS0yM1QwNDo1NzowNi4wNzZaIiwiZmlyc3RBY2Nlc3MiOiIyMDI0LTAxLTIzVDA3OjM2OjI4LjkzNy0wNTowMCIsImxhc3RBY2Nlc3MiOiIyMDI0LTAxLTIyVDE4OjU3OjA2LjAzMi0wNTowMCIsImlzQWN0aXZlIjp0cnVlLCJyb2xlIjoiYWRtaW5pc3RyYWRvciIsInR1cm4iOiJPcGVyYXRpdm9zIn0sImlhdCI6MTcwNjAxMzM4OCwiZXhwIjoxNzA2MDU2NTg4fQ.zRsREG5Zxjf8ELsJph_8Kmc-GXSE6Hux9mX7ooyit2Q'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <input id="jwt-token" placeholder="Json Web Token" value="${token}" />
    <button id="btn-connect">Connect</button>
    <br/>
    <span id="server-status">offline</span>
    <ul id="clients-ul"></ul>
    <br/>
    <button id="btn-get-information">Get Information</button>
    <br/>
    <br/>
    <button id="btn-close">Close</button>
    <br/>
    <h3>Messages</h3>

    <table>
    <tr>
    <th>Campo</th>
    <th>Valor</th>
    </tr>
  <tr>
    <td>user</td>
    <td id="user"></td>
  </tr>
  <tr>
    <td>rol</td>
    <td id="rol"></td>
  </tr>
  <tr>
    <td>firstAccess</td>
    <td id="firstAccess"></td>
  </tr>
  <tr>
    <td>lastAccess</td>
    <td id="lastAccess"></td>
  </tr>
  <tr>
    <td>turn</td>
    <td id="turn"></td>
  </tr>
  <tr>
    <td>schedule</td>
    <td id="schedule"></td>
  </tr>
  <tr>
    <td>availableTime</td>
    <td id="availableTime"></td>
  </tr>
  <tr>
  <td>availableTimeHour</td>
  <td id="availableTimeHour"></td>
</tr>
  <tr>
    <td>start</td>
    <td id="start"></td>
  </tr>
  <tr>
    <td>end</td>
    <td id="end"></td>
  </tr>
  <tr>
    <td>alert</td>
    <td id="alert"></td>
  </tr>
  <tr>
    <td>alertMessage</td>
    <td id="alertMessage"></td>
  </tr>
</table>
    <p id="messages-ul"></p>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// connectToServer();

const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {

  if (jwtToken.value.trim().length <= 0) return alert('Enter a valid JWT');

  connectToServer(jwtToken.value.trim());

})

