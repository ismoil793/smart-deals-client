export function convertDate(inputFormat) {
   function pad(s) {
      return (s < 10) ? '0' + s : s;
   }

   let d = new Date(inputFormat);
   return [ d.getFullYear(), pad(d.getMonth() + 1),pad(d.getDate()) ].join('-')
}