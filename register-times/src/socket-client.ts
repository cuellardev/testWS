import { Manager, Socket } from 'socket.io-client';

let socket: Socket;

export const connectToServer = (token: string) => {
    let url = "http://localhost:8000"
    // let url = "https://test-excope-backend.innovacioncarvajal.com"
    const manager = new Manager(`${url}/socket.io/socket.io.js`, {
        extraHeaders: {
            auth: token
        }
    });


    socket?.removeAllListeners();
    socket = manager.socket('/register-times');


    addListeners();
}


const addListeners = () => {

    const clientsUl = document.querySelector('#clients-ul')!;
    const messageForm = document.querySelector<HTMLFormElement>('#message-form')!;
    const messageInput = document.querySelector<HTMLInputElement>('#message-input')!;
    const typeRegister = document.getElementById('typeRegister') as HTMLInputElement | null;
    const type = document.getElementById('type') as HTMLInputElement | null;
    const process = document.getElementById('process') as HTMLInputElement | null;
    const id = document.getElementById('id') as HTMLInputElement | null;
    const name = document.getElementById('name') as HTMLInputElement | null;
    const project = document.getElementById('project') as HTMLInputElement | null;
    const state = document.getElementById('state') as HTMLInputElement | null;
    const start = document.getElementById('start') as HTMLInputElement | null;
    const timer = document.getElementById('timer') as HTMLInputElement | null;
    const timerTotal = document.getElementById('timerTotal') as HTMLInputElement | null;
    const alert = document.getElementById('alert') as HTMLInputElement | null;
    const alertMessage = document.getElementById('alertMessage') as HTMLInputElement | null;
    const serverStatusLabel = document.querySelector('#server-status')!;
    const btnStart = document.querySelector<HTMLButtonElement>('#btn-start')!;
    const btnEnd = document.querySelector<HTMLButtonElement>('#btn-end')!;
    const btnStartBreak = document.querySelector<HTMLButtonElement>('#btn-start-break')!;
    const btnEndBreak = document.querySelector<HTMLButtonElement>('#btn-end-break')!;
    const btnStatus = document.querySelector<HTMLButtonElement>('#btn-resume-status')!;




    socket.on('connect', () => {
        serverStatusLabel.innerHTML = 'connected';
    });

    socket.on('disconnect', () => {
        serverStatusLabel.innerHTML = 'disconnected';
    });

    socket.on('clients-updated', (clients: string[]) => {
        let clientsHtml = '';
        clients.forEach(clientId => {
            clientsHtml += `
                <li>${clientId}</li>
            `
        });
        clientsUl.innerHTML = clientsHtml;
    });

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (messageInput.value.trim().length <= 0) return;

        socket.emit('register-times-start', {
            detailActivityId: messageInput.value
        });

        messageInput.value = '';
    });

    btnStart.addEventListener('click', () => {
        socket.emit('register-times-start', {
            detailActivityId: messageInput.value
        });

    })

    btnEnd.addEventListener('click', () => {
        socket.emit('register-times-stop', {
            detailActivityId: messageInput.value
        });

    })

    btnStartBreak.addEventListener('click', () => {
        socket.emit('register-times-break-start', {
            breakName: "5409624e-e9bc-434b-85f4-7b78ddf82da6"
        });

    })

    btnEndBreak.addEventListener('click', () => {
        socket.emit('register-times-break-stop', {
            breakName: "5409624e-e9bc-434b-85f4-7b78ddf82da6"
        });

    })


    btnStatus.addEventListener('click', () => {
        socket.emit('register-times-status', {});
    })

    socket.on('register-times-response', (payload) => {
        console.log(payload);
        typeRegister != null ? typeRegister.innerHTML = payload.typeRegister : null
        type != null ? type.innerHTML = payload.type : null
        process != null ? process.innerHTML = payload.process : null
        id != null ? id.innerHTML = payload.id : null
        name != null ? name.innerHTML = payload.name : null
        project != null ? project.innerHTML = payload.project : null
        state != null ? state.innerHTML = payload.state : null
        start != null ? start.innerHTML = payload.start : null
        timer != null ? timer.innerHTML = payload.timer : null
        alert != null ? alert.innerHTML = payload.alert : null
        alertMessage != null ? alertMessage.innerHTML = payload.alertMessage : null
        timerTotal != null ? timerTotal.innerHTML = payload.timerTotal : null
    })
}

