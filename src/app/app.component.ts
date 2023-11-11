import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  clickmsg = '';
  indx = 0;
  msgs = ['hello','neeraj','nandita','anvi'];

  onClickMe = () => {
    let msg = this.msgs[this.indx++ % this.msgs.length];
    this.clickmsg = msg;
  }
}
