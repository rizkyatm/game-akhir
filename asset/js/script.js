
function submitDataLog(){ 
    var data = { 
      name: $("#name").val(), 
      username: $("#usernamelog").val(), 
      password: $("#passwordlog").val(), 
      action: $("#actionlog").val(), 
    }; 
    if(data.username == '' && data.password == ''){
      Swal.fire ({ 
        icon : 'error', 
        title : 'Oops...', 
        text: 'Username & Password harus di isi', 
        timer : 1000, 
        showCancelButton: false, 
      showConfirmButton: false 
      }) 
    }else if(data.username  && data.password == ''){
      Swal.fire ({ 
        icon : 'error', 
        title : 'Oops...', 
        text: 'Password harus di isi', 
        timer : 1000, 
        showCancelButton: false, 
      showConfirmButton: false 
      }) 

    }else if(data.username == '' && data.password){
      Swal.fire ({ 
        icon : 'error', 
        title : 'Oops...', 
        text: 'username harus di isi', 
        timer : 1000, 
        showCancelButton: false, 
      showConfirmButton: false 
      }) 

    }
    else{
      var nama = document.getElementById('username').value ;
      $(document).ready(function(){ 
 
      $.ajax({ 
        url: 'function.php', 
        type: 'post', 
        data: data, 
        success:function(response){ 
          console.log(response)
          var nama2 = document.getElementById('usernamelog').value ;
          if(response == "Login Successful"){ 
            Swal.fire({ 
              icon : "success", 
              title : response,
              text: "Welcome back, " + nama2, 
              timer : 5000, 
              showCancelButton: false, 
            showConfirmButton: false 
            }) 
            let detik  
            detik = setTimeout(move, 5000) 
            function move(){ 
              location.href = "index.php" 
            } 
          }else if( data.password!=""){
            Swal.fire ({ 
              icon : 'error', 
              title : 'Oops...', 
              text: 'Password Salah',   
              showCancelButton: false, 
            }) 
      
          }
          
          else{ 
            Swal.fire({ 
              icon : 'error', 
              title : 'Oops...', 
              text: 'Username & Password Salah', 
              timer : 1000, 
              showCancelButton: false, 
            showConfirmButton: false 
            }) 
          } 
        } 
      }); 
    }); 
    }
    
  } 
  function submitData(){ 
 
    var data = { 
      name: $("#name").val(), 
      username: $("#username").val(), 
      password: $("#password").val(), 
      action: $("#action").val(), 
    }; 
 
    if(data.username==""  && data.password== "" && data.name ==""){ 
      Swal.fire({ 
        title : "harus di isi", 
        icon : "error", 
        timer : 2000, 
        showCancelButton: false, 
        showConfirmButton: false 
      }) 
    }else if(data.username==""  && data.password== "" && data.name){ 
      Swal.fire({ 
        title : "username dan password di isi", 
        icon : "error", 
        timer : 2000, 
        showCancelButton: false, 
        showConfirmButton: false 
      }) 
    }else if(data.username  && data.password== "" && data.name ==""){ 
      Swal.fire({ 
        title : "nama dan password harus di isi", 
        icon : "error", 
        timer : 2000, 
        showCancelButton: false, 
        showConfirmButton: false 
      }) 
    } else if(data.username== ""  && data.password && data.name ==""){ 
      Swal.fire({ 
        title : "nama dan username harus di isi", 
        icon : "error", 
        timer : 2000, 
        showCancelButton: false, 
        showConfirmButton: false 
      }) 
    }else if(data.username  && data.password== "" && data.name){ 
      Swal.fire({ 
        title : "password harus di isi", 
        icon : "error", 
        timer : 2000, 
        showCancelButton: false, 
        showConfirmButton: false 
      }) 
    }else if(data.username==""  && data.password  && data.name){ 
      Swal.fire({ 
        title : "username harus di isi", 
        icon : "error", 
        timer : 2000, 
        showCancelButton: false, 
        showConfirmButton: false 
      }) 
    }else if(data.username&& data.password  && data.name==""){ 
      Swal.fire({ 
        title : "nama  harus di isi", 
        icon : "error", 
        timer : 2000, 
        showCancelButton: false, 
        showConfirmButton: false 
      }) 
    }
    
    else{ 
      Swal.fire({ 
        icon : "success", 
        title : "Selamat bermain", 
        timer : 2000, 
        showCancelButton: false, 
            showConfirmButton: false 
      }) 
      var username = document.getElementById('username').value 
    $(document).ready(function(){ 
 
       
 
      $.ajax({ 
        url: 'function.php', 
        type: 'post', 
        data: data, 
        success:function(response){ 
          if(response === "Successfull"){ 
            Swal.fire({ 
              icon : "success", 
              title : "Register berhasil", 
              timer : 1000, 
              showCancelButton: false, 
            showConfirmButton: false, 
            }) 
            let detik  
            detik = setTimeout(move, 1000) 
            function move(){ 
              location.href = "index.php" 
            } 
          }else{ 
            Swal.fire({ 
              icon : 'error', 
              title : 'Oops...', 
              text : 'username sudah terdaftar',  
              showCancelButton: false, 
           
            }) 
          } 
        } 
      }); 
    }); 
  } 
    }