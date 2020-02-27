import { Component } from '@angular/core';
import vendors from '../assets/vendors';
import demo5 from '../assets/demo5';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',  '../assets/demo5.css']
})
export class AppComponent {
  title = 'web';
  ngOnInit(){
    vendors();
    demo5('#overlay');
  }
}
