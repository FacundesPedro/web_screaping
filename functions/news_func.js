const db = require('../db')

module.exports = {
    async create_news(titled,at){
        const title = titled
        const posted_at = at
        try{
            await db('news').insert({title,posted_at})
        }catch(e){
            console.log('Noticia provavelmente já exista, procure a equipe de TI e seja o que deus quiser ( ͡° ͜ʖ ͡°)')
        }    
    },
    async index_news(){
        const news = await db('news').select('*')
        return news
    },

}