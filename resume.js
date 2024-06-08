// for contact to change to red color
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    const h4Elements = document.querySelectorAll('.footer-section h4');

    footer.addEventListener('mouseover', () => {
      h4Elements.forEach(h4 => h4.style.color = 'red');
    });
  
    footer.addEventListener('mouseout', () => {
      h4Elements.forEach(h4 => h4.style.color = '#ccc');
    });
  });

  // JavaScript to handle hover effect for h1 with id abtmehead when hovering over div with id rbox
document.addEventListener('DOMContentLoaded', function() {
    // Select the div and h1 elements
    const rbox = document.getElementById('rbox');
    const abtMeHead = document.getElementById('abtmehead');
  
    // Add event listener for mouseover to change the h1 color to red
    rbox.addEventListener('mouseover', () => {
      abtMeHead.style.color = 'red';
    });
  
    // Add event listener for mouseout to revert the h1 color to original
    rbox.addEventListener('mouseout', () => {
      abtMeHead.style.color = '#ccc'; // Revert to the default or inherited color
    });
  });