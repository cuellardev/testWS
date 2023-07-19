import { Manager, Socket } from 'socket.io-client';

let socket: Socket;

export const connectToServer = (token: string) => {

    const manager = new Manager('https://test-excope-backend.innovacioncarvajal.com/socket.io/socket.io.js', {
        extraHeaders: {
            auth: token
        }
    });


    socket?.removeAllListeners();
    socket = manager.socket('/register');


    addListeners();
}


const addListeners = () => {

    const clientsUl = document.querySelector('#clients-ul')!;
    const messageForm = document.querySelector<HTMLFormElement>('#message-form')!;
    const messageInput = document.querySelector<HTMLInputElement>('#message-input')!;
    const messagesUl = document.querySelector<HTMLUListElement>('#messages-ul')!;
    const serverStatusLabel = document.querySelector('#server-status')!;
    const btnStart = document.querySelector<HTMLButtonElement>('#btn-start')!;
    const btnEnd = document.querySelector<HTMLButtonElement>('#btn-end')!;
    const btnPause = document.querySelector<HTMLButtonElement>('#btn-pause')!;
    const btnResume = document.querySelector<HTMLButtonElement>('#btn-resume')!;
    const btnStartBreak = document.querySelector<HTMLButtonElement>('#btn-start-break')!;
    const btnEndBreak = document.querySelector<HTMLButtonElement>('#btn-end-break')!;
    const btnPauseBreak = document.querySelector<HTMLButtonElement>('#btn-pause-break')!;
    const btnResumeBreak = document.querySelector<HTMLButtonElement>('#btn-resume-break')!;
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

        socket.emit('register-activity-start', {
            activityId: messageInput.value
        });

        messageInput.value = '';
    });

    btnStart.addEventListener('click', () => {
        socket.emit('register-activity-start', {
            activityId: messageInput.value
        });

    })

    btnEnd.addEventListener('click', () => {
        socket.emit('register-activity-stop', {
            activityId: messageInput.value
        });

    })

    btnPause.addEventListener('click', () => {
        socket.emit('register-activity-pause', {
            activityId: messageInput.value
        });

    })
    btnResume.addEventListener('click', () => {
        socket.emit('register-activity-resume', {
            activityId: messageInput.value
        });

    })

    btnStartBreak.addEventListener('click', () => {
        socket.emit('register-break-start', {
            activityId: "almuerzo"
        });

    })

    btnEndBreak.addEventListener('click', () => {
        socket.emit('register-break-stop', {
            activityId: "almuerzo"
        });

    })

    btnPauseBreak.addEventListener('click', () => {
        socket.emit('register-break-pause', {
            activityId: "almuerzo"
        });

    })
    btnResumeBreak.addEventListener('click', () => {
        socket.emit('register-break-resume', {
            activityId: "almuerzo"
        });

    })

    btnStatus.addEventListener('click', () => {
        socket.emit('register-status', {});

    })

    socket.on('register-activity-time', (payload: { timer: string, message: string }) => {
        console.log(payload);
        const newMessage = `
            <li>
                <strong>${payload.timer}</strong>
            </li>
        `;
        const li = document.createElement('li');
        li.innerHTML = newMessage;
        messagesUl.append(li);
    })


}

