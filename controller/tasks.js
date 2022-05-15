const getAllTask = (req,res)=>{
    res.send('get all task')
}

const createTask= (res,req)=>{
    res.json(req.body)
}

const getTask = (req,res)=>{
    res.send({id:req.params.id})
}

const updateTask= (res,req)=>{
    res.send('update Task')
}

const deleteTask = (req,res)=>{
    res.send('delete Task')
}




module.exports={
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}