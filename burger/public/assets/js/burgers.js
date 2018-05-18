$(function() {
    $(".deleteBurger").on("click", (event) => {
      var id = $(this).data("burgerid");
      
      $.ajax("/burgers/" + id, {
        type: "DELETE"
      }).then( () => {
        console.log("deleted id " + id);
        location.reload();
       }
      })
    });
    
    $("#createBurger").on("click", (event) => {
      event.preventDefault();
      
      var newBurger = {
        burger: $("#createBurger [name=burger]").val().trim();
      }
      
      $.ajax("/burgers/" + id, {
        type: "POST",
        data: newBurger
      }).then( () => {
        console.log("created new burger");
        location.reload();
       }
      });
    });
    
    $("#updateBurger").on("click", (event) => {
      event.preventDefault();
      
      var id = $("[name=id]").val().trim();
      
      var updatedBurger = {
        burger: $("#updateBurger [name=burger]").val().trim();
      }
      
      $.ajax("/burgers/" + id, {
        type: "PUT",
        data: updatedBurger
      }).then( () => {
        console.log("updated id " + id);
        location.reload();
       }
      });
    });
    
   
  });

  