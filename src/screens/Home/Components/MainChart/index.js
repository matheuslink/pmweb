import React from  'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import './MainChart.less';

class MainChart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      lastUpdate: "",
    }

    this.renderChart = this.renderChart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      data: nextProps.data,
      lastUpdate: nextProps.lastUpdate,
    });
  }

  renderChart() {
    const labels = [];
    const hojeValues = [];
    const ontemValues = [];
    const mediaValues = [];
    this.state.data.map((item) => {
      labels.push(`${item.hora}h`);
      hojeValues.push(item.hoje);
      ontemValues.push(item.ontem);
      mediaValues.push(item.media);
    });
    const datasets = [
      {
        label: "Média",
        data: mediaValues,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderColor: '#444444',
        borderWidth: 3,
        pointBorderColor: 'rgba(0, 0, 0, 0)',        
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 1,
        pointHoverBackgroundColor: '#444444',
      },
      {
        label: "Ontem",
        data: ontemValues,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#00A1C1',
        borderWidth: 3,
        pointBorderColor: 'rgba(0, 0, 0, 0)',        
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 1,
        pointHoverBackgroundColor: '#00A1C1',
      },
      {
        label: "Hoje",
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        borderColor: '#8310D1',        
        data: hojeValues,
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        pointHoverBorderColor: '#fff',
        pointBorderWidth: 1,
        pointHoverBackgroundColor: '#8310D1',
      }
    ];

    const options = {  
      layout: {
        padding: {
          left: 30,
          right: 30,
          top: 0,
          bottom: 0
        }
      },
      legend: {
        display: false,
      },
      tooltips: {
        mode: 'index',
        backgroundColor: '#fff',
        titleFontFamily: 'gotham-light',
        titleFontColor: '#000',
        titleMarginBottom: 10,
        bodyFontFamily: 'gotham-light',
        bodyFontColor: '#000',
        bodySpacing: 6,
        cornerRadius: 0,
        caretPadding: 15,
        xPadding: 15,
        yPadding: 15,
        // intersect: false,
      }
    }

    const data = { labels, datasets }
    return <Line data={data} height={60} options={options} />
  }

  render() {
    return (
      <div className="main-chart">
        <div className="header">
          <div className="title">
            <span>Status - Messages</span>
            <span>Last Update: {this.props.lastUpdate}</span>
          </div>
          <div className="legend">
            <div className="legend-item">
              <div className="icon media"></div>
              <span>Média</span>
            </div>
            <div className="legend-item">
              <div className="icon ontem"></div>
              <span>Ontem</span>
            </div>
            <div className="legend-item">
              <div className="icon hoje"></div>
              <span>Hoje</span>
            </div>
          </div>
        </div>
        {this.renderChart()}
      </div>
    );
  }
}

MainChart.propTypes = {
  data: PropTypes.arr,
  lastUpdate: PropTypes.string,
}

export default MainChart;