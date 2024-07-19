const mongoose = require("mongoose");
const app = require("./app");

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 3009;
const IP = '0.0.0.0'; // Escucha en todas las interfaces de red

mongoose
  .connect('mongodb+srv://anderson:anderson@cluster0.wh2v3jf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    // mongodb+srv://progra01:procasa%40progra01@procasadev.wxejimf.mongodb.net/    Progra01
    //'mongodb://localhost/procasa'
    //mongodb+srv://desjr:desjr@cluster0.qmiwvug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
        //mongodb+srv://desjr:desjr@interno.g3fzrlc.mongodb.net/?retryWrites=true&w=majority&appName=Interno


    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB ok!");
    app.listen(PORT,IP , () => {
      console.log('================================================== ' + PORT)
    })
  })
  .catch((error) => console.log(error));
