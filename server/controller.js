module.exports = {

  reg: (req, res) => {
    const db = req.app.get('db');

  },

  login: (req, res) => {
    const db = req.app.get('db');

  },

  logout: (req, res) => {
    req.session.destroy();
    req.status(200).send(req.session);
  },

  create: (req, res) => {
    const db = req.app.get('db');

  },


  read: (req, res) => {
    const db = req.app.get('db');

  },

  delete: (req, res) => {
    const db = req.app.get('db');

  }
}