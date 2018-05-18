import nock from 'nock';
import mappings from './data/mappings';

const baseUrl = 'https://www.ebi.ac.uk';

class MappingsService {

    constructor() {
        this.mock = null;
    }

    initMock() {
        this.mock = nock(baseUrl);
        this.mock.persist().get('/gifts/mappings').reply(200, mappings);
    }

}

export default MappingsService;