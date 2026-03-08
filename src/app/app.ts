// Import Component decorator and signal function for reactive state management
import { Component, signal } from '@angular/core';
// Import RouterOutlet to display routed components
import { RouterOutlet } from '@angular/router';

// Define this class as an Angular component with metadata
@Component({
  // CSS selector used to embed this component in HTML (e.g., <app-root></app-root>)
  selector: 'app-root',
  // Array of components/directives this component can use
  imports: [RouterOutlet],
  // Path to the component's HTML template file
  templateUrl: './app.html',
  // Path to the component's CSS stylesheet
  styleUrl: './app.css'
})
export class App {
  // Create a reactive signal to store and track the app title
  // 'protected readonly' prevents external modification and hides from public API
  protected readonly title = signal('data-app');
}
