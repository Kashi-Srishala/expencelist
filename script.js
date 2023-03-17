var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('amount').value;
    var email = document.getElementById('description').value;
    var phone_no = document.getElementById('category').value;

    localStorage.setItem('amount',amount);
    localStorage.setItem('description', description);
    localStorage.setItem('category', category);
});

var deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', function(event) {
    localStorage.removeItem('amount');
    localStorage.removeItem('description');
    localStorage.removeItem('category');
});

var editBtn = document.getElementById('edit');
editBtn.addEventListener('click', function(event) {
    var name = localStorage.getItem('amount');
    var email = localStorage.getItem('description');
    var phone_no = localStorage.getItem('category');

    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
});