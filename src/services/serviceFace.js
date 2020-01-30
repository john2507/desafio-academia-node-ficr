const axios = require ('axios')
 

module.exports = axios.create({
     baseURL: "https://graph.facebook.com/v5.0/me?fields=id%2Cname%2Cemail%2Caddress%2Cgender%2Clast_name%2Cbirthday%2Cpicture&access_token=EAAIlDuHv2RsBAO2Oz8hIX70dMvKVE6rL3WZAsP0aqeHDWQeUVNBu766gALFOqxKZAV3XmfeXfOsYsxIfFSQ45oujPa2DcmaeEYEUDsgjQ2dQ2fVTf0SmHM2Boe3Q4qZAsW2VeZCm3F3nzoD60iLxFcHNDVVR6svFUnLQ0aJ4e8lncBDrZATBjYUeUYiD4lhHR6yKZCP55BSHrplpCbvLbrXHEhcJ8DY3wggWAceuu5gwZDZD"
    

    
});