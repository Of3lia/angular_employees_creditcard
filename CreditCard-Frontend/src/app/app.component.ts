import { Component } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CreditCardApp';

  
  constructor(
    //private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    // *** TOASTS EXAMPLES: ***
    //this.toastr.success('Hello world!', 'Toastr fun!');

    //     // Display a warning toast, with no title
    // this.toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
    
    // // Display a success toast, with a title
    // this.toastr.success('Have fun storming the castle!', 'Miracle Max Says');
    
    // // Display an error toast, with a title
    // this.toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
    
    // // Immediately remove current toasts without using animation
    // //this.toastr.remove()
    
    // // Remove current toasts using animation
    // this.toastr.clear();
    
    // // Override global options
    // this.toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000});
  }
}
