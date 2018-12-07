import express from 'express';
import validUrl from 'valid-url';
import sharp from 'sharp';
import request from 'request';
import jsonpatch from 'jsonpatch';
import bodyparser from 'body-parser';


const router = express.Router();
const jsonParser = bodyparser.json();
const urlEncoded = bodyparser.urlencoded({"extended": false});

/**
 * Api end point that resizes an image to a 
 * 50X50 thumbanail
 * 
 * @method {POST} 
 * 
 * @returns {Image}
 */

router.post('/thumbnail', urlEncoded, (req, res) => {
    let imageUrl = req.body.imageurl;

    if (imageUrl.match(/\.(jpeg|jpg|gif|png)$/) === null) {
        res.sendStatus(400);

        return;
    }
    
    if (imageUrl === 'undefined' || 
        imageUrl === '' ||
        !validUrl.isWebUri(imageUrl)){

        res.sendStatus(400);
        
        return;
    }

    res.type('image/png');

    request.
    get(imageUrl).
    pipe(sharp().
    resize(50, 50, {'fit': 'fill'}).
    png()).
    pipe(res);
});

/**
 * A simple api that aplies a json
 * patch to a json object
 * 
 * @method {POST} 
 * 
 * @returns Object
 */
router.post('/patch', jsonParser, (req, res) => {

    let patch = req.body.op;
    let obj = req.body.opdata;

    if (obj === 'undefined' || typeof obj !== 'object' || patch === 'undefined' || typeof patch !== 'object'){
        res.sendStatus(400);
        
        return;
    }
    
    try{
        res.json(jsonpatch.apply_patch(obj, [patch]));
    }catch(err){
        res.sendStatus(400);
    }
    
});


export default router;

