import { persistStore } from './persistStore.js'

const defaultData = [
  {
    "user":{
      "name": "wesleywrenaw",
    },
    "comments":[
      {
        id:0,
        user:"ann5353",
        content:"This should have totally been the front end of the street March E - way cooler!",
        date:"Mon Apr 12 2021 14:41:24 GMT-0400 (Horário Padrão do Amazonas)"
      }
    ]
  }
]

export const store = persistStore('data', defaultData)

