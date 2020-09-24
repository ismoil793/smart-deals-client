export function convertDate(inputFormat) {
   function pad(s) {
      return (s < 10) ? '0' + s : s;
   }

   let d = new Date(inputFormat);
   return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-')
}