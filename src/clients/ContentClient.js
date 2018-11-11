import rp from 'request-promise';

const CONTENT_URL = 'http://content.empyrehq.com';

class EmpyreContentClient {

    constructor(http = rp, baseUrl = CONTENT_URL) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.options = { json: true };
    }

    getRandomQuote() {
        return this.http.get(`${this.baseUrl}/quotes/random`, this.options);
    }
}

export default new EmpyreContentClient(rp, process.env.CONTENT_URL);
