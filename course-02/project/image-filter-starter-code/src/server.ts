// $ cd /Users/rfilardo/Dropbox/Rebecca-Private/git-everything/learning-Udacity/nd9990-cloud-developer-ALL/course-02/project/image-filter-starter-code

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

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
 
  //    1. validate the image_url query

// if there is an image and it is valid (which is not the same as it not being 404, it's the same as whether or not it's a valid URL) say one thing. if not, say another thing. 

  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
// e.g. https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Zwerg_Postkarte_001.jpg/800px-Zwerg_Postkarte_001.jpg



  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1



/* Query Parameter: the data that is passed after a question mark in the URL)

// TEST: 

http://localhost:{{PORT}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

http://localhost:8082/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

http://{{EB_URL}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg



*/
  app.get( "/filteredimage", 
    ( req: Request, res: Response ) => {

// NOTE: next line uses "let" and "query"      
    let { image_url } = req.query;



// SOME STANDARD RESPONSES, BELOW    

    if ( !image_url ) {
      return res.status(400)
                .send(`image_url is required, filteredimage`);
    }


// this is how you show the image out
// in the mean time, though, I've got to ram it through a filter
    return res.status(200)
             // .send(`Welcome to the Cloud, filteredimage, ${image_url}!`);


// this works but is not the complete answer. it displays a file in the browser: 
//             .sendFile('/Users/rfilardo/220px-Tomb_of_Nakht.jpg');


// call this function somehow -- call filterImageFromURL(image_url) to filter the image

// it is half working because I am getting the filtered image in the folder "/tmp" as specified in util.ts but I don't know how to diplay it back to the server... or rather, I know how to do one or the other, but not both. presumably the question is how to call the function in TypeScript?????

.sendFile(filterImageFromURL('/Users/rfilardo/220px-Tomb_of_Nakht.jpg'));

//.sendFile(filterImageFromURL('/Users/rfilardo/220px-Tomb_of_Nakht.jpg'));

  } );



  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();