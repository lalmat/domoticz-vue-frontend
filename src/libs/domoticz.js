import { Base64 } from 'js-base64';

export default {

  async raw_devices() {
    let url = `${process.env.VUE_APP_DOMOTICZ_IP}/json.htm?type=devices&used=true&filter=all`
    return await domoticz_api(url);
  },

  async update_devices(devicesBlock) {
    let raw_devices = await this.raw_devices();
    let id_devices = []
    if (raw_devices != null) {
      for (let dev_raw of raw_devices.result) {
        id_devices[dev_raw.ID] = dev_raw;
      }
    }

                                      
    for (let block in devicesBlock) {
      for (let zone of devicesBlock[block]) {
        for (let device in zone.devices) {
          if (zone.devices[device]) {
            zone.devices[device].data = id_devices[zone.devices[device].id];
          }
        }
      }
    }

    return devicesBlock;
  },

  async switch(idx, state) {
    let url = `${process.env.VUE_APP_DOMOTICZ_IP}/json.htm?type=command&param=switchlight&idx=${idx}&switchcmd=${state}`;
    console.log(url);
    return await domoticz_api(url);
  },

}

async function domoticz_api(url) {
  let base64_auth = Base64.encode(process.env.VUE_APP_DOMOTICZ_AUTH);
  let response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${base64_auth}`
    }
  });
  let data = await response.json();
  return data;
}
