import express from 'express';
import bodyParser from 'body-parser';
import MappingService from './mappingsService';
import axios from 'axios';

const app = express();
const baseUrl = 'https://www.ebi.ac.uk';

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const mappingsService = new MappingService();
mappingsService.initMock();


function _getRequestHandler() {
    return (req, res) => {
        axios.get(baseUrl + req.url)
            .then(d => res.send(d.data))
            .catch(e => console.log(e));
    }
};

app.get('/gifts/mappings', _getRequestHandler());
app.get('/gifts/mapping/:id', _getRequestHandler());
app.get('/gifts/comments/:id', _getRequestHandler());


app.listen(3000, () => console.log('Listening on port 3000'));