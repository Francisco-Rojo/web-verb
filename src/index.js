import express  from "express";
import morgan from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

import router from './routes/index.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(join(__dirname, 'public')))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const PORT = process.env.PORT || 3000

app.use('/', router)

app.use((req, res, next) => {
    // res.status(404).send('404 not found'); // archive or page not found
    res.status(404).render('notFound')
});


app.listen(PORT, () => {console.log(`Server listening on PORT ${PORT}`);})