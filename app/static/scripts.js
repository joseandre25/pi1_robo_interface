function fetchData() {
    return {
        connectionStatus: true, // Indica se está conectado ou não
        motorActive: true, // MOTOR DESATIVADO
        ledsActive: true, // LEDs ATIVADO
        ultrassomActive: true, // ULTRASSOM ATIVADO
        objectFound: true, // Indica se o objeto foi encontrado
        ultrassomDistance: 3, // Valor numérico fornecido pela API
        infraredActive: true, // INFRAVERMELHO DESATIVADO
        infraredDistance: 1, // Valor numérico fornecido pela API
        logs: [
            "timestamp1 - source1 - message1",
            "timestamp2 - source2 - message2",
            "timestamp3 - source3 - message3"
        ]
    };
}

// Função para exibir a mensagem de erro se o componente não estiver funcionando
function checkComponentStatus(componentName, componentStatus, connectionStatus) {
    const errorMessage = `Não está funcionando`;
    if (!componentStatus && connectionStatus) {
        document.getElementById(`${componentName}-status`).innerText = errorMessage;
    } else {
        document.getElementById(`${componentName}-status`).innerText = "";
    }
}

// Atualiza os elementos com base nos dados da API
function updateDashboard() {
    const data = fetchData();

    if (!data.connectionStatus) { // Pra evitar erros, se connection estiver false já marreto todos igual a false
        data.motorActive = false;
        data.ledsActive = false;
        data.ultrassomActive = false;
        data.infraredActive = false;
    }

    // Atualizar LEDs
    document.getElementById("motor-led").className = data.motorActive ? "led green" : "led red";
    document.getElementById("leds-led").className = data.ledsActive ? "led green" : "led red";
    document.getElementById("ultrassom-led").className = data.ultrassomActive ? "led green" : "led red";
    document.getElementById("infrared-led").className = data.infraredActive ? "led green" : "led red";
    document.getElementById("connection-led").className = data.connectionStatus ? "led green" : "led red";

    // Verificar se algum componente não está funcionando
    checkComponentStatus("motor", data.motorActive, data.connectionStatus);
    checkComponentStatus("leds", data.ledsActive, data.connectionStatus);
    checkComponentStatus("ultrassom", data.ultrassomActive, data.connectionStatus);
    checkComponentStatus("infrared", data.infraredActive, data.connectionStatus);

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

    // Atualizar Status de Conexão com if...else
    const connectionStatusElement = document.getElementById("connection-status");
    if (data.connectionStatus) {
        connectionStatusElement.innerText = "CONECTADO";
    } else {
        connectionStatusElement.innerText = "SEM CONEXÃO";
    }

    // Atualizar Logs
    document.getElementById("logs").innerText = data.logs.join("\n");
}

// Atualiza o dashboard a cada segundo
setInterval(updateDashboard, 1000);
updateDashboard();