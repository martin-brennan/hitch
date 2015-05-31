class IssueModel {
  constructor() {
    this.api = window.Hitch.API;
  }

  all() {
    return this.api.get('issues');
  }

  get(id) {
    return this.api.get('issues/:id', { id });
  }
}

export default IssueModel;
