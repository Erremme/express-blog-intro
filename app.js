
const express = require('express');
const res = require('express/lib/response');
const { get } = require('express/lib/response');
const app = express();
const port = 3000;


app.use(express.static('public'))

const prodotti = [
  {
    titolo: "Ciambellone",
    descrizione: "Il ciambellone è un dolce tradizionale italiano, noto per la sua forma a ciambella, soffice e alta.",
    immagine: `http://localhost:${port}/images/ciambellone.jpeg`,
    ingredienti: ["farina", "zucchero", "uova", "latte", "olio", "lievito"]
  },
  {
    titolo: "Cracker alla barbabietola",
    descrizione: "I cracker alla barbabietola sono uno snack croccante    e salutare, perfetto per chi cerca un'alternativa ai classici cracker",
    immagine: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
    ingredienti: ["farina di barbabietola", "farina di grano", "olio d'oliva", "sale"]
  },
  {
    titolo: "Pane fritto dolce",
    descrizione: "Il pane fritto dolce è una delizia semplice e gustosa, perfetta per una colazione speciale o un dessert sfizioso",
    immagine: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`, 
    ingredienti: ["fette di pane raffermo","uova", "latte", "zucchero", "olio di frittura"]
  },
  {
    titolo: "Pasta alla barbabietola",
    descrizione: "La pasta alla barbabietola è un piatto colorato e saporito che unisce la dolcezza della barbabietola con la consistenza della pasta.",
    immagine: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,  
    ingredienti: ["pasta", "barbabietole cotte e frullate", "aglio", "olio d'oliva", "sale", "pepe",  "formaggio grattugiato"]
  },
  {
    titolo: "Torta paesana",
    contenuto: "La torta paesana, conosciuta anche come torta di pane o torta nera, è un dolce tradizionale della Lombardia, in particolare della Brianza",
    immagine: `http://localhost:${port}/images/torta_paesana.jpeg`,
    tags: ["pane raffermo", "latte", "cacao", "zucchero", "uova", "pinoli", "uvetta", "amaretti"]
  }
];




app.get('/', (req, res) => {
  res.send('Server del mio Blog!')
});

app.get('/bacheca', (req, res) =>{
   res.json({prodotti})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
