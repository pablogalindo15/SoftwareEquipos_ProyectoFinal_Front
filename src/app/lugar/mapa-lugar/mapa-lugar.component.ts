import { Component, Inject, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LugarService } from '../lugar.service';
import { LugarDetail } from '../lugar-detail';


declare const google: {
  maps: {
    InfoWindow: any;
    Map: new (arg0: HTMLElement | null, arg1: { center: { lat: number; lng: number; }; zoom: number; }) => any;
    Marker: new (arg0: { position: { lat: number; lng: number; }; map: any; title: string; }) => any;
  };
};

@Component({
  selector: 'app-mapa-lugar',
  templateUrl: './mapa-lugar.component.html',
  styleUrls: ['./mapa-lugar.component.css'] 
})
export class MapaComponentLugar implements OnInit {
 
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
    private lugarService: LugarService,
   
  ) { }

  ngOnInit() {
    const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCiSyKOt9AmUZuzb34dC_COr-EnpTW3ofA';
    this.loadScript(url).then(() => {
      this.loadMap();
    });
  }

  private loadMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 4.60971, lng: -74.08175 }, // Coordenadas de Bogotá
    zoom: 12,
    });

    this.addMarkers(map);
  }

  private addMarkers(map: any) {
    
    this.lugarService.getLugares().subscribe((lugares: LugarDetail[]) => {
      lugares.forEach(lugar => {
        const marker = new google.maps.Marker({
          position: { lat: lugar.coordenadaX, lng: lugar.coordenadaY },
          map: map,
          title: lugar.nombre 
        });
  
        
        const infoWindow = new google.maps.InfoWindow({
          content: lugar.nombre
        });
  
       
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    });
  
  }
  

  private loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const script = this.renderer2.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer2.appendChild(this.document.head, script);
    });
  }
}
