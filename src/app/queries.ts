// Useful link
// https://medium.com/wallscope/constructing-sparql-queries-ca63b8b9ac02

// Get all devices info
export const queryItems = `
PREFIX td: <https://www.w3.org/2019/wot/td#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
     SELECT distinct ?oid ?name ?adapterId ?type ?desc WHERE { 
        ?td td:title ?name . 
        ?td td:adapterId ?adapterId .
        OPTIONAL { ?td td:description ?desc . }
        OPTIONAL { ?td rdf:type ?type . }
        FILTER(?type != <https://www.w3.org/2019/wot/td#Thing>)
        BIND ( replace(str(?td), 'https://oeg.fi.upm.es/wothive/', '', 'i') as ?oid)
    }`

// Get all devices properties
export const queryProps = `
PREFIX td: <https://www.w3.org/2019/wot/td#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT ?oid ?name ?pid ?type ?datatype ?units ?desc WHERE { 
        ?td td:hasPropertyAffordance ?property .
        ?property td:title ?name .
        ?property td:name ?pid .
        OPTIONAL { ?property td:type ?datatype . }
        OPTIONAL { ?property td:measures ?units . }
        OPTIONAL { ?property rdf:type ?type . }
        OPTIONAL { ?property td:description ?desc . }
        BIND ( replace(str(?td), 'https://oeg.fi.upm.es/wothive/', '', 'i') as ?oid)
    }`
