/*getAllUsers(req, res): Maneja la solicitud para obtener una lista de usuarios y
devuelve una respuesta con esa información.
● getUserById(req, res): Busca un usuario específico basado en un parámetro
como el id que llega en la solicitud.
● createUser(req, res): Procesa los datos enviados en la solicitud para crear un
nuevo usuario.
● updateUser(req, res): Recibe datos actualizados y los aplica a un usuario
existente.
● deleteUser(req, res): Se encarga de eliminar un usuario específico */

export const getAllProducts = async (req, res) => {
  const { category } = req.query;
  if (category) {
    const productsByCategory = await Model.getproductsByCategory(category);
    return res.json(productsByCategory);
  }
  const products = await Model.getAllProducts();
  res.json(products);
};

export async function getProductByID(req, res) {}

export async function createProduct(req, res) {}

export async function updateProduct(req, res) {}

export async function deleteProduct(req, res) {}
