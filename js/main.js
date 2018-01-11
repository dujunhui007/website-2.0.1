/**
 *
 */
$(function () {

  loadProperties("strings_zh-CN");
  //
  // $("#btn .simplifiedChinese").click(function () {
  //   loadProperties("strings_zh-CN");
  // });
  //
  // $("#btn .traditionalChinese").click(function () {
  //   loadProperties("strings_zh-TW");
  // });
  //
  // $("#btn .switchToEnglish").click(function () {
  //   loadProperties("strings_en");
  // });

  $("nav .navContainer .navRight .switchLanguage  button").click(function () {
    // alert($(this).attr("class"));
    if ($(this).attr("class") == "switchToEnglish") {
      loadProperties("strings_en");
    } else {
      loadProperties("strings_zh-CN");
    }
  });


  // $('#button_login').click(function () {//点击登录按钮后验证用户信息
  //   var id = $('#username').val();//用户名
  //   var payload = {};
  //   payload['password'] = $('#password').val();
  //   payload = $.toJSON(payload);
  //   $.ajax({
  //     url: 'rest/users/' + id + '/tokens',//REST URI
  //     type: 'POST',
  //     data: payload, // Request body
  //     contentType: 'application/json',
  //     dataType: 'json',
  //     success: function (data) {
  //       //验证成功则显示欢迎信息和密钥
  //       $('#content').html($.i18n.prop('string_hello', id, data.token));
  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {
  //       if (jqXHR.status == 403) {
  //         //用户不存在
  //         alert($.i18n.prop('string_usernotexist'));
  //       } else if (jqXHR.status == 401) {
  //         //密码错误
  //         alert($.i18n.prop('string_wrongpassword'));
  //       } else {
  //         //其他异常信息
  //         alert(errorThrown);
  //       }
  //     }
  //   });
  // });


});

function loadProperties(str) {
  jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
    name: str, //资源文件名称
    path: 'resources/i18n/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    callback: function () {//加载成功后设置显示内容
      $('#nav_home').html($.i18n.prop('string_navhome'));
      $('#nav_introduction').html($.i18n.prop('string_navintroduction'));
      $('#nav_dapps').html($.i18n.prop('string_navdapps'));
      $('#nav_features').html($.i18n.prop('string_navfeatures'));
      $('#nav_advantages').html($.i18n.prop('string_navadvantages'));
      $('#nav_scenarios').html($.i18n.prop('string_navscenarios'));
      $('#nav_downloads').html($.i18n.prop('string_navdownloads'));
      $('#nav_partners').html($.i18n.prop('string_navpartners'));
      $('#nav_links').html($.i18n.prop('string_navlinks'));

      $('#homeLinksAschCode').html($.i18n.prop('string_homeLinksAschCode'));
      $('#homeLinksAschExplorer').html($.i18n.prop('string_homeLinksAschExplorer'));
      $('#homeLinksAschExplorerContent').html($.i18n.prop('string_homeLinksAschExplorerContent'));
      $('#homeLinksAschWallet').html($.i18n.prop('string_homeLinksAschWallet'));
      $('#homeLinksAschWalletContent').html($.i18n.prop('string_homeLinksAschWalletContent'));
      $('#homeLinksAschForum').html($.i18n.prop('string_homeLinksAschForum'));
      $('#homeLinksAschForumContent').html($.i18n.prop('string_homeLinksAschForumContent'));

      $('#introductionTopTitle').html($.i18n.prop('string_introductionTopTitle'));
      $('#introductionTopContent').html($.i18n.prop('string_introductionTopContent'));
      $('#introductionContentTitleOne').html($.i18n.prop('string_introductionContentTitleOne'));
      $('#introductionContentOne').html($.i18n.prop('string_introductionContentOne'));
      $('#introductionContentTitleTwo').html($.i18n.prop('string_introductionContentTitleTwo'));
      $('#introductionContentTwo').html($.i18n.prop('string_introductionContentTwo'));

      $('#dappsTitle').html($.i18n.prop('string_dappsTitle'));
      $('#dappsTopContent').html($.i18n.prop('string_dappsTopContent'));
      $('#applicationDetailContent1').html($.i18n.prop('string_applicationDetailContent1'));
      $('#applicationDetailMore1').html($.i18n.prop('string_applicationDetailMore1'));
      $('#applicationDetailMore2').html($.i18n.prop('string_applicationDetailMore1'));
      $('#applicationDetailMore3').html($.i18n.prop('string_applicationDetailMore1'));
      $('#applicationDetailMore4').html($.i18n.prop('string_applicationDetailMore1'));

      $('#applicationDetailTitle2').html($.i18n.prop('string_applicationDetailTitle2'));
      $('#applicationDetailDescribe2').html($.i18n.prop('string_applicationDetailDescribe2'));
      $('#applicationDetailTitle3').html($.i18n.prop('string_applicationDetailTitle3'));
      $('#applicationDetailDescribe3').html($.i18n.prop('string_applicationDetailDescribe3'));
      $('#applicationDetailDescribe4').html($.i18n.prop('string_applicationDetailDescribe4'));

      $('#feature1').html($.i18n.prop('string_feature1'));
      $('#feature2').html($.i18n.prop('string_feature2'));
      $('#commonText1').html($.i18n.prop('string_commonText1'));
      $('#commonText2').html($.i18n.prop('string_commonText1'));
      $('#commonText3').html($.i18n.prop('string_commonText1'));
      $('#featuresTopTitle').html($.i18n.prop('string_featuresTopTitle'));
      $('#featuresTopTitleContent').html($.i18n.prop('string_featuresTopTitleContent'));

      $('#featuresTopTitle2').html($.i18n.prop('string_featuresTopTitle2'));
      $('#featuresTopTitleContent2').html($.i18n.prop('string_featuresTopTitleContent2'));
      $('#featuresTopTitle3').html($.i18n.prop('string_featuresTopTitle3'));
      $('#featuresTopTitleContent3').html($.i18n.prop('string_featuresTopTitleContent3'));
      $('#featuresTopTitle4').html($.i18n.prop('string_featuresTopTitle4'));
      $('#featuresTopTitleContent4').html($.i18n.prop('string_featuresTopTitleContent4'));
      $('#featuresTopTitle5').html($.i18n.prop('string_featuresTopTitle5'));
      $('#featuresTopTitleContent5').html($.i18n.prop('string_featuresTopTitleContent5'));
      $('#featuresTopTitle6').html($.i18n.prop('string_featuresTopTitle6'));
      $('#featuresTopTitleContent6').html($.i18n.prop('string_featuresTopTitleContent6'));

      $('#featuresTopTitle7').html($.i18n.prop('string_featuresTopTitle7'));
      $('#featuresTopTitleContent7').html($.i18n.prop('string_featuresTopTitleContent7'));
      $('#featuresTopTitle8').html($.i18n.prop('string_featuresTopTitle8'));
      $('#featuresTopTitleContent8').html($.i18n.prop('string_featuresTopTitleContent8'));
      $('#featuresTopTitle9').html($.i18n.prop('string_featuresTopTitle9'));
      $('#featuresTopTitleContent9').html($.i18n.prop('string_featuresTopTitleContent9'));
      $('#featuresTopTitle10').html($.i18n.prop('string_featuresTopTitle10'));
      $('#featuresTopTitleContent10').html($.i18n.prop('string_featuresTopTitleContent10'));
      $('#featuresTopTitle11').html($.i18n.prop('string_featuresTopTitle11'));
      $('#featuresTopTitleContent11').html($.i18n.prop('string_featuresTopTitleContent11'));
      $('#featuresTopTitle12').html($.i18n.prop('string_featuresTopTitle12'));
      $('#featuresTopTitleContent12').html($.i18n.prop('string_featuresTopTitleContent12'));
      $('#featuresTopTitle13').html($.i18n.prop('string_featuresTopTitle13'));
      $('#featuresTopTitleContent13').html($.i18n.prop('string_featuresTopTitleContent13'));
      $('#featuresTopTitle14').html($.i18n.prop('string_featuresTopTitle14'));
      $('#featuresTopTitleContent14').html($.i18n.prop('string_featuresTopTitleContent14'));
      $('#featuresTopTitle15').html($.i18n.prop('string_featuresTopTitle15'));
      $('#featuresTopTitleContent15').html($.i18n.prop('string_featuresTopTitleContent15'));




    }
  });
}

