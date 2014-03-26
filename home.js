if ($(".bpt_orangebutton").length != 0)
{
  $("#bpt_date_prices_1017125 .bpt_widget_price_table tr:nth-child(4) select").val(2);
  $(".bpt_orangebutton").click(); 
} else
{
  location.reload();
}
