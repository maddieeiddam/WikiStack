const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: Sequelize.ENUM('open', 'closed')
});

const slugMaker = (str) => {
  return str.split(' ').join('_').replace(/[^0-9a-z_]/gi, '');
}

Page.beforeValidate((pageInstance, optionsObject) => {
  console.log('about to create a slug!');
  pageInstance.slug = slugMaker(pageInstance.title);
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = {
  db,
  Page,
  User
};
