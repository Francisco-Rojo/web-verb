import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from "fs"

const __dirname = dirname(fileURLToPath(import.meta.url))

const searchVerb = () => {
    let numVerb = Math.random();
    let data =  fs.readFileSync(join(__dirname, 'irregularVerbs.json'));
    let verbs = JSON.parse(data);
    numVerb = numVerb * verbs.length;
    
    return verbs[Math.floor(numVerb)];
}

const searchVerbs = () => {
    const data = fs.readFileSync(join(__dirname, 'irregularVerbs.json'));
    const obj = JSON.parse(data)
    
    return obj
}

export default {searchVerb, searchVerbs}

