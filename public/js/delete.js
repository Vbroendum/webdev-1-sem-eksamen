// Sletter fra listen

function deleteItem(deleteUrl, id) {
  if (confirm('Er du sikker på du vil slette?')) {
    fetch(`${deleteUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        location.reload();
      } else {
        alert('Fejl ved sletning');
      }
    })
    .catch(error => {
      console.error('Fejl:', error);
      alert('Fejl ved sletning');
    });
  }
}