'use strict'
const User = use('App/Models/User');
const Perfil = use('App/Models/Perfil')

class AuthController {
  async register({request, auth, response}) {
    try {
      let {email, password, nombre, apellidop, apellidom} = request.all()
      let user = await User.create({
        email: email,
        password: password,
        name: nombre
      });

      let contacto = await Perfil.create({
        ap_paterno: apellidop,
        ap_materno: apellidom,
        user_id: user.id
      });
      let token = await auth.generate(user)
      Object.assign(user, token)
      let data = {
        user: user,
        perfil: contacto
      };
      return response.json(user)
    } catch (e) {
      console.log(e);
      return response.json(e)
    }
  }

  async login({request, auth, response}) {
    let {email, password} = request.all();
    try {
      if (await auth.withRefreshToken().attempt(email, password)) {
        let user = await User.findBy('email', email);
        let perfil = await user.perfil().fetch();
        let token = await auth.generate(user);
        Object.assign(user, token);
        //Object.assign(user, perfil);
        let data = {
          data: {
            user: user,
            perfil: perfil
          }
        };
        return response.status(200).json(data)
      }
    } catch (e) {
      console.log(e);
      return response.status(500).json({message: e})
    }
  }

}

module.exports = AuthController
