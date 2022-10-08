"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert(
    //   "Collection",
    //   [
    //     {
    //       id: "b3eaf3fb-1918-4190-8df0-5cb4120ed285",
    //       collection_name: "Collection A",
    //     },
    //     {
    //       id: "c3f80e33-3446-40b9-bff3-a3164543db39",
    //       collection_name: "Collection B",
    //     },
    //     {
    //       id: "4b0d958a-f63f-47b7-8a35-a0f295bf95f1",
    //       collection_name: "Collection C",
    //     },
    //   ],
    //   {}
    // );

    await queryInterface.bulkInsert(
      "Card",
      [
        {
          id: "d03d7021-390d-4e6c-91cf-b8975b79a466",
          card_name: "Spongebob",
          price: "24000",
          img: "https://assets.stickpng.com/images/58bf1d11e443f41d77c734a5.png",
        },
        {
          id: "daa5dac9-f81d-463f-9c1b-212190e2b7a1",
          card_name: "Squidward",
          price: "32000",
          img: "https://toppng.com/public/uploads/thumbnail/squidward-nose-png-squidward-nose-now-its-art-11562870585rhulrpx5e4.png",
        },
        {
          id: "9d031968-7451-41e8-ba00-a2d4c3c62fea",
          card_name: "Patrick",
          price: "44000",
          img: "https://assets.stickpng.com/thumbs/5cb78e8d7ff3656569c8cebf.png",
        },
        {
          id: "30de51c2-7323-43e4-98b4-8614a16811f0",
          card_name: "Sandy",
          price: "65000",
          img: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/sandyc.png?11037498073554759253",
        },
        {
          id: "c01f602f-0778-4c22-a752-f90a2a78d43b",
          card_name: "Mr. Krab",
          price: "199000",
          img: "https://upload.wikimedia.org/wikipedia/pt/8/80/Mr._Krabs.png",
        },
        {
          id: "4e95c707-2755-4c2e-90e8-3a18cda59305",
          card_name: "Plankton",
          price: "28000",
          img: "https://mystickermania.com/cdn/stickers/spongebob/sticker_3234-512x512.png",
        },
        {
          id: "6d3960bb-d078-48c6-a325-7d98bb77b6d2",
          card_name: "Mrs. Puff",
          price: "19000",
          img: "https://archive.org/download/spongebob-mrs-puff-model-sheets-art/716-Mrs-Puff-prison.png",
        },
        {
          id: "1fd5ae95-de3f-4733-8d09-0e9b88c0a328",
          card_name: "Larry",
          price: "144000",
          img: "https://i.pinimg.com/736x/83/a6/63/83a66340fdf4ea63e79f571ad2d10715.jpg",
        },
        {
          id: "d0f4ffa4-2f33-42e7-b258-510ba5518d6e",
          card_name: "Pearl",
          price: "26000",
          img: "https://i.pinimg.com/originals/c8/39/a1/c839a18c788ddd83f58d5927fdc41065.png",
        },
        {
          id: "ae7c0549-415b-45c6-875a-181f58456fb9",
          card_name: "Kevin",
          price: "10000",
          img: "https://www.clipartmax.com/png/full/191-1915268_thomas-dafoe-studios-spongebob-squarepants-i-kevin-the-pickle-from-spongebob.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
