const mongoose = require('../database');

const OrdersSchema = new mongoose.Schema([
  {
    user: {
      type: String,
      required: true
    },
    logradouro: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    bairro: {
      type: String,
      required: true
    },
    cep: {
      type: String,
      required: true
    },

    order: {
      orderDate: {
        type: Date,
        default: Date.now
      },
      totalCost: {
        type: String,
        required: true
      },
      observations: {
        type: String
      },
      items: [
        {
          image: {
            type: String,
            required: true
          },
          name: {
            type: String,
            required: true
          },
          size: {
            type: String,
            require: true
          }
        }
      ]
    }
  }
]);

const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders;
