'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false,

      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "Airplanes",
          key: "id"
        }

      },
      departureAirportId: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
          model: "Airports",
          key: "code" // code is also a unique column from the table "Airports"
        }

      },
      arrivalAirportId: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
          model: "Airports",
          key: "code"
        }

      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull:false,

      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull:false,

      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,

      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull:false,

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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};