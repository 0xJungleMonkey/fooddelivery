module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    let recipes = [
      {
        CategoryName: "Appetizers",
        name: "Sushi Sampler",
        img: "https://unsplash.com/photos/iy_MT2ifklc",
        description: "A selection of chef's choice sushi rolls and sashimi.",
        price: "$14.99",
      },
      {
        CategoryName: "Entrees",
        name: "Roasted Pork Rib",
        img: "https://unsplash.com/photos/UeYkqQh4PoI",
        description:
          "Savory and tender pork ribs slow-cooked to perfection and glazed with barbecue sauce.",
        price: "$18.99",
      },
      {
        CategoryName: "Entrees",
        name: "Grilled Ribeye Steak",
        img: "https://unsplash.com/photos/pe9dvM1rQkM",
        description:
          "A perfectly seasoned and grilled ribeye steak served with garlic mashed potatoes and seasonal vegetables.",
        price: "$24.99",
      },
    ];
    await db.collection("recipes").insertMany(recipes);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
