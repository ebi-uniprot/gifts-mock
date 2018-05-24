import nock from 'nock';
import mappings from './data/mappings';
import mapping from './data/mapping';
import comments from './data/comments';

const baseUrl = 'https://www.ebi.ac.uk';

class MappingsService {

    constructor() {
        this.mock = null;
    }

    initMock() {
        this.mock = nock(baseUrl);
        this.mock.persist().get('/gifts/mappings').query(true).reply(200, mappings);
        this.mock.persist().get('/gifts/mapping/14342452').reply(200, mapping);
        this.mock.persist().get('/gifts/comments/123434').reply(200, comments);
    }

}

export default MappingsService;