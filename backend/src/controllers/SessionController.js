const User = require('../models/Users');

module.exports = {
    async store(req, res){
        const { email } = req.body;
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }
        
        return res.json(user);
    }
};

// index   - retorna uma lista de sessões
// show    - retorna uma unica sessão
// store   - criar uma nova sessão
// update  - atualiza sessão
// destroy - deleta sessão

// async indica que a função é asincrona
// await aguarda a resposta