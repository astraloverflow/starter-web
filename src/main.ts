// importing cash.esm.js instead of cash.ts because
// of typescript errors from cash.ts
import $ from 'cash-dom/dist/cash.esm';

$('#example-toggle').on('click', () =>
  // Check if element with the id #example-toggle has the .is-active class
  $('#example-toggle').hasClass('font-bold')
    ? // if .font-bold is already present
      $('#example-toggle').removeClass('font-bold')
    : // else if .font-bold is NOT already present
      $('#example-toggle').addClass('font-bold')
);
