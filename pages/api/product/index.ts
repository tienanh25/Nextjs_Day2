var Mock = require('mockjs')
var Random = Mock.Random
export default function handler(req: any, res: any) {
  var data = Mock.mock({
    'list': [
      {
        'id': 1,
        'name': "Nguyen Tien Anh",
        'city': "Hanoi"
      },
      {
        'id': 2,
        'name': "Ha Tuan Anh",
        'city': "Tp. HCM"
      },
      {
        'id': 3,
        'name': "Pham Tuan Anh",
        'city': "Tp.HCM"
      },
      {
        'id': 4,
        'name': "Cao Quoc Anh",
        'city': "Phu Quoc"
      }
    ]
  })
  if (req.method === 'GET') {
    res.status(200).json(data.list)
  } else {
    // Handle any other HTTP method
  }
}