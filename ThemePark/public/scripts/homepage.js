document.getElementById('bars-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
  });
  