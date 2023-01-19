import searchVerb from '../database/index.js'

const getVerb = () => {
    const getVerb =  searchVerb()
    return getVerb
}

export default getVerb
