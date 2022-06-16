
function authenticator()  {
    var email = document.getElementById('inputEmail').value;
    var pass  = document.getElementById('inputPass').value;

    if(email == "" && pass == ""){
      return Swal.fire({  
        title: 'Os campos não pode estar vazio ao realizar autenticação',  
        icon: 'error',
        confirmButtonText: `Ok`,  
      }).then((result) => {  
        /* Read more about isConfirmed, isDenied below */  
          if (result.isConfirmed) {    
            return;
          }
      });
    }

    if(email == ""){
      return Swal.fire({  
        title: 'O e-mail não pode ser vazio por favor verifique!',  
        icon: 'error',
        confirmButtonText: `Ok`,  
      }).then((result) => {  
        /* Read more about isConfirmed, isDenied below */  
          if (result.isConfirmed) {    
            return;
          }
      });
    }

    if(pass == ""){
      return Swal.fire({  
        title: 'A senha não pode ser vazia por favor verifique!',  
        icon: 'error',
        confirmButtonText: `Ok`,  
      }).then((result) => {  
        /* Read more about isConfirmed, isDenied below */  
          if (result.isConfirmed) {    
            return;
          }
      });
    }


   return Swal.fire({  
      icon: 'success',
      title: 'Autenticado com sucesso! Redirecionando para home',  
    }).then((result) => {  
      /* Read more about isConfirmed, isDenied below */  
        if (result.isConfirmed) {    
        return window.location.href = "https://www.devmedia.com.br/javascript-redirect-redirecionando-o-usuario-com-window-location/39809";
        } 
    });
}