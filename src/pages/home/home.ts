import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { RegisterPage } from '../register/register'
import { Home2Page } from '../home2/home2';
import { Member } from '../register/member';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
	posts:any={};
  data:any={};
	@ViewChild('username') username;
  @ViewChild('password') password;
  loginUrl:string='http://localhost/planificador-backend/public/member/login';
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8;'});
  


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http, private storage:Storage) 
  {

  }

  Login()
  {

    var datos =
    {
      username:this.username.value,
      password:this.password.value
    }

    this.LoginMember(datos);
    /*this.http.post('http://localhost/planificador/login.php', datos).subscribe
    (data =>
        {
          this.data.response = data["_body"];

          if(data["_body"] == '404')
          {

            let alert = this.alertCtrl.create
            ({
                  title: 'Usario no existe o es incorrecto',
                  subTitle: 'El nombre de usuario no existe regristrese o verifique sus datos',
                  buttons: ['OK']
              });

              alert.present();
          }
          else
          {
            let alert = this.alertCtrl.create
            ({
                  title: 'Login Exitoso',
                  subTitle: 'El nombre de usuario no existe regristrese o verifique sus datos',
                  buttons: ['OK']
              });

            alert.present();
            var ServerJson = JSON.parse(data["_body"]);
            var json =
            {
              id: ServerJson['id_miembro'],
              username: ServerJson['nom_usuario'],
              email:ServerJson['email']
            }
            this.navCtrl.setRoot(Home2Page, json);

          }
          

        },
        error => 
        {
            let alert = this.alertCtrl.create
            ({
                  title: 'Error',
                  subTitle: error,
                  buttons: ['OK']
              });

            alert.present();

        }

      );*/
  }

  LoginMember(member:any)
  {
    return this.http
    .post(this.loginUrl, JSON.stringify(member), {headers: this.headers})
    .toPromise()
    .then(res => this.Handle(res))
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> 
  {
	console.error('An error occurred', error); 
	return Promise.reject(error.message || error);
  }


  Handle(res:any)
  {
    if(res.status===200)
    {
        this.storage.set('member', res.json());
        this.navCtrl.setRoot(Home2Page);
    }
    else if(res.status===210)
    {
      let alert = this.alertCtrl.create
      ({
        title: 'Error',
        subTitle:res.json()['error'],
        buttons: ['Ok']
      });
      alert.present();
    }
    /*else if(res.status===209)
    {
      let alert = this.alertCtrl.create
      ({
        title: 'Error',
        subTitle: 'El nombre de usuario, correo o teléfono que has ingresado, ya están ocupados, por favor ingresa los datos nuevamente.',
        buttons: ['Ok']
      });
      alert.present();
    }*/
  }
  GoToRegister()
  {
     this.navCtrl.push(RegisterPage);
  }
}
