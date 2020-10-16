// Jquery to customize google translate element
import $ from "jquery"

export function googleTranslateEl() {
   // RESTYLE THE DROPDOWN MENU
   $('#google_translate_element').on("click", function () {

      // Change font family and color
      $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
          .css({
             'color': '#544F4B',
             'font-family': 'Montserrat, Roboto, sans-serif'
          });
      // Change menu's padding
      $("iframe").contents().find('.goog-te-menu2-item-selected').css('display', 'none');

      // Change menu's padding
      $("iframe").contents().find('.goog-te-menu2').css('padding', '0px');

      // Change menu items Title from
      $("iframe").contents().find('.goog-te-menu2 span:contains(English)')
          .before('<img src="/images/lang/en.png" alt="" style="width: 20px; height: 20px" />').text('EN');
      $("iframe").contents().find('.goog-te-menu2 span:contains(Uzbek)')
          .before('<img src="/images/lang/uz.png" alt="" style="width: 20px; height: 15px" />').text('UZ');
      $("iframe").contents().find('.goog-te-menu2 span:contains(Russian)')
          .before('<img src="/images/lang/ru.png" alt="" style="width: 20px; height: 15px" />').text('RU');

      // Change the padding of the languages
      $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '15px')
          .css( 'display', 'flex').css('align-items', 'center').css('justify-content', 'space-around')
          .css('width', '100%');

      // Change the width of the languages
      $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
      $("iframe").contents().find('td').css('width', '100%');

      // Change hover effects
      $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
         $(this).css('background-color', '#4385F5')
             .css( 'display', 'flex').css('align-items', 'center').css('justify-content', 'space-around')
             .css('width', '100%')
             .find('span.text').css('color', 'white');
      }, function () {
         $(this).css('background-color', 'white')
             .css( 'display', 'flex').css('align-items', 'center').css('justify-content', 'space-around')
             .css('width', '100%')
             .find('span.text').css('color', '#544F4B');
      });

      // Change Google's default blue border
      $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

      // Change the iframe's box shadow
      $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');

      // Change the iframe's size and position?
      $(".goog-te-menu-frame").css({
         'height': '90px',
         'width': '99px'
      });
      // Change iframes's size
      $("iframe").contents().find('.goog-te-menu2').css({
         'height': '100%',
         'width': '100%'
      });
   });
}