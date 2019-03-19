// On checkbox click in the color filter
$("#filters-container :checkbox").click(() => {
  // Define constants for length of checked checkboxes array
  const selectedColorLength = $('#filter-options-color :checkbox').filter(':checked').length;
  const selectedTypeLength = $('#filter-options-type :checkbox').filter(':checked').length;
  // Hide all items in the list
  $("#product-list li").hide();
  // If NO checkboxes are selected in color-filter AND type-filter
  if (selectedColorLength < 1 && selectedTypeLength < 1) {
    // Show entire product list
    $("#product-list li").fadeIn();

  // If checkboxes are selected in the color-filter ONLY
  } else if (selectedColorLength >= 1 && selectedTypeLength < 1) {
    // For each of the checked checkboxes in the color-filter
    $("#filter-options-color :checkbox:checked").each((index, element) => {
      // Show items with the class of the value of the checkbox
      $("." + $(element).val()).fadeIn();
	  });

  // If checkboxes are selected in the type-filter ONLY
  } else if (selectedColorLength < 1 && selectedTypeLength > 0) {
    // For each of the checked checkboxes in the type-filter
    $("#filter-options-type :checkbox:checked").each((index, element) => {
      // Show items with the class of the value of the checkbox
      $("." + $(element).val()).fadeIn();
	  });

  // If checkboxes are selected in color-filter AND type-filter
  } else {
    // For each of the checked checkboxes in the color-filter
    $("#filter-options-color :checkbox:checked").each((index, element) => {
      // Define matched color-filter class
      let colorClass = $(element).val();
      // For each of the checked checkboxes in the type-filter
      $("#filter-options-type :checkbox:checked").each((index, element) => {
        // Show items with the class of the value of the checkbox
        $("." + $(element).val() + "." + colorClass).fadeIn();
	    });
	  });
  }
});
