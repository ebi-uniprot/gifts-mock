import nock from 'nock';

const baseUrl = 'https://www.ebi.ac.uk';

class MappingsService {

    constructor() {
        this.mock = null;
    }

    initMock() {
        this.mock = nock(baseUrl);

        this.mock.get('/').reply(200, {});
    }

}

export default MappingsService;