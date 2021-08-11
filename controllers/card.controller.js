
const test = async () => {

  try {
      const resp={status:200,message:"Test Success"}
      return Promise.resolve(resp);
  } catch (e) {
    return Promise.reject(e);
  }
};

const addCard=async(data)=>{
    try{
        const resp={status:200,message:"Card added successfully",data}
      return Promise.resolve(resp);
    }catch(e){
        return Promise.reject(e);
    }
}

module.exports = {
  test, 
  addCard,
};
