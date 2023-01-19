import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import getVerb from '../services/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const listVerb = []
const badVerbs = []
let contador = 1
const limit = 7

const getVerbs = async (req, res) => {

    let op = Math.random()
    op = op * 3

    if (contador === limit || contador === 0) {
        res.render( 'index',  {
            title: "-",
            verb: 'x',  
            verbPast: 'x',   
            verbParticiple: 'x',
            verbTraslade: 'x',
            contador, 
            limit,
            badVerbs
        })
        badVerbs.length = 0
        listVerb.length = 0
        contador = 1
    } else {
        switch (Math.floor(op)) {
            case 0:
                const verb = getVerb()
                res.render('index', {
                    title: "Verb",
                    verb: 'x',  
                    verbPast: verb.past,   
                    verbParticiple: verb.participle,
                    verbTraslade: verb.traslade,
                    contador, 
                    limit, 
                    badVerbs
                })
                listVerb.push(verb.verb)
                break;
            case 1:
                const verbPast = getVerb()
                res.render('index', { 
                    title: "Verb Past",
                    verb: verbPast.verb,  
                    verbPast: 'x',   
                    verbParticiple: verbPast.participle,
                    verbTraslade: verbPast.traslade,
                    contador, 
                    limit, 
                    badVerbs
                })
                listVerb.push(verbPast.past)
                break;
            case 2:
                const verbParticiple = getVerb()
                res.render('index', {
                    title: "Verb Participle",  
                    verb: verbParticiple.verb,  
                    verbPast: verbParticiple.past,   
                    verbParticiple: 'x',
                    verbTraslade: verbParticiple.traslade,
                    contador, 
                    limit, 
                    badVerbs
                })
                listVerb.push(verbParticiple.participle)
                break;
            default:
                res.render('error')
                break;
        }
    }

}

const guide = (req, res) => {
    res.render('guide')
}

const downloadList = (req, res) => {
    res.download( join(__dirname, '../public/pdf/irregular-verbs.pdf') )
}

const postVerb = (req, res) => {
    const data = req.body.verb

    if (!data) {
        res.render('error')
    }

    if (data.toLowerCase().trim() === listVerb[listVerb.length - 1]) {
        listVerb.length = 0
        contador++;
        res.redirect('/')
    } else {

        badVerbs.push(listVerb[listVerb.length - 1])
        
        listVerb.length = 0
        contador--;
        res.redirect('/')
    }

}


export default {getVerbs, guide, downloadList, postVerb}