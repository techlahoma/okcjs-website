/* Usage: {% meetup_btn [url] [width] %} */
hexo.extend.tag.register('meetup_btn', function(args) {
  var util = require('hexo-util'),
      htmlTag = util.htmlTag;

  var rWidth = /\d{1,3}/, rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;
  var _url, _width;

  // Validate args
  if(args.length !== 2) {
    throw 'meetup_btn: Url and width required';
  }

  if(!rUrl.test(args[0])) {
    throw 'meetup_btn: args[0] does not match url regex';
  }

  if(!rWidth.test(args[1])) {
    throw 'meetup_btn: args[1] does not match width regex';
  }

  _url = args[0];
  _width = args[1];

  var a_attrs = {
    title: 'RSVP on Meetup.com',
    style: 'color: #181818;text-decoration: none;',
    target: '_blank',
    href: _url
  };
  var a_href_html = htmlTag('a', a_attrs, 'RSVP for okcjs on Meetup');

  var inner_div_attrs = {
    style:
      'border-collapse: separate !important;' +
      'border: 2px none #707070;' +
      'border-radius: 3px;' +
      'padding: 14px;' +
      'background-color: #E7B932;' +
      'font-family: Arial;' +
      'font-size: 16px;' +
      'font-weight: bold;' +
      'mso-table-lspace: 0pt;' +
      'mso-table-rspace: 0pt;' +
      '-ms-text-size-adjust: 100%;' +
      '-webkit-text-size-adjust: 100%;' +
      'letter-spacing: normal;' +
      'line-height:100%;' +
      'text-align: center;' +
      'word-wrap: break-word;' +
      'display: block;' +
      'width:' + _width + 'px;' +
      'margin: 0 auto;'
  };
  var innder_div_html = htmlTag('div', inner_div_attrs, a_href_html);

  return htmlTag('div', { style: 'margin-top: 10px;'}, innder_div_html);
}, false);
