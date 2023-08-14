import { connectToServer } from './socket-client';
import './style.css';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMjg2Y2MzODEtYjJkMS00MjIyLWE2ZWEtNjU0MjgwNTUyYTI4IiwibmFtZSI6IkFBIEFETUlOSVNUUkFET1IiLCJjYXB0dXJlIjp0cnVlLCJtb2JpbGVBY2Nlc3MiOnRydWUsInJvbGUiOiJhZG1pbmlzdHJhZG9yIiwibGFzdEVudHJ5IjoiMjAyMy0wOC0xMVQxOTozNDowMy4xNDJaIn0sImlhdCI6MTY5MjAyMDcwMiwiZXhwIjoxNjkyMTA3MTAyfQ.mEW47EwKl4l47tW6AzN5hVFlMC7K9pAJW3vBCfmgGRU'
let actividadID = '7661eba7-61f9-4696-8307-d6abb97cc580'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <input id="jwt-token" placeholder="Json Web Token" value="${token}" />
    <button id="btn-connect">Connect</button>

    <br/>
    <span id="server-status">offline</span>

    <ul id="clients-ul"></ul>

    <form id="message-form">
      <input placeholder="Actividad ID" id="message-input" value="${actividadID}" />
    </form>
    <br/>
    <button id="btn-start">Start Task</button>
    <button id="btn-end">End Task</button>
    <button id="btn-close">Close Task</button>
    <br/>
    <br/>
    <button id="btn-start-break">Start Break</button>
    <button id="btn-end-break">End Break</button>
    <br/>
    <button id="btn-resume-status">Status</button>
    <h3>Messages</h3>
    <table>
    <tr>
    <th>Campo</th>
    <th>Valor</th>
    </tr>
    <tr>
    <td>typeRegister</td>
    <td id="typeRegister"></td>
  </tr>
  <tr>
    <td>type</td>
    <td id="type"></td>
  </tr>
  <tr>
    <td>process</td>
    <td id="process"></td>
  </tr>
  <tr>
    <td>id</td>
    <td id="id"></td>
  </tr>
  <tr>
    <td>name</td>
    <td id="name"></td>
  </tr>
  <tr>
    <td>project</td>
    <td id="project"></td>
  </tr>
  <tr>
    <td>state</td>
    <td id="state"></td>
  </tr>
  <tr>
    <td>start</td>
    <td id="start"></td>
  </tr>
  <tr>
    <td>timer</td>
    <td id="timer"></td>
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
