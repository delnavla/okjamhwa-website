'use server'

import { connectDB } from "@/util/database";

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
        return res.status(200).redirect('/support/board')

        // res.writeHead(302, { Location: '/support/notice' });
        // res.end();
      } catch (error) {
        console.log(error)
      }  
  }
}