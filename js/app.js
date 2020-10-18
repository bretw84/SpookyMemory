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
      
      for(var i = 0; i < icons.length; i++) {
        $('.container-fluid .row').append('<div class="col-sm-3"><div class="card" style="width: 18rem;"><div class="card-body"><h2 class="text-center">'+icons[i]+'</h2></div></div></div>');
      }
});

