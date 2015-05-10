# make-basic-node-servers

###Exercise purpose:
- Setup a basic static file server in node & compare this to another setup using express accessing the same public file resources.

###To try out this basic app:

- clone the file onto your machine.
- open the path in your terminal to the project and run:
    - nodemon .bareNodeServer.js     (for the basic Node Server).
    - nodemon .expressServer.js      (for the Express Server).
    - note: if you don't have 'nodemon' installed, you can replace this with 'node'

- in your browser of choice, run: 
    - http://127.0.0.1:8080/
    - http://127.0.0.1:8080/home.html
    - http://127.0.0.1:8080/home
    - http://127.0.0.1:8080/api/[anything]
    - http://127.0.0.1:8080/[anything]

See the varying data returned for the different GET requests to either our bare node or express node servers.
