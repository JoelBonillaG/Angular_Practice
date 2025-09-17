import { Component, ContentChildren, Input, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable, MatTableModule } from '@angular/material/table';
import { IMetaDataColumn } from '../../interfaces/imeta-data-column';

@Component({
  selector: 'app-table',
  imports: [MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() data!:any
  @Input() metaDataColumns!:IMetaDataColumn[]
  columns:string[]=[]
  //Permite acceder a los elementos hijos proyectados en la plantilla
  @ContentChildren(MatColumnDef,{descendants:true}) columnsDef!:QueryList<MatColumnDef>
  @ViewChild(MatTable,{static:true}) table!:MatTable<any>

  ngOnChanges(changes:SimpleChanges){
    if(changes['metaDataColumns'])
    {
      this.columns=this.metaDataColumns.map((m) => m.field)
    }
  }
    //Permite ejecutar código después de que el contenido proyectado se haya inicializado
 ngAfterContentInit(){
    if(!this.columnsDef){return}
    this.columnsDef.forEach(columnDef => {
      this.columns.push(columnDef.name)
      this.table.addColumnDef(columnDef)
    })
  }
}
