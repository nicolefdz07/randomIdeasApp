import axios from 'axios';

class IdeasApi{
    constructor(){
        this._ApiUrl = 'http://localhost:5500/api/ideas';
    }
    getIdeas(){
        return axios.get(this._ApiUrl)
    }
}

export default new IdeasApi();