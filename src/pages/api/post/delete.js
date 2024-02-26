import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function handler(req, res){
  if ( req.method == 'DELETE' ) {
    const db = (await connectDB).db('okjamhwa')
    let result = await db.collection('notice').deleteOne({ _id: new ObjectId(req.body) })
    res.status(200).json('delete')
  }
}