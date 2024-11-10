function openLoginModal() {}
function handleSubmit(e) {
  e.preventDefault();
  console.log("test1");
  alert("successfully submited,");
}
var today = new Date().toISOString().slice(0, 16);
document.getElementsByName("startDate")[0].min = today;
document.getElementsByName("endDate")[0].min = today;

function updateEndDate() {
  const startDateInput = document.getElementsByName("startDate")[0];
  const endDateInput = document.getElementsByName("endDate")[0];

  if (startDateInput.value) {
    const startDate = new Date(startDateInput.value);
    startDate.setDate(startDate.getDate() + 7);

    endDateInput.min = startDate.toISOString().slice(0, 16);
    if (new Date(endDateInput.value) < startDate) {
      endDateInput.value = startDate.toISOString().slice(0, 16);
    }
  }
}
