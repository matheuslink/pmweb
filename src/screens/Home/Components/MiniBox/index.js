import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import './MiniBox.less';

class MiniBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, data } = this.props
    let chartNumber = data.healthstatus ? data.healthstatus.replace('%', '') : null;
    chartNumber = Number(chartNumber);
    const dataChart = {
      datasets: [{
        data: [chartNumber, (100 - chartNumber)],
        backgroundColor:  [chartNumber > 80 ? '#00BB41' : '#F3CD00'],
        borderColor: 'transparent',
      }]
    }
    const optionChat = {
      tooltips: {
        enabled: false
      },
      cutoutPercentage: 80,
    }
    return (
      <div className="mini-box">
        <p className="title">{title}</p>
        <p className="time">Last Update: {data.date} {data.time}</p>
        <div className="values-area">
          <div className="chart">
            <span>{data.healthstatus}</span>
            <Doughnut data={dataChart} options={optionChat} width={40} height={35}/>
          </div>
          <div className="bounds">
            <div className="bound">
              <p className="title">Inbound</p>
              <p className="value">{data.inbound}</p>
            </div>
            <div className={data.difference ? (data.difference.charAt(0) === '-' ? 'variation red' : 'variation green') : null }>
              {
                (data.difference) ? (
                  (data.difference.charAt(0) === '-') ? (
                    <i className="fa fa-caret-down" aria-hidden="true"></i>                    
                  ) : (
                    <i className="fa fa-caret-up" aria-hidden="true"></i>                                        
                  )
                ) : ''
              }
              {data.difference ? data.difference.replace('-', '') : ''}
            </div>  
            <div className="bound">
              <p className="title">Outbound</p>
              <p className="value">{data.outbound}</p>
            </div>
          </div>
        </div>
        <p className="details">
          <span>Ver detalhes</span>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </p>
      </div>
    );
  }
}

MiniBox.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
};

export default MiniBox;