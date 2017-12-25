!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.time=t()}(this,function(){"use strict";!function(e,t){var n=/("|')((?:\\?.)*?)\1|([YMDZ])\3\3\3?|([YMDHhmsWSZ])(\4?)|[uUASwoQ]/g,a=/(\d+)[-.\/](\d+)[-.\/](\d+)/,s=/(\d+):(\d+)(?::(\d+))?(\.\d+)?(?:\s*(?:(a)|(p))\.?m\.?)?(\s*(?:Z|GMT|UTC)?(?:([-+]\d\d):?(\d\d)?)?)?/i,r=/\\(.)/g,i={D:"Date",h:"Hours",m:"Minutes",s:"Seconds",S:"Milliseconds"},o={seconds:1e3,sec:1e3,minutes:6e4,min:6e4,hours:36e5,hour:36e5,days:864e5,day:864e5,weeks:6048e5,week:6048e5};e[t].date=e[t].format=function(t,a){t=e.masks[t]||t||e.masks.default;var s,o=this,u=+o,d="get"+("UTC:"==t.slice(0,4)?(t=t.slice(4),"UTC"):""),m=void 0==a?o._z:a;return void 0!=m&&"get"==d&&(d="getUTC",o.setTime(u+36e5*m),s=60*m),t=t.replace(n,function(t,n,a,m,h,f){return a="Y"==m?o[d+"FullYear"]():"Z"==h||"Z"==m?(n=s||"get"==d&&-o.getTimezoneOffset()||0)?(n<0?(n=-n,"-"):"+")+(n<600?"0":"")+(0|n/60)+((n%=60)||m?(f||"ZZZZ"==t?"":":")+(n>9?n:"0"+n):""):"Z":m?e.names[o[d+("M"==m?"Month":"Day")]()+("DDD"==t?24:"D"==m?31:"MMM"==t?0:12)]:"Y"==h?o[d+"FullYear"]()%100:"W"==h?(n=new e(u+864e5*(4-(o[d+"Day"]()||7))),Math.ceil(((n.getTime()-n["s"+d.slice(1)+"Month"](0,1))/864e5+1)/7)):"M"==h?o[d+"Month"]()+1:"H"==h?o[d+"Hours"]()%12||12:h?o[d+i[h]]():"u"==t?o/1e3>>>0:"U"==t?u:"Q"==t?1+(o[d+"Month"]()/3|0):"A"==t?e[o[d+"Hours"]()>11?"pm":"am"]:"w"==t?o[d+"Day"]()||7:"o"==t?new e(u+864e5*(4-(o[d+"Day"]()||7)))[d+"FullYear"]():n?a.replace(r,"$1"):t,"SS"==t&&a<100&&(a="0"+a),f&&a<10&&"Z"!=h?"0"+a:a}),void 0!=s&&o.setTime(u),t},e[t].tz=function(e){return this._z=e,this},e[t].add=function(e,t){var n=this;return e|=0,"month"==t||"months"==t||("year"==t||"years"==t)&&(e*=12)?n.setUTCMonth(n.getUTCMonth()+e):e&&n.setTime(n.getTime()+e*(o[t]||1)),n},e[t].startOf=function(e){var t=this;return"year"==e||"years"==e?(t.setUTCMonth(0,1),e="day"):"month"!=e&&"months"!=e||(t.setUTCDate(1),e="day"),t.setTime(t-t%(o[e]||1)),t},e[t].endOf=function(e){return this.startOf(e).add(1,e).add(-1)},e[t].diff=function(e,t){return 0|(this-e)/(o[t]||1)},e.am="AM",e.pm="PM",e.masks={default:"DDD MMM DD YYYY hh:mm:ss",iso:"UTC:YYYY-MM-DD'T'hh:mm:ss'Z'"},e.names="JanFebMarAprMayJunJulAugSepOctNovDecJanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecemberSunMonTueWedThuFriSatSundayMondayTuesdayWednesdayThursdayFridaySaturday".match(/.[a-z]+/g),String[t].date=Number[t].date=function(t,n,r){var i,o,u,d=new e,m=+this||""+this;return isNaN(m)?((i=m.match(a))&&(o=i[1]>99?1:3,u=e.middleEndian?4-o:2,d.setFullYear(i[o],i[u]-1,i[6-u-o])),i=m.match(s)||[0,0,0],d.setHours(i[6]&&i[1]<12?+i[1]+12:i[5]&&12==i[1]?0:i[1],i[2],0|i[3],1e3*i[4]|0),i[7]&&(r=(0|i[8])+(0|i[9])/(i[8]<0?-60:60))):d.setTime(m<4294967296?1e3*m:m),void 0!=r&&d.setTime(d-6e4*(60*r+d.getTimezoneOffset())),t?d.format(t,n):d}}(Date,"prototype");return{name:"time",format:function(e,t){return e?e.date(t):""},getDateTime:function(e){return this.format(e,"YYYY-MM-DD hh:mm:ss")},getDate:function(e){return this.format(e,"YYYY-MM-DD")},getTime:function(e){return this.format(e,"hh:mm:ss")},add:function(e,t,n){return this.format(e).add(t,n)}}});
//# sourceMappingURL=index.umd.js.map
