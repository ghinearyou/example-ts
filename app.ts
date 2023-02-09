import express, { Express } from 'express';

const router: Express = express();

router.get('/palindrome/:name', (req, res) => {
  const name: String = req.params.name

  let result = ''
  for(let i = 1; i <= name.length; i++) {
    result = result + name[name.length - i]
  }

  res.send({
    status: 200,
    data: {
      before: name,
      after: result
    }
  })
})

router.get('/fizzbuzz/:number', (req, res) => {
  try {
    const No: number = parseInt(req.params.number as string)

    if(Number.isNaN(No)) throw ("Parameter should be a number")
  
    let resultAll: Array<any> = []
    for(let i = 1; i <= No; i++) {
      let result = ''
      
      if(i%3 == 0) {
        result = result + 'fizz'
      }
      
      if(i%5 == 0) {
        result = result + 'buzz'
      }
  
      resultAll.push(result == '' ? i : result)
    }
    res.send({
      status: 200,
      data: resultAll
    })  
  } catch (err) {
    res.send({
      status: 400,
      message: err
    })
  }
})

const PORT = 3000;
router.listen(PORT, () => console.log(`The server is running on port ${PORT}`));