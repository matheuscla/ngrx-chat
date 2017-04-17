import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from '.../../../shared/model/thread';

@Injectable()
export class ThreadsService {

  constructor() { }

  loadUserThreads(): Observable<Thread> {

  }
}
