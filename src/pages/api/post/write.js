import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function hander(req, res) { 
  let session = await getServerSession(req, res, authOptions)
  console.log(session)
  
  if ( req.method == 'POST') {

    req.body['date'] = new Date()

    const text = JSON.parse(req.body.content).root.children[0].children.length

    if ( req.body.title == '' || !text ) {
      return res.status(500).json('Title or content is empty');  
    }     
    
    try {
      const db = (await connectDB).db('okjamhwa')
      let result = await db.collection('notice').insertOne(req.body)
      return res.status(200).redirect('/support/notice')

      // res.writeHead(302, { Location: '/support/notice' });
      // res.end();
    } catch (error) {
      console.log(error)
    }  
  }

}
