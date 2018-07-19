# gifts-mock
Mock service for the GIFTs front end

## To install
`npm install`

## To run
`npm run start`

## API
### /gifts/mappings

Search/retrieve all mappings. Mappings are grouped if they share ENST or UniProt accessions. "Facets" are used for filtering and returned by the service based on the result set.

|Attribute|required|default| |
|---------|--------|-------|-|
|searchTerm|N|NA|the ENSG, ENST, UniProt accession or mapping id. If none are provided all mappings are returned|
|offset|N|1|the position in the results set of the first element displayed on the page (for pagination)|
|limit|N|20|the number of results for one page|
|facets|N|NA|filters for the given query, taking the form `facets=organism:9606,status:unreviewed`|


### /gifts/mapping/{mapping_id}
Return a single mapping. `relatedMappings` refers to other mappings which have either the same ENST or UniProt accession.
Note: need to work out sequences.

### /gifts/comments/{mapping_id}
Return all comments for a given mapping.

## /gifts/stats
Return some basic statistics about the number of mappings:
- Total number
- Breakdown of 
  - Unreviewed
  - Under review
  - Reviewed
  - Rejected
