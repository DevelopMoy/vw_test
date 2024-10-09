function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const createClaim = (req,resp)=>{
    try {
        const {name_p,date_f,description,amount,plate,VIN} = req.body;
        if (!name_p||!date_f||!description||!amount||!plate||!VIN){
            throw "Missing data, please check request and try again..."
        }
        const confirmation_id = makeid (6);
        resp.status(201).json({
            values: {VIN,name_p},
            msg: 'The record was saved succesfully...',
            confirmation_id,
            ok: true
        });
    }catch(err){
        resp.status(401).json({
            err
        }); 
    }
};


module.exports = {
    createClaim
}