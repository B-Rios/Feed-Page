
![Cover](https://i.imgur.com/t0ryCfq.png)
# Feed Page

template de um feed masonry para aplicações baseadas na renderização de listas


## Autor

- [@Bruno Rivers](https://www.github.com/B-Rios)


## prints

![App Screenshot](https://i.imgur.com/zzhvbfv.png)


## Demo
[testar o projeto](https://raw.githack.com/b-rios/Feed-Page/master/index.html)


## Features

- Adiciona e Remove Cards
- Gera feed a partir de listas
- Responsivo

## desenvolvimento

Este modelo foi criado usando Vanilla JS por ser um protótipo do feed de uma aplicação. A ideia é dividida em 3 partes:
1. Criar o layout básico de como os cards vão aparecer na tela
1.1 O template masonry é feito usando flex-box do css para dividir a tela em 3:
```CSS
    column-count: 3;
    column-gap: 1rem;
    width: 100%;
```
2. Adicionar e remover os cards com o Javascript
2.1 Precisamos adicionar um evento e depois inserir uma nova tag através do DOM:
```Javascript
    //cria e depois adiciona um novo elemento na página
    const newDiv = document.createElement("div");
    contentBox.appendChild(newDiv);

    //remove a último card do feed
    remove.addEventListener("click", () => {
        contentBox.removeChild(contentBox.lastChild);
    });  
```
3. por último personalizar, adicionei tamanhos e cores aleatórios a cada card.
3.1 utilizei a API do loremflickr para gerar imagens aleatórias e criei um objeto com frases de personagens de Star Wars pq eu sou muito fã :grin: 
## Licensa

[MIT](https://choosealicense.com/licenses/mit/)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/B-Rios/)
[![twitter](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/br.rios_/)