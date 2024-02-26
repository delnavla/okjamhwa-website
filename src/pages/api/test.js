export default function hander(req, res){
  
  if (req.method == 'POST') {
    return res.status(200).json('안녕')
  }

}