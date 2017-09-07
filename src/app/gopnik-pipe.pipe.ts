import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gopnikPipe'
})
export class GopnikPipePipe implements PipeTransform {

  transform(value: string, args?: any) {
    if (!value) {
      return null;
    } else {
      let mapObj = {
        b:"б",
        B:"Б",
        c:"ц",
        C:"Ц",
        d:"д",
        D:"Д",
        e:"э",
        E:"Э",
        f:"ф",
        F:"Ф",
        g:"г",
        G:"Г",
        h:"х",
        H:"Х",
        i:"и",
        I:"И",
        j:"й",
        J:"Й",
        k:"к",
        l:"л",
        L:"Л",
        m:"м",
        n:"н",
        N:"Н",
        p:"п",
        P:"П",
        r:"р",
        R:"Р",
        s:"c",
        S:"C",
        t:"т",
        u:"y",
        U:"У",
        y:"ы",
        Y:"Ы",
        z:"з",
        Z:"З",
        ż:"ж",
        Ż:"Ж",
        ja:"я",
        JA:"Я",
        ju:"ю",
        sz:"ш",
        SZ:"Ш",
        cz:"ч",
        CZ:"Ч",
        szcz:"щ",
        SZCZ:"Щ",
      };
      value = value.replace(/szcz|SZCZ|cz|CZ|sz|SZ|ja|JA|ju|b|B|c|C|d|D|e|E|f|F|g|G|h|H|i|I|j|J|k|l|L|m|n|N|p|P|r|R|s|S|t|u|U|y|Y|z|Z|ż|Ż/gi, function(matched){
        return mapObj[matched];
      });
    }
    return value;
  }

}
