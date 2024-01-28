import { connectToServer } from './socket-client';
import './style.css';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiOTkyY2ZhY2MtOGU3My00ODIxLTlmMzUtYzdhZTBkY2Q5NjMxIiwiaWRlbnRpZmljYXRpb24iOm51bGwsIm5hbWUiOiJBdXRvbWF0aW9uIEFueXdoZXJlIiwidXNlckRvbWFpbiI6ImctYXV0YW55IiwiZW1haWwiOiJjdHMuYWFAY2FydmFqYWwuY29tIiwiam9iVGl0bGUiOiJDdWVudGEgR2Vuw6lyaWNhIEF1dG9tYXRpemFjaW9uIiwiY291bnRyeSI6IkNvbG9tYmlhIiwiY2l0eSI6IkNhbGkiLCJidXNpbmVzcyI6bnVsbCwiZGF0ZUVudHJ5IjpudWxsLCJjYXB0dXJlIjpmYWxzZSwicmVzdHJpY3RpdmVDbG9zdXJlIjpmYWxzZSwibW9iaWxlQWNjZXNzIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyNC0wMS0xMlQxODozNzoyNi41MDVaIiwidXBkYXRlZEF0IjoiMjAyNC0wMS0yOVQwMTozMzozMS44NjlaIiwiZmlyc3RBY2Nlc3MiOiIyMDI0LTAxLTI4VDE2OjA2OjA3LjU4OS0wNTowMCIsImxhc3RBY2Nlc3MiOiIyMDI0LTAxLTI4VDE2OjA2OjA3LjU5My0wNTowMCIsImlzQWN0aXZlIjp0cnVlLCJyb2xlIjoiYWRtaW5pc3RyYWRvciJ9LCJpYXQiOjE3MDY0NzU5NjcsImV4cCI6MTcwNjUxOTE2N30.TEPc3F0DUs6SehhH9H0bhm9VkJ1nurzaMt_1dVF9VB4'
let actividadID = '0873e787-a336-43bc-b139-da52f5881ad4'
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
    <br/>
    <br/>
    <button id="btn-start-break">Start Break</button>
    <button id="btn-end-break">End Break</button>
    <br/>
    <button id="btn-resume-status">Status</button>
    <br/>
    <button id="btn-information-status">Information Status</button>
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
  <td>timerTotal</td>
  <td id="timerTotal"></td>
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
