

export  class creatCards {

    static async resNews(postNew){
        const ul = document.querySelector(".main__noticias__ul")
       
        postNew.forEach(element => {
            // console.log(element)
           const criet = this.criarCards(element)
           ul.append(criet)
        });
    }

    static criarCards(array){  
          
        const tagLi     = document.createElement("li");

        const tagFigure = document.createElement("figure");
        const tagImg    = document.createElement("img");
        
        const tagDiv    = document.createElement("div");

        const tagh3     = document.createElement("h3");
        const tagP      = document.createElement("p");
        const tagSpan   = document.createElement("span");
        const tagEm    = document.createElement("em");

        //atribuindo class Css
        tagFigure.classList.add("noticias_ul__liFigure");
        tagDiv.classList.add("noticias__box_content");

        //passando os atributos;
        tagLi.id            = array.id;
        tagImg.src          = `${array.imagem}`;
        tagSpan.innerText   = array.categoria;  
        tagh3.innerText     = array.titulo;  
        tagP.innerText      = array.resumo; 
        tagEm.innerText    = array.fonte; 

        
        //Appends
        tagFigure.append(tagImg);
        tagDiv.append(tagSpan, tagh3, tagP, tagEm)
        tagLi.append(tagFigure, tagDiv)

        return tagLi
    }
}

/*
<li>
                    <figure class="noticias_ul__liFigure">
                        <img src="src/img/image.png" alt="">
                    </figure>

                    <div class="noticias__box_content">
                        <span>Nóticias</span>

                        <h3>
                            Silmara Souza é a nova CMO da Kenzie Academy Brasil
                        </h3>

                        <p>
                            A executiva acumula 15 anos de experiência em branding e comunicação digital
                        </p>

                        <em>Font: Metrópoles</em>
                    </div>
                </li>



*/ 