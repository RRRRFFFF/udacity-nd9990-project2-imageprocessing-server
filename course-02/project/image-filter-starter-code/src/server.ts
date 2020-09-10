// test to see if I've got the remote git working
// $ cd /Users/rfilardo/Dropbox/Rebecca-Private/git-everything/learning-Udacity/nd9990-cloud-developer-ALL/course-02/project/image-filter-starter-code


// I took this other person's line 34: 
// https://github.com/rashadmad/udagram/blob/master/src/server.ts

import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());


/* Query Parameter: the data that is passed after a question mark in the URL)

// TEST: 

http://localhost:{{PORT}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

http://localhost:8082/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

http://{{EB_URL}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

*/

// query parameter method. with or without a slash doesn't seem to make any difference? 

//  app.get('/filteredimage/', (req: Request, res: Response) => {
  app.get('/filteredimage', (req: Request, res: Response) => {


// using "let"
    let { image_url } = req.query;

// using "then"
    filterImageFromURL(image_url).then(filteredImagePath => {
      res.sendFile(filteredImagePath);
    });
  });

 

  // Start the Server
  app.listen( port, () => {
      console.log( 'server running http://localhost:${ port }' );
      console.log( 'press CTRL+C to stop server' );
  } );
})();
