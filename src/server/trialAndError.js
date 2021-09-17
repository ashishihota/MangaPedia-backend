import axios from 'axios';

async function getData() {
    return await axios.get('api.mangadex.org')
}

getData().then(data => {
    console.log(data)
})