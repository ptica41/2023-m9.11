window.onload = function() {
    document.getElementById('get-data').addEventListener('click', function() {
        const initPerson = personGenerator.getPerson();
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('surnameOutput').innerText = initPerson.surname;
        document.getElementById('middleNameOutput').innerText = initPerson.middleName;
        document.getElementById('genderOutput').innerText = initPerson.gender;
        document.getElementById('birthYearOutput').innerText = initPerson.data;
        document.getElementById('profession').innerText = initPerson.profession;
    });
    document.getElementById('clear-data').addEventListener('click', function() {
        document.getElementById('firstNameOutput').innerText = '—';
        document.getElementById('surnameOutput').innerText = '—';
        document.getElementById('middleNameOutput').innerText = '—';
        document.getElementById('genderOutput').innerText = '—';
        document.getElementById('birthYearOutput').innerText = '—';
        document.getElementById('profession').innerText = '—';
    })
};


