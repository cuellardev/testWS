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

    const clientsUlRegisterTImes = document.querySelector('#register-times-clients-ul')!;
    const messageFormRegisterTImes = document.querySelector<HTMLFormElement>('#register-times-message-form')!;
    const messageInputRegisterTImes = document.querySelector<HTMLInputElement>('#message-register-session-input')!;
    const typeRegisterRegisterTImes = document.getElementById('register-times-typeRegister') as HTMLInputElement | null;
    const typeRegisterTImes = document.getElementById('register-times-type') as HTMLInputElement | null;
    const processRegisterTImes = document.getElementById('register-times-process') as HTMLInputElement | null;
    const idRegisterTImes = document.getElementById('register-times-id') as HTMLInputElement | null;
    const nameRegisterTImes = document.getElementById('register-times-name') as HTMLInputElement | null;
    const projectRegisterTImes = document.getElementById('register-times-project') as HTMLInputElement | null;
    const stateRegisterTImes = document.getElementById('register-times-state') as HTMLInputElement | null;
    const startRegisterTImes = document.getElementById('register-times-start') as HTMLInputElement | null;
    const timerRegisterTImes = document.getElementById('register-times-timer') as HTMLInputElement | null;
    const timerTotalRegisterTImes = document.getElementById('register-times-timerTotal') as HTMLInputElement | null;
    const alertRegisterTImes = document.getElementById('register-times-alert') as HTMLInputElement | null;
    const alertMessageRegisterTImes = document.getElementById('register-times-alertMessage') as HTMLInputElement | null;
    const serverStatusLabelRegisterTImes = document.querySelector('#register-times-server-status')!;
    const btnStartRegisterTImes = document.querySelector<HTMLButtonElement>('#btn-register-session-start')!;
    const btnEndRegisterTImes = document.querySelector<HTMLButtonElement>('#btn-register-session-end')!;
    const btnStartBreakRegisterTImes = document.querySelector<HTMLButtonElement>('#btn-register-session-start-break')!;
    const btnEndBreakRegisterTImes = document.querySelector<HTMLButtonElement>('#btn-register-session-end-break')!;
    const btnStatusRegisterTImes = document.querySelector<HTMLButtonElement>('#btn-register-session-resume-status')!;




    socket.on('connect', () => {
        serverStatusLabelRegisterTImes.innerHTML = 'connected';
    });

    socket.on('disconnect', () => {
        serverStatusLabelRegisterTImes.innerHTML = 'disconnected';
    });

    socket.on('clients-updated', (clients: string[]) => {
        let clientsHtml = '';
        clients?.forEach(clientId => {
            clientsHtml += `
                <li>${clientId}</li>
            `
        });
        clientsUlRegisterTImes.innerHTML = clientsHtml;
    });

    messageFormRegisterTImes.addEventListener('submit', (event) => {
        event.preventDefault();
        if (messageInputRegisterTImes.value.trim().length <= 0) return;

        socket.emit('register-times-start', {
            detailActivityId: messageInputRegisterTImes.value
        });

        messageInputRegisterTImes.value = '';
    });

    btnStartRegisterTImes.addEventListener('click', () => {
        console.log("se ejecuto estar");
        socket.emit('register-times-start', {
            detailActivityId: messageInputRegisterTImes.value
        });

    })

    btnEndRegisterTImes.addEventListener('click', () => {
        socket.emit('register-times-stop', {
            detailActivityId: messageInputRegisterTImes.value
        });

    })

    btnStartBreakRegisterTImes.addEventListener('click', () => {
        socket.emit('register-times-break-start', {
            breakName: "5409624e-e9bc-434b-85f4-7b78ddf82da6"
        });

    })

    btnEndBreakRegisterTImes.addEventListener('click', () => {
        socket.emit('register-times-break-stop', {
            breakName: "5409624e-e9bc-434b-85f4-7b78ddf82da6"
        });

    })


    btnStatusRegisterTImes.addEventListener('click', () => {
        socket.emit('register-times-status', {});
    })

    socket.on('register-times-response', (payload) => {
        typeRegisterRegisterTImes != null ? typeRegisterRegisterTImes.innerHTML = payload?.typeRegister : null
        typeRegisterTImes != null ? typeRegisterTImes.innerHTML = payload?.type : null
        processRegisterTImes != null ? processRegisterTImes.innerHTML = payload?.process : null
        idRegisterTImes != null ? idRegisterTImes.innerHTML = payload?.id : null
        nameRegisterTImes != null ? nameRegisterTImes.innerHTML = payload?.name : null
        projectRegisterTImes != null ? projectRegisterTImes.innerHTML = payload?.project : null
        stateRegisterTImes != null ? stateRegisterTImes.innerHTML = payload?.state : null
        startRegisterTImes != null ? startRegisterTImes.innerHTML = payload?.start : null
        timerRegisterTImes != null ? timerRegisterTImes.innerHTML = payload?.timer : null
        alertRegisterTImes != null ? alertRegisterTImes.innerHTML = payload?.alert : null
        alertMessageRegisterTImes != null ? alertMessageRegisterTImes.innerHTML = payload?.alertMessage : null
        timerTotalRegisterTImes != null ? timerTotalRegisterTImes.innerHTML = payload?.timerTotal : null
    })
}

