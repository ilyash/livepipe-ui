/**
 * @author Ryan Johnson <http://syntacticx.com/>
 * @copyright 2008 PersonalGrid Corporation <http://personalgrid.com/>
 * @package LivePipe UI
 * @license MIT
 * @url http://livepipe.net/controls/hotkey/
 * @attribution http://www.quirksmode.org/js/cookies.html
 * Modified not to use Object.Event
 * Modified not to use Prototype - Ilya Sher, 2012
 */

/*global document */

var Cookie = {
  secondsFromNow: function(seconds) {
    var d = new Date();
    d.setTime(d.getTime() + (seconds * 1000));
    return d.toGMTString();
  },
  set: function(name,value,seconds){
    var t = [name + "=" + value];
    if(seconds) {
      t.push('expires=' + Cookie.secondsFromNow(seconds));
    }
    t.push("path=/");
    document.cookie = t.join("; ");
  },
  get: function(name){
    var valueMatch = new RegExp(name + "=([^;]+)").exec(document.cookie);
    return valueMatch ? valueMatch[1] : null;
  },
  unset: function(name){
    Cookie.set(name,'',-1);
  }
};
