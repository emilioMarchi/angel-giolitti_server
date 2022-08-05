const router = require('express').Router()
const mongo = require('../database')
const projectModel = require('../models/projectsModel')

//primera ruta: traer todos los proyectos
//segunda ruta dinamica: traer proyecto por ID
const projects = require('../projects')


router.get('/', async (req, res) => {
    
    // get proyects []
    
    mongo.initDatabase()
    

    
    
    projectModel.find({}, (err, data)=>{

        const organizeItems = JSON.stringify(organizeData(data))
        
        res.json(organizeItems)
            
       
    })
    

})

router.get('/:_idx', async (req, res) => {
    
    // get proyect for IDX []

    mongo.initDatabase()

    const { _idx } = req.params    
    try{
        projectModel.find({_idx}, (err, data)=>{

            res.json(JSON.stringify(data))
        })
    }
    catch {
        console.log(err)
        res.status(400)
    }
})

router.post('/', (req,res)=>{

    mongo.initDatabase()
    
    
    // get proyects and set proyect index
    projectModel.find({}, (err, data)=>{
        let _idx; 
        
   
        if(data.length === 0) {
            _idx == 0
        }
        else{
            _idx == data.length
        }
        
        projects.map((item) => {
            const project = item

            const newModel = new projectModel(project)
            newModel.save()
            console.log(item._idx)
        })
        

        res.end()

    })

})

function organizeData  (a) {
            
    let index =  0
    const endIndex = a.length-1

    const organizeItems = []

    a.map(()=>{

        const item = a.find(item => item._idx===index)
        organizeItems.splice(item._idx, 0, item)
        
        index++
        
    })

  
    return organizeItems

}

module.exports = router