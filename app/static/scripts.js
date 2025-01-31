// URL do WebSocket (substituir pelo endereço)
const WEBSOCKET_URL = "ws://ENDERECO_DO_WEBSOCKET_AQUI/ws";

// Verifica se o endereço do WebSocket foi configurado
if (!WEBSOCKET_URL || WEBSOCKET_URL.includes("ENDERECO_DO_WEBSOCKET_AQUI")) {
    console.error("Por favor, configure o endereço do WebSocket em WEBSOCKET_URL.");
} else {
    // Estabelece a conexão com o WebSocket
    const socket = new WebSocket(WEBSOCKET_URL);

    // Evento: Conexão estabelecida
    socket.addEventListener('open', () => {
        console.log('Conectado ao WebSocket');
    });

    // Evento: Mensagem recebida do servidor
    socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data); // Parse da mensagem JSON recebida

        // Atualizar LEDs
        document.getElementById("motor-led").className = data.motorActive ? "led green" : "led red";
        document.getElementById("leds-led").className = data.ledsActive ? "led green" : "led red";
        document.getElementById("ultrassom-led").className = data.ultrassomActive ? "led green" : "led red";
        document.getElementById("infrared-led").className = data.infraredActive ? "led green" : "led red";
        document.getElementById("connection-led").className = data.connectionStatus ? "led green" : "led red";

        // Atualizar Status do Ultrassom
        const ultrassomStatusElement = document.getElementById("ultrassom-status");
        const ultrassomDistanceElement = document.getElementById("ultrassom-distance");
        if (data.ultrassomActive) {
            if (data.objectFound) {
                ultrassomStatusElement.innerText = "Objeto encontrado";
                ultrassomDistanceElement.innerText = `${data.ultrassomDistance} cm até o objeto`;
            } else {
                ultrassomStatusElement.innerText = "Nenhum objeto encontrado";
                ultrassomDistanceElement.innerText = ""; // Limpa a distância se nenhum objeto for encontrado
            }
        } else {
            ultrassomStatusElement.innerText = ""; // Limpa o status se o sensor estiver inativo
            ultrassomDistanceElement.innerText = ""; // Limpa a distância se o sensor estiver inativo
        }

        // Atualizar Status do Infravermelho
        const infraredDistanceElement = document.getElementById("infrared-distance");
        if (data.infraredActive && data.infraredDistance !== null) {
            if (data.infraredDistance === 0) {
                infraredDistanceElement.innerText = "Limite da arena atingido";
            } else {
                infraredDistanceElement.innerText = `${data.infraredDistance} cm até o limite da arena`;
            }
        } else {
            infraredDistanceElement.innerText = ""; // Limpa o texto se não houver limite detectado
        }

        // Atualizar Status de Conexão
        const connectionStatusElement = document.getElementById("connection-status");
        connectionStatusElement.innerText = data.connectionStatus ? "CONECTADO" : "SEM CONEXÃO";

        // Atualizar Logs
        document.getElementById("logs").innerText = data.logs.join("\n");
    });

    // Evento: Conexão fechada
    socket.addEventListener('close', () => {
        console.log('Conexão com WebSocket fechada');
    });

    // Evento: Erro na conexão
    socket.addEventListener('error', (error) => {
        console.error('Erro no WebSocket:', error);
    });
}
