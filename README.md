<p align="center">
  <a href="https://www.usagibakery.com/">
    <img alt="UsagiBakery" src="./src/images/logo.png" width="200" />
  </a>
</p>
<h1 align="center">
  UsagiBakery
</h1>

A fully functional ecommerce and blog website, created for a small local bakery in Las Vegas, NV. Built with Gatsby for static site security and performance. Featuring a Sanity headless CMS for blogging and Stripe client-side checkout integration for product management and secure Stripe hosted payment processing.

## Highlights

### Content

Sanity Headless CMS

- Project features a custom schema Sanity headless CMS to handle blogging functionality
- View [Sanity.io](https://www.sanity.io/) for more information on their headless CMS

### Products & Payments

Stripe

- Products and their respective pages are fully integrated and dynamically built. New and existing items are managed via the Stripe dashboard and updated in real-time
- Client-side checkout experience handles the final payment flow, allowing for a secure, Stripe hosted, checkout experience
- View the [Stripe Checkout](https://stripe.com/docs/payments/checkout) docs for more information

### Custom React Hooks Cart

This project uses a custom created shopping cart built with React Hooks. Logic overview:

- useState: Stores the shopping cart state for newly added and exisiting items
- useReducer: Used to update state, handling adding/removing of items, increasing/decreasing item count, and math functionality for cost total/subtotals
- useContext: Provides state context to entire application, ensuring shopping cart state is fully accessible and interactable throughout entire site
- More on [React Hooks](https://reactjs.org/docs/hooks-reference.html) here
