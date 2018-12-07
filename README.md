# Image Resizer 


 A very simple node app that resizes photo to a 50x50 thumbnail. 

# Tools
    - docker
    - Babel 
    - mocha

# Install
    npm install

# Build App
    npm test

# Run App
    npm start

# Status Code responses
    200 ok
    400 mal-formed url
    401 authorization denied

# End points 
    Login - http://localhost:3000/login
        - visit link to retrieve jwt access_code for 
          further interation with the server

    Resize image - http://localhost:3000/api/v1/thumbnail
        - send a pay load with --data 'imageurl=LINK_TO_IMAGE'
          e.g using curl: 
          
          curl --request POST -d 'imageurl=http://www.google.com/images/srpr/logo11w.png' --url  http://localhost:3000/api/v1/thumbnail/  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NsYWNrZGVtby5hdXRoMC5jb20vIiwic3ViIjoiaVFsNTF0UGtJUHVkamNPZ2J1NTZSaGxUZXBwb0ltUnFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0IiwiaWF0IjoxNTQ0MTQxNDAzLCJleHAiOjE1NDQyMjc4MDMsImF6cCI6ImlRbDUxdFBrSVB1ZGpjT2didTU2UmhsVGVwcG9JbVJxIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.VYQAYrL1Rf8UM-1SiGFOcgtG0tsdZzbu2Dqd2sU_Fvc'

    Patch operation - http://localhost:3000/api/v1/patch
        - send a pay load with --data '{ "op": <OPERATION>, "opdata": <OPERATION_OBJECT> }'
          e.g using curl: 

          curl --request POST http://localhost:3000/api/v1/patch --data '{ "op": { "op":"replace", "path": "/baz", "value": "boo" }, "opdata": {"baz": "qux","foo": "bar"
          }}'  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NsYWNrZGVtby5hdXRoMC5jb20vIiwic3ViIjoiaVFsNTF0UGtJUHVkamNPZ2J1NTZSaGxUZXBwb0ltUnFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0IiwiaWF0IjoxNTQ0MDQ4ODE2LCJleHAiOjE1NDQxMzUyMTYsImF6cCI6ImlRbDUxdFBrSVB1ZGpjT2didTU2UmhsVGVwcG9JbVJxIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.TaHV8ny-xHzTwTMKs8pRxSW_rQyRGEt52VCJBiW8dIg' -H 'Content-Type: application/json'   


    