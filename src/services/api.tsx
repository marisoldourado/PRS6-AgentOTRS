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
    headers: { 
        Accept: 'application/json'
    },
});

export default api;
