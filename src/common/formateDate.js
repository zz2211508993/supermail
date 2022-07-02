
export function formateDate(){
  return Date.prototype.toLocaleString = function(date) {
    return this.getFullYear() +'-' + (this.getMonth() +1) +'-' + this.getDay() +' ' + this.getHours() +':' +this.getMinutes() +':' + this.getSeconds();
  };
}
export default formateDate;

