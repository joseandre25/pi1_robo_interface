from flask import Blueprint, render_template
import requests
import plotly.express as px
import plotly.utils  # Importar utils do módulo principal do Plotly
import json

bp = Blueprint('main', __name__)

@bp.route('/')
def dashboard():
    return render_template('dashboard.html')

@bp.route('/sensors')
def sensors():
    # Dados de exemplo para o gráfico
    data = {
        "time": ["10:00", "10:01", "10:02", "10:03", "10:04"],
        "distance": [20, 25, 22, 23, 21]
    }

    # Criando o gráfico com Plotly
    fig = px.line(
        x=data["time"], 
        y=data["distance"], 
        labels={"x": "Tempo", "y": "Distância (cm)"},
        title="Leitura dos Sensores"
    )

    # Convertendo o gráfico para JSON usando a classe correta
    graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)

    return render_template('sensors.html', title="Sensores", graphJSON=graphJSON)
