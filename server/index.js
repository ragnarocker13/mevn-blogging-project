// run with npm run dev

const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express();

// Declare our Express object to use Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// will run this on port 5000
const port = process.env.PORT || 5000;
// execute message on what port will it run
app.listen(port, () => console.log(`Server started on port ${port}`));