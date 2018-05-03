import { Component, OnInit } from '@angular/core';
import {JournalEntriesService} from '../journal-entries.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalEntriesService]

})
export class EntryListComponent implements OnInit {
  entries$:Observable<any>;
  entries:Array<any> = [];


  constructor(entryService: JournalEntriesService) { 
    this.entries$=entryService.getEntryList();
    entryService.getEntryList().subscribe( entries => this.entries = entries);
  }

  ngOnInit() {
  }

}
