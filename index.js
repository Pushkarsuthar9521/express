const express = require('express')

const server = express()

const shoes =[
  {
    "id":"1",
    "text": "Unisex SP CS Running Shoes",
    "price": "Rs. 439",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_20,c_limit,fl_progressive/assets/images/22772572/2023/4/28/c8dde79-2e0f-4d6e-886-73f8f09353682664299953-Softride-Pro-Coast-Summer-Unisex-Running-Shoes-534682664299-.jpg"
  },
  {
    "id":"2",
    "text": "Wired Rapid Textured Sneakers",
    "price": "Rs. 3024",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18814816/2022/11/6/1104f25e-29c1-42bf-a9c7-0dae89a8e5a71667717398456PumaUnisexBlackWiredRapidTexturedSneakers1.jpg"
  },
  {
    "id":"3",
    "text": "Dart One8 V2 Sneakers",
    "price": "Rs. 2364",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19104824/2022/7/25/2c5d8c65-2bf0-44e6-bc3f-82bb6f164a461658741199474-Puma-Dart-One8-V2-Unisex-Sneakers-181658741199129-1.jpg"
  },
  {
    "id":"4",
    "text": "Unisex Wired Run Pure Sneakers",
    "price": "Rs. 2699",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21497678/2023/3/1/a639c9e6-8846-4365-9be5-231c567f56571677653940569-Puma-Wired-Run-Pure-Unisex-Sneakers-3661677653940207-1.jpg"
  },
  {
    "id":"5",
    "text": "Unisex Sneakers",
    "price": "Rs. 2794",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21497374/2023/2/6/acd12500-2ce3-481f-95a1-dc7f8389fc3c1675676634193-Puma-Dart-One8-V2-Unisex-Sneakers-2231675676633766-1.jpg"
  },
  {
    "id":"6",
    "text": "Kenton Sneakers",
    "price": "Rs. 2249",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22805288/2023/4/18/ceae2a2a-3689-4657-9106-0614bd2b1e101681796580455PUMAKentonMensShoes1.jpg"
  },
  {
    "id":"7",
    "text": "Softride Enzo Evo Sports Shoes",
    "price": "Rs. 4199",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18806760/2022/11/6/75976411-155c-415c-bf9f-55ff5ecc9e101667717586019PumaBlackSoftrideEnzoEvoSportsShoes1.jpg"
  },
  {
    "id":"8",
    "text": "Unisex Softr PC Training Shoes",
    "price": "Rs. 3999",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21496412/2023/3/1/4afb33a8-9998-400e-a1ee-66b7c40bb1f81677653074862SoftrideProCoastTrainingShoes1.jpg"
  },
  {
    "id":"9",
    "text": "Unisex Spike Cricket Shoes",
    "price": "Rs. 2474",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24189994/2023/7/25/04da1f6e-7080-4b64-8d1f-c4d5e4b1bc4b1690290369360PumaPUMASpike221CricketShoes1.jpg"
  },
  {
    "id":"10",
    "text": "Unisex NRGY Comet Running",
    "price": "Rs. 5499",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12692664/2022/5/4/06ce6d77-a5d7-43e3-bfa7-b46deade08081651661090293PumaUnisexBlackNRGYCometRunningShoes1.jpg"
  },
  {
    "id":"11",
    "text": "TRC Blaze Easter Goodies",
    "price": "Rs. 5849",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22602954/2023/4/19/adccbeac-73a5-4a7f-8561-eb58a89bc7ec1681899549880TRCBlazeEasterGoodiesUnisexSneakers1.jpg"
  },
  {
    "id":"12",
    "text": "Kids Alfarun Youth Sneakers",
    "price": "Rs. 2919",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23371412/2023/5/25/71022d40-8b52-479e-8bdd-6bda59c4de291685016571248PumaAlfarunYouthSneakers1.jpg"
  },
  {
    "id":"13",
    "text": "Unisex MAMG P Driving Shoes",
    "price": "Rs. 5199",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21497032/2023/2/6/57ae0ecf-215d-47bd-a377-96b5ad4e1fc51675683586553-PUMA-Motorsport-Unisex-MAMG-Petronas-Driving-Shoes-286167568-1.jpg"
  },
  {
    "id":"14",
    "text": "Unisex NRGY Comet Running Shoe",
    "price": "Rs. 2924",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7073044/2022/5/3/1e560ccd-71f8-499e-a924-08f55c49ff6c1651581300420PumaUnisexBlackNRGYCometRunningShoes2.jpg"
  },
  {
    "id":"15",
    "text": "Unisex MF1 Driving Shoes",
    "price": "Rs. 5199",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21497018/2023/2/6/960dac0b-045c-48c2-8b0f-68feafcf82a81675682549497-PUMA-Motorsport-Unisex-Mercede-F1-Driving-Shoes-758167568254-1.jpg"
  },
  {
    "id":"16",
    "text": "Kids Runner V2 Youth Sneakers",
    "price": "Rs. 5129",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23371398/2023/5/25/41f18047-b17b-4906-a9ae-974f6d48199e1685005299133RunnerV2YouthSneakers1.jpg"
  },
  {
    "id":"17",
    "text": "Unisex R78 SL Sneakers",
    "price": "Rs. 2199",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13486954/2022/4/25/9cdccf6d-473b-4372-8575-7dc4cd2c0c191650883826705PumaUnisexBlackSoftFoamR78SLSneakers1.jpg"
  },
  {
    "id":"18",
    "text": "Boys Fun Racer SlipOn Sneakers",
    "price": "Rs. 2599",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12281970/2020/10/10/a384ba11-2e67-45c9-b283-11f527b488861602310824700-Puma-Boys-Casual-Shoes-8811602310822996-1.jpg"
  },
  {
    "id":"19",
    "text": "Shuttle Aero Badminton Shoes",
    "price": "Rs.4299",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23258386/2023/5/18/db8609da-6b80-487a-b6b2-0fe9d1b4666f1684421275318PumaShuttleAeroUnisexShoes1.jpg"
  },
  {
    "id":"20",
    "text": "Mercedes-AMG Petronas Sneakers",
    "price": "Rs. 2250",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21496994/2023/2/6/526d67ca-d3ea-4f93-8477-350c6e651fcc1675681127949-PUMA-Unisex-Motorsport-Mercedes-AMG-Petronas-F1-Tiburion-Mot-1.jpg"
  },
  {
    "id":"21",
    "text": "Kids Basketball Sports Shoes",
    "price": "Rs. 1999",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20313124/2022/10/7/7a3ff2f1-0ae2-44c6-825f-8b0dfd892d711665144269102PumaUnisexKidsBlackSportsShoes1.jpg"
  },
  {
    "id":"22",
    "text": "Unisex AMG Petronas F1Sneakers",
    "price": "Rs. 3999",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21496986/2023/2/6/5fa8d85e-26a8-450d-9dbc-d586b999f2051675675686395-PUMA-Motorsport-Unisex-AMG-Petronas-F1-Tiburion-Sneakers-957-1.jpg"
  },
  {
    "id":"23",
    "text": "Unisex X-Ray Speed Sneakers",
    "price": "Rs. 1599",
    "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24184646/2023/7/25/9553b886-8804-4b65-8f7e-f061ff9226851690297526081FerrariX-RaySpeed1.jpg"
  }
]

server.use(express.json())

// get shoes list

server.get('/products', function(req, res){
    res.send(shoes)
})


// get by id
server.get('/products/:pid', function(req, res){
  const id = req.params.pid


  const findShoe = shoes.find( i => i.id === id )

  if(findShoe)
  {
    
     res.send(findShoe)
  }
  else{
     res.status(400).send("not found")
  }

})


// new shoe added by post method
server.post('/products/', function(req, res){
  const newShoe = req.body
  newShoe.id = Math.random()

  shoes.push(newShoe)

  res.status(201).send('new shoe added')

})



// put

server.put('/products/:pid', function(req, res){
  const id = req.params.pid
  const data = req.body

  const findShoeIndex = shoes.findIndex( i => i.id === id)

  if(findShoeIndex > -1)
  {
     shoes[findShoeIndex] = {...data}
     res.send("updated")
  }
  else{
     res.status(400).send("not found")
  }

})


// patch

server.patch('/products/:pid', function(req, res){
  const id = req.params.pid
  const data = req.body

  const findShoeIndex = shoes.findIndex( i => i.id === id)

  if(findShoeIndex > -1)
  {
    const old = shoes[findShoeIndex]
     shoes[findShoeIndex] = {...old, ...data}
     res.send("updated")
  }
  else{
     res.status(400).send("not found")
  }

})





// delete

server.delete('/products/:pid', function(req, res){
  const id = req.params.pid
 

  const findShoeIndex = shoes.findIndex( i => i.id === id)

  if(findShoeIndex > -1)
  {
     shoes.splice(findShoeIndex, 1)
     res.send("Deleted")
  }
  else{
     res.status(400).send("not found")
  }

})





server.listen(3331)