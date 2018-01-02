import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
    <div class="container-fluid p-0">
      <div class="feature-section p-lg-5">
        <h2>Whoops! The requested page was not found!</h2>
      </div>
    </div>
    `
})

export class NotFoundComponent {}