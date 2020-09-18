const axios = require('axios')
const cheerio = require('cheerio')
const news_func = require('./functions/news_func')

const getHTML = async()=>{
    const results = await axios({
        url: 'https://www.gcway.co/',
        method: 'get',
    }).catch(err => console.log(err))
        
        if(results.status == 200) return results.data
        else{
            return `Status: ${results.status}`
        }
}
const index_news = async () =>{
    const array_news = await news_func.index_news()
    console.log(array_news)
}
const getNews = async () =>{
    console.log('Loading HTML...')

    const HTML = await getHTML().then(console.log('HTML Carregado!!'))
    
    const $ = cheerio.load(HTML)
    
    //podia usar children
    //Get all_category news and insert on db!
    await $('#news-all > article .body').each((index,element)=>{
       const title = $(element).find('.title').text()
       const posted_at = $(element).find('.post-date > strong > em').text()
       
       news_func.create_news(title,posted_at)
    })

    index_news()
}

getNews()




