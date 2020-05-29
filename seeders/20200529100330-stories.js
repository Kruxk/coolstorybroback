"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "blabla1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloremque. Sint, quae. Laborum perferendis consequuntur velit explicabo non nesciunt error.",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 1,
        },
        {
          name: "blabla2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloremque. Sint, quae. Laborum perferendis consequuntur velit explicabo non nesciunt error.",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 1,
        },
        {
          name: "blabla3",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloremque. Sint, quae. Laborum perferendis consequuntur velit explicabo non nesciunt error.",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 2,
        },
        {
          name: "blabla4",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloremque. Sint, quae. Laborum perferendis consequuntur velit explicabo non nesciunt error.",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
