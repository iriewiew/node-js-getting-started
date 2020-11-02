const app = require('express')
// const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const Multer = require('multer');
const cors = require('cors');
// app()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
});


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
}))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`)
})