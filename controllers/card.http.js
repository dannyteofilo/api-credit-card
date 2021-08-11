const {test,addCard} =require("./card.controller");
const testHttp = async (req, res) => {
    try {
        const resp=await test(req);
        return res.status(201).json({ data:  resp});
    } catch (e) {
        console.error(e);
        return res.status(400).json(e);
    }
  };

  const addCardHttp= async (req,res)=>{
      try{
        const resp=await addCard(req.body);
        return res.status(201).json({resp});
      }catch(e){
          console.log(e);
          return res.status(400).json(e)
      }
  }

module.exports={
    testHttp,
    addCardHttp
}  