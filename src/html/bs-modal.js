var lastModal = "";

function openModal(divId) {
  lastModal = divId;
        document.getElementById("backdrop").style.display = "block"
        document.getElementById(divId).style.display = "block"
        document.getElementById(divId).className += "show"
    }
    function closeModal() {
      if ( lastModal.length == 0) return;
        document.getElementById("backdrop").style.display = "none"
        document.getElementById(lastModal).style.display = "none"
        document.getElementById(lastModal).className += document.getElementById("exampleModal").className.replace("show", "")
        lastModal = "";
    }
    // Get the modal
    var modal = document.getElementById('exampleModal');
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal()
      }
    }
