// Gráfico 1 - Exemplo
var data1 = [{
    x: ['A', 'B', 'C', 'D'],
    y: [10, 15, 13, 17],
    type: 'lines+markers'
  }];
  
  var layout1 = { title: 'Sensor 1' };
  
  Plotly.newPlot('chart1', data1, layout1);
  
  // Gráfico 2 - Exemplo
  var data2 = [{
    x: [0, 1, 2, 3],
    y: [10, 11, 12, 13],
    mode: 'lines+markers'
  }];
  
  var layout2 = { title: 'Sensor 2' };
  
  Plotly.newPlot('chart2', data2, layout2);

    // Gráfico 3 - Exemplo
    var data3 = [{
        x: [0, 1, 2, 3],
        y: [10, 11, 12, 13],
        mode: 'lines+markers'
      }];
      
      var layout3 = { title: 'Sensor 3' };
      
      Plotly.newPlot('chart3', data3, layout3);
    
    // Gráfico 3 - Exemplo
    var data4 = [{
        x: [0, 1, 2, 3],
        y: [10, 11, 12, 13],
        mode: 'lines+markers'
      }];
      
      var layout4 = { title: 'Sensor 4' };
      
      Plotly.newPlot('chart4', data4, layout4);
  