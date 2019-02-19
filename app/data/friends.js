// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================


var friends = [
  {
    name: "Micheal Cera",
    photo: "http://www.movistarplus.es/recorte/e/detallev/03e16e7542bd602f5fe2baa22850a404",
    scores: [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    name: "Amy Pohler",
    photo: "data:image/jpeg;base64,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",
    scores: [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    name: "Jerry Seinfeld",
    photo: "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/06/between_two_ferns_with_zach_galifianakis_jerry_seinfeld_screen_shot-h_2018.jpg",
    scores: [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    name: "Louis C.K",
    photo: "http://mouse.latercera.com/wp-content/uploads/2017/11/louis.jpg",
    scores: [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    name: "Doug Benson",
    photo: "https://media.dead-frog.com/big-comics/doug-benson-16x9.jpg?mtime=1518939182",
    scores: [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    name: "Jordan Peele",
    photo: "https://media.gq.com/photos/5893a96b4f5346a13b805b19/3:4/w_640/Jordan%20Peele-0317-GQ-MOPL01-02.jpg",
    scores: [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  }

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
