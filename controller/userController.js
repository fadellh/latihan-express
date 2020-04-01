let data = [
    {
        id:1,
        username: 'lian',
        password: '123',
        role:'users'
    },
    {
        id:2,
        username: 'admin',
        password: 'admin',
        role: 'admin'
    }
]

module.exports = {
    getAllUser : (req,res) =>{
        res.status(200).send(data)
    },
    getUserById: (req,res) => {
        console.log(req.params.id)
        let byId = data.find((val)=> val.id === parseInt(req.params.id))
        // let id = parseInt(req.params)
        if(byId){
            res.status(200).send(byId)
        }else{
            res.status(404).send('Not Found')
        }
    },
    searchByUsername: (req,res) => {
        console.log(req.query)
        let username = req.query.username
        let search = data.filter((val)=> val.username.includes(username))

        if(search.length>0){
            res.status(200).send(search)
        }else{
            res.status(404).send('Not Found')
        }
    },
    Login : (req,res) => {
        console.log(req.body)
       let username = req.body.username
        let password = req.body.password
        let dataUsername = data.filter((val)=> val.username.includes(username))
        let datapass = data.filter((val)=> val.password.includes(password))

        if(dataUsername.length>0 && datapass.length>0){
            res.status(200).send(dataUsername)
        }else{
            res.status(404).send('<h1>Not Found</h1>')
        }
        
    },
    searchByRole: (req,res) => {
        let role = req.query.role
        let search = data.filter((val)=> val.role === (role))
        console.log(search)
        if(search.length>0){
            res.status(200).send(search)
        }else{
            res.status(404).send('<h1>Not Found</h1>')
        }
    }
}