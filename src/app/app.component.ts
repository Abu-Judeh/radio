import { Component } from '@angular/core';
import citeis from './files/citeis.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'radioStation';
  citeisList:{name:string,radio:string[]}[]=citeis;
  radios=[
    {name:"Hebron",radioList:
      [
        {rName:"hrFM", src:"http://rs.hadara.ps:8000/;stream.mp33&amp;13202692901&amp;duration=99999&amp;id=scplayer&amp;autostart=true"},
        {rName:"hebronFm" ,src:"http://alhaneny.com:8056/;stream.mp3&amp;13202692901&amp;duration=99999&amp;id=scplayer&amp;autostart=true"},
        {rName:"oneFM",src:"http://alhaneny.net:9990"}
      ]
     },

    {name:"Jenin",radioList:
    [
      {rName:"al-Balad", src:"http://live.masterweb-ps.com:8006/;mp3"},
      {rName:"zain" ,src:"http://zain.callu.ps:8000/live.ogg"}
    ]},
    {name:"Ram-Allah",radioList:
    [
      {rName:"Ajial", src:"http://streamer.mada.ps:8008/AJYAL"},
      {rName:"Amwaj" ,src:"http://live.amwajfm.ps:8000/live"}
    ]},
    {name:"Nablus",radioList:
    [
      {rName:"quran", src:"http://www.quran-radio.org:8002/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true"},{rName:"shababFm" ,src:"https://streaming.zaytonatube.com/test2.aac"}
    ]}
  
  ];
 
  


}
