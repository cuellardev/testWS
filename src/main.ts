import { connectToServer } from './socket-client';
import './style.css';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMjg2Y2MzODEtYjJkMS00MjIyLWE2ZWEtNjU0MjgwNTUyYTI4IiwibmFtZSI6IkFBIEFETUlOSVNUUkFET1IiLCJjYXB0dXJlIjp0cnVlLCJtb2JpbGVBY2Nlc3MiOnRydWUsInJvbGUiOiJhZG1pbmlzdHJhZG9yIiwibGFzdEVudHJ5IjoiMjAyMy0wOC0xMFQxMDoyNDozOC44OTJaIn0sImlhdCI6MTY5MTc4MjQ0MywiZXhwIjoxNjkxODY4ODQzfQ.tR_XO_4bm66fJDgsU5WnHpJNb8UescZPAKkBmeWgies'
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

    <button id="btn-pause">Pause Task</button>

    <button id="btn-resume">Resume Task</button>
    <br/>
    <br/>
    <button id="btn-start-break">Start Break</button>

    <button id="btn-end-break">End Break</button>

    <button id="btn-pause-break">Pause Break</button>

    <button id="btn-resume-break">Resume Break</button>
    <br/>
    <button id="btn-resume-status">Status</button>
    <h3>Messages</h3>
    <ul id="messages-ul"></ul>

    


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
