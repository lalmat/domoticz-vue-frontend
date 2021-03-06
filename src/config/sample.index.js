export default {
  rooms: [
    {
      type: "bedroom",
      name: "Bedroom 1",
      devices: {
        light  : { id: "", data: null },
        shutter: { id: "", data: null },
        temp   : { id: "", data: null }
      }
    },
    {
      type: "bedroom",
      name: "Bedroom 2",
      devices: {
        light  : { id: "", data: null },
        shutter: null,
        temp   : null
      }
    },
    {
      type: "bathroom",
      name: "Bathroom 1",
      devices: {
        light       : { id: "", data: null },
        light_mirror: { id: "", data: null },
        radiator    : { id: "", data: null },
        temp        : { id: "", data: null },
        fan         : { id: "", data: null },
      }
    }
  ],
  cameras: [
    {
      name: "Salon",
      url: "https://picsum.photos/640/480"
    },
  ]
}