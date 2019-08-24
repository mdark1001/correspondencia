const Home = () => import('@/components/seguimiento_documentos/seguimiento_inicio')

const Login = () => import('@/components/pages/login')
const Register = () => import('@/components/pages/register')
const TableroUsuario = () => import('@/components/usuarios/tablero')
const EditarUsuario = () => import('@/components/usuarios/usuario_detalle')
const TableroDocumentos = () => import('@/components/documentos/tablero')
// const TipoDeDocumentos = () => import('@/components/documentos/tipo_documentos')
const DetalleTipoDodumento = () => import('@/components/documentos/tipo_documento_detalle')
const ChatMessage = () => import('@/components/messages/chat')
export default {
  items: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: []
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Registro',
      component: Register
    },
    {
      path: '/documento',
      name: 'Documentos',
      component: TableroDocumentos,
      children: []
    },
    {
      path: '/documentos/tipos',
      name: 'Tipo de documentos',
      component: TableroDocumentos
    },
    {
      path: '/crear-tipo-documento/:id',
      name: 'CrearDocumento',
      component: DetalleTipoDodumento
    },

    {
      path: '/usuarios',
      name: 'Tablero de usuarios',
      component: TableroUsuario
    },
    {
      path: '/usuarios-edit/:id',
      name: 'EditarUsuarios',
      component: EditarUsuario
    },
    {
      path: '/mensajes',
      name: 'ChatMessage',
      component: ChatMessage
    }

  ]

}
