// importing cash.esm.js instead of cash.ts because
// of typescript errors from cash.ts
import $ from 'cash-dom/dist/cash.esm';

$('#navbar-toggle').on('click', () =>
  // Check if element with the id #navbar-menu has the .is-active class
  $('#navbar-menu').hasClass('is-active')
    ? // if .is-active is already present
      $('#navbar-menu').removeClass('is-active')
    : // if .is-active is NOT already present
      $('#navbar-menu').addClass('is-active')
);
