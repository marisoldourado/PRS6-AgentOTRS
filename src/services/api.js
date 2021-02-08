/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
* Last change 2020-05-26
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://147.135.68.213:8030/otrs/nph-genericinterface.pl/Webservice/GenericTicketConnectorREST', 
    // baseURL: 'http://192.168.0.105:8080/otrs/nph-genericinterface.pl/Webservice/api-v4',

    // baseURL: 'http://192.168.0.127:8080/otrs/nph-genericinterface.pl/Webservice/api-v4',
    // baseURL: 'http://192.168.0.8:8080/otrs/nph-genericinterface.pl/Webservice/api-v4',

    headers: { 
        Accept: 'application/json'
    },
});

export default api;
