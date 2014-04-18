// Saves options to chrome.storage
function save_options() {
  var pword = document.getElementById('password').value;
  var isPassword = document.getElementById('isPassword').checked;
  chrome.storage.sync.set({
    pword: pword,
    isPassword: isPassword
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value password = 'red' and isPassword = true.
  chrome.storage.sync.get({
    pword: '',
    isPassword: true
  }, function(items) {
    document.getElementById('password').value = items.pword;
    document.getElementById('isPassword').checked = items.isPassword;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
