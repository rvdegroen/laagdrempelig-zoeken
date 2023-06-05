app.js - the app

routes - ONLY the routes where you include the code from the controller files
`router.get('/whatever', whateverController.get)`

controllers - controller just sends and receives data and make sure its correct (error) (stel je hebt het dierenasiel, dan weet de controller een dier te ontvangen en weg te geven)
`whateverController file`
`function get`

services - if you wanna do something in controller: all the logic goes in the service. (stel je hebt het dierenasiel, dan weet de services hoe het dier verzorgd moet worden).
