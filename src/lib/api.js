import axios from 'axios'

class Api
{
  constructor() {
    this.axios = axios;
  }

  getUser() {
    return {say: 'I am your father'}
  }
}

export default new Api()