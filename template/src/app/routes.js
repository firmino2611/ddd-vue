import userRoutes from './user/routes'
import taskRoutes from './task/routes'
import DashRoutes from './dashboard/routes'

let routes = userRoutes
// insere um novo grupo de rotas
routes = routes.concat(DashRoutes)
routes = routes.concat(taskRoutes)
// routes = routes.concat(anotherRoutes)

// expõe os grupos de rotas 
export default routes
