document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById('order-dialog');
  const closeButton = document.getElementById('close-order-dialog');
  const orderForm = document.getElementById('order-form');
  const orderMessage = document.getElementById('form-message');
  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message-status');

  if (dialog) {
    document.querySelectorAll('.js-open-order').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
        } else {
          dialog.setAttribute('open', '');
        }
      });
    });

    if (closeButton) {
      closeButton.addEventListener('click', function () {
        dialog.close();
      });
    }

    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  if (orderForm && orderMessage) {
    orderForm.addEventListener('submit', function (event) {
      event.preventDefault();
      orderMessage.hidden = false;
      orderForm.reset();
    });
  }

  if (contactForm && contactMessage) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      contactMessage.hidden = false;
      contactForm.reset();
    });
  }
});
