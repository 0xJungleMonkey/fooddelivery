module.exports = {
  async up(db, client) {
    let items = [
      {
        CategoryName: "Dessert",
        name: "Ice Cream",
        img:
          "https://drive.google.com/file/d/1CXLxSpVBPDZxCt6xtj8Wzr-wGL0tn-Xe/view?usp=drive_link",
        description: "Available in vanilla, strawberry, chocolate flavors.",
        price: "$4.99",
      },
      {
        CategoryName: "Dessert",
        name: "Cupcake",
        img:
          "https://drive.google.com/file/d/19McZrc6lpCb6V9FHf8_7I88AitZOASmN/view?usp=drive_link",
        description: "Chocolate flavored cupcake.",
        price: "$2.99",
      },
      {
        CategoryName: "Beverage",
        name: "Strawberry Cocktail",
        img:
          "https://drive.google.com/file/d/1oxcnQ3_7HD2yzLCG25g7w9AIPknzr_y_/view?usp=drive_link",
        description: "Refreshing cocktail made with fresh strawberries.",
        price: "$6.99",
      },
      {
        CategoryName: "Beverage",
        name: "Coconut Cocktail",
        img:
          "https://drive.google.com/file/d/186hruElBkT0L7cH9oMUvcb02iSYZawUR/view?usp=drive_link",
        description: "Tropical cocktail with coconut flavor.",
        price: "$7.99",
      },
      {
        CategoryName: "Appetizer",
        name: "Fried Shrimp",
        img:
          "https://drive.google.com/file/d/1kli6DVT6tGhgnDJTK2GJmnz13s-Ykx_6/view?usp=drive_link",
        description: "Crispy fried shrimp served with dipping sauce.",
        price: "$8.99",
      },
      {
        CategoryName: "Appetizer",
        name: "Sushi Combination",
        img:
          "https://drive.google.com/file/d/1WByqBPrIE2SN183eVFY3Z6Q-c3DhhRq5/view?usp=drive_link",
        description: "Assortment of fresh sushi varieties.",
        price: "$12.99",
      },
      {
        CategoryName: "Appetizer",
        name: "Oyster",
        img:
          "https://drive.google.com/file/d/1HpqtPTZr3StYmn4iFc34etEDdcwGdq6Y/view?usp=drive_link",
        description: "Fresh oysters served on the half shell.",
        price: "$10.99",
      },
      {
        CategoryName: "Appetizer",
        name: "Chicken Wings",
        img:
          "https://drive.google.com/file/d/1kh6I107Q_X5d5bWCKttjXXx4nztvC5pd/view?usp=drive_link",
        description: "Spicy or BBQ flavored chicken wings.",
        price: "$9.99",
      },
      {
        CategoryName: "Entree",
        name: "Cheese Burger",
        img:
          "https://drive.google.com/file/d/1sjTSCRQ7n_HI2SmljlGauATb_pLxucnW/view?usp=drive_link",
        description:
          "Juicy beef patty topped with cheese, lettuce, tomato, and mayo. Served with fries.",
        price: "$13.99",
      },
      {
        CategoryName: "Entree",
        name: "Shrimp Pasta",
        img:
          "https://drive.google.com/file/d/1zMdg8sdkdv-O0oHB5xACsRdZB0LzaIE7/view?usp=drive_link",
        description:
          "Creamy pasta dish with succulent shrimp and Alfredo sauce.",
        price: "$15.99",
      },
      {
        CategoryName: "Entree",
        name: "Pork Ribs",
        img: "",
        description:
          "Tender pork ribs slow-cooked and glazed with barbecue sauce.",
        price: "$18.99",
      },
      {
        CategoryName: "Entree",
        name: "Ribeye Steak",
        img:
          "https://drive.google.com/file/d/1h_I-F7ZHU3q0vFlK_vEy0ZemBqo51L_D/view?usp=drive_link",
        description:
          "Grilled ribeye steak seasoned to perfection, served with roasted vegetables.",
        price: "$22.99",
      },
      {
        CategoryName: "Entree",
        name: "Colorful Nigirizushi",
        img:
          "https://drive.google.com/file/d/19spmPjU3KmLViNyW6FUGzIxx5APnr5M_/view?usp=drive_link",
        description: "Nigiri sushi with a variety of colorful toppings.",
        price: "$16.99",
      },
      {
        CategoryName: "Entree",
        name: "California Roll",
        img:
          "https://drive.google.com/file/d/1wKVYfvHAwZcJWghhWy1lqALHfG2duXF8/view?usp=drive_link",
        description:
          "Sushi roll with crab, avocado, and cucumber, topped with tobiko.",
        price: "$14.99",
      },
    ];
    await db.collection("menu_items").insertMany(items);
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
