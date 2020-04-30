
function validateForm(){
  let outputs = ['fname', 'lname', 'email', 'psw'];
  outputs[0] = document.forms['form']['username'].value;
  outputs[1] = document.forms['form']['lname'].value;
  outputs[2] = document.forms['form']['email'].value;
  outputs[3] = document.forms['form']['password'].value;
  let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  

  if(outputs[0] == null || outputs[0] == ''){
    document.getElementsByTagName('svg')[0].style.display = 'block';
    document.getElementsByTagName('small')[0].style.display = 'block';
    document.getElementsByTagName('input')[0].style.border = '2px solid red';
    return false;
  }else  if(outputs[1] == null || outputs[1] ==''){
    document.getElementsByTagName('svg')[1].style.display = 'block';
    document.getElementsByTagName('small')[1].style.display = 'block';
    document.getElementsByTagName('input')[1].style.border = '2px solid red';
    return false;

  }else if (outputs[2] == mail ){
    document.getElementsByTagName('svg')[2].style.display = 'block';
    document.getElementsByTagName('small')[3].style.display = 'block';
    document.getElementsByTagName('input')[2].style.border = '2px solid red';
    return false;
  }else{
    alert('Form sucessfully submitted');
    location.reload()
    return true;
  }
}
