import db from '../database/index.js'

const getVerb = async () => {
    const getVerb = await db.searchVerb()
    return getVerb
}

const getVerbs = async () => {
    const getVerbs = await db.searchVerbs()
    return getVerbs
}

export default {getVerb, getVerbs}
