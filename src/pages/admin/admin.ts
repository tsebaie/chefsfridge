import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var firebase;
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  image

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  uploadImg(){
    
  }

  addRecipe(){
    firebase.database().ref('recipes/').push({
      category: "Meat Lover",
      sub_category: "Dinner",
      name: "Pan lasagne",
      image: this.image,
      ingredients: ['1 tbsp olive oil', '1 onion, finely sliced', '500g lean beef mince', '500g tomato and basil pasta sauce', 'large bunch basil, roughly chopped', '500g ricotta', '50g Parmesan, grated', '1 medium egg, beaten', '5 to 6 large lasagne sheets', '75g grated mozzarella'],
      directions: ['In a deep, ovenproof frying pan (about 23cm across the base), heat oil and fry onion and mince for 5 minutes until mince is brown and onion is soft. Stir in pasta sauce and half the fresh basil; simmer for 1 minute. Meanwhile, in a medium bowl, mix ricotta, Parmesan and egg, and some seasoning.', 'Scoop two-thirds of the mince mixture out of the pan into a bowl. Lay a single layer of lasagne sheets over the mince mixture in the pan (break sheets if needed). Spoon over one-third of ricotta mixture and a sprinkling of mozzarella. Repeat the layering twice more (using mince from bowl), finishing with ricotta on top and a sprinkling of grated mozzarella. Cover pan with a lid or baking tray, and simmer for 10 to 12 minutes. Preheat grill to high.', 'Once pasta is tender, put pan under grill for 3 to 5 minutes until golden. Sprinkle over remaining basil and some freshly ground pepper; serve.']
    })
  }

}
