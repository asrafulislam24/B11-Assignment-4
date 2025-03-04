document.addEventListener('DOMContentLoaded', function () {
  let taskAssigned = document.getElementById('Task Assigned');

  let count = document.getElementById('count');

  let completedButtons = document.querySelectorAll('.completed-btn');

  completedButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      alert('Board Updated Sccessfully!');

      if (index === 5) {
        alert('Congrates!!! You Have Completed all The Current Taks.');
      }

      let taskValue = parseInt(taskAssigned.innerText);
      if (taskValue > 0) {
        taskAssigned.innerText = taskValue - 1;
      }

      let countValue = parseInt(count.innerText);
      count.innerText = countValue + 1;

      button.disabled = true;
      button.classList.add('bg-gray-400', 'cursor-not-allowed');
      button.classList.remove('bg-[#3752FD]');
    });
  });
});

function redirectToBlog() {
  window.location.href = 'Blog.html';
}

function redirectToIndex() {
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () {
  let themeButton = document.getElementById('themeButton');

  const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'cyan',
    'lime',
    'white',
  ];

  themeButton.addEventListener('click', function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let liveDay = document.getElementById('liveDay');
  let liveDate = document.getElementById('liveDate');

  let today = new Date();

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let dayName = days[today.getDay()];
  let monthName = months[today.getMonth()];
  let date = today.getDate();
  let year = today.getFullYear();

  liveDay.innerText = `${dayName} ,`;
  liveDate.innerText = `${monthName} ${date} ${year}`;
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.completed-btn');
  const activityLogSection = document.querySelector('section');
  const hiddenLogs = document.querySelectorAll('.hidden');

  let currentLogIndex = 0;

  buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
      activityLogSection.classList.remove('hidden');

      if (currentLogIndex < hiddenLogs.length) {
        hiddenLogs[currentLogIndex].classList.remove('hidden');
        currentLogIndex++;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.completed-btn');
  const activityLogSection = document.querySelector('section');
  const hiddenLogs = document.querySelectorAll('.hidden');
  const clearHistoryButton = document.getElementById('clearHistoryBtn');

  let currentLogIndex = 0;
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      activityLogSection.classList.remove('hidden');

      if (currentLogIndex < hiddenLogs.length) {
        const log = hiddenLogs[currentLogIndex];
        const currentDateTime = new Date().toLocaleString();

        log.querySelector('p').innerHTML = log
          .querySelector('p')
          .innerHTML.replace('at', `at ${currentDateTime}`);
        log.classList.remove('hidden');
        currentLogIndex++;
      }
    });
  });

  clearHistoryButton.addEventListener('click', function () {
    hiddenLogs.forEach(log => {
      log.classList.add('hidden');
    });
    currentLogIndex = 0;
    location.reload();
  });
});
