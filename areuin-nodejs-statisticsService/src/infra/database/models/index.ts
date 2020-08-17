function toCamelCase(str: string): string {
  const _ = str.indexOf('_');
  if (~_) {
    return toCamelCase(
      str.substring(0, _) +
        str
          .substring(_ + 1)
          .substring(0, 1)
          .toUpperCase() +
        str.substring(_ + 2)
    );
  } else {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
}

const models: any = {};
let modelsLoaded = false;

const createModels = () => {
  if (modelsLoaded) return models;

  // Camel case the models
  toCamelCase(models);
  // Create the relationships for the models;

  modelsLoaded = true;

  return models;
};

export default createModels();
