import axios from 'axios';

const client_id = "a15ffbd901e4f3ab1c2c";
const client_secret = "ea6d64fc582dc6f2736a8708f97e19dc8bd4cbec"

export const getAuthCode = () => {
    return window.location.href.split("=")[1];
};
export const OAuthLink = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

export const getToken = (authCode: string) => {

    axios.post('https://github.com/login/oauth/access_token',
        {}, {
        headers: {
            'Access-Control-Allow-Origin': 'http://192.168.88.22:3000'
        }
        , params: {
            code: authCode, client_id, client_secret
        }
    })
        .then(function (response) {
            console.log(response);
        })
    // return axios({
    //     method: 'post',
    //     url: '/',
    //     data: {
    //         client_id,
    //         client_secret,
    //         code: authCode
    //     }
    // }).then((res) => {
    //     console.log(res);
    // });
}

