document.addEventListener('DOMContentLoaded', function() {
    var radioButtons = document.querySelectorAll('input[type="radio"][name="color"]');
    var boxes = document.querySelectorAll('.box');

    radioButtons.forEach(function(radio) {
        radio.addEventListener('click', function() {
            var clickedBox = this.closest('.box');
            
            // Reset all boxes to default view //
            boxes.forEach(function(box) {
                box.style.backgroundColor = '';
                box.style.borderColor = '';
                box.querySelector('.content').style.display = 'none';
                box.querySelector('input[type="radio"]').style.backgroundColor = '';
                box.querySelector('input[type="radio"]').style.position = ''; // Reset radio button position
            });

            // Set the selected box to active view //
            clickedBox.style.backgroundColor = '#98FB98';
            clickedBox.style.borderColor = 'darkgreen';
            clickedBox.querySelector('.content').style.display = 'block';
            this.style.backgroundColor = '#98FB98'; 
            
            // Move the clicked radio button to a specific position //
            this.style.position = 'relative';
            this.style.top = '-50px'; 
            this.style.left = '5px'; 
        });
    });
});
