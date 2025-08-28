import "./database/index.js";

import Customer from "./app/models/Customer.js";

class Playground {
  static async play() {
    // findAll
    // findOne
    // FindByPk
    const customers = await Customer.findAll({
      attributes: { exclude: ["status"] },
      where: {
        status: "ACTIVE",
      },
    });

    console.log(JSON.stringify(customers, null, 2));
  }
}

Playground.play();
