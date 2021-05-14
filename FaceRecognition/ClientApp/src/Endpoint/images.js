//import { createStateProvider } from 'react-endpoint'

//import { fetchCsrfCookie } from '../helpers'

/*
export function imageEndpoint(url) {
    api.ImagesController.sendImage(url).then((response) => {
        if (response.status === 200) {
            this.setUser(response.data.user)
        } else if (response.status !== 401) {
            window.console.error('error when calling user.current()', response)
        }
        
    })
}*/
export function imageEndpoint(url) {
    let imageUrl = {
        Url: url
    }
    fetch('/api/images', {
        method: 'POST', 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(imageUrl)
    }).then((result) => console.log(result)).catch(console.log)
}