// import other routes
const userRoutes = require('./user.js');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    app.get('/xxx', (req, res) => {


       res.send(JSON.parse({
          a: 1, 
          b: 2,
          c: 3
       }));

  });
    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;