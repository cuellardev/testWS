import { connectToServer } from './socket-client-register-times';
import { connectToServer2 } from './socket-client-session-info';
import './style.css';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZjY3NWI5NjgtNjc2OS00Yzg5LWFlZGEtMGE1ODM4NTkzNTEwIiwiaWRlbnRpZmljYXRpb24iOm51bGwsIm5hbWUiOiJDdWVsbGFyIFBheiBCcmF5YW4gSm9zZSIsInVzZXJEb21haW4iOiJicnljdWVwYSIsImVtYWlsIjoiYnJheWFuLmN1ZWxsYXJAY2FydmFqYWwuY29tIiwiam9iVGl0bGUiOiJJbmdlbmllcm8gZGVzYXJyb2xsbyBleHBlcnQgY3RzIGMiLCJjb3VudHJ5IjoiQ29sb21iaWEiLCJjaXR5IjoiQ2FsaSIsImJ1c2luZXNzIjpudWxsLCJkYXRlRW50cnkiOm51bGwsImNhcHR1cmUiOnRydWUsInJlc3RyaWN0aXZlQ2xvc3VyZSI6dHJ1ZSwiY2xvc2VTZXNzaW9uRW5kRGF5Ijp0cnVlLCJtb2JpbGVBY2Nlc3MiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDMtMThUMTE6MTA6MzAuNzg3WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDYtMTRUMTU6MDk6NDAuNTM0WiIsImZpcnN0QWNjZXNzIjoiMjAyNC0wNi0xNFQxNDo1OTowMC4wMDBaIiwibGFzdEFjY2VzcyI6IjIwMjQtMDYtMTRUMTU6MDY6MDAuMDAwWiIsImlzQWN0aXZlIjp0cnVlLCJ0aW1lWm9uZSI6IkFtZXJpY2EvQm9nb3RhIiwicm9sZSI6ImFkbWluaXN0cmFkb3IiLCJ0dXJuIjoiMDg6MDAgYW0gYSAwNjowMCBwbSIsImxlYWRlciI6IkNhc3RpbGxvIE1lZGluYSBSYXVsIEFuZHJlcyJ9LCJpYXQiOjE3MTgzNzc4MjcsImV4cCI6MTcxODQyMTAyN30.IllNGyM-0HWqG2eMND0PPR6v-O9oXDedla2u2oeLIPk'
// let token = ''
let actividadID = '05fcef69-08bc-498e-95ee-bc91e69f5962'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="contenedor">

   <!--Primer Formulario   -->
  <div class="columna">
    <h2>Websocket - Client</h2>
    <input id="jwt-token" placeholder="Json Web Token" value="${token}" />
    <button id="btn-register-session-connect">Connect</button>

    <br/>
    <span id="register-times-server-status">offline</span>

    <ul id="register-times-clients-ul"></ul>

    <form id="register-times-message-form">
      <input placeholder="Actividad ID" id="message-register-session-input" value="${actividadID}" />
    </form>
    <br/>
    <button id="btn-register-session-start">Start Task</button>
    <button id="btn-register-session-end">End Task</button>
    <br/>
    <br/>
    <button id="btn-register-session-start-break">Start Break</button>
    <button id="btn-register-session-end-break">End Break</button>
    <br/>
    <button id="btn-register-session-resume-status">Status</button>
    <br/>
    <button id="btn-register-session-information-status">Information Status</button>
    <h3>Messages</h3>
    <table>
    <tr>
    <th>Campo</th>
    <th>Valor</th>
    </tr>
    <tr>
    <td>typeRegister</td>
    <td id="register-times-typeRegister"></td>
  </tr>
  <tr>
    <td>type</td>
    <td id="register-times-type"></td>
  </tr>
  <tr>
    <td>process</td>
    <td id="register-times-process"></td>
  </tr>
  <tr>
    <td>id</td>
    <td id="register-times-id"></td>
  </tr>
  <tr>
    <td>name</td>
    <td id="register-times-name"></td>
  </tr>
  <tr>
    <td>project</td>
    <td id="register-times-project"></td>
  </tr>
  <tr>
    <td>state</td>
    <td id="register-times-state"></td>
  </tr>
  <tr>
    <td>start</td>
    <td id="register-times-start"></td>
  </tr>
  <tr>
    <td>timer</td>
    <td id="register-times-timer"></td>
  </tr>
  <tr>
  <td>timerTotal</td>
  <td id="register-times-timerTotal"></td>
</tr>
  <tr>
    <td>alert</td>
    <td id="register-times-alert"></td>
  </tr>
  <tr>
    <td>alertMessage</td>
    <td id="register-times-alertMessage"></td>
  </tr>
</table>
    <p id="messages-ul"></p>
    </div>
   <!--Primer Formulario   -->

 <!--Segundo Formulario   -->
<div class="columna">
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
</div>
 <!--Segundo Formulario   -->
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// connectToServer();

const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-register-session-connect')!;

btnConnect.addEventListener('click', () => {

  // if (jwtToken.value.trim().length <= 0) return alert('Enter a valid JWT');

  connectToServer(jwtToken.value.trim());

})


const btnConnect2 = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect2.addEventListener('click', () => {

  // if (jwtToken.value.trim().length <= 0) return alert('Enter a valid JWT');

  connectToServer2(jwtToken.value.trim());

})

