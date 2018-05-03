import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {JournalEntriesService} from '../journal-entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: any;
  

  constructor( private route: ActivatedRoute,
   
    private entryService: JournalEntriesService,
    ) { 
      
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.entryService.get(params.id).subscribe(entry => {
          this.entry = entry;
        })
      });
  }

}
