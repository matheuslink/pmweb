import React from 'react';
import Service from '../../services/Service';
import MainChart from './Components/MainChart';
import MiniBox from './Components/MiniBox';
import ContactModal from './Components/ContactModal';
import './Home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      chartData: [],
      lastUpdate: "",
      campaignData: {},
      notificationData: {},
      transactionData: {},
      showModal: false,
    }

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Service.healthstatus()
      .then((res) => {
        this.setState({ 
          chartData: res.data.chartdata,
          lastUpdate: `${res.data.date} ${res.data.time}`,
        });
      })
      .catch((err) => {
        alert(err);
      });

      Service.campaign()
      .then((res) => {
        this.setState({ 
          campaignData: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
      
      Service.notification()
      .then((res) => {
        this.setState({ 
          notificationData: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });

      Service.transaction()
      .then((res) => {
        this.setState({ 
          transactionData: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  showModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="header">
            <p className="breadcrumbX">
              <span>Pmweb</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span>Health Status</span>
            </p>
            <div className="date-picker">
            </div>
          </div> 
          <MainChart 
            data={this.state.chartData} 
            lastUpdate={this.state.lastUpdate} 
          />
          <div className="boxes">
            <MiniBox title="Campaigns" data={this.state.campaignData} />
            <MiniBox title="Notification" data={this.state.notificationData} />
            <MiniBox title="Transaction" data={this.state.transactionData} />
          </div>
          <div className="button" onClick={this.showModal}>Entrar em contato</div>
        </div>
        <div className="footer"></div>
        <ContactModal showModal={this.state.showModal} close={this.closeModal} />
      </div>
    );
  }
}

export default Home;