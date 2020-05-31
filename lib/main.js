const ids = ["name", "contact", "description"];

function getValueById(id) {
  return document.getElementById(id).value;
}

function getFormValues() {
  return ids.reduce(function(acc, i) {
    acc[i] = getValueById(i);
    return acc;
  }, {});
}

function clearValues() {
  ids.forEach(id => {
    document.getElementById(id).value = "";
  });
}

function showNotification(msg, type = "success") {
  const classes = {
    success: "is-primary",
    error: "is-danger"
  };

  const notificationElement = document.getElementById("formnotification");
  notificationElement.classList.add(classes[type]);
  notificationElement.classList.add("custom-is-not-opaque");
  notificationElement.innerHTML = msg;

  setTimeout(function() {
    notificationElement.classList.remove("custom-is-not-opaque");
  }, 2000);

  setTimeout(function() {
    notificationElement.classList.remove(classes[type]);
  }, 2500);
}

function enableSubmitBtn() {
  document.getElementById("submitBtn").disabled = false;
}

function disableSubmitBtn() {
  document.getElementById("submitBtn").disabled = true;
}

function submitForm(event) {
  const { name, contact, description } = getFormValues();
  if (!(name && contact)) {
    showNotification("Name and Contact are required", "error");
    return;
  } else if (isNaN(contact)) {
    showNotification("Contact must be number", "error");
    return;
  }

  var xhttp = new XMLHttpRequest();

  const data = new FormData();
  data.append("entry.1651914424", name);
  data.append("entry.1164932861", contact);
  data.append("entry.1151750623", description);

  const qs = [...data.entries()]
    .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join("&");

  xhttp.open(
    "POST",
    "https://docs.google.com/forms/d/e/1FAIpQLSc8FeBRhBZc0m5Vurll75Km0sduAFXaopO0v8-5cEwVHYYIqQ/formResponse?" +
      qs,
    true
  );
  xhttp.send();

  showNotification("Your response is submitted. Thank You", "success");
  grecaptcha.reset();
  disableSubmitBtn();
  clearValues();
}
