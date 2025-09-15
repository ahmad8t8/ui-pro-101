import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  handleError(error: any): void {
    console.error('App error:', error);

    // Example: map HTTP codes to user-friendly messages
    if (error.status === 401) {
      alert('Invalid username or password.');
    } else if (error.status === 403) {
      alert('You do not have permission to perform this action.');
    } else {
      alert('Something went wrong. Please try again.');
    }
  }
}
