function updateContent(button, content) {
    // Update the description text
    document.getElementById('descriptionText').innerHTML =`${content}`;

    // Remove "active" class from all buttons
    document.querySelectorAll('.accordion .btn_acc').forEach(btn => {
      btn.classList.remove('active', 'buttonActive');
      btn.classList.add('button_normal_accordian');
    });

    // Add "active" class to the clicked button
    button.classList.remove('button_normal_accordian');
    button.classList.add('active', 'buttonActive');
  }

  // Set default button style on load
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.accordion .btn_acc').classList.add('active', 'buttonActive');
  });