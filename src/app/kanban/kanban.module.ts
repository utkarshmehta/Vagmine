import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
//import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    FormsModule,
    MatButtonToggleModule,
    DragDropModule,
    MatDialogModule
  ]
})
export class KanbanModule { }
