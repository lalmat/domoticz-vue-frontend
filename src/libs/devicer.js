export default {
  parse (item, value, precision=null) {
    let device  = (item) ? item.data : null;
    let enabled = !!(device && device[value]);

    let data = {
      id      : (enabled) ? device['ID']                 : null,
      idx     : (enabled) ? device['idx']                : '',
      value   : (enabled) ? device[value]                : "-",
      inverse : (enabled) ? this.inverse(device[value])  : "-",
      state   : (enabled) ? this.inverse2(device[value]) : "-",
    }

    if (typeof data.value == 'number' && precision) {
      let divisor = Math.pow(10,precision);
      data.value = Math.round(data.value*divisor)/divisor;
    }

    return data;
  },

  inverse (value) {
    if (typeof value !== 'string') return "-";
    if (value.indexOf('Set Level:') >= 0) return "Off";
    if (value == "On")     return "Off";
    if (value == "Off")    return "On";
    if (value == "Closed") return "Off";
    if (value == "Open")   return "On";
    return "-";
  },

  inverse2(value) {
    return this.inverse(this.inverse(value));
  }
}