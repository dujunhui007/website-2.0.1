/**
 *
 */
$(function () {
  var languageFlag, getCookieKey;
  languageFlag = "languageFlag";
  getCookieKey = getCookie(languageFlag);
  if (getCookieKey) {
    // console.log(getCookieKey);
    window.flag = getCookieKey;
    // console.log(window.flag);
    if (getCookieKey == 0) {
      loadProperties("strings_en");
      $(".switchLanguageBtn .btnContainer .btn1 .btnFlag1 img").attr("src", "images/uk.png");
      $(".switchLanguageBtn .btnContainer .btn2 .btnFlag2 img").attr("src", "images/china.png");
      $(".switchLanguageBtn .btnContainer .btn1  .btnText1").html("English");
      $(".switchLanguageBtn .btnContainer .btn2  .btnText2").html("中文简体");
      window.flag = 0;
    } else {
      loadProperties("strings_zh-CN");
      $(".switchLanguageBtn .btnContainer .btn1 .btnFlag1 img").attr("src", "images/china.png");
      $(".switchLanguageBtn .btnContainer .btn2 .btnFlag2 img").attr("src", "images/uk.png");
      $(".switchLanguageBtn .btnContainer .btn1  .btnText1").html("中文简体");
      $(".switchLanguageBtn .btnContainer .btn2  .btnText2").html("English");
      window.flag = 1;
    }

  } else {
    // alert("b" + getCookieKey);
    $(".switchLanguageBtn .btnContainer .btn1 .btnFlag1 img").attr("src", "images/uk.png");
    $(".switchLanguageBtn .btnContainer .btn2 .btnFlag2 img").attr("src", "images/china.png");
    $(".switchLanguageBtn .btnContainer .btn1  .btnText1").html("English");
    $(".switchLanguageBtn .btnContainer .btn2  .btnText2").html("中文简体");
    loadProperties("strings_en");
    window.flag = 1;
  }


  function setCookie(key, value) {
    document.cookie = key + "=" + escape(value);
  }

  function getCookie(flag) {
    var arr, reg = new RegExp("(^| )" + flag + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return (arr[2]);
    } else {
      return null;
    }
  }


  $(".switchLanguageBtn .btnContainer .btn2").click(function () {
    // alert(window.flag);
    if (flag == 1) {
      // alert(window.flag);
      $(".switchLanguageBtn .btnContainer .btn1 .btnFlag1 img").attr("src", "images/uk.png");
      $(".switchLanguageBtn .btnContainer .btn2 .btnFlag2 img").attr("src", "images/china.png");
      $(".switchLanguageBtn .btnContainer .btn1  .btnText1").html("English");
      $(".switchLanguageBtn .btnContainer .btn2  .btnText2").html("中文简体");
      loadProperties("strings_en");
      window.flag = 0;
      setCookie(languageFlag, flag);
    } else {
      // alert(window.flag);
      $(".switchLanguageBtn .btnContainer .btn1 .btnFlag1 img").attr("src", "images/china.png");
      $(".switchLanguageBtn .btnContainer .btn2 .btnFlag2 img").attr("src", "images/uk.png");
      $(".switchLanguageBtn .btnContainer .btn1  .btnText1").html("中文简体");
      $(".switchLanguageBtn .btnContainer .btn2  .btnText2").html("English");
      loadProperties("strings_zh-CN");
      window.flag = 1;
      setCookie(languageFlag, flag);
    }
  });
});

function loadProperties(str) {
  jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
    name: str, //资源文件名称
    path: 'resources/i18n/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    callback: function () {//加载成功后设置显示内容
      $('#dappNav1').html($.i18n.prop('string_dappNav1'));
      $('#dappNav2').html($.i18n.prop('string_dappNav2'));
      $('#dappNav3').html($.i18n.prop('string_dappNav3'));
      $('#dappNav4').html($.i18n.prop('string_dappNav4'));
      $('#dappNav5').html($.i18n.prop('string_dappNav5'));
      $('#dappNav6').html($.i18n.prop('string_dappNav6'));
      $('#dappNav7').html($.i18n.prop('string_dappNav7'));
      $('#dappNav8').html($.i18n.prop('string_dappNav8'));
      $('#dappNav9').html($.i18n.prop('string_dappNav9'));

      $('#applicationCenterTitle1').html($.i18n.prop('string_applicationCenterTitle1'));
      $('#applicationCenterTitle2').html($.i18n.prop('string_applicationCenterTitle1'));
      $('#applicationCenterTitle3').html($.i18n.prop('string_applicationCenterTitle1'));
      $('#applicationCenterTitle4').html($.i18n.prop('string_applicationCenterTitle1'));

      $('#dappDescribe1').html($.i18n.prop('string_dappDescribe1'));
      $('#dappDescribe2').html($.i18n.prop('string_dappDescribe2'));
      $('#dappDescribe3').html($.i18n.prop('string_dappDescribe3'));
      $('#dappDescribe4').html($.i18n.prop('string_dappDescribe4'));

      $('#aschSide1').html($.i18n.prop('string_aschSide1'));
      $('#aschSide2').html($.i18n.prop('string_aschSide2'));
      $('#aschSide3').html($.i18n.prop('string_aschSide3'));
      $('#aschSide4').html($.i18n.prop('string_aschSide4'));
      $('#aschSide5').html($.i18n.prop('string_aschSide5'));
      $('#aschSide6').html($.i18n.prop('string_aschSide6'));
      $('#aschSide7').html($.i18n.prop('string_aschSide7'));
      $('#aschSide8').html($.i18n.prop('string_aschSide8'));
      $('#aschSide9').html($.i18n.prop('string_aschSide9'));
      $('#aschSide10').html($.i18n.prop('string_aschSide10'));
      $('#aschSide11').html($.i18n.prop('string_aschSide11'));
      $('#aschSide12').html($.i18n.prop('string_aschSide12'));

      $('#websiteText1').html($.i18n.prop('string_websiteText1'));
      $('#websiteText2').html($.i18n.prop('string_websiteText1'));
      $('#websiteText3').html($.i18n.prop('string_websiteText1'));
      $('#websiteText4').html($.i18n.prop('string_websiteText1'));

      $('#whitePaper1').html($.i18n.prop('string_whitePaper1'));
      $('#whitePaper2').html($.i18n.prop('string_whitePaper1'));
      $('#whitePaper3').html($.i18n.prop('string_whitePaper1'));
      $('#whitePaper4').html($.i18n.prop('string_whitePaper1'));

      $('#dappContentTitle21').html($.i18n.prop('string_dappContentTitle21'));
      $('#dappContentTitle22').html($.i18n.prop('string_dappContentTitle21'));
      $('#dappContentTitle31').html($.i18n.prop('string_dappContentTitle31'));
      $('#dappContentTitle32').html($.i18n.prop('string_dappContentTitle31'));

      $('#dappIntroduction1').html($.i18n.prop('string_dappIntroduction1'));
      $('#dappIntroduction2').html($.i18n.prop('string_dappIntroduction1'));
      $('#dappIntroduction3').html($.i18n.prop('string_dappIntroduction1'));
      $('#dappIntroduction4').html($.i18n.prop('string_dappIntroduction1'));

      $('#dappIntroductionContent1').html($.i18n.prop('string_dappIntroductionContent1'));
      $('#dappIntroductionContent2').html($.i18n.prop('string_dappIntroductionContent2'));
      $('#dappIntroductionContent3').html($.i18n.prop('string_dappIntroductionContent3'));
      $('#dappIntroductionContent4').html($.i18n.prop('string_dappIntroductionContent4'));

      $('#dappFooterText11').html($.i18n.prop('string_dappFooterText11'));
      $('#dappFooterText21').html($.i18n.prop('string_dappFooterText11'));
      $('#dappFooterText31').html($.i18n.prop('string_dappFooterText11'));
      $('#dappFooterText41').html($.i18n.prop('string_dappFooterText11'));
      $('#dappFooterText12').html($.i18n.prop('string_dappFooterText12'));
      $('#dappFooterText22').html($.i18n.prop('string_dappFooterText12'));
      $('#dappFooterText32').html($.i18n.prop('string_dappFooterText12'));
      $('#dappFooterText42').html($.i18n.prop('string_dappFooterText12'));
      $('#dappFooterText13').html($.i18n.prop('string_dappFooterText13'));
      $('#dappFooterText23').html($.i18n.prop('string_dappFooterText13'));
      $('#dappFooterText33').html($.i18n.prop('string_dappFooterText13'));
      $('#dappFooterText43').html($.i18n.prop('string_dappFooterText13'));


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
      $('#commonText4').html($.i18n.prop('string_commonText1'));
      $('#commonText5').html($.i18n.prop('string_commonText1'));
      $('#commonText6').html($.i18n.prop('string_commonText1'));
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

      $('#AdvantagesTitle').html($.i18n.prop('string_AdvantagesTitle'));

      $('#advantages1').html($.i18n.prop('string_advantages1'));
      $('#advantagesContent1').html($.i18n.prop('string_advantagesContent1'));
      $('#advantages2').html($.i18n.prop('string_advantages2'));
      $('#advantagesContent2').html($.i18n.prop('string_advantagesContent2'));
      $('#advantages3').html($.i18n.prop('string_advantages3'));
      $('#advantagesContent3').html($.i18n.prop('string_advantagesContent3'));
      $('#advantages4').html($.i18n.prop('string_advantages4'));
      $('#advantagesContent4').html($.i18n.prop('string_advantagesContent4'));
      $('#advantages5').html($.i18n.prop('string_advantages5'));
      $('#advantagesContent5').html($.i18n.prop('string_advantagesContent5'));
      $('#advantages6').html($.i18n.prop('string_advantages6'));
      $('#advantagesContent6').html($.i18n.prop('string_advantagesContent6'));

      $('#scenariosTitle').html($.i18n.prop('string_scenariosTitle'));
      $('#scenariosTitle1').html($.i18n.prop('string_scenariosTitle1'));

      $('#scenariosTitle2').html($.i18n.prop('string_scenariosTitle2'));
      $('#scenariosDescribe2').html($.i18n.prop('string_scenariosDescribe2'));
      $('#scenariosContent2').html($.i18n.prop('string_scenariosContent2'));
      $('#scenariosTitle3').html($.i18n.prop('string_scenariosTitle3'));
      $('#scenariosDescribe3').html($.i18n.prop('string_scenariosDescribe3'));
      $('#scenariosContent3').html($.i18n.prop('string_scenariosContent3'));
      $('#scenariosTitle4').html($.i18n.prop('string_scenariosTitle4'));
      $('#scenariosDescribe4').html($.i18n.prop('string_scenariosDescribe4'));
      $('#scenariosContent4').html($.i18n.prop('string_scenariosContent4'));
      $('#scenariosTitle5').html($.i18n.prop('string_scenariosTitle5'));
      $('#scenariosDescribe5').html($.i18n.prop('string_scenariosDescribe5'));
      $('#scenariosContent5').html($.i18n.prop('string_scenariosContent5'));
      $('#scenariosTitle6').html($.i18n.prop('string_scenariosTitle6'));
      $('#scenariosDescribe6').html($.i18n.prop('string_scenariosDescribe6'));
      $('#scenariosContent6').html($.i18n.prop('string_scenariosContent6'));
      $('#scenariosTitle7').html($.i18n.prop('string_scenariosTitle7'));
      $('#scenariosDescribe7').html($.i18n.prop('string_scenariosDescribe7'));
      $('#scenariosContent7').html($.i18n.prop('string_scenariosContent7'));

      $('#downloadsTitle').html($.i18n.prop('string_downloadsTitle'));
      $('#downloadsTitle1').html($.i18n.prop('string_downloadsTitle1'));
      $('#downloadsTitle11').html($.i18n.prop('string_downloadsTitle1'));
      $('#downloadsTitle2').html($.i18n.prop('string_downloadsTitle2'));
      $('#downloadsTitle22').html($.i18n.prop('string_downloadsTitle2'));
      $('#downloadsTitle3').html($.i18n.prop('string_downloadsTitle3'));
      $('#downloadsTitle33').html($.i18n.prop('string_downloadsTitle3'));
      $('#downloadsTitle4').html($.i18n.prop('string_downloadsTitle4'));
      $('#downloadsTitle44').html($.i18n.prop('string_downloadsTitle4'));

      $('#downloadContent1').html($.i18n.prop('string_downloadContent1'));
      $('#downloadContent2').html($.i18n.prop('string_downloadContent2'));
      $('#downloadContent3').html($.i18n.prop('string_downloadContent3'));
      $('#downloadContent4').html($.i18n.prop('string_downloadContent4'));

      $('#downloadLink1').html($.i18n.prop('string_downloadLink1'));
      $('#downloadLink2').html($.i18n.prop('string_downloadLink1'));
      $('#downloadLink3').html($.i18n.prop('string_downloadLink1'));
      $('#downloadLink4').html($.i18n.prop('string_downloadLink1'));
      $('#downloadLink11').html($.i18n.prop('string_downloadLink11'));
      $('#downloadLink22').html($.i18n.prop('string_downloadLink11'));
      $('#downloadLink33').html($.i18n.prop('string_downloadLink11'));
      $('#downloadLink44').html($.i18n.prop('string_downloadLink11'));


      $('#partnersTitle').html($.i18n.prop('string_partnersTitle'));
      $('#linkTitle1').html($.i18n.prop('string_linkTitle1'));
      $('#linkTitle2').html($.i18n.prop('string_linkTitle2'));
      $('#linkTitle3').html($.i18n.prop('string_linkTitle3'));
      $('#linkTitle4').html($.i18n.prop('string_linkTitle4'));

      $('#footerLink1').html($.i18n.prop('string_footerLink1'));
      $('#footerLink2').html($.i18n.prop('string_footerLink2'));
      $('#footerLink3').html($.i18n.prop('string_footerLink3'));

    }
  });
}

