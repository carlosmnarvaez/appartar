var cur_root;

var username = "Balaji Naidu"; 
var ticket_code = "12345";

var sel_restaurant_index = 0; //testcode
var order_type = -1;  
var order_date_time = new Date(); //testcode
var order_people_num = 0;
var orderedDishes;
var totalPrice = 0;
var paySuccess = false;
var initMenu = true;

var sel_promotion_index = 0; //testcode

var restaurants = [
  {
    "id" : 1,
    "title" : "Canchas Futbol Medellín",
    "info" : "Cra 80 # 79b - 04 (Robledo)",
    "image" : "./img/restaurant/restaurant1.png",
    "image2" : "./img/restaurant/restaurant2.png",
    "image3" : "./img/restaurant/restaurant3.png",

    "mark" : "./img/restaurant/mark1.png",
    "option" : 1,
    "address" : "Lorem Ipsum es simplemente el texto de relleno de las imprentas y ",
    "phonenumber" : "1-342-34323",
    "description" : "Nougatine is the more casual sister of Jean-Georges, with a very lively bar scene at night. The restaurant attracts a misx of celebrities, socialites, and movers and shakers in the business world. Adjacent to the formal Jean-Georges dining roo. Nougatine serves the signature and seasonal dishes of Chef Jean-Georges for breakfast, lunch, and dinner, 365 days a year.",
    "outlet" : "outletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutlet outletoutletoutletoutletoutletoutletoutletoutletoutlet",
    "food" : [
      {
        "title" : "Adiciones obligatorias",
        "dishes" : [
          {
            "id" : 1,
            "name" : "Petos adicionales",
            "price" : 1000,
            "description" : "Delicious and tender grilled chicken on a bed of lettuce, tomato and mayonnaise sandwiched. Bacon and provolone cheese can also be added to sandwiches."
          },
          {
            "id" : 2,
            "name" : "Aguas",
            "price" : 2000,
            "description" : "Lerem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id" : 3,
            "name" : "Cerveza",
            "price" : 2500,
            "description" : "Heat oil in a large saucepan over medium-high heat. Cook onion, carrot, celery and garlic, stirring, for 5 minutes or until softened."
          }
        ]
      }
      // {
      //   "title" : "Main",
      //   "dishes" : [
      //     {
      //       "id" : 5,
      //       "name" : "Chicken biryani",
      //       "price" : 15,
      //       "description" : "A great one-pot rice dish that can still be served up a few days later, perfect for leftovers."
      //     },
      //     {
      //       "id" : 6,
      //       "name" : "Spicy root & lentil casserole",
      //       "price" : 17,
      //       "description" : "The potatoes in this recipe take on the spicy flavours beautifully - our idea of the perfect veggie supper."
      //     },
      //     {
      //       "id" : 7,
      //       "name" : "Creamy courgette lasagne",
      //       "price" : 11,
      //       "description" : "Serve up this creamy quick dish for a last minute dinner party and impress veggie friends."
      //     },
      //     {
      //       "id" : 8,
      //       "name" : "Oven-baked risotto",
      //       "price" : 12,
      //       "description" : "Cook this simple storecupboard risotto in the oven while you get on with something else – the result is still wonderfully creamy."
      //     },
      //     {
      //       "id" : 9,
      //       "name" : "Hearty pasta soup",
      //       "price" : 9,
      //       "description" : "Do something different with a pack of tortellini. This filling soup is full of fibre, low fat and full of veg. The perfect lunch or supper."
      //     }
      //   ]
      // },
      // {
      //   "title" : "Sides",
      //   "dishes" : [
      //     {
      //       "id" : 10,
      //       "name" : "Best Ever Potato Salad",
      //       "price" : 6,
      //       "description" : "Potato salad falls into the same camp for me as egg salad. It’s a mayonnaise-based salad that I have long disliked because of how over the top mayonnaise-y it typically is."
      //     },
      //     {
      //       "id" : 11,
      //       "name" : "Broccoli Salad",
      //       "price" : 7.5,
      //       "description" : "We’ve been over my aversion to vegetables many, many times. I don’t really like them all that much. I really try sometimes because I know they’re good for me, but I was the kid who only ate broccoli when there was Cheez Whiz slathered on top (no exaggeration, true story)."
      //     },
      //     {
      //       "id" : 12,
      //       "name" : "Fresh Green Bean Casserole",
      //       "price" : 12,
      //       "description" : "This is one of those classic Thanksgiving side dishes that many families simply can’t live without."
      //     },
      //     {
      //       "id" : 13,
      //       "name" : "Pressure Cooker Pinto Beans – Refried Beans",
      //       "price" : 9.5,
      //       "description" : "Do you love refried beans? You can make pressure cooker pinto beans, and they will taste like the best refried beans you have ever had."
      //     },
      //     {
      //       "id" : 14,
      //       "name" : "Stick of Butter Rice",
      //       "price" : 5,
      //       "description" : "This rice side dish is super easy, and it is just as tasty as it is easy. Don’t be surprised if your guests really enjoy this dish."
      //     },
      //     {
      //       "id" : 15,
      //       "name" : "Easy Oven Roasted Red Potatoes",
      //       "price" : 4,
      //       "description" : "Who doesn’t love roasted red potatoes? This side dish is so easy to make, in fact you will be calling them easy roasted red potatoes in no time."
      //     }
      //   ]
      // },
      // {
      //   "title" : "Dessert",
      //   "dishes" : [
      //     {
      //       "id" : 16,
      //       "name" : "Husk meringue at Cosme",
      //       "price" : 12,
      //       "description" : "Dessert isn’t often the highpoint of a Mexican dinner, but most South of the Border sweets aren’t the workings of Enrique Olvera, the famed brain behind Mexico City’s world-renowned Pujol."
      //     },
      //     {
      //       "id" : 17,
      //       "name" : "Cannoli at Quality Italian",
      //       "price" : 10,
      //       "description" : "Tableside theatrics are aplenty at this Quality Meats sibling, but the most head-turning display is the cannoli cart that rolls between tables after dinner."
      //     },
      //     {
      //       "id" : 18,
      //       "name" : "Chocolate chunk cookie at Maman",
      //       "price" : 3.75,
      //       "description" : "Combining the best of American baking and French technique, the chocolate-studded stunner at Armand Arnal’s Soho café could tempt even the most ardent Levain loyalist."
      //     },
      //     {
      //       "id" : 19,
      //       "name" : "Halva donut at Underwest Donuts",
      //       "price" : 2.5,
      //       "description" : "Chanterelle sous chef Scott Levine creates sinker magic in the unlikely setting. For this exotic cake round, nutty tahini and halva are folded into the batter—a dollop of sour cream ensures a moist crumb—with shreds of extra halva sticking to the doughnut’s thick, sugary glaze."
      //     },
      //     {
      //       "id" : 20,
      //       "name" : "Salted caramel pretzel standard at Morgenstern's Finest Ice Cream",
      //       "price" : 13,
      //       "description" : "Picking just one stand-out scoop from Nick Morgenstern’s exceptional LES parlor is like an ice-cream Sophie’s Choice, but if we have to choose, it’s this salty-sweet confection, webbed with silky, toasty caramel sauce, whipped cream and pretzel chunks that magically stay crunchy throughout the smooth, creamy base."
      //     },
      //   ]
      // }
    ]
  },
  {
    "id" : 2,
    "title" : "Los Estadios",
    "info" : "Calle 50 # 30 - 32 (Belen)",
    "image" : "./img/restaurant/restaurant2.png",
    "mark" : "./img/restaurant/mark2.png",
    "option" : 0,
    "address" : "Lorem Ipsum es simplemente el texto de relleno de las imprentas y ",
    "phonenumber" : "1-342-34323",
    "description" : "Nougatine is the more casual sister of Jean-Georges, with a very lively bar scene at night. The restaurant attracts a misx of celebrities, socialites, and movers and shakers in the business world. Adjacent to the formal Jean-Georges dining roo. Nougatine serves the signature and seasonal dishes of Chef Jean-Georges for breakfast, lunch, and dinner, 365 days a year.",
    "outlet" : "outletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutlet outletoutletoutletoutletoutletoutletoutletoutletoutlet",
    "food" : [
      {
        "title" : "Started",
        "dishes" : [
          {
            "id" : 1,
            "name" : "Chicken Grill Sandwich",
            "price" : 13,
            "description" : "Delicious and tender grilled chicken on a bed of lettuce, tomato and mayonnaise sandwiched. Bacon and provolone cheese can also be added to sandwiches."
          },
          {
            "id" : 2,
            "name" : "Curry Baked Rice",
            "price" : 11,
            "description" : "Lerem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id" : 3,
            "name" : "Spagetti Bolognese",
            "price" : 12.5,
            "description" : "Heat oil in a large saucepan over medium-high heat. Cook onion, carrot, celery and garlic, stirring, for 5 minutes or until softened."
          },
          {
            "id" : 4,
            "name" : "Shepherds Pie",
            "price" : 9.5,
            "description" : "Classic shepherd's pie recipe - Heat oil in a large saucepan over medium-high heat. Add onion, carrot and celery and cook, stirring, for 5 minutes or until soft."
          }
        ]
      },
      {
        "title" : "Main",
        "dishes" : [
          {
            "id" : 5,
            "name" : "Chicken biryani",
            "price" : 15,
            "description" : "A great one-pot rice dish that can still be served up a few days later, perfect for leftovers."
          },
          {
            "id" : 6,
            "name" : "Spicy root & lentil casserole",
            "price" : 17,
            "description" : "The potatoes in this recipe take on the spicy flavours beautifully - our idea of the perfect veggie supper."
          },
          {
            "id" : 7,
            "name" : "Creamy courgette lasagne",
            "price" : 11,
            "description" : "Serve up this creamy quick dish for a last minute dinner party and impress veggie friends."
          },
          {
            "id" : 8,
            "name" : "Oven-baked risotto",
            "price" : 12,
            "description" : "Cook this simple storecupboard risotto in the oven while you get on with something else – the result is still wonderfully creamy."
          },
          {
            "id" : 9,
            "name" : "Hearty pasta soup",
            "price" : 9,
            "description" : "Do something different with a pack of tortellini. This filling soup is full of fibre, low fat and full of veg. The perfect lunch or supper."
          }
        ]
      },
      {
        "title" : "Sides",
        "dishes" : [
          {
            "id" : 10,
            "name" : "Best Ever Potato Salad",
            "price" : 6,
            "description" : "Potato salad falls into the same camp for me as egg salad. It’s a mayonnaise-based salad that I have long disliked because of how over the top mayonnaise-y it typically is."
          },
          {
            "id" : 11,
            "name" : "Broccoli Salad",
            "price" : 7.5,
            "description" : "We’ve been over my aversion to vegetables many, many times. I don’t really like them all that much. I really try sometimes because I know they’re good for me, but I was the kid who only ate broccoli when there was Cheez Whiz slathered on top (no exaggeration, true story)."
          },
          {
            "id" : 12,
            "name" : "Fresh Green Bean Casserole",
            "price" : 12,
            "description" : "This is one of those classic Thanksgiving side dishes that many families simply can’t live without."
          },
          {
            "id" : 13,
            "name" : "Pressure Cooker Pinto Beans – Refried Beans",
            "price" : 9.5,
            "description" : "Do you love refried beans? You can make pressure cooker pinto beans, and they will taste like the best refried beans you have ever had."
          },
          {
            "id" : 14,
            "name" : "Stick of Butter Rice",
            "price" : 5,
            "description" : "This rice side dish is super easy, and it is just as tasty as it is easy. Don’t be surprised if your guests really enjoy this dish."
          },
          {
            "id" : 15,
            "name" : "Easy Oven Roasted Red Potatoes",
            "price" : 4,
            "description" : "Who doesn’t love roasted red potatoes? This side dish is so easy to make, in fact you will be calling them easy roasted red potatoes in no time."
          }
        ]
      },
      {
        "title" : "Dessert",
        "dishes" : [
          {
            "id" : 16,
            "name" : "Husk meringue at Cosme",
            "price" : 12,
            "description" : "Dessert isn’t often the highpoint of a Mexican dinner, but most South of the Border sweets aren’t the workings of Enrique Olvera, the famed brain behind Mexico City’s world-renowned Pujol."
          },
          {
            "id" : 17,
            "name" : "Cannoli at Quality Italian",
            "price" : 10,
            "description" : "Tableside theatrics are aplenty at this Quality Meats sibling, but the most head-turning display is the cannoli cart that rolls between tables after dinner."
          },
          {
            "id" : 18,
            "name" : "Chocolate chunk cookie at Maman",
            "price" : 3.75,
            "description" : "Combining the best of American baking and French technique, the chocolate-studded stunner at Armand Arnal’s Soho café could tempt even the most ardent Levain loyalist."
          },
          {
            "id" : 19,
            "name" : "Halva donut at Underwest Donuts",
            "price" : 2.5,
            "description" : "Chanterelle sous chef Scott Levine creates sinker magic in the unlikely setting. For this exotic cake round, nutty tahini and halva are folded into the batter—a dollop of sour cream ensures a moist crumb—with shreds of extra halva sticking to the doughnut’s thick, sugary glaze."
          },
          {
            "id" : 20,
            "name" : "Salted caramel pretzel standard at Morgenstern's Finest Ice Cream",
            "price" : 13,
            "description" : "Picking just one stand-out scoop from Nick Morgenstern’s exceptional LES parlor is like an ice-cream Sophie’s Choice, but if we have to choose, it’s this salty-sweet confection, webbed with silky, toasty caramel sauce, whipped cream and pretzel chunks that magically stay crunchy throughout the smooth, creamy base."
          },
        ]
      }
    ]
  },
  {
    "id" : 3,
    "title" : "El Golazo",
    "info" : "Cra 70 # 65 - 30 (La 70)",
    "image" : "./img/restaurant/restaurant3.png",
    "mark" : "./img/restaurant/mark3.png",
    "option" : -1,
    "address" : "Lorem Ipsum es simplemente el texto de relleno de las imprentas y ",
    "phonenumber" : "1-342-34323",
    "description" : "Nougatine is the more casual sister of Jean-Georges, with a very lively bar scene at night. The restaurant attracts a misx of celebrities, socialites, and movers and shakers in the business world. Adjacent to the formal Jean-Georges dining roo. Nougatine serves the signature and seasonal dishes of Chef Jean-Georges for breakfast, lunch, and dinner, 365 days a year.",
    "outlet" : "outletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutlet outletoutletoutletoutletoutletoutletoutletoutletoutlet",
    "food" : [
      {
        "title" : "Started",
        "dishes" : [
          {
            "id" : 1,
            "name" : "Chicken Grill Sandwich",
            "price" : 13,
            "description" : "Delicious and tender grilled chicken on a bed of lettuce, tomato and mayonnaise sandwiched. Bacon and provolone cheese can also be added to sandwiches."
          },
          {
            "id" : 2,
            "name" : "Curry Baked Rice",
            "price" : 11,
            "description" : "Lerem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id" : 3,
            "name" : "Spagetti Bolognese",
            "price" : 12.5,
            "description" : "Heat oil in a large saucepan over medium-high heat. Cook onion, carrot, celery and garlic, stirring, for 5 minutes or until softened."
          },
          {
            "id" : 4,
            "name" : "Shepherds Pie",
            "price" : 9.5,
            "description" : "Classic shepherd's pie recipe - Heat oil in a large saucepan over medium-high heat. Add onion, carrot and celery and cook, stirring, for 5 minutes or until soft."
          }
        ]
      },
      {
        "title" : "Main",
        "dishes" : [
          {
            "id" : 5,
            "name" : "Chicken biryani",
            "price" : 15,
            "description" : "A great one-pot rice dish that can still be served up a few days later, perfect for leftovers."
          },
          {
            "id" : 6,
            "name" : "Spicy root & lentil casserole",
            "price" : 17,
            "description" : "The potatoes in this recipe take on the spicy flavours beautifully - our idea of the perfect veggie supper."
          },
          {
            "id" : 7,
            "name" : "Creamy courgette lasagne",
            "price" : 11,
            "description" : "Serve up this creamy quick dish for a last minute dinner party and impress veggie friends."
          },
          {
            "id" : 8,
            "name" : "Oven-baked risotto",
            "price" : 12,
            "description" : "Cook this simple storecupboard risotto in the oven while you get on with something else – the result is still wonderfully creamy."
          },
          {
            "id" : 9,
            "name" : "Hearty pasta soup",
            "price" : 9,
            "description" : "Do something different with a pack of tortellini. This filling soup is full of fibre, low fat and full of veg. The perfect lunch or supper."
          }
        ]
      },
      {
        "title" : "Sides",
        "dishes" : [
          {
            "id" : 10,
            "name" : "Best Ever Potato Salad",
            "price" : 6,
            "description" : "Potato salad falls into the same camp for me as egg salad. It’s a mayonnaise-based salad that I have long disliked because of how over the top mayonnaise-y it typically is."
          },
          {
            "id" : 11,
            "name" : "Broccoli Salad",
            "price" : 7.5,
            "description" : "We’ve been over my aversion to vegetables many, many times. I don’t really like them all that much. I really try sometimes because I know they’re good for me, but I was the kid who only ate broccoli when there was Cheez Whiz slathered on top (no exaggeration, true story)."
          },
          {
            "id" : 12,
            "name" : "Fresh Green Bean Casserole",
            "price" : 12,
            "description" : "This is one of those classic Thanksgiving side dishes that many families simply can’t live without."
          },
          {
            "id" : 13,
            "name" : "Pressure Cooker Pinto Beans – Refried Beans",
            "price" : 9.5,
            "description" : "Do you love refried beans? You can make pressure cooker pinto beans, and they will taste like the best refried beans you have ever had."
          },
          {
            "id" : 14,
            "name" : "Stick of Butter Rice",
            "price" : 5,
            "description" : "This rice side dish is super easy, and it is just as tasty as it is easy. Don’t be surprised if your guests really enjoy this dish."
          },
          {
            "id" : 15,
            "name" : "Easy Oven Roasted Red Potatoes",
            "price" : 4,
            "description" : "Who doesn’t love roasted red potatoes? This side dish is so easy to make, in fact you will be calling them easy roasted red potatoes in no time."
          }
        ]
      },
      {
        "title" : "Dessert",
        "dishes" : [
          {
            "id" : 16,
            "name" : "Husk meringue at Cosme",
            "price" : 12,
            "description" : "Dessert isn’t often the highpoint of a Mexican dinner, but most South of the Border sweets aren’t the workings of Enrique Olvera, the famed brain behind Mexico City’s world-renowned Pujol."
          },
          {
            "id" : 17,
            "name" : "Cannoli at Quality Italian",
            "price" : 10,
            "description" : "Tableside theatrics are aplenty at this Quality Meats sibling, but the most head-turning display is the cannoli cart that rolls between tables after dinner."
          },
          {
            "id" : 18,
            "name" : "Chocolate chunk cookie at Maman",
            "price" : 3.75,
            "description" : "Combining the best of American baking and French technique, the chocolate-studded stunner at Armand Arnal’s Soho café could tempt even the most ardent Levain loyalist."
          },
          {
            "id" : 19,
            "name" : "Halva donut at Underwest Donuts",
            "price" : 2.5,
            "description" : "Chanterelle sous chef Scott Levine creates sinker magic in the unlikely setting. For this exotic cake round, nutty tahini and halva are folded into the batter—a dollop of sour cream ensures a moist crumb—with shreds of extra halva sticking to the doughnut’s thick, sugary glaze."
          },
          {
            "id" : 20,
            "name" : "Salted caramel pretzel standard at Morgenstern's Finest Ice Cream",
            "price" : 13,
            "description" : "Picking just one stand-out scoop from Nick Morgenstern’s exceptional LES parlor is like an ice-cream Sophie’s Choice, but if we have to choose, it’s this salty-sweet confection, webbed with silky, toasty caramel sauce, whipped cream and pretzel chunks that magically stay crunchy throughout the smooth, creamy base."
          },
        ]
      }
    ]
  },
  {
    "id" : 4,
    "title" : "Chalacas Gol",
    "info" : "Calle 79 # 45 - 67 (Envigado) ",
    "image" : "./img/restaurant/restaurant4.png",
    "mark" : "./img/restaurant/mark4.png",
    "option" : 0,
    "address" : "Lorem Ipsum es simplemente el texto de relleno de las imprentas y ",
    "phonenumber" : "1-342-34323",
    "description" : "Nougatine is the more casual sister of Jean-Georges, with a very lively bar scene at night. The restaurant attracts a misx of celebrities, socialites, and movers and shakers in the business world. Adjacent to the formal Jean-Georges dining roo. Nougatine serves the signature and seasonal dishes of Chef Jean-Georges for breakfast, lunch, and dinner, 365 days a year.",
    "outlet" : "outletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutletoutlet outletoutletoutletoutletoutletoutletoutletoutletoutlet",
    "food" : [
      {
        "title" : "Started",
        "dishes" : [
          {
            "id" : 1,
            "name" : "Chicken Grill Sandwich",
            "price" : 13,
            "description" : "Delicious and tender grilled chicken on a bed of lettuce, tomato and mayonnaise sandwiched. Bacon and provolone cheese can also be added to sandwiches."
          },
          {
            "id" : 2,
            "name" : "Curry Baked Rice",
            "price" : 11,
            "description" : "Lerem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id" : 3,
            "name" : "Spagetti Bolognese",
            "price" : 12.5,
            "description" : "Heat oil in a large saucepan over medium-high heat. Cook onion, carrot, celery and garlic, stirring, for 5 minutes or until softened."
          },
          {
            "id" : 4,
            "name" : "Shepherds Pie",
            "price" : 9.5,
            "description" : "Classic shepherd's pie recipe - Heat oil in a large saucepan over medium-high heat. Add onion, carrot and celery and cook, stirring, for 5 minutes or until soft."
          }
        ]
      },
      {
        "title" : "Main",
        "dishes" : [
          {
            "id" : 5,
            "name" : "Chicken biryani",
            "price" : 15,
            "description" : "A great one-pot rice dish that can still be served up a few days later, perfect for leftovers."
          },
          {
            "id" : 6,
            "name" : "Spicy root & lentil casserole",
            "price" : 17,
            "description" : "The potatoes in this recipe take on the spicy flavours beautifully - our idea of the perfect veggie supper."
          },
          {
            "id" : 7,
            "name" : "Creamy courgette lasagne",
            "price" : 11,
            "description" : "Serve up this creamy quick dish for a last minute dinner party and impress veggie friends."
          },
          {
            "id" : 8,
            "name" : "Oven-baked risotto",
            "price" : 12,
            "description" : "Cook this simple storecupboard risotto in the oven while you get on with something else – the result is still wonderfully creamy."
          },
          {
            "id" : 9,
            "name" : "Hearty pasta soup",
            "price" : 9,
            "description" : "Do something different with a pack of tortellini. This filling soup is full of fibre, low fat and full of veg. The perfect lunch or supper."
          }
        ]
      },
      {
        "title" : "Sides",
        "dishes" : [
          {
            "id" : 10,
            "name" : "Best Ever Potato Salad",
            "price" : 6,
            "description" : "Potato salad falls into the same camp for me as egg salad. It’s a mayonnaise-based salad that I have long disliked because of how over the top mayonnaise-y it typically is."
          },
          {
            "id" : 11,
            "name" : "Broccoli Salad",
            "price" : 7.5,
            "description" : "We’ve been over my aversion to vegetables many, many times. I don’t really like them all that much. I really try sometimes because I know they’re good for me, but I was the kid who only ate broccoli when there was Cheez Whiz slathered on top (no exaggeration, true story)."
          },
          {
            "id" : 12,
            "name" : "Fresh Green Bean Casserole",
            "price" : 12,
            "description" : "This is one of those classic Thanksgiving side dishes that many families simply can’t live without."
          },
          {
            "id" : 13,
            "name" : "Pressure Cooker Pinto Beans – Refried Beans",
            "price" : 9.5,
            "description" : "Do you love refried beans? You can make pressure cooker pinto beans, and they will taste like the best refried beans you have ever had."
          },
          {
            "id" : 14,
            "name" : "Stick of Butter Rice",
            "price" : 5,
            "description" : "This rice side dish is super easy, and it is just as tasty as it is easy. Don’t be surprised if your guests really enjoy this dish."
          },
          {
            "id" : 15,
            "name" : "Easy Oven Roasted Red Potatoes",
            "price" : 4,
            "description" : "Who doesn’t love roasted red potatoes? This side dish is so easy to make, in fact you will be calling them easy roasted red potatoes in no time."
          }
        ]
      },
      {
        "title" : "Dessert",
        "dishes" : [
          {
            "id" : 16,
            "name" : "Husk meringue at Cosme",
            "price" : 12,
            "description" : "Dessert isn’t often the highpoint of a Mexican dinner, but most South of the Border sweets aren’t the workings of Enrique Olvera, the famed brain behind Mexico City’s world-renowned Pujol."
          },
          {
            "id" : 17,
            "name" : "Cannoli at Quality Italian",
            "price" : 10,
            "description" : "Tableside theatrics are aplenty at this Quality Meats sibling, but the most head-turning display is the cannoli cart that rolls between tables after dinner."
          },
          {
            "id" : 18,
            "name" : "Chocolate chunk cookie at Maman",
            "price" : 3.75,
            "description" : "Combining the best of American baking and French technique, the chocolate-studded stunner at Armand Arnal’s Soho café could tempt even the most ardent Levain loyalist."
          },
          {
            "id" : 19,
            "name" : "Halva donut at Underwest Donuts",
            "price" : 2.5,
            "description" : "Chanterelle sous chef Scott Levine creates sinker magic in the unlikely setting. For this exotic cake round, nutty tahini and halva are folded into the batter—a dollop of sour cream ensures a moist crumb—with shreds of extra halva sticking to the doughnut’s thick, sugary glaze."
          },
          {
            "id" : 20,
            "name" : "Salted caramel pretzel standard at Morgenstern's Finest Ice Cream",
            "price" : 13,
            "description" : "Picking just one stand-out scoop from Nick Morgenstern’s exceptional LES parlor is like an ice-cream Sophie’s Choice, but if we have to choose, it’s this salty-sweet confection, webbed with silky, toasty caramel sauce, whipped cream and pretzel chunks that magically stay crunchy throughout the smooth, creamy base."
          },
        ]
      }
    ]
  }
];


var promotions = [
  {
    "id" : 1,
    "title" : "Chilli Crab - Sentose Cove",
    "image" : "./img/promotion/promotion1.png",
    "percent" : 50,
    "time" : "5 Hours Left",
    "distance" : "+ 6KM"
  },
  {
    "id" : 2,
    "title" : "Archipelago Beer - Boulevard",
    "image" : "./img/promotion/promotion2.png",
    "percent" : 15,
    "time" : "12 Hours Left",
    "distance" : "+ 14KM"
  },
  {
    "id" : 3,
    "title" : "Buffalo Wings - Chuck's Bar",
    "image" : "./img/promotion/promotion3.png",
    "percent" : 20,
    "time" : "12 Days Left",
    "distance" : "+ 22KM"
  },
  {
    "id" : 4,
    "title" : "Moiten Lava Cake - Wimbly Lu",
    "image" : "./img/promotion/promotion4.png",
    "percent" : 40,
    "time" : "6 Mins Left",
    "distance" : "+ 6KM"
  }
];

var myorders = [
  {
    "id" : 1,
    "restaurant" : 2,
    "time" : "8PM Today",
    "code" : "12345"
  },{
    "id" : 2,
    "restaurant" : 1,
    "time" : "9PM Today",
    "code" : "12345"
  },{
    "id" : 3,
    "restaurant" : 3,
    "time" : "12PM Today",
    "code" : "12345"
  },{
    "id" : 4,
    "restaurant" : 0,
    "time" : "8PM Today",
    "code" : "12345"
  },{
    "id" : 5,
    "restaurant" : 1,
    "time" : "9PM Today",
    "code" : "12345"
  }
];