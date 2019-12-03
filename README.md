# ShortURL-API

Hosted on https://biteurl.herokuapp.com/

## Endpoints

*/api/url/shorten* : accepts a POST request

Request : 
```json
{
    "longUrl": "https://devcenter.heroku.com/articles/renaming-apps"
}
```
Response :
```json
{
    "_id": "5daad8a4ee7fa400176f001c",
    "longUrl": "https://devcenter.heroku.com/articles/renaming-apps",
    "shortUrl": "https://biteurl.herokuapp.com/pEg3IM0tT",
    "urlCode": "pEg3IM0tT",
    "date": "Sat Oct 19 2019 09:34:28 GMT+0000 (Coordinated Universal Time)",
    "__v": 0
}
```
### To-Do
1. Create a UI
2. Use Handle Bars templating engine for templates
3. Use fetch API to fetch data
