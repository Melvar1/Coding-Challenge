$(document).ready(function() {
// Box changing functionality
  function changeBoxColors(boxId) {
    const box = $(`#${boxId}`);
    const randomColor = getRandomColor();
    box.css('background-color', randomColor);
    box.css('border-color', getRandomColor());
  }
 //Random color function
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $('#changeBox1').click(function() {
    changeBoxColors('box1');
  });

  $('#changeBox2').click(function() {
    changeBoxColors('box2');
  });

  $('#changeBox3').click(function() {
    changeBoxColors('box3');
  });

  $('#changeAll').click(function() {
    changeBoxColors('box1');
    changeBoxColors('box2');
    changeBoxColors('box3');
  });

  // Box hiding functionality
  $('.hide-button').click(function() {
    const hideButtonId = this.id; // Get the ID of the hide button clicked
    const boxId = hideButtonId.replace('hide', '').toLowerCase(); // Convert to lowercase
    console.log('Button clicked:', hideButtonId);
    console.log('Box ID to hide:', boxId);

    $(`#${boxId}`).css('display', 'none');
    $(`#${boxId}`).data('hidden', true); // Set the data attribute to indicate hidden
  });
  
  //Hide All button function
  $('#hideAll').click(function() {
    $('.box').css('visibility', 'hidden');
  });
  //Show All button function
  $('#showAll').click(function() {
    console.log('Show All button clicked.');
    $('.box').each(function() {
      const isHidden = $(this).data('hidden'); // Check if the box is hidden
      if (isHidden) {
        $(this).css('display', 'block');
        $(this).data('hidden', false); // Reset the data attribute
      }
    });
  });

  
  // Reset colors and show all
  $('#resetColors').click(function() {
    $('#box1').css('background-color', 'red');
    $('#box1').css('border-color', 'black');
    $('#box2').css('background-color', 'blue');
    $('#box2').css('border-color', 'yellow');
    $('#box3').css('background-color', 'green');
    $('#box3').css('border-color', 'pink');
  });
  
  $('#showAll').click(function() {
    console.log('Show All button clicked.');
    $('.box').css('visibility', 'visible');
  });
});
