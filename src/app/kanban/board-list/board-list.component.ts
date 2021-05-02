import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { from, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
//import { BoardDialogComponent } from '../dialogs/board-dialog.component';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { BoardComponent } from '../board/board.component'
//import { Mat }

@Component({
  selector: 'app-boards-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardsListComponent implements OnInit, OnDestroy {

  boards: Board[] = [];
  sub: Subscription = new Subscription;

  constructor(public boardService: BoardService, public dialog: MatDialog) {}

  ngOnInit() {
    this.sub = this.boardService
      .getUserBoards()
      .subscribe(boards => (this.boards = boards));
  }

  drop(e: any) {
    moveItemInArray(this.boards, e.previousIndex, e.currentIndex);
    this.boardService.sortBoards(this.boards);
  }

  // openBoardDialog(): void {
  //   const dialogRef = this.dialog.open(BoardDialogComponent, {
  //     width: '400px',
  //     data: {  }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.boardService.createBoard({
  //         title: result,
  //         priority: this.boards.length
  //       });
  //     }
  //   });
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}