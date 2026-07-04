// Realistic mock data for the prototype.

// Real photos from bromleyltsc.co.uk (referenced directly for now).
const B = 'https://www.bromleyltsc.co.uk/wp-content/uploads';

const CLUB = {
  name: 'Bromley Lawn Tennis & Squash Club',
  short: 'BLTSC',
  tagline: "Bromley's racquet-sports club since 1880",
  address: 'Sandford Road, Bromley, BR2 9AN',
  phone: '020 8460 0936',
  email: 'office@bromleyltsc.co.uk',
  hours: 'Office: Tue–Fri, 10:00–15:00',
};

const SESSIONS_THIS_WEEK = [
  { day: 'Mon', date: 'Apr 20', time: '13:30–15:30', title: 'Mixed social tennis', where: 'Courts 5–8 (clay)', sport: 'Tennis' },
  { day: 'Tue', date: 'Apr 21', time: '19:00–21:00', title: 'Evening social tennis', where: 'Indoor courts', sport: 'Tennis' },
  { day: 'Wed', date: 'Apr 22', time: '13:30–15:30', title: 'Mixed social tennis', where: 'Courts 5–8 (clay)', sport: 'Tennis' },
  { day: 'Wed', date: 'Apr 22', time: '19:00–20:30', title: 'New-member free coaching', where: 'Court 3', sport: 'Tennis', pill: 'Members only' },
  { day: 'Thu', date: 'Apr 23', time: '18:30–20:00', title: 'Squash club night', where: 'Courts 1–3', sport: 'Squash' },
  { day: 'Sat', date: 'Apr 25', time: '13:30–15:30', title: 'Mixed social tennis', where: 'All outdoor', sport: 'Tennis' },
  { day: 'Sat', date: 'Apr 25', time: '10:00–12:00', title: 'Pickleball drop-in', where: 'Outdoor courts', sport: 'Pickleball' },
];

const FIXTURES = [
  { date: 'Sat 26 Apr', time: '14:00', team: 'Men\'s 1st VI',    opp: 'Beckenham TC',       venue: 'Home', league: 'Kent Men\'s League Div 1', sport: 'Tennis' },
  { date: 'Sun 27 Apr', time: '13:30', team: 'Ladies\' 2nd IV',  opp: 'Chislehurst LTC',    venue: 'Away', league: 'N. Kent Ladies Div 2',    sport: 'Tennis' },
  { date: 'Wed 30 Apr', time: '19:30', team: 'Squash 1sts',      opp: 'St George\'s Hill',  venue: 'Home', league: 'Kent Squash Premier',     sport: 'Squash' },
  { date: 'Sat 03 May', time: '14:00', team: 'Mixed 1st',        opp: 'Sundridge Park',     venue: 'Home', league: 'Kent Mixed Div 1',        sport: 'Tennis' },
  { date: 'Tue 06 May', time: '19:30', team: 'Squash 2nds',      opp: 'Blackheath Squash',  venue: 'Away', league: 'Kent Squash Div 2',       sport: 'Squash' },
  { date: 'Sat 10 May', time: '14:00', team: 'Men\'s 2nd VI',    opp: 'West Worthing',      venue: 'Away', league: 'Kent Men\'s Div 3',       sport: 'Tennis' },
];

const EVENTS = [
  { id: 'ev-open-day', kind: 'Event', iso: '2026-05-04', date: 'Sun 04 May', title: 'Spring Open Day',        blurb: 'Free court hire, coaching taster sessions on clay and indoor, BBQ on the balcony.', tag: 'Open to all', img: `${B}/2018/07/IMG_2033.jpg`,
    where: 'All courts · Clubhouse balcony', time: '10:00 – 16:00',
    body: [
      'Our biggest open day of the year returns. All 14 tennis courts, the three squash courts and the pickleball area are free to use — no membership and no booking required. Just turn up.',
      'Jason\'s Totally Tennis coaches will be running taster sessions on the clay and indoor courts throughout the day, with rackets provided for anyone who wants to give it a go. The squash pros will be on hand for beginners too.',
      'The bar and balcony are open from midday with a BBQ running through the afternoon. Bring the family, bring a friend, and see what club life looks like.',
    ] },
  { id: 'ev-american', kind: 'Event', iso: '2026-05-17', date: 'Sat 17 May', title: 'American Tournament',    blurb: 'Short-format mixed doubles. Members and guests. £6 including tea.',                  tag: 'Tennis', img: `${B}/2018/07/IMG_2125.jpg`,
    where: 'Outdoor courts', time: '13:00 – 17:00',
    body: [
      'A relaxed afternoon of short-format mixed doubles — you\'ll partner a different member for each round, so it\'s the perfect way to meet people across the club.',
      'Open to members and their guests. £6 on the day includes tea and cake in the clubhouse afterwards. Sign up on the noticeboard or email the office.',
    ] },
  { id: 'ev-summer-ball', kind: 'Event', iso: '2026-06-06', date: 'Fri 06 Jun', title: 'Summer Ball',            blurb: 'Clubhouse marquee, three courses, DJ until late. Tickets at the bar.',                tag: 'Social', img: `${B}/2016/07/bltcatdusk.jpg`,
    where: 'Clubhouse marquee', time: '19:00 – late',
    body: [
      'The social highlight of the summer. A marquee on the lawn, a three-course dinner, and a DJ until late. Dress code is smart.',
      'Tables of ten — grab your group early as this one always sells out. Tickets are available at the bar or from Fiona on the social committee.',
    ] },
  { id: 'ev-champs', kind: 'Event', iso: '2026-07-12', date: 'Sat 12 Jul', title: 'Club Championships — Finals Day', blurb: 'Singles, doubles and mixed finals across sports. Pimm\'s from 12:30.',      tag: 'Championship', img: `${B}/2017/06/IMG_2006.jpg`,
    where: 'Show courts', time: 'From 12:30', 
    body: [
      'Finals day brings the season\'s championships to a close, with singles, doubles and mixed finals played out across tennis and squash on the show courts.',
      'Pimm\'s from 12:30 and the prize-giving on the balcony afterwards. Come and support the finalists — spectators very welcome.',
    ] },
  { id: 'ev-mince-pie', kind: 'Event', iso: '2026-12-14', date: 'Sun 14 Dec', title: 'Mince Pie & Mulled Wine', blurb: 'The winter classic. Four rounds of doubles, then the bar.',                          tag: 'Social', img: `${B}/2017/06/IMG_1941.jpg`,
    where: 'Outdoor courts · Clubhouse', time: '10:30 – 14:00',
    body: [
      'A club institution: four rounds of light-hearted winter doubles, whatever the weather, followed by mince pies and mulled wine by the fire.',
      'All standards welcome — this one is about turning up in silly jumpers as much as the tennis. Free for members.',
    ] },
];

const NEWS = [
  { id: 'nw-court7', kind: 'News', iso: '2026-04-14', date: '14 Apr 2026', title: 'Court 7 resurfacing complete', tag: 'Facilities', img: `${B}/2017/09/Acrylic-from-balcony-960x300.jpg`,
    excerpt: 'The second clay court is back in play after a spring refresh — thanks for bearing with us.',
    body: [
      'Court 7 is open again following its spring resurfacing. The contractors have relaid and re-lined the clay, and the court has now settled enough for full play.',
      'This was the second of our two clay courts to be refreshed this year, completing a programme the committee approved last autumn. Both courts should now give us several more seasons of true, consistent bounce.',
      'Thanks to everyone for their patience while the work was underway — juggling court availability across a busy spring is never easy, and members were brilliant about it.',
    ] },
  { id: 'nw-new-year', kind: 'News', iso: '2026-04-02', date: '02 Apr 2026', title: 'New membership year begins', tag: 'Club', img: `${B}/2018/07/IMG_2125.jpg`,
    excerpt: 'A warm welcome to 38 new members this year. Your first-year coaching runs Wednesday evenings.',
    body: [
      'The 2026–27 membership year is underway, and we\'re delighted to welcome 38 new members across tennis, squash and pickleball.',
      'If you\'ve just joined, your first year includes a free weekly coaching session — these run on Wednesday evenings on Court 3. No need to book ahead for the first few weeks; just come along and introduce yourself to the coach.',
      'New members are also very welcome at any of our social sessions. They\'re the fastest way to meet people and get regular games in the diary.',
    ] },
  { id: 'nw-squash-promoted', kind: 'News', iso: '2026-03-28', date: '28 Mar 2026', title: 'Squash 1sts promoted to Premier', tag: 'Squash', img: `${B}/2017/02/15-960x300.jpg`,
    excerpt: 'A dominant final round at Blackheath sealed promotion. Full report inside.',
    body: [
      'The Squash 1sts have won promotion to the Kent Premier Division after a commanding 4–1 win away at Blackheath in the final round of the season.',
      'It caps a superb campaign in which the team lost just one match all year. Captain Clare Whitfield praised the strength in depth across the squad, with wins coming from every position on the ladder over the season.',
      'The Premier Division will be the club\'s highest level of squash in over a decade. First fixtures are expected in September — details to follow.',
    ] },
  { id: 'nw-junior-camps', kind: 'News', iso: '2026-03-15', date: '15 Mar 2026', title: 'Junior Easter camps: spaces left', tag: 'Juniors', img: `${B}/2018/07/IMG_2033.jpg`,
    excerpt: 'A handful of places remain for the 8–12 and 13–16 camps. Book via the coaching office.',
    body: [
      'A few places remain on our Easter holiday camps for juniors. The 8–12 and 13–16 groups run across the break with a mix of drills, match play and plenty of fun on and off court.',
      'Camps run 10:00–15:00 with supervised lunch, and are open to members and non-members alike. Rackets can be provided.',
      'To book, contact the coaching office — spaces are allocated first come, first served and tend to fill quickly.',
    ] },
];

// News + club events, merged into one feed, newest / soonest first.
const NEWS_FEED = [...NEWS, ...EVENTS].sort((a, b) => (a.iso < b.iso ? 1 : -1));

const MEMBERSHIP_GROUPS = [
  {
    id: 'all',
    sport: 'All sports',
    label: 'All sports',
    blurb: 'One membership that covers tennis, squash and pickleball — plus club life.',
    items: [
      { name: 'Junior', qual: '18 & under', price: '£50 / year', tag: 'All sports',
        includes: ['Tennis, squash & pickleball', 'Junior programmes & camps', 'Jason\'s Totally Tennis coaching'] },
      { name: 'Social', qual: 'clubhouse', price: '£60 / year',
        includes: ['Bar & clubhouse only', 'Guest-of-member court access', 'All club social events'] },
    ],
  },
  {
    id: 'tennis',
    sport: 'Tennis',
    label: 'Tennis',
    blurb: '14 courts across four surfaces. Social sessions, box leagues and club teams.',
    items: [
      { name: 'Adult', qual: '30 & over', price: '£488 / year', tag: 'Most popular',
        includes: ['All 14 tennis courts & social sessions', 'Box leagues & team selection', 'Free first-year coaching'] },
      { name: 'Couple', qual: '2 adults, same address', price: '£802 / year',
        includes: ['Full tennis access for both', 'Shared court booking'] },
      { name: 'Family', qual: 'couple + children U18', price: '£875 / year',
        includes: ['Couple + all children under 18', 'Junior coaching pathway'] },
      { name: 'Over 65s', qual: 'senior', price: '£370 / year',
        includes: ['Full tennis access', 'All social sessions'] },
      { name: '19–29', qual: 'young adult', price: '£160 / year',
        includes: ['Full adult tennis access', '50% off with proof of student status'] },
      { name: 'Off-peak', qual: 'weekdays 9–5', price: '£340 / year',
        includes: ['Weekdays 09:00–17:00', 'All daytime social sessions'] },
    ],
  },
  {
    id: 'squash',
    sport: 'Squash',
    label: 'Squash & Racketball',
    blurb: 'Three glass-backed courts. Club nights, box leagues and county squash.',
    items: [
      { name: 'Adult', qual: '30 & over', price: '£240 / year',
        includes: ['All three squash courts', 'Club nights & box leagues', 'Free first-year coaching'] },
      { name: 'Couple', qual: '2 adults, same address', price: '£386 / year',
        includes: ['Full squash & racketball access', 'Shared court booking'] },
      { name: 'Family', qual: 'couple + children U18', price: '£440 / year',
        includes: ['Couple + all children under 18', 'Junior squash pathway'] },
      { name: 'Over 65s', qual: 'senior', price: '£180 / year',
        includes: ['Full squash & racketball access', 'All club nights'] },
      { name: '19–29', qual: 'young adult', price: '£90 / year',
        includes: ['Full adult squash access', '50% off with proof of student status'] },
      { name: 'Off-peak', qual: 'weekdays 9–5, Sat pm, Sun', price: '£140 / year',
        includes: ['Weekdays 09:00–17:00', 'Sat after 1pm · all day Sun'] },
    ],
  },
  {
    id: 'pickleball',
    sport: 'Pickleball',
    label: 'Pickleball',
    blurb: 'The club\'s third sport. Daily sessions, indoor and outdoor.',
    items: [
      { name: 'Pickleball', qual: 'all ages', price: '£408 / year',
        includes: ['All pickleball sessions', 'Indoor and outdoor courts', 'Designated lighting fees included'] },
    ],
  },
];

const FACILITIES = [
  { icon: 'racquet', label: '14 tennis courts', sub: '2 indoor acrylic · 3 artificial grass · 5 clay · 4 outdoor acrylic' },
  { icon: 'circle',  label: '3 squash courts',  sub: 'Glass-backed with viewing galleries' },
  { icon: 'users',   label: 'Pickleball',       sub: 'Daily sessions, indoor & outdoor' },
  { icon: 'coffee',  label: 'Bar & balcony',    sub: 'First floor. Open session days and match evenings' },
  { icon: 'sparkles',label: 'On-site services', sub: 'Sports massage and racquet stringing' },
  { icon: 'car',     label: 'Parking on site',  sub: '5 min walk from Bromley South station' },
];

const COMMITTEE = [
  { role: 'Chair',            name: 'Helen Carver' },
  { role: 'Vice-Chair',       name: 'Rahul Mehta' },
  { role: 'Treasurer',        name: 'James O\'Donnell' },
  { role: 'Secretary',        name: 'Priya Shah' },
  { role: 'Tennis Captain',   name: 'Michael Akindele' },
  { role: 'Squash Captain',   name: 'Clare Whitfield' },
  { role: 'Juniors',          name: 'Dan Forsyth' },
  { role: 'Social',           name: 'Fiona Langley' },
];

// Official club shop (Kitlocker) — opens in a new tab.
const SHOP_URL = 'https://www.kitlocker.shop/racketsports/tennis-clubs/a-e/bromley-lawn-tennis-squash-club/';

// Kit examples shown in the home-page shop teaser. Clothing only — no people.
// Product shots pulled from the club's Kitlocker store.
const KL = 'https://www.kitlocker.shop/racketsports/images/stories/virtuemart/product/resized';
const SHOP_ITEMS = [
  { label: 'Park Short-Sleeve Top', img: `${KL}/BASE_0-16-0-92601-yp04-1771584856_38423_0x300.jpg` },
  { label: 'Fleece Pullover Hoodie', img: `${KL}/BASE_0-0-0-92601-4jw3-1771584856_38423_0x300.jpg` },
  { label: 'Dri-FIT Zip Shorts', img: `${KL}/BASE_0-1-0-92601-c6vn-1771584856_38423_0x300.jpg` },
  { label: 'Park Rain Jacket', img: `${KL}/BASE_0-4-0-92601-3v6f-1771584856_38423_0x300.jpg` },
  { label: 'Dri-FIT Drill Top', img: `${KL}/BASE_0-24-0-92601-bi0e-1771584856_38423_0x300.jpg` },
  { label: 'Swoosh Pullover Hoodie', img: `${KL}/24258-C(158)-P(0)-R(rvgzl)_0x300.jpg` },
];

// Real photos from bromleyltsc.co.uk (referenced directly for now).
const IMG = {
  clubDusk:      `${B}/2016/07/bltcatdusk.jpg`,
  clubModern:    `${B}/2024/05/IMG_2262.jpg`,
  courtsBalcony: `${B}/2017/09/Acrylic-from-balcony-960x300.jpg`,
  play1:         `${B}/2018/07/IMG_2125.jpg`,
  play2:         `${B}/2017/06/image1.jpeg`,
  play3:         `${B}/2017/06/IMG_1941.jpg`,
  play4:         `${B}/2017/06/IMG_2006.jpg`,
  play5:         `${B}/2017/06/IMG_2025.jpg`,
  play6:         `${B}/2018/07/IMG_2033.jpg`,
  squashCoach:   `${B}/2018/06/5.jpg`,
  squashGallery: `${B}/2017/02/15-960x300.jpg`,
  pickleball:    `${B}/2024/05/IMG_3396-2.jpg`,
};

Object.assign(window, {
  CLUB, SESSIONS_THIS_WEEK, FIXTURES, EVENTS, NEWS, NEWS_FEED, MEMBERSHIP_GROUPS, FACILITIES, COMMITTEE, IMG,
  SHOP_URL, SHOP_ITEMS,
});
