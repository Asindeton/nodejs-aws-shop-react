const BASE_PATH =
  "https://bxap70ethc.execute-api.eu-west-1.amazonaws.com/prod/";

const IMPORT_PATH =
  "https://owxgrms5fl.execute-api.eu-west-1.amazonaws.com/prod/";

const CART_PATH =
  "http://asindeton-cart-api-2-dev.eu-west-1.elasticbeanstalk.com/api";

const API_PATHS = {
  product: BASE_PATH + "products",
  order: CART_PATH,
  import: IMPORT_PATH + "import",
  bff: BASE_PATH + "products",
  cart: CART_PATH,
};

export default API_PATHS;
