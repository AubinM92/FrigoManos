import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService : MessageService, private http: HttpClient, private dialog: MatDialog,public dialogRef: MatDialogRef<MessageComponent>) { }
message;
  ngOnInit() {
  }

}
