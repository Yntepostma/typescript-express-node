import express, {Request, Response, NextFunction} from 'express'
import todoRoutes from './routes/todos'

const app = express()
app.use(express.json());
app.use('/todos', todoRoutes)


app.use((err: Error, req:Request, res: Response, next: NextFunction)=> {
    res.status(500).json({message: err.message})

})

const PORT = 3005

app.listen(PORT, ()=> console.log(`listening on PORT ${PORT} )`))