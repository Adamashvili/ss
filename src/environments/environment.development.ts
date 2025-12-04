declare const process: any;

export const environment = {
  production: false,
  allProducts: process.env["https://restaurant.stepprojects.ge/api/Products/GetAll"] 
};

