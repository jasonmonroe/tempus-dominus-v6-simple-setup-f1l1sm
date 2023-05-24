//using "window" is just for the stackblitz, you do not need to do this
window.datetimepicker1 = new tempusDominus.TempusDominus(
  document.getElementById('datetimepicker1'),
  {
    localization: {
      dayViewHeaderFormat: { month: 'long', year: '2-digit' },
      locale: 'pt-PT',
      startOfTheWeek: 1
      }
      
  }
);

document.getElementById(
  'info'
).innerHTML = `Your browser's locale is ${navigator.language}.<br/>
You are using version ${tempusDominus.version}`;
