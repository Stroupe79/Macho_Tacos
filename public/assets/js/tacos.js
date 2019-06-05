// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-pickup").on("click", function(event) {
      var id = $(this).data("id");
      var pickup = $(this).data("pickedup");
  
      var newPickup = {
        gone: pickup
      };
  
      // Send the PUT request.
      $.ajax("/api/tacos/" + id, {
        type: "PUT",
        data: newPickup
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTaco = {
        name: $("#taco").val().trim(),
        veg: $("[name=veg]:checked").val(),
        shell: $("[name=shell]:checked").val(),
      };
      console.log(newTaco)
      // Send the POST request.
      $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
      }).then(
        function() {
          console.log("Taco Ordered");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delTaco").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
  
      // Send the DELETE request.
      $.ajax("/api/tacos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted Taco", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  