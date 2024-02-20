



let blocks = document.querySelector('.blocks')

async function getImg() {
    try {
        let getImg = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
        let data = await getImg.json()
        data.forEach((el) => {
            let teg = document.createElement('div')
            teg.classList.add('imgs')
            
            let id = document.createElement('h2')
            let img = document.createElement('img')
            let p = document.createElement('p')
            
            id.textContent = `ID: ${el.id}`
            img.src = ` ${el.url} `
            p.textContent = `Описание: ${el.title} `
            
            teg.append(id,img,p)
            
            blocks.append(teg)
        })
        
    } catch (error) {
        console.log(error);
    }
    
}
getImg()