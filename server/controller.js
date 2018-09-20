module.exports = {

  reg: (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body;

    db.create_user([username, password])
      .then( user => {
        req.session.user = user[0];
        res.status(200).send(user.username)
      })
      .catch( err => {
        res.status(500).send('Registration Error. Please Try again');
        console.log(err);
      })
  },

  login: (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body;
    
    db.login_user([ username, password ])
      .then(houseusers => {
        if ( houseusers[0] ) {
          if( houseusers[0].username === username && houseusers[0].password === password) {
            req.session.user.id = houseusers[0].id;
            res.status(200).send(req.session.user);
            console.log(res.data)
          } else {
              res.status(401).send('Incorrect information');
            }
          } else {
              res.sendStatus(401)
              console.log(res.data)
          }
      })
      .catch( err => {
        res.status(500).send('Try again');
        console.log(err);
      })
  },

  
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  create: (req, res) => {
    const db = req.app.get('db');
    const {userid} = req.session.user.id;
    const {name, 
      description, 
      address, 
      city, 
      state, 
      zip, 
      image, 
      loanAmount, 
      monthlyMortgage, 
      desiredRent, 
      recommendedRent} = req.body;

    db.create_property([userid, name, description, address, city, state, zip, image, loanAmount, monthlyMortgage, desiredRent, recommendedRent])
      .then( properties => {
        res.status(200).send(properties)
      })
      .catch( err => {
        res.status(500).send('error');
        console.log(err);
      })
  },


  read: (req, res) => {
    const db = req.app.get('db');

    db.get_properties([req.session.user.id])
      .then( properties => {
        res.status(200).send(properties)
      })
      .catch( err => {
        res.status(500).send('error');
        console.log(err);
      })
  },

  delete: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;

    db.delete_property([id, req.session.user.id])
      .then( properties => {
        res.status(200).send(properties)
      })
      .catch( err => {
        res.status(500).send('error');
        console.log(err);
      })
  }
}

