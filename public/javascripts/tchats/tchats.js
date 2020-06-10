window.addEventListener('DOMContentLoaded', () => {
        bindTchat();
})
        
        function bindTchat() {
          const elements = document.querySelectorAll('.btn-danger');
          const tchatContainer = document.querySelector('#tchat-list-container');
        
          elements.forEach( e => {
            e.addEventListener('click', ($event) => {
              const tchatId = $event.target.getAttribute('tchatid');
              axios.delete('/tchats/' + tchatId)
                   .then( function(response) {
                     tchatContainer.innerHTML = response.data;
                     bindTchat();
                   })
                   .catch( function(err) { console.log(err) } );
            })
          })
        }