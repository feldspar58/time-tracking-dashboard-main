let data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const buttons = document.querySelectorAll('.button')

const card = (clickedCard) => {
  
  clearActivities()

  const container = document.querySelector('div.page')

  const calcTimeframe = (option) => {
    if (option === 'daily'){
      return 'Yesterday'
    }else if (option === 'weekly') {
      return 'Last Week'
    }else if (option === 'monthly'){
      return 'Last Month'
    }
  }

  data.forEach(activity => {
    const name = activity.title
    const activityClass = name.toLowerCase().replace(' ','-')
    const timeframeData = activity.timeframes[clickedCard]
    const previousTimeframe = calcTimeframe(clickedCard)
    const div =document.createElement('div')
    div.classList.add('container', activityClass)
    const stringToInject = `
     <div class="back">
  </div>
  <div class="mini-cont">
    <span class="imgword">
     <p class="line1"> ${name} </p>
     <span class="img">
        <img src="./images/more_horiz_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="">
     </span>
    </span>
    <span class="line2">
      <span class="daily2">
       <p class="first">${timeframeData.current}hrs </p> 
       <p class="second"> ${previousTimeframe} - ${timeframeData.previous}hrs </p>
      </span>
    </span>
  </div>`

    div.innerHTML = stringToInject
    container.append(div)

  })
}


const activateClickedButton = (button) => {
  buttons.forEach(b => b.classList.remove('active'))
  button.classList.add('active')
}

 const clearActivities = () =>{
  const activities = document.querySelectorAll('.container')
  activities.forEach(a => a.remove())
 }


buttons.forEach(button => {
  button.addEventListener('click', ()=> {
    activateClickedButton(button)
    const clickedCard = button.dataset.option
    card(clickedCard)
  })
})

buttons[1].click();
