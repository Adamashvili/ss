declare const process: any;

export const environment = {
  production: true,
  allProducts: process.env["https://restaurant.stepprojects.ge/api/Products/GetAll"] 
};

