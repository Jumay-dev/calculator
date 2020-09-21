let data = [
  {
    name: 'Стелла',
    types: [
      {
        name: 'Корка',
        list: [
          {
            name: 'Корка 80',
            cost: 1800,
            coefficient: 0.7
          },
          {
            name: 'Корка 90',
            cost: 2200,
            coefficient: 0.85
          },
          {
            name: 'Корка 100',
            cost: 2750,
            coefficient: 1
          },
          {
            name: 'Корка 110',
            cost: 3900,
            coefficient: 1.15
          },
          {
            name: 'Корка 120',
            cost: 4750,
            coefficient: 1.3
          },
        ]
      },
      {
        name: '1 сторона',
        list: [
          {
            name: '100*50*8 кр',
            cost: '6520'
          }
        ]
      },
      {
        name: '2 стороны',
        list: [
          {
            name: '100*50*8 кр',
            cost: '6520'
          }
        ]
      },
      {
        name: '3 стороны',
        list: [
          {
            name: '100*50*8 кр',
            cost: '6520'
          }
        ]
      },
    ]
  },
]

let variables = document.getElementById("calculator--variables")

let tree = document.getElementById("tree")

let type = document.getElementById("type")

data[0].types.forEach( item => {
  let btn = document.createElement("button")
  btn.innerHTML = item.name

  btn.addEventListener('click', typeClick)

  type.append(btn)
})

function typeClick(e) {
  let subtype = document.createElement("div")
  subtype.id = "type"

  data[0].types[0].list.forEach( item => {
    let btn = document.createElement("button")
    btn.innerHTML = item.name

    subtype.append(btn)
  })

  variables.append(subtype)

  console.log(e)
}