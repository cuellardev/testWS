import { Manager, Socket } from 'socket.io-client';

let socket: Socket;

export const connectToServer2 = (token: string) => {
    let url = "http://localhost:8000"
    // let url = "https://test-excope-backend.innovacioncarvajal.com"
    const manager = new Manager(`${url}/socket.io/socket.io.js`, {
        extraHeaders: {
            auth: token
        }
    });


    socket?.removeAllListeners();
    socket = manager.socket('/session-information');


    addListeners();
}


const addListeners = () => {

    const clientsUl = document.querySelector('#clients-ul')!;
    const user = document.getElementById('user') as HTMLInputElement | null;
    const rol = document.getElementById('rol') as HTMLInputElement | null;
    const firstAccess = document.getElementById('firstAccess') as HTMLInputElement | null;
    const lastAccess = document.getElementById('lastAccess') as HTMLInputElement | null;
    const turn = document.getElementById('turn') as HTMLInputElement | null;
    const schedule = document.getElementById('schedule') as HTMLInputElement | null;
    const availableTime = document.getElementById('availableTime') as HTMLInputElement | null;
    const availableTimeHour = document.getElementById('availableTimeHour') as HTMLInputElement | null;
    const start = document.getElementById('start') as HTMLInputElement | null;
    const end = document.getElementById('end') as HTMLInputElement | null;
    const alert = document.getElementById('alert') as HTMLInputElement | null;
    const alertMessage = document.getElementById('alertMessage') as HTMLInputElement | null;
    const serverStatusLabel = document.querySelector('#server-status')!;
    const btnInformationStatus = document.querySelector<HTMLButtonElement>('#btn-get-information')!;
    const btnClose = document.querySelector<HTMLButtonElement>('#btn-close')!;



    socket.on('connect', () => {
        serverStatusLabel.innerHTML = 'connected';
    });

    socket.on('disconnect', () => {
        serverStatusLabel.innerHTML = 'disconnected';
    });

    socket.on('clients-updated', (clients: string[]) => {
        let clientsHtml = '';
        clients?.forEach(clientId => {
            clientsHtml += `
                <li>${clientId}</li>
            `
        });
        clientsUl.innerHTML = clientsHtml;
    });


    btnInformationStatus.addEventListener('click', () => {
        console.log("ejecutado boton Information");
        socket.emit('get-session-information', {});
    })

    btnClose.addEventListener('click', () => {
        console.log("ejecutado boton Close");
        socket.emit('close-session');

    })

    socket.on('session-information-response', (payload) => {
        user != null ? user.innerHTML = payload?.user : null
        rol != null ? rol.innerHTML = payload?.rol : null
        firstAccess != null ? firstAccess.innerHTML = payload?.firstAccess : null
        lastAccess != null ? lastAccess.innerHTML = payload?.lastAccess : null
        turn != null ? turn.innerHTML = payload?.turn : null
        schedule != null ? schedule.innerHTML = payload?.schedule : null
        availableTime != null ? availableTime.innerHTML = payload?.availableTime : null
        start != null ? start.innerHTML = payload?.start : null
        end != null ? end.innerHTML = payload?.end : null
        alert != null ? alert.innerHTML = payload?.alert : null
        alertMessage != null ? alertMessage.innerHTML = payload?.alertMessage : null
        function convertirMilisegundosAHorasMinutosSegundos(milisegundos) {
            const segundosTotales = Math.floor(milisegundos / 1000);
            const horas = Math.floor(segundosTotales / 3600);
            const minutos = Math.floor((segundosTotales % 3600) / 60);
            const segundos = segundosTotales % 60;
            const horasFormateadas = horas < 10 ? `0${horas}` : `${horas}`;
            const minutosFormateados = minutos < 10 ? `0${minutos}` : `${minutos}`;
            const segundosFormateados = segundos < 10 ? `0${segundos}` : `${segundos}`;
            return `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
        }
        const diferencia = convertirMilisegundosAHorasMinutosSegundos(payload?.availableTime);
        diferencia != null ? availableTimeHour.innerHTML = diferencia : null
    })
}

