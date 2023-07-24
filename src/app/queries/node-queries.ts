export const itemsQuery = `
PREFIX td: <https://www.w3.org/2019/wot/td#>
    SELECT ?oid ?itemname ?itemtype ?itemdesc ?pid ?propname ?propdesc ?datatype ?dataunits WHERE { 
        OPTIONAL { ?td td:hasPropertyAffordance ?property . }
        ?td td:title ?itemname .
        OPTIONAL { ?td td:type ?itemtype . }
        OPTIONAL { ?td td:description ?itemdesc . }
        ?property td:title ?propname .
        ?property td:name ?pid .
        OPTIONAL { ?property td:type ?datatype . }
        OPTIONAL { ?property td:unit ?dataunits . }
        OPTIONAL { ?property td:description ?propdesc . }
        BIND ( replace(str(?td), 'https://oeg.fi.upm.es/wothive/', '', 'i') as ?oid)
     }`
