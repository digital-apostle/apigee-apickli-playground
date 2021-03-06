// let comiclist = require('comic-list');

// promise
// comiclist().then(comics => {
//     comics.forEach(function(issue) {
//         console.log(issue.raw_name);
//     });

// comiclist().then(comics => {
//     var comicJSONSTR = JSON.stringify(comics)
//         console.log(JSON.parse(comicJSONSTR))
// }, err => {
//     console.log(err);
// });

const weeklyComics = [
  {
    publisher: 'AVATAR PRESS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Cinema%2BPurgatorio%2B%25252317___591861%3Fqt%3Dssnrp20190320',
    raw_name: "Cinema Purgatorio #17 (Cover A Kevin O'Neil Cinema Purgatorio Variant)",
    release_date: '2019-03-27T00:00:00.000Z',
    price: '6.99',
    type: 'single issue',
    issue_num: 17,
    title: 'Cinema Purgatorio',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833569',
    raw_name: 'Cinema Purgatorio #17 (Cover B Raulo Caceres Code Pru Variant)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '6.99',
    type: 'single issue',
    issue_num: 17,
    title: 'Cinema Purgatorio',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833568',
    raw_name: 'Cinema Purgatorio #17 (Cover C Gabriel Andrade A More Perfect Union Variant)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '6.99',
    type: 'single issue',
    issue_num: 17,
    title: 'Cinema Purgatorio',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833567',
    raw_name: 'Cinema Purgatorio #17 (Cover D Nahuel Lopez Modded Variant)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '6.99',
    type: 'single issue',
    issue_num: 17,
    title: 'Cinema Purgatorio',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833566',
    raw_name: 'Cinema Purgatorio #17 (Cover E Gabriel Andrade The Vast Variant)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '6.99',
    type: 'single issue',
    issue_num: 17,
    title: 'Cinema Purgatorio',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833565',
    raw_name: 'Cinema Purgatorio #17 (Cover F Gabriel Andrade Ancient Tome Premium Variant)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '9.99',
    type: 'single issue',
    issue_num: 17,
    title: 'Cinema Purgatorio',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690239',
    raw_name: 'Crossed Badlands #1 (Jacen Burrows Emerald City Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '5.99',
    type: 'single issue',
    issue_num: 1,
    title: 'Crossed Badlands',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850689469',
    raw_name: 'Crossed Badlands #4 (Michael DiPascale Philadelphia VIP Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '19.99',
    type: 'single issue',
    issue_num: 4,
    title: 'Crossed Badlands',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690217',
    raw_name: 'Crossed Badlands #5 (Jacen Burrows Chicago Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '5.99',
    type: 'single issue',
    issue_num: 5,
    title: 'Crossed Badlands',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690207',
    raw_name: 'Crossed Badlands #50 (Jacen Burrows Denver VIP Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '19.99',
    type: 'single issue',
    issue_num: 50,
    title: 'Crossed Badlands',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690288',
    raw_name: 'Crossed Badlands Opening Salvo (Jacen Burrows VIP Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '19.99',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690326',
    raw_name: 'Providence #7 (Of 12)(Jacen Burrows & Michael DiPascale Ghoul Buried Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '9.99',
    type: 'single issue',
    issue_num: 7,
    title: 'Providence',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690328',
    raw_name: 'Providence #7 (Of 12)(Jacen Burrows & Michael DiPascale Ghoul Disaster Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '9.99',
    type: 'single issue',
    issue_num: 7,
    title: 'Providence',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690327',
    raw_name: 'Providence #7 (Of 12)(Jacen Burrows & Michael DiPascale Ghoul Stolen Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '9.99',
    type: 'single issue',
    issue_num: 7,
    title: 'Providence',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690329',
    raw_name: 'Providence #7 (Of 12)(Jacen Burrows & Michael DiPascale Ghoul Subway Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '9.99',
    type: 'single issue',
    issue_num: 7,
    title: 'Providence',
  },
  {
    publisher: 'AVATAR PRESS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690325',
    raw_name: 'Uber #0 (Canaan White Enhanced Phoenix Blitzkrieg Variant Cover)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '14.99',
    type: 'single issue',
    issue_num: 0,
    title: 'Uber',
  },
  {
    publisher: 'BOOM! STUDIOS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Adventure%2BTime%2BSeason%2B11%2B%2525236%2BMain___593647%3Fqt%3Dssnrp20190320',
    raw_name: 'Adventure Time Season 11 #6 (Cover A Jorge Corona)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 6,
    title: 'Adventure Time Season 11',
  },
  {
    publisher: 'BOOM! STUDIOS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Adventure%2BTime%2BSeason%2B11%2B%2525236%2BPreorder%2BBenbassat___593648%3Fqt%3Dssnrp20190320',
    raw_name: 'Adventure Time Season 11 #6 (Cover B Julie Benbassat)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 6,
    title: 'Adventure Time Season 11',
  },
  {
    publisher: 'BOOM! STUDIOS',
    store_url: 'http://comics.gocollect.com/priceguide/view/1008617',
    raw_name: 'Adventure Time Season 11 #6 (Cover C A.C. Esguerra)',
    release_date: '2019-03-27T00:00:00.000Z',
    type: 'single issue',
    issue_num: 6,
    title: 'Adventure Time Season 11',
  },
  {
    publisher: 'BOOM! STUDIOS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690470',
    raw_name: 'Avant-Guards #3 (Of 12)(Cover A Noah Hayes)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 3,
    title: 'Avant-Guards',
  },
  {
    publisher: 'BOOM! STUDIOS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690469',
    raw_name: 'Avant-Guards #3 (Of 12)(Cover B Cara McGee)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 3,
    title: 'Avant-Guards',
  },
  {
    publisher: 'BOOM! STUDIOS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Bone%2BParish%2B%2525238%2B%252528of%2B12%252529___593608%3Fqt%3Dssnrp20190320',
    raw_name: 'Bone Parish #8 (Of 12)(Cover A Rod Reis)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 8,
    title: 'Bone Parish',
  },
  {
    publisher: 'BOOM! STUDIOS',
    store_url: 'https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=878201773',
    raw_name: 'Bone Parish #8 (Of 12)(Cover B Jakub Rebelka)',
    release_date: '2019-03-27T00:00:00.000Z',
    type: 'single issue',
    issue_num: 8,
    title: 'Bone Parish',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Dial%2BH%2Bfor%2BHero%2B%2525231%2B%252528of%2B6%252529%2B%252528Derington%2BVariant%252529___593525%3Fqt%3Dssnrp20190320',
    raw_name: 'Dial H For Hero #1 (Of 6)(Cover B Nick Derington)',
    release_date: '2019-03-27T00:00:00.000Z',
    type: 'single issue',
    issue_num: 1,
    title: 'Dial H For Hero',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Flash%2B%25252367___593745%3Fqt%3Dssnrp20190320',
    raw_name: 'Flash #67 (Cover A Rafa Sandoval & Jordi Tarragona)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 67,
    title: 'Flash',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Flash%2B%25252367%2B%252528Sook%2BVariant%252529___593209%3Fqt%3Dssnrp20190320',
    raw_name: 'Flash #67 (Cover B Ryan Sook)',
    release_date: '2019-03-27T00:00:00.000Z',
    type: 'single issue',
    issue_num: 67,
    title: 'Flash',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Graphic+Novels/Profile/Flash%2BTPB%2BVol%2B09%2BReckoning%2BForces___591086%3Fqt%3Dssnrp20190320',
    raw_name: 'Flash Volume 9 Reckoning Of The Forces TP',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '16.99',
    type: 'trade paperback',
    title: 'Flash',
    volume_num: 9,
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Freedom%2BFighters%2B%2525234%2B%252528of%2B12%252529___593746%3Fqt%3Dssnrp20190320',
    raw_name: 'Freedom Fighters #4 (Of 12)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 4,
    title: 'Freedom Fighters',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Goddess%2BMode%2B%2525234___593238%3Fqt%3Dssnrp20190320',
    raw_name: 'Goddess Mode #4',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 4,
    title: 'Goddess Mode',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Graphic+Novels/Profile/Harley%2BQuinn%2BTPB%2BVol%2B02%2BHarley%2BDestroys%2Bthe%2BUniverse___591089%3Fqt%3Dssnrp20190320',
    raw_name: 'Harley Quinn Volume 2 Harley Destroys The Universe TP',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '16.99',
    type: 'trade paperback',
    title: 'Harley Quinn',
    volume_num: 2,
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Heroes%2Bin%2BCrisis%2B%2525237%2B%252528of%2B9%252529___593526%3Fqt%3Dssnrp20190320',
    raw_name: 'Heroes In Crisis #7 (Of 9)(Cover A Clay Mann)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 7,
    title: 'Heroes In Crisis',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Heroes%2Bin%2BCrisis%2B%2525237%2B%252528of%2B9%252529%2B%252528Sook%2BVariant%252529___593527%3Fqt%3Dssnrp20190320',
    raw_name: 'Heroes In Crisis #7 (Of 9)(Cover B Ryan Sook)',
    release_date: '2019-03-27T00:00:00.000Z',
    type: 'single issue',
    issue_num: 7,
    title: 'Heroes In Crisis',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Hex%2BWives%2B%2525236___593755%3Fqt%3Dssnrp20190320',
    raw_name: 'Hex Wives #6',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 6,
    title: 'Hex Wives',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Justice%2BLeague%2BOdyssey%2B%2525237___593763%3Fqt%3Dssnrp20190320',
    raw_name: 'Justice League Odyssey #7 (Cover A Carmine Di Giandomenico)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 7,
    title: 'Justice League Odyssey',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Justice%2BLeague%2BOdyssey%2B%2525237%2B%252528Infante%2BVariant%252529___593764%3Fqt%3Dssnrp20190320',
    raw_name: 'Justice League Odyssey #7 (Cover B Toni Infante)',
    release_date: '2019-03-27T00:00:00.000Z',
    type: 'single issue',
    issue_num: 7,
    title: 'Justice League Odyssey',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Looney%2BTunes%2B%252523248___593765%3Fqt%3Dssnrp20190320',
    raw_name: 'Looney Tunes #248',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '2.99',
    type: 'single issue',
    issue_num: 248,
    title: 'Looney Tunes',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Martian%2BManhunter%2B%2525234%2B%252528of%2B12%252529___593767%3Fqt%3Dssnrp20190320',
    raw_name: 'Martian Manhunter #4 (Of 12)(Cover A Riley Rossmo)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 4,
    title: 'Martian Manhunter',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Martian%2BManhunter%2B%2525234%2B%252528of%2B12%252529%2B%252528Variant%2BEdition%252529___599398%3Fqt%3Dssnrp20190320',
    raw_name: 'Martian Manhunter #4 (Of 12)(Cover B Joshua Middleton)',
    release_date: '2019-03-27T00:00:00.000Z',
    type: 'single issue',
    issue_num: 4,
    title: 'Martian Manhunter',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Graphic+Novels/Profile/Mera%2BTidebreaker%2BTPB___590920%3Fqt%3Dssnrp20190320',
    raw_name: 'Mera Tidebreaker TP',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '16.99',
    type: 'trade paperback',
    title: 'Mer',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Graphic+Novels/Profile/Sandman%2BOmnibus%2BHC%2BVol%2B03___577991%3Fqt%3Dssnrp20190320',
    raw_name: 'Sandman Omnibus Volume 3 HC',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '150.00',
    type: 'hardcover',
    title: 'Sandman Omnibus',
    volume_num: 3,
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Scooby%2BDoo%2BTeam%2BUp%2B%25252347___593533%3Fqt%3Dssnrp20190320',
    raw_name: 'Scooby-Doo Team-Up #47',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '2.99',
    type: 'single issue',
    issue_num: 47,
    title: 'Scooby-Doo Team-Up',
  },
  {
    publisher: 'DC COMICS',
    store_url: 'http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Shazam%2B%2525234___593235%3Fqt%3Dssnrp20190320',
    raw_name: 'Shazam #4 (Cover A Dale Eaglesham)',
    release_date: '2019-03-27T00:00:00.000Z',
    price: '3.99',
    type: 'single issue',
    issue_num: 4,
    title: 'Shazam',
  },
];

console.log(JSON.stringify(weeklyComics));

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.getWeeklyComicReleases = (req, res) => {
  
    const weeklyComicReleases = [{"publisher":"AVATAR PRESS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Cinema%2BPurgatorio%2B%25252317___591861%3Fqt%3Dssnrp20190320","raw_name":"Cinema Purgatorio #17 (Cover A Kevin O'Neil Cinema Purgatorio Variant)","release_date":"2019-03-27T00:00:00.000Z","price":"6.99","type":"single issue","issue_num":17,"title":"Cinema Purgatorio"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833569","raw_name":"Cinema Purgatorio #17 (Cover B Raulo Caceres Code Pru Variant)","release_date":"2019-03-27T00:00:00.000Z","price":"6.99","type":"single issue","issue_num":17,"title":"Cinema Purgatorio"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833568","raw_name":"Cinema Purgatorio #17 (Cover C Gabriel Andrade A More Perfect Union Variant)","release_date":"2019-03-27T00:00:00.000Z","price":"6.99","type":"single issue","issue_num":17,"title":"Cinema Purgatorio"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833567","raw_name":"Cinema Purgatorio #17 (Cover D Nahuel Lopez Modded Variant)","release_date":"2019-03-27T00:00:00.000Z","price":"6.99","type":"single issue","issue_num":17,"title":"Cinema Purgatorio"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833566","raw_name":"Cinema Purgatorio #17 (Cover E Gabriel Andrade The Vast Variant)","release_date":"2019-03-27T00:00:00.000Z","price":"6.99","type":"single issue","issue_num":17,"title":"Cinema Purgatorio"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=833833565","raw_name":"Cinema Purgatorio #17 (Cover F Gabriel Andrade Ancient Tome Premium Variant)","release_date":"2019-03-27T00:00:00.000Z","price":"9.99","type":"single issue","issue_num":17,"title":"Cinema Purgatorio"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690239","raw_name":"Crossed Badlands #1 (Jacen Burrows Emerald City Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"5.99","type":"single issue","issue_num":1,"title":"Crossed Badlands"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850689469","raw_name":"Crossed Badlands #4 (Michael DiPascale Philadelphia VIP Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"19.99","type":"single issue","issue_num":4,"title":"Crossed Badlands"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690217","raw_name":"Crossed Badlands #5 (Jacen Burrows Chicago Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"5.99","type":"single issue","issue_num":5,"title":"Crossed Badlands"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690207","raw_name":"Crossed Badlands #50 (Jacen Burrows Denver VIP Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"19.99","type":"single issue","issue_num":50,"title":"Crossed Badlands"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690288","raw_name":"Crossed Badlands Opening Salvo (Jacen Burrows VIP Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"19.99"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690326","raw_name":"Providence #7 (Of 12)(Jacen Burrows & Michael DiPascale Ghoul Buried Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"9.99","type":"single issue","issue_num":7,"title":"Providence"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690328","raw_name":"Providence #7 (Of 12)(Jacen Burrows & Michael DiPascale Ghoul Disaster Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"9.99","type":"single issue","issue_num":7,"title":"Providence"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690327","raw_name":"Providence #7 (Of 12)(Jacen Burrows & Michael DiPascale Ghoul Stolen Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"9.99","type":"single issue","issue_num":7,"title":"Providence"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690329","raw_name":"Providence #7 (Of 12)(Jacen Burrows & Michael DiPascale Ghoul Subway Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"9.99","type":"single issue","issue_num":7,"title":"Providence"},{"publisher":"AVATAR PRESS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690325","raw_name":"Uber #0 (Canaan White Enhanced Phoenix Blitzkrieg Variant Cover)","release_date":"2019-03-27T00:00:00.000Z","price":"14.99","type":"single issue","issue_num":0,"title":"Uber"},{"publisher":"BOOM! STUDIOS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Adventure%2BTime%2BSeason%2B11%2B%2525236%2BMain___593647%3Fqt%3Dssnrp20190320","raw_name":"Adventure Time Season 11 #6 (Cover A Jorge Corona)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":6,"title":"Adventure Time Season 11"},{"publisher":"BOOM! STUDIOS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Adventure%2BTime%2BSeason%2B11%2B%2525236%2BPreorder%2BBenbassat___593648%3Fqt%3Dssnrp20190320","raw_name":"Adventure Time Season 11 #6 (Cover B Julie Benbassat)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":6,"title":"Adventure Time Season 11"},{"publisher":"BOOM! STUDIOS","store_url":"http://comics.gocollect.com/priceguide/view/1008617","raw_name":"Adventure Time Season 11 #6 (Cover C A.C. Esguerra)","release_date":"2019-03-27T00:00:00.000Z","type":"single issue","issue_num":6,"title":"Adventure Time Season 11"},{"publisher":"BOOM! STUDIOS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690470","raw_name":"Avant-Guards #3 (Of 12)(Cover A Noah Hayes)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":3,"title":"Avant-Guards"},{"publisher":"BOOM! STUDIOS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=850690469","raw_name":"Avant-Guards #3 (Of 12)(Cover B Cara McGee)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":3,"title":"Avant-Guards"},{"publisher":"BOOM! STUDIOS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Bone%2BParish%2B%2525238%2B%252528of%2B12%252529___593608%3Fqt%3Dssnrp20190320","raw_name":"Bone Parish #8 (Of 12)(Cover A Rod Reis)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":8,"title":"Bone Parish"},{"publisher":"BOOM! STUDIOS","store_url":"https://www.shareasale.com/m-pr.cfm?merchantID=8908&userID=167587&productID=878201773","raw_name":"Bone Parish #8 (Of 12)(Cover B Jakub Rebelka)","release_date":"2019-03-27T00:00:00.000Z","type":"single issue","issue_num":8,"title":"Bone Parish"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Dial%2BH%2Bfor%2BHero%2B%2525231%2B%252528of%2B6%252529%2B%252528Derington%2BVariant%252529___593525%3Fqt%3Dssnrp20190320","raw_name":"Dial H For Hero #1 (Of 6)(Cover B Nick Derington)","release_date":"2019-03-27T00:00:00.000Z","type":"single issue","issue_num":1,"title":"Dial H For Hero"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Flash%2B%25252367___593745%3Fqt%3Dssnrp20190320","raw_name":"Flash #67 (Cover A Rafa Sandoval & Jordi Tarragona)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":67,"title":"Flash"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Flash%2B%25252367%2B%252528Sook%2BVariant%252529___593209%3Fqt%3Dssnrp20190320","raw_name":"Flash #67 (Cover B Ryan Sook)","release_date":"2019-03-27T00:00:00.000Z","type":"single issue","issue_num":67,"title":"Flash"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Graphic+Novels/Profile/Flash%2BTPB%2BVol%2B09%2BReckoning%2BForces___591086%3Fqt%3Dssnrp20190320","raw_name":"Flash Volume 9 Reckoning Of The Forces TP","release_date":"2019-03-27T00:00:00.000Z","price":"16.99","type":"trade paperback","title":"Flash","volume_num":9},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Freedom%2BFighters%2B%2525234%2B%252528of%2B12%252529___593746%3Fqt%3Dssnrp20190320","raw_name":"Freedom Fighters #4 (Of 12)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":4,"title":"Freedom Fighters"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Goddess%2BMode%2B%2525234___593238%3Fqt%3Dssnrp20190320","raw_name":"Goddess Mode #4","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":4,"title":"Goddess Mode"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Graphic+Novels/Profile/Harley%2BQuinn%2BTPB%2BVol%2B02%2BHarley%2BDestroys%2Bthe%2BUniverse___591089%3Fqt%3Dssnrp20190320","raw_name":"Harley Quinn Volume 2 Harley Destroys The Universe TP","release_date":"2019-03-27T00:00:00.000Z","price":"16.99","type":"trade paperback","title":"Harley Quinn","volume_num":2},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Heroes%2Bin%2BCrisis%2B%2525237%2B%252528of%2B9%252529___593526%3Fqt%3Dssnrp20190320","raw_name":"Heroes In Crisis #7 (Of 9)(Cover A Clay Mann)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":7,"title":"Heroes In Crisis"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Heroes%2Bin%2BCrisis%2B%2525237%2B%252528of%2B9%252529%2B%252528Sook%2BVariant%252529___593527%3Fqt%3Dssnrp20190320","raw_name":"Heroes In Crisis #7 (Of 9)(Cover B Ryan Sook)","release_date":"2019-03-27T00:00:00.000Z","type":"single issue","issue_num":7,"title":"Heroes In Crisis"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Hex%2BWives%2B%2525236___593755%3Fqt%3Dssnrp20190320","raw_name":"Hex Wives #6","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":6,"title":"Hex Wives"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Justice%2BLeague%2BOdyssey%2B%2525237___593763%3Fqt%3Dssnrp20190320","raw_name":"Justice League Odyssey #7 (Cover A Carmine Di Giandomenico)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":7,"title":"Justice League Odyssey"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Justice%2BLeague%2BOdyssey%2B%2525237%2B%252528Infante%2BVariant%252529___593764%3Fqt%3Dssnrp20190320","raw_name":"Justice League Odyssey #7 (Cover B Toni Infante)","release_date":"2019-03-27T00:00:00.000Z","type":"single issue","issue_num":7,"title":"Justice League Odyssey"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Looney%2BTunes%2B%252523248___593765%3Fqt%3Dssnrp20190320","raw_name":"Looney Tunes #248","release_date":"2019-03-27T00:00:00.000Z","price":"2.99","type":"single issue","issue_num":248,"title":"Looney Tunes"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Martian%2BManhunter%2B%2525234%2B%252528of%2B12%252529___593767%3Fqt%3Dssnrp20190320","raw_name":"Martian Manhunter #4 (Of 12)(Cover A Riley Rossmo)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":4,"title":"Martian Manhunter"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Martian%2BManhunter%2B%2525234%2B%252528of%2B12%252529%2B%252528Variant%2BEdition%252529___599398%3Fqt%3Dssnrp20190320","raw_name":"Martian Manhunter #4 (Of 12)(Cover B Joshua Middleton)","release_date":"2019-03-27T00:00:00.000Z","type":"single issue","issue_num":4,"title":"Martian Manhunter"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Graphic+Novels/Profile/Mera%2BTidebreaker%2BTPB___590920%3Fqt%3Dssnrp20190320","raw_name":"Mera Tidebreaker TP","release_date":"2019-03-27T00:00:00.000Z","price":"16.99","type":"trade paperback","title":"Mer"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Graphic+Novels/Profile/Sandman%2BOmnibus%2BHC%2BVol%2B03___577991%3Fqt%3Dssnrp20190320","raw_name":"Sandman Omnibus Volume 3 HC","release_date":"2019-03-27T00:00:00.000Z","price":"150.00","type":"hardcover","title":"Sandman Omnibus","volume_num":3},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Scooby%2BDoo%2BTeam%2BUp%2B%25252347___593533%3Fqt%3Dssnrp20190320","raw_name":"Scooby-Doo Team-Up #47","release_date":"2019-03-27T00:00:00.000Z","price":"2.99","type":"single issue","issue_num":47,"title":"Scooby-Doo Team-Up"},{"publisher":"DC COMICS","store_url":"http://www.shareasale.com/r.cfm?u=167587&b=84187&m=8908&afftrack=special1&urllink=www.tfaw.com/Comics/Profile/Shazam%2B%2525234___593235%3Fqt%3Dssnrp20190320","raw_name":"Shazam #4 (Cover A Dale Eaglesham)","release_date":"2019-03-27T00:00:00.000Z","price":"3.99","type":"single issue","issue_num":4,"title":"Shazam"}]
    
    res.type('json');
    res.status(200).send(weeklyComicReleases);
  };
  
  
