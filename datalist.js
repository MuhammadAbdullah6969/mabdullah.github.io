const input = document.getElementById('exampleDataList');
const options = document.querySelectorAll('.datalist-option');
const searchIcon = document.getElementById('ico');

function redirectToPage() {
  // Get the selected value
  const selectedValue = input.value;

  // Perform your desired action based on the selected value
  options.forEach(function (option) {
    if (option.value === selectedValue) {
      // Action for the selected option
      console.log('Selected option:', option.value);
      // Perform a redirect based on the selected option
      if (selectedValue === 'Hair Straightener brush') {
        window.location.href = 'brush.html';
      } else if (selectedValue === 'Baby swing for kids') {
        window.location.href = 'babyswing.html';
      } else if (selectedValue === 'Hair dryer') {
        window.location.href = 'hairdryer.html';
      }
      else if (selectedValue === 'Hanging swing for kids') {
        window.location.href = 'hangingswing.html';
      }
      else if (selectedValue === 'LCD WRITING TABLET FOR KIDSHanging swing for kids') {
        window.location.href = 'lcd.html';
      }
      else if (selectedValue === 'ELECTRIC EMS BODY MASSAGE') {
        window.location.href = 'massage.html';
      }
      
      // Add more options and corresponding page redirects as needed
    }
  });
}

function handleInputKeypress(event) {
  // Check if Enter key (key code 13) was pressed
  if (event.keyCode === 13) {
    redirectToPage();
  }
}

function handleSearchClick() {
  redirectToPage();
}

input.addEventListener('input', function () {
  // Handle input changes
});

input.addEventListener('keypress', handleInputKeypress);
searchIcon.addEventListener('click', handleSearchClick);