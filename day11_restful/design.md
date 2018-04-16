# Architecture Design

    node server
    MVC
    RESTful

## 1. Collections
- Users
    - Avatar
    - Email
    - Username
    - password
- GirlImages
    - ImageUrl
    - title
    - description
    - createdAt
    - createdBy
    - view
    - like
    - comment   
        - created by 
        - content
## 2. Controller
    CRUID
    - create
    - read - get items with Active = true
    - update
    - delete // never really delete item: delete action = set Active to false

## 3. Route / Restful : links for front-end call back-end
Modern day:
- Back-end rendering is not popular // return a full file html
- back-end return data instead of HTML
    - node: JSON
    - C#/Java: XML
- API: RESTful 
    - URI: /api/girl-images/
    - POST -> /api/girl-images/ = create new girlImage
    - GET -> /api/girl-images/ = read all girlImages
    - GET -> /api/girl-images/:id = read one girlImages
    - PUT -> /api/girl-images/:id = update one girlImages
    - DELETE -> /api/girl-images/:id = update one girlImages
      
## 4. Cooked Data
      