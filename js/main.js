$(document).ready(function() {
  obj = { 'menu': `<h1>Today's Menu</h1>
                <ol>
                  <li>Heirloom tomatoes, buffalo mozzarella & basil dressing £7.75 </li>
                  <li>Merrifield Farm duck liver pâté, charred orange, tomato & red pepper salsa & crisp bread  £8.00</li>
                  <li>Grilled aubergine, poached egg, runner beans, fennel & cherry tomato & orange salsa  £14.95</li>
                  <li>Whole grilled Megrim sole, new potatoes, peas & capers  £17.50</li>
                  <li>Slow cooked pulled Waveney Valley pork shoulder & Bramley apple sauce  £16.95</li>
                  <li>Roasted dry aged Hereford sirloin  £19.50</li>
                </ol>`,

         'abou': `<h1>About Us</h1>
                <p>Odin Restaurant combines an inspired menu with a casually sophisticated setting in a historic
                downtown Excelsior main street building. Coalition is the creation of Chef Eli Yongu and reflects
                his passion for cooking with a diverse and inspired menu.<p>`,

         'cont': `<h1>Contact</h1>
                  <address> Odin Restaurant <br>
                  227 Water Street <br>
                  Austin, Texas 55331 <br>
                  (999) 555-111 <br>
                  </address>`
        }

  $('#actualContent').append(obj['menu']);
  $('li').on('click', function() {
    $('li').removeClass('active');
    $(this).addClass('active');
    $('#actualContent').html('').append(obj[$(this).text().toLowerCase().substring(0,4)]);
  })
});
