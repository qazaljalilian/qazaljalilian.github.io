import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotifServiceService } from './notif-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'awesome';
  subscriptions: any;


 private readonly VAPID_PUBLIC_KEY = 'BJxLKs-EcVJpc1DedVAgYoCU0w81CBfASXCBB9hZgSjriF9z23VYPonv86x-7vqIckaUcOSqVT42RBfcG3bJp-Y'
    constructor(
        private swPush: SwPush,
        private notifSevice: NotifServiceService
     ) {}

ngOnInit() {

}

pushSubscription() {
 
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub =>{ 
      console.log(JSON.stringify(sub))
    this.notifSevice.addPushSubscriber(sub)}
    )
    .catch((err) => console.log(err)
    )

}


}