import { Component } from '@angular/core';
import { Container } from '../../../components/container/container';
import { Table } from '../../../components/table/table';
import { IClient } from '../../../interfaces/iclient';
import { IMetaDataColumn } from '../../../interfaces/imeta-data-column';
import { Paginator } from '../../../components/paginator/paginator';
import { environment } from '../../../../environments/environment.development';
import { KeypadButton } from '../../../components/keypad-button/keypad-button';
import { IKeypadButton } from '../../../interfaces/ikeypad-button';
import { MatColumnDef, MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-list-clients',
  imports: [Container,
    Table, Paginator, KeypadButton,
    MatColumnDef, MatTableModule, MatButtonModule,
    MatTooltipModule,
  MatIconModule],
  templateUrl: './list-clients.html',
  styleUrl: './list-clients.css'
})
export class ListClients {
  dataClient:IClient[] = [
    {id:'1',dni:'123',firstname:'Juan',lastname:'Flores',email:'jflores@123.com'},
    {id:'2',dni:'234',firstname:'Ana',lastname:'Vargas',email:'avargas@123.com'},
    {id:'3',dni:'345',firstname:'Carla',lastname:'Maldonado',email:'cmaldonado@123.com'},
    {id:'4',dni:'456',firstname:'Felipe',lastname:'Torres',email:'ftorres@123.com'},
    {id:'5',dni:'567',firstname:'Pedro',lastname:'Frias',email:'pfrias@123.com'},
    {id:'6',dni:'123',firstname:'Juan',lastname:'Flores',email:'jflores@123.com'},
    {id:'7',dni:'234',firstname:'Ana',lastname:'Vargas',email:'avargas@123.com'},
    {id:'8',dni:'345',firstname:'Carla',lastname:'Maldonado',email:'cmaldonado@123.com'},
    {id:'9',dni:'456',firstname:'Felipe',lastname:'Torres',email:'ftorres@123.com'},
    {id:'10',dni:'567',firstname:'Pedro',lastname:'Frias',email:'pfrias@123.com'},

  ]
  metaDataColumnsClient:IMetaDataColumn[] = [
    {field:'id', title:'ID'},
    {field:'dni', title:'CEDULA'},
    {field:'firstname', title:'NOMBRE'},
    {field:'lastname', title:'APELLIDO'},
    {field:'email', title:'CORREO ELECTRÓNICO'},
  ]
  records:IClient[] = []
  totalRecords:number
  keypadButtons:IKeypadButton[] = [
    {icon:'cloud_download',tooltip:'DESCARGAR',color:'accent', action:'DOWNLOAD'},
    {icon:'add',tooltip:'AGREGAR',color:'primary', action:'NEW'},
  ]

  constructor(){
    this.totalRecords = this.dataClient.length
    this.changePage(0)
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.records = this.dataClient.slice(skip,skip+pageSize)
  }

  openForm(){}

  delete(){}
}
