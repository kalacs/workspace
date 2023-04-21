import { Component } from '@angular/core';

@Component({
  selector: 'kalacsorg-account-entry',
  template: `
      <main>
      <h1>My Account</h1>
      <div class="account-info">
        <h2>Account Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone:</strong> (555) 555-5555</p>
        <p><strong>Address:</strong> 123 Main St, Anytown USA</p>
      </div>
      <div class="subscription-info">
        <h2>Subscription Information</h2>
        <p><strong>Plan:</strong> Premium</p>
        <p><strong>Price:</strong> $9.99/month</p>
        <p><strong>Next Billing Date:</strong> May 1, 2023</p>
        <p><a href="#">Change Plan</a></p>
      </div>
    </main>
  `,
})
export class RemoteEntryComponent {}
