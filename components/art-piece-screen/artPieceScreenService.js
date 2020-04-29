import axios from "axios";

const baseUrl = 'cs2345-db-api.herokuapp.com'

async function getArtPieceInfo (id) {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
    };
    if (id === null){
        return axios({
            method: 'get',
            url: baseUrl + '/art_object/all',
            headers: headers
        })
        .then((response) => {
            return {
                'status': 'success',
                'body' : response.body
            }
        })
        .catch((error) => {
            let e = error;
            if(e === null || e === undefined){
                e = "server error";
            }
            console.log(e);
            return {
                title: 'No Art To Display',
                medium: 'None',
                dimensions: 'None'
            }
        })

    }
    else {
        return axios({
            method: 'get',
            url: baseUrl + '/art_object/' + id,
            headers: headers
        })
        .then((response) => {
            return {
                'status': 'success',
                'body' : response.body
            }
        })
        .catch((error) => {
            let e = error;
            if(e === null || e === undefined){
                e = "server error";
            }
            console.log(e);
            return {
                title: 'No Art To Display',
                medium: 'None',
                dimensions: 'None'
            }
        })

    }
};

const artPieceScreenService = {
    getArtPieceInfo
};

export default artPieceScreenService;