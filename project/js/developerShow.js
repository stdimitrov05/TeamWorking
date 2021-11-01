function developerShow() {
  alert(
    'След като натиснете ОК ще ви закара в github repostory и ще можете да видите ресурс кода на сайта. Последвате Симеон (Zumbata232) и Станислав (stdimitrov05)  ',
  )
  window.open('https://github.com/stdimitrov05/TeamWorking')

  const newTest = (document.getElementById('devButton').innerHTML =
    'Бутона беше кликнат!')

  console.log(newTest)

  document.querySelectorAll('.developer').forEach(function (e) {
    e.addEventListener('click', function () {
      this.style.backgroundColor = rgba(11, 250, 31, 0.801)
    })
  })
  
}

function navigatorButton() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}
