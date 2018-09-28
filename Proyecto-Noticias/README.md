# :pushpin: Projecte final: Pàgina web de notícies auto emplenable amb el scroll

## :arrow_right: ~~Para entregar he cambiado: Unos links que estaban mal.~~

## :pushpin: Abans de començar:
### Es recomana l'ús d'un quadern per fer un disseny i el seguiment del desenvolupament de l'aplicació.

![Llmm](../master/img/dibujo.jpg)

## :pushpin: Especificacions del client:
### :paperclip: La maquetació (layer design) ha de deixar 336px d'espai a la dreta de la pantalla per
### publicitat si la pantalla és suficientment ample. La resta del disseny és de lliure elecció.
### :paperclip: Per dispositius mòbils, la publicitat anirà fixada a la part inferior (sempre visible) o bé
### només es mostrarà a la part superior (i desapareixerà en fer scroll) amb un alt de 90px.
### :paperclip: Les dades per cada noticia son: title (entorn a 8 paraules), imgbig (és una url o relative path
### a la imatge emmagatzemada a /img), imgmid (igual que imgbig però enllaça una imatge de
### menor resolució), description(mínim de 300 caràcters), datetime (date i hora).
### :paperclip: Crear dues plantilles o tipus de pàgines html, la plantilla de veure tot o portada i la plantilla
### de veure una sola noticia.

#### :ok: Hecho:

####  :black_medium_square: La publicidad de 90px se queda en la parte de abajo, con un margen para el footer.
#### :black_medium_square:  Las 3 primeras noticias de noticias.html tienen un link a noticia1.html, noticia2.html
####  y noticia3.html en el que se puede ver la noticia ampliada(He cambiado los nombres para no utilizar títulos 
####  prederterminados o imprecisos, según la Guía SEO para principiantes).

## :pushpin: Tasques:

### :one: Realitza la maquetació o layer design del projecte. Entrega un breu document amb l'anàlisi 
### i la planificació al README.md (valen fotos d'esquemes del quadern). :ok:
### :two: Presenta news.html, la portada, amb 3 notícies (ja escrites al html). :ok:
### :three: Emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb
### js. :ok:
### :four: Codifica news.js en jQuery per fer: "botó carregar més notícies" i l'event "scroll bottom"
### que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues
### vegades 1.json, 2.json). :ok:
### :five: Inclou rss.xml (especificat al tema 7). :ok:
### :six: Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies
### (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan
### feim clic a la notícia 2 de news.html ens va a news2.html (no és necessari fer-ne més,
### aquesta tasca es pot automatitzar amb codi de servidor que es veurà a segon curs). :ok:
### :seven: La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de
### contenir una imatge i un vídeo de Youtube responsive. :ok:
### :eight: Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir a Facebook
### el títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina. :ok:
### :nine: El anuncio será un iframe con una galería de imágenes de varios anuncios. :ok:
### :keycap_ten: Añadir un spinner justo antes de cargar las noticias y después ocultarlo. :ok:
### (He puesto una imagen gif antes de que cargue la pagina principal con jquery.)

## :pushpin: Recursos:

### :information_source:  [Validador CSS:](https://jigsaw.w3.org/css-validator/validator)
### :information_source:  [Validador HTML:](https://validator.w3.org/#validate_by_input)
### :information_source:  [Identar HTML:](https://www.cleancss.com/html-beautify/)
### :information_source:  [Identar CSS:](https://www.cleancss.com/css-beautify/)
### :information_source:  [Validar Json:](https://jsonlint.com/)
### :information_source:  [Recorte de imágenes:](https://www.iloveimg.com/es/redimensionar-imagen)
### :information_source:  [Optimizar imágenes:](https://tinypng.com/)
### :information_source:  [Consultas:](https://www.w3schools.com/)

# :dog: [Proyecto noticias](https://rawgit.com/ramonaml/Proyecto-Noticias/master/las-mascotas-mas-ricas-y-famosas.html)
# :dog: [Proyecto noticias minify](https://rawgit.com/ramonaml/Proyecto-Noticias/master/las-mascotas-mas-ricas-y-famosas.html)
