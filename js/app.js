$(document).ready(function() {
    var icons = [
        "🦇",
        "🎃",
        "🧹",
        "🕷",
        "🕸",
        "🧛‍♀️",
        "💀",
        "👻",
        "🦇",
        "🎃",
        "🧹",
        "🕷",
        "🕸",
        "🧛‍♀️",
        "💀",
        "👻"
      ]
      
      icons.sort(() => .5 - Math.random())

      for(var i = 0; i < icons.length; i++) {
        $('.container-fluid .row').append('<div class="columns"><div class="card"><div class="card-body"><h2 class="text-center">'+icons[i]+'</h2></div></div></div>');
      }
});

