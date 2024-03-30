
 const options = [
    'Lebron James',
    'Dremound Green',
    'Michael Jordan',
    'Stephen Curry',
    'Kyrie Irving',
    'James Harden',
    'Kobe Bryant'

];



for (let i = 0; i < 5; i++) { 
    accessibleAutocomplete({
        element: document.querySelector(`#autocomplete-container${i}`),
        id: 'autocomplete-input',
        source: options,
        onConfirm: function (result) {
            console.log('Selected value:', result);
        }
    });
  }








