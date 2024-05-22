import { Component, Inject, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LugarService } from '../../lugar/lugar.service';
import { LugarDetail } from '../../lugar/lugar-detail';
import { ViviendaService } from '../vivienda.service';
import { ViviendaDetail } from '../vivienda-detail';

declare const google: {
  maps: {
    InfoWindow: any;
    Map: new (arg0: HTMLElement | null, arg1: { center: { lat: number; lng: number; }; zoom: number; }) => any;
    Marker: new (arg0: { position: { lat: number; lng: number; }; map: any; title: string; }) => any;
  };
};

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'] 
})
export class MapaComponent implements OnInit {
 
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
    private lugarService: LugarService,
    private viviendaService: ViviendaService
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
    
  
    
    this.viviendaService.getViviendas().subscribe((viviendas: ViviendaDetail[]) => {
      viviendas.forEach(vivienda => {
        const marker = new google.maps.Marker({
          position: { lat: vivienda.coordX, lng: vivienda.coordY },
          map: map,
          title: vivienda.nombre, 
        });
  
        
        const infoWindow = new google.maps.InfoWindow({
          content: vivienda.nombre
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
