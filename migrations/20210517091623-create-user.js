'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  await queryInterface.createTable('Channel', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    usee_id:{
      type: Sequelize.INTEGER,
      allowNull:false,
      reference:{
        model:'Users',
        key:'id'
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull:false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
  await queryInterface.createTable('Video', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull:false
    },
    usee_id:{
      type: Sequelize.INTEGER,
      allowNull:false,
      reference:{
        model:'Channel',
        key:'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTable();
  }
};