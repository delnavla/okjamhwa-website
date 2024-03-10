'use server'

import { deleteS3Object } from "@/util/action";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function hander(req, res) { 
  if ( req.method == 'POST') {

    req.body = {
      ...req.body,
      url: JSON.parse(req.body.url)
    }
    
    req.body['date'] = new Date()

    try {
      const db = (await connectDB).db('okjamhwa')
      let result = await db.collection('board').insertOne(req.body)
      // return res.status(200).redirect('/support/board')

      res.writeHead(302, { Location: '/support/board' });
      res.end();
    } catch (error) {
      console.log(error)
    }  
  } else if ( req.method == 'DELETE' ) {

    const url = JSON.parse(req.body).url

    url.map( (url) => {
      const objectKey = url.replace('https://', '').split('/')[1]
      return deleteS3Object(objectKey);
    })

    const db = (await connectDB).db('okjamhwa')
    let result = await db.collection('board').deleteOne({ _id: new ObjectId(JSON.parse(req.body)._id) })
    res.status(200).json('delete')
  }
}