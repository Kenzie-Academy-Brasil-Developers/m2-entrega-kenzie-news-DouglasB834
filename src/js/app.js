import { creatCards } from "./index.js"
import { ApiRequest } from "./request.js"

let resposta = await ApiRequest.getNews()
creatCards.resNews(resposta)