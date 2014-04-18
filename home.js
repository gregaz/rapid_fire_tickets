function tryToBuy() {

  var selectedTickets = false;
  $("select").each(function() {
        if ($(this).val() == '0')
        {
          selectedTickets = true;
          $(this).val(2);
          $(".bpt_orangebutton").click(); 
        }
    });

  if (!selectedTickets) {
    location.reload();
  }
}

function applyPassword(pword) {
  $('.bpt_widget_a').click();
  $('#bpt_discount').val(pword);
  $('.bpt_widget_input[type=button]').click();
}

$( document ).ready(function() {
  document.title = 'Rapid Fire Engaged';
  //don't load crap we don't need
  $("img").removeAttr("src");
  $("iframe").removeAttr("src");
  $("#disqus_thread").val('');


  var targetNodes         = $("#bpt_eventbody");
  var MutationObserver    = window.MutationObserver || window.WebKitMutationObserver;
  var myObserver          = new MutationObserver (mutationHandler);
  var obsConfig           = { childList: true, characterData: true, attributes: true, subtree: true };

  //--- Add a target node to the observer. Can only add one node at a time.
  targetNodes.each ( function () {
      myObserver.observe (this, obsConfig);
  } );

  
  function mutationHandler (mutationRecords) {
    mutationRecords.forEach(function(mutation) {
      if(mutation.type == "childList")
        tryToBuy();
    });
  }

  chrome.runtime.sendMessage({method: "getLocalStorage"}, function(response) {
    if (response.data.isPassword)
    {
      console.log('applying password');
      applyPassword(response.data.pword);
    }
    else
    {
      tryToBuy();
    }
    
  });

});




