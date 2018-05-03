/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JournalEntriesService } from './journal-entries.service';

describe('Service: JournalEntries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalEntriesService]
    });
  });

  it('should ...', inject([JournalEntriesService], (service: JournalEntriesService) => {
    expect(service).toBeTruthy();
  }));
});
