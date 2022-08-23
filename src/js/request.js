

export class ApiRequest {
    static baseUrl = "https://kenzie-news-api.herokuapp.com/api/news"
    static token   = "numeração do Token "

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token} `
    }
    
    static async getNews(){
        const news = await fetch(`${this.baseUrl}`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(error => console.log(error))
        return  news;
    }


}

// ApiRequest.getNews()