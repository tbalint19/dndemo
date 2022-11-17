import http from 'axios'

export const search = async () => {
    try {
        const response = http.request({
            method: 'GET',
            url: 'https://movies-app1.p.rapidapi.com/api/movies',
            headers: {
              'X-RapidAPI-Key': 'ba9db7ccd7msh3cc63bddadef9b5p1f02a6jsne210d3ab0317',
              'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
            }
          })
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}