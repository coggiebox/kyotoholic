$(function () {
  // layout
  var rightSpace = $('.rightSpace'),
      leftSpace = $('.leftSpace');
  // menu選單
  var menu_list = $('.menu_list');
  // 收合按鈕
  var menuFold = $('.menuFold');
  //change logo
  var logo = $('.logo');

  var window_Width = $(window).width();
    if(window_Width <= 1024) {
      leftSpace.addClass('active');
      rightSpace.addClass('active');
      // menu選單 文字
      menu_list.find('p').fadeToggle('fast');
      logo.toggleClass('active');
    }

  // 點按收合按鈕
  menuFold.on('click', function (e) {
    e.preventDefault();
    // layout收合
    leftSpace.toggleClass('active');
    rightSpace.toggleClass('active');
    // menu選單 文字
    menu_list.find('p').fadeToggle('fast');
    logo.toggleClass('active');

    var btn = $('#workspaceBtn');
    var blue_Zone = $('#workspace');

    btn.click(function(){
      $.ajax({
        url: "workspace_content.html",
        success: function(data){
        blue_Zone.html(data);
        }
    });
});

  })
})
