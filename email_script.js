document.getElementById('submit').addEventListener("click", sendEmail);

/*function GetBody() {
  var body = 'I found your email via your personal website!\nThis message is from ' + document.getElementById('fname').value + ' ' + document.getElementById('lname').value + '\n';
  return body;
};*/

function sendEmail() {
  var email = 'alice.bibaud@gmail.com';
  /*var body = GetBody();*/
  var subject = document.getElementById('subject').value;
  var mailto_link = 'mailto:' + email; /* + '?subject=' + subject + '&body=' + encodeURIComponent(body);*/
  window.location.href = mailto_link;
};