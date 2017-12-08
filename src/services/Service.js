import axios from 'axios';

const api = 'http://teste-frontend.agencia-linux.pmweb.com.br/api/intranet';

class Service {
  healthstatus() {
    return axios.get(`${api}/healthstatus.php`);    
  }
  campaign() {
    return axios.get(`${api}/campaigns.php`);        
  }
  notification() {
    return axios.get(`${api}/notification.php`);        
  }
  transaction() {
    return axios.get(`${api}/transaction.php`);        
  }
}

export default new Service();