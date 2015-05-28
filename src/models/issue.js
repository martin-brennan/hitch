import API from 'services/api';

class IssueModel {
  constructor() {
    this.api = new API("localhost:49793");
  }

  all() {
    return this.api.get('issues');
  }
}

export default IssueModel;
