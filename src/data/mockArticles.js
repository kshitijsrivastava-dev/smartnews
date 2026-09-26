const imageThemes = {
  national: {
    1: {
      title: 'PUBLIC LIBRARY',
      icon: '📚',
      accent: '#8b5e3c',
    },
    2: {
      title: 'CITY PARK',
      icon: '🌳',
      accent: '#4f7d4f',
    },
    3: {
      title: 'RAILWAY',
      icon: '🚆',
      accent: '#596b82',
    },
    4: {
      title: 'FINANCIAL EDUCATION',
      icon: '₹',
      accent: '#7c6847',
    },
    5: {
      title: 'LOCAL ENTREPRENEURS',
      icon: '💼',
      accent: '#725c87',
    },
    6: {
      title: 'FARMERS MARKET',
      icon: '🥕',
      accent: '#66834f',
    },
    7: {
      title: 'PUBLIC TRANSPORT',
      icon: '🚌',
      accent: '#4d7080',
    },
    8: {
      title: 'UNIVERSITY',
      icon: '🎓',
      accent: '#59698a',
    },
    9: {
      title: 'COMMUNITY',
      icon: '🤝',
      accent: '#80684f',
    },
    10: {
      title: 'PUBLIC SERVICES',
      icon: '🏛️',
      accent: '#6b687c',
    },
  },

  international: {
    1: {
      title: 'RIVER WATER',
      icon: '🌊',
      accent: '#4f7285',
    },
    2: {
      title: 'URBAN HEAT',
      icon: '☀️',
      accent: '#a96f48',
    },
    3: {
      title: 'MARINE RESEARCH',
      icon: '🔬',
      accent: '#4c7280',
    },
    4: {
      title: 'AIRPORTS',
      icon: '✈️',
      accent: '#61758a',
    },
    5: {
      title: 'CLIMATE RESEARCH',
      icon: '🌍',
      accent: '#58755d',
    },
    6: {
      title: 'COASTAL REGIONS',
      icon: '🏖️',
      accent: '#5e8190',
    },
    7: {
      title: 'DIGITAL ARCHIVES',
      icon: '🗄️',
      accent: '#756a83',
    },
    8: {
      title: 'MANUFACTURING',
      icon: '🏭',
      accent: '#696d73',
    },
    9: {
      title: 'EMERGENCY SYSTEMS',
      icon: '📡',
      accent: '#875c5c',
    },
    10: {
      title: 'CULTURAL MUSEUMS',
      icon: '🏛️',
      accent: '#806c58',
    },
  },

  business: {
    1: {
      title: 'CARGO PORT',
      icon: '🚢',
      accent: '#536e7d',
    },
    2: {
      title: 'WAREHOUSE',
      icon: '📦',
      accent: '#806947',
    },
    3: {
      title: 'LOGISTICS',
      icon: '🚚',
      accent: '#66745c',
    },
    4: {
      title: 'RETAIL',
      icon: '🛍️',
      accent: '#795f73',
    },
    5: {
      title: 'RESTAURANTS',
      icon: '🍽️',
      accent: '#8a654d',
    },
    6: {
      title: 'STARTUPS',
      icon: '🚀',
      accent: '#665f86',
    },
    7: {
      title: 'FACTORIES',
      icon: '⚙️',
      accent: '#686d72',
    },
    8: {
      title: 'LOCAL RETAIL',
      icon: '🏪',
      accent: '#80624e',
    },
    9: {
      title: 'WORKPLACES',
      icon: '🏢',
      accent: '#607083',
    },
    10: {
      title: 'SHIPPING',
      icon: '📦',
      accent: '#596f78',
    },
  },

  technology: {
    1: {
      title: 'SMART ENERGY',
      icon: '☀️',
      accent: '#65774e',
    },
    2: {
      title: 'ARTIFICIAL INTELLIGENCE',
      icon: '🤖',
      accent: '#625d82',
    },
    3: {
      title: 'PROGRAMMING',
      icon: '</>',
      accent: '#506f80',
    },
    4: {
      title: 'CLOUD COMPUTING',
      icon: '☁️',
      accent: '#62778b',
    },
    5: {
      title: 'WEB ACCESSIBILITY',
      icon: '🌐',
      accent: '#587b71',
    },
    6: {
      title: 'BATTERY TECHNOLOGY',
      icon: '🔋',
      accent: '#69744f',
    },
    7: {
      title: 'CYBERSECURITY',
      icon: '🔒',
      accent: '#6d5e72',
    },
    8: {
      title: 'AUTOMATION',
      icon: '⚙️',
      accent: '#6c6c69',
    },
    9: {
      title: 'ROBOTICS',
      icon: '🦾',
      accent: '#596d7c',
    },
    10: {
      title: 'SMARTPHONES',
      icon: '📱',
      accent: '#665f7c',
    },
  },

  sports: {
    1: {
      title: 'CYCLING',
      icon: '🚴',
      accent: '#58745e',
    },
    2: {
      title: 'ATHLETIC TRAINING',
      icon: '🏃',
      accent: '#80664d',
    },
    3: {
      title: 'SPORTS DATA',
      icon: '📊',
      accent: '#5f6f86',
    },
    4: {
      title: 'FOOTBALL',
      icon: '⚽',
      accent: '#55735b',
    },
    5: {
      title: 'TRACK & FIELD',
      icon: '🏃',
      accent: '#81664f',
    },
    6: {
      title: 'TENNIS',
      icon: '🎾',
      accent: '#68794d',
    },
    7: {
      title: 'ATHLETE RECOVERY',
      icon: '💪',
      accent: '#795c60',
    },
    8: {
      title: 'BASKETBALL',
      icon: '🏀',
      accent: '#8a6249',
    },
    9: {
      title: 'CHESS',
      icon: '♟️',
      accent: '#655d68',
    },
    10: {
      title: 'MARATHON',
      icon: '🏅',
      accent: '#5f7480',
    },
  },

  science: {
    1: {
      title: 'WETLAND RESEARCH',
      icon: '🌿',
      accent: '#58745d',
    },
    2: {
      title: 'AIR QUALITY',
      icon: '🌬️',
      accent: '#657986',
    },
    3: {
      title: 'FOREST ECOLOGY',
      icon: '🌲',
      accent: '#52705b',
    },
    4: {
      title: 'ASTRONOMY',
      icon: '🔭',
      accent: '#555b78',
    },
    5: {
      title: 'OCEAN SCIENCE',
      icon: '🌊',
      accent: '#4f7482',
    },
    6: {
      title: 'SOIL SCIENCE',
      icon: '🌱',
      accent: '#80684e',
    },
    7: {
      title: 'GLACIER RESEARCH',
      icon: '🏔️',
      accent: '#607b87',
    },
    8: {
      title: 'BIODIVERSITY',
      icon: '🦋',
      accent: '#58745b',
    },
    9: {
      title: 'URBAN ECOLOGY',
      icon: '🌳',
      accent: '#637354',
    },
    10: {
      title: 'LABORATORY RESEARCH',
      icon: '🧪',
      accent: '#6b6380',
    },
  },

  health: {
    1: {
      title: 'HEALTHCARE',
      icon: '🏥',
      accent: '#80616a',
    },
    2: {
      title: 'FITNESS',
      icon: '🏃',
      accent: '#5c785e',
    },
    3: {
      title: 'PREVENTIVE CARE',
      icon: '🩺',
      accent: '#66798a',
    },
    4: {
      title: 'WORKPLACE WELLNESS',
      icon: '🧘',
      accent: '#77705b',
    },
    5: {
      title: 'WALKING & HEALTH',
      icon: '🚶',
      accent: '#60765e',
    },
    6: {
      title: 'DIGITAL HEALTH',
      icon: '💻',
      accent: '#5f7182',
    },
    7: {
      title: 'NUTRITION',
      icon: '🥗',
      accent: '#668052',
    },
    8: {
      title: 'STUDENT WELLNESS',
      icon: '🎓',
      accent: '#726582',
    },
    9: {
      title: 'HOSPITAL NAVIGATION',
      icon: '🏥',
      accent: '#80616a',
    },
    10: {
      title: 'PUBLIC HEALTH',
      icon: '❤️',
      accent: '#765e66',
    },
  },

  entertainment: {
    1: {
      title: 'CINEMA',
      icon: '🎬',
      accent: '#765f68',
    },
    2: {
      title: 'FILM FESTIVAL',
      icon: '🎞️',
      accent: '#80634f',
    },
    3: {
      title: 'LIVE MUSIC',
      icon: '🎵',
      accent: '#675f82',
    },
    4: {
      title: 'FILM & MUSIC ARCHIVES',
      icon: '📚',
      accent: '#756b59',
    },
    5: {
      title: 'FILMMAKING',
      icon: '🎥',
      accent: '#596d78',
    },
    6: {
      title: 'ART GALLERY',
      icon: '🎨',
      accent: '#806276',
    },
    7: {
      title: 'COMMUNITY FESTIVAL',
      icon: '🎪',
      accent: '#87634f',
    },
    8: {
      title: 'PODCASTS',
      icon: '🎙️',
      accent: '#635f7c',
    },
    9: {
      title: 'BOOKS & LITERATURE',
      icon: '📖',
      accent: '#78634f',
    },
    10: {
      title: 'THEATER',
      icon: '🎭',
      accent: '#6f5968',
    },
  },
}

function escapeSvgText(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function getArticleImage(category, id) {
  const number = Number(id.split('-').pop())
  const theme = imageThemes[category]?.[number]

  const safeTitle = escapeSvgText(
    theme?.title ?? category.toUpperCase(),
  )

  const safeIcon = escapeSvgText(theme?.icon ?? 'NEWS')
  const accent = theme?.accent ?? '#6b6257'

  /*
   * Local SVG data image.
   *
   * This deliberately does NOT depend on an external image service.
   * Every article gets its own deterministic image based on its
   * category + article number.
   */
  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1400"
      height="800"
      viewBox="0 0 1400 800"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="#171513"/>
        </linearGradient>

        <pattern
          id="grid"
          width="70"
          height="70"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 70 0 L 0 0 0 70"
            fill="none"
            stroke="#ffffff"
            stroke-opacity="0.08"
            stroke-width="1"
          />
        </pattern>
      </defs>

      <rect width="1400" height="800" fill="url(#bg)"/>

      <rect
        width="1400"
        height="800"
        fill="url(#grid)"
      />

      <circle
        cx="1160"
        cy="150"
        r="210"
        fill="#ffffff"
        fill-opacity="0.06"
      />

      <circle
        cx="180"
        cy="700"
        r="300"
        fill="#000000"
        fill-opacity="0.12"
      />

      <rect
        x="90"
        y="90"
        width="1220"
        height="620"
        rx="24"
        fill="#000000"
        fill-opacity="0.16"
        stroke="#ffffff"
        stroke-opacity="0.12"
      />

      <text
        x="150"
        y="190"
        font-family="Arial, Helvetica, sans-serif"
        font-size="34"
        font-weight="600"
        letter-spacing="5"
        fill="#ffffff"
        fill-opacity="0.72"
      >
        SMARTNEWS
      </text>

      <text
        x="150"
        y="410"
        font-family="Arial, Helvetica, sans-serif"
        font-size="190"
      >
        ${safeIcon}
      </text>

      <text
        x="430"
        y="360"
        font-family="Georgia, serif"
        font-size="64"
        font-weight="700"
        fill="#ffffff"
      >
        ${safeTitle}
      </text>

      <text
        x="435"
        y="425"
        font-family="Arial, Helvetica, sans-serif"
        font-size="25"
        letter-spacing="3"
        fill="#ffffff"
        fill-opacity="0.68"
      >
        NEWS BRIEFING
      </text>

      <line
        x1="435"
        y1="470"
        x2="1060"
        y2="470"
        stroke="#ffffff"
        stroke-opacity="0.25"
      />

      <text
        x="435"
        y="530"
        font-family="Arial, Helvetica, sans-serif"
        font-size="20"
        fill="#ffffff"
        fill-opacity="0.55"
      >
        ${category.toUpperCase()}
      </text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

function createArticle(
  id,
  category,
  title,
  description,
  content,
  source,
  publishedAt,
) {
  return {
    id: `dev-mock-${category}-${id}`,
    title,
    description,
    content,
    source,
    publishedAt,
    image: getArticleImage(category, id),
    url: `https://example.com/smartnews-demo/${category}/${id}`,
    category,
  }
}

export const mockArticles = [
 // ============================================================
  // NATIONAL — 10 ARTICLES
  // ============================================================

  createArticle(
    'national-01',
    'national',
    'Public libraries expand evening hours through shared staffing pilots',
    'A group of city library systems is testing later opening times after residents asked for more access outside standard work hours.',
    'Public libraries in several cities are testing later evening hours through a shared staffing program. The pilot allows nearby branches to coordinate schedules and draw from a pool of trained workers.\n\nLibrary leaders are tracking visits, program attendance and staff feedback before deciding whether the change can continue.',
    'Civic Ledger',
    '2026-09-21T17:45:00Z',
  ),

  createArticle(
    'national-02',
    'national',
    'Cities add more public spaces as neighborhoods become denser',
    'Urban planners are experimenting with smaller parks, pedestrian areas and community spaces in crowded neighborhoods.',
    'Several city administrations are redesigning underused public areas into smaller parks and pedestrian spaces. Officials say the projects are intended to provide residents with accessible community areas without requiring large parcels of land.\n\nThe projects are being evaluated through footfall measurements, public feedback and maintenance costs.',
    'National City Desk',
    '2026-09-21T12:30:00Z',
  ),

  createArticle(
    'national-03',
    'national',
    'Railway stations test simpler digital information boards',
    'Transport authorities are testing redesigned information displays intended to make platform changes easier to understand.',
    'Railway authorities have begun testing simpler digital information boards at selected stations. The new displays place platform numbers, delays and important announcements in larger sections of the screen.\n\nOfficials say passenger feedback will be used before deciding whether the design should be introduced more widely.',
    'Transit Bulletin',
    '2026-09-20T15:20:00Z',
  ),

  createArticle(
    'national-04',
    'national',
    'Schools introduce practical financial literacy sessions',
    'Several schools are adding basic lessons on budgeting, saving and responsible digital payments.',
    'Schools in several regions are experimenting with practical financial literacy lessons for older students. The sessions cover household budgeting, savings goals, digital payments and common financial mistakes.\n\nTeachers say the lessons are designed around everyday situations rather than advanced financial theory.',
    'Education Monitor',
    '2026-09-20T10:10:00Z',
  ),

  createArticle(
    'national-05',
    'national',
    'Community centers create new spaces for local entrepreneurs',
    'Local organizations are converting unused rooms into affordable workspaces for small businesses and independent workers.',
    'Community organizations are opening shared workspaces in unused municipal buildings. The spaces offer desks, internet access and meeting rooms to early-stage businesses and independent workers.\n\nOrganizers hope the projects will make professional workspace more accessible to people who cannot afford traditional office rentals.',
    'Civic Business Review',
    '2026-09-19T16:40:00Z',
  ),

  createArticle(
    'national-06',
    'national',
    'Local farmers markets extend weekend operating hours',
    'Several markets are experimenting with longer weekend schedules to give shoppers more flexibility.',
    'Farmers markets in several cities are testing longer operating hours during weekends. Organizers say the change could help both shoppers with busy schedules and vendors who depend on weekend sales.\n\nMarket managers are collecting attendance and vendor feedback before making the extended schedules permanent.',
    'Local Market News',
    '2026-09-19T09:25:00Z',
  ),

  createArticle(
    'national-07',
    'national',
    'Public transport agencies study better connections between bus routes',
    'Transport planners are reviewing route connections to reduce waiting times for passengers changing buses.',
    'Public transport agencies are studying how different bus routes connect during busy travel periods. The review focuses on transfer times, passenger demand and areas where buses frequently arrive several minutes apart.\n\nThe findings could be used to adjust schedules and improve connections between major routes.',
    'Metro Daily',
    '2026-09-18T14:15:00Z',
  ),

  createArticle(
    'national-08',
    'national',
    'Universities expand career workshops for final-year students',
    'Higher education institutions are increasing practical sessions focused on resumes, interviews and workplace skills.',
    'Universities are expanding career workshops for students approaching graduation. New sessions include resume reviews, interview practice, workplace communication and introductory sessions on professional networking.\n\nCareer offices say students are increasingly looking for practical guidance alongside traditional academic preparation.',
    'Campus Report',
    '2026-09-18T11:00:00Z',
  ),

  createArticle(
    'national-09',
    'national',
    'Neighborhood groups organize weekend cleanup programs',
    'Resident groups are coordinating recurring cleanup activities in parks, streets and shared community spaces.',
    'Neighborhood organizations are creating recurring weekend cleanup programs. Volunteers are focusing on parks, public walkways and other shared spaces that require regular maintenance.\n\nOrganizers say the programs have also helped residents coordinate other community activities.',
    'Community Journal',
    '2026-09-17T08:45:00Z',
  ),

  createArticle(
    'national-10',
    'national',
    'Public offices simplify appointment systems for common services',
    'Several public offices are redesigning appointment systems to reduce confusion and unnecessary visits.',
    'Government service centers are testing simplified appointment systems for commonly requested services. The new process provides clearer instructions and separates document verification from final appointments where possible.\n\nOfficials say the changes are intended to reduce waiting times and make the process easier for first-time applicants.',
    'Public Services Desk',
    '2026-09-16T13:35:00Z',
  ),

  // ============================================================
  // INTERNATIONAL — 10 ARTICLES
  // ============================================================

  createArticle(
    'international-01',
    'international',
    'Neighboring regions agree to share river measurements during dry months',
    'A new data-sharing arrangement will publish reservoir and river-flow readings on a common schedule.',
    'Water agencies from neighboring regions have agreed to publish river-flow and reservoir readings on a shared schedule during the dry season. The arrangement creates a common format for measurements that were previously released at different intervals.\n\nOfficials say the agreement is focused on improving transparency and coordination.',
    'World Report Desk',
    '2026-09-20T12:20:00Z',
  ),

  createArticle(
    'international-02',
    'international',
    'Cities around the world compare strategies for reducing urban heat',
    'Municipal planners are sharing information about trees, reflective surfaces and shaded public areas.',
    'Urban planners from several countries are comparing different approaches to reducing heat in densely populated neighborhoods. Projects include expanded tree cover, reflective building materials and shaded pedestrian areas.\n\nResearchers are collecting temperature readings to determine which approaches work best under different local conditions.',
    'Global Cities Review',
    '2026-09-19T15:10:00Z',
  ),

  createArticle(
    'international-03',
    'international',
    'International researchers build shared database for marine observations',
    'Scientists are combining ocean observations from multiple research programs into a common database.',
    'Research institutions from several countries are working on a shared database for marine observations. The project combines information from sensors, research vessels and coastal monitoring stations.\n\nResearchers say a common format could make it easier to compare observations collected in different regions.',
    'Global Science Desk',
    '2026-09-18T10:35:00Z',
  ),

  createArticle(
    'international-04',
    'international',
    'Regional airports test new systems for smoother passenger transfers',
    'Airports are testing improved information systems to help travelers navigate connecting flights.',
    'Several regional airports are testing new passenger information systems. The systems combine gate information, transfer instructions and delay notices into a single display.\n\nAirport operators hope the changes will make connections easier for passengers unfamiliar with the terminals.',
    'International Travel Desk',
    '2026-09-17T16:00:00Z',
  ),

  createArticle(
    'international-05',
    'international',
    'Universities launch cross-border programs for climate research',
    'Research institutions are creating joint programs focused on environmental monitoring and climate adaptation.',
    'Universities in several countries have created joint research programs focused on environmental monitoring. Students and researchers will share datasets and field methods as part of the programs.\n\nOrganizers say international cooperation can help researchers compare environmental changes across different regions.',
    'Academic World',
    '2026-09-16T11:45:00Z',
  ),

  createArticle(
    'international-06',
    'international',
    'Coastal communities share new methods for protecting public beaches',
    'Local authorities are comparing approaches to erosion, tourism management and beach restoration.',
    'Coastal communities are sharing practical information about beach management and erosion control. The discussions cover dune restoration, visitor management and monitoring of shoreline changes.\n\nOfficials say local experience can help communities choose measures suited to their own coastlines.',
    'Coastal World News',
    '2026-09-15T14:20:00Z',
  ),

  createArticle(
    'international-07',
    'international',
    'Libraries across borders exchange digital preservation methods',
    'National and university libraries are comparing approaches to preserving digital collections.',
    'Libraries from different countries are sharing methods for preserving digital archives. The discussions include file formats, backup strategies and systems for documenting older collections.\n\nArchivists say digital preservation requires continuous maintenance rather than a one-time migration.',
    'International Culture Desk',
    '2026-09-14T09:30:00Z',
  ),

  createArticle(
    'international-08',
    'international',
    'Small manufacturers collaborate on more efficient packaging',
    'Manufacturing groups are sharing designs intended to reduce packaging material and transportation space.',
    'Small manufacturers in several regions are collaborating on packaging designs that use less material. The project also considers how packaging dimensions affect storage and transportation.\n\nParticipating businesses say the shared approach could reduce costs while making their products easier to ship.',
    'Global Industry Review',
    '2026-09-13T13:15:00Z',
  ),

  createArticle(
    'international-09',
    'international',
    'Cities test multilingual emergency information systems',
    'Public safety agencies are improving emergency messages for communities that speak multiple languages.',
    'Several cities are testing emergency information systems capable of publishing important alerts in multiple languages. Officials say clear communication becomes particularly important during severe weather and other emergencies.\n\nThe systems are being tested with community groups before wider deployment.',
    'World Public Safety',
    '2026-09-12T17:10:00Z',
  ),

  createArticle(
    'international-10',
    'international',
    'Museums cooperate on traveling exhibitions of regional history',
    'Museums are forming partnerships that allow historical collections to be displayed in multiple countries.',
    'A group of museums has created a traveling exhibition program featuring regional history and cultural artifacts. Participating institutions are sharing curatorial resources and educational materials.\n\nOrganizers say the program will allow smaller collections to reach audiences outside their home regions.',
    'Culture Around the World',
    '2026-09-11T10:50:00Z',
  ),

  // ============================================================
  // BUSINESS — 10 ARTICLES
  // ============================================================

  createArticle(
    'business-01',
    'business',
    'Small ports invest in quieter electric equipment to cut operating costs',
    'A pilot program is helping cargo terminals compare the long-term costs of electric yard vehicles with diesel fleets.',
    'Smaller cargo ports are beginning to replace some diesel-powered yard vehicles with electric models. Operators say the switch is most practical for vehicles that follow predictable routes and return to a depot between shifts.\n\nThe initial investment remains a hurdle, particularly for terminals with limited charging capacity.',
    'Market & Main',
    '2026-09-23T14:30:00Z',
  ),

  createArticle(
    'business-02',
    'business',
    'Small businesses adopt simpler inventory tracking systems',
    'Independent retailers are replacing spreadsheets with lightweight digital tools for tracking stock.',
    'Small retailers are increasingly using simple digital inventory systems to track stock levels and sales. Business owners say the tools can reduce manual counting and make it easier to identify popular products.\n\nMany smaller businesses are choosing systems that require little technical setup.',
    'Small Business Journal',
    '2026-09-22T13:00:00Z',
  ),

  createArticle(
    'business-03',
    'business',
    'Local manufacturers explore shared logistics networks',
    'Manufacturers are coordinating deliveries to reduce empty vehicle journeys and transportation costs.',
    'Several local manufacturers are experimenting with shared logistics networks. Companies with nearby destinations can coordinate shipments instead of sending separate vehicles for every delivery.\n\nThe approach is still being tested, but participants say better coordination could reduce transportation costs.',
    'Industry Market',
    '2026-09-21T10:25:00Z',
  ),

  createArticle(
    'business-04',
    'business',
    'Retailers test smaller stores in high-footfall neighborhoods',
    'Some retailers are experimenting with compact store formats that focus on their most popular products.',
    'Retail companies are testing smaller store formats in busy neighborhoods. The stores carry fewer products while relying on digital ordering for items that are not physically stocked.\n\nRetailers say the format could lower operating costs while maintaining access to high-demand products.',
    'Retail Business Review',
    '2026-09-20T16:15:00Z',
  ),

  createArticle(
    'business-05',
    'business',
    'Independent restaurants use shared purchasing programs',
    'Restaurant owners are working together to negotiate better prices for frequently used ingredients.',
    'Independent restaurants are forming purchasing groups to negotiate better prices on commonly used ingredients. Members place combined orders while maintaining separate menus and operations.\n\nOwners say the model can improve purchasing power without requiring restaurants to become part of a larger chain.',
    'Hospitality Business',
    '2026-09-19T12:40:00Z',
  ),

  createArticle(
    'business-06',
    'business',
    'Startups focus on software tools for small professional teams',
    'New software companies are building simpler tools for scheduling, communication and document management.',
    'A growing group of startups is targeting small professional teams with software designed around simple workflows. Their products combine scheduling, communication and document management without requiring large IT departments.\n\nAnalysts say smaller businesses remain an important market for specialized software.',
    'Startup Monitor',
    '2026-09-18T15:30:00Z',
  ),

  createArticle(
    'business-07',
    'business',
    'Manufacturers increase investment in predictive maintenance',
    'Factories are using equipment sensors to identify possible problems before machines fail.',
    'Manufacturers are expanding the use of sensors and software to monitor industrial equipment. The systems analyze temperature, vibration and operating patterns to identify potential problems.\n\nFactory managers say earlier warnings can help them schedule repairs instead of responding to unexpected breakdowns.',
    'Manufacturing Today',
    '2026-09-17T11:20:00Z',
  ),

  createArticle(
    'business-08',
    'business',
    'Local retailers create loyalty programs without third-party platforms',
    'Small stores are developing direct customer programs to encourage repeat purchases.',
    'Independent retailers are experimenting with simple loyalty programs that they operate directly. The programs reward repeat customers while allowing stores to communicate about promotions and new products.\n\nOwners say direct relationships can provide useful information without relying entirely on external platforms.',
    'Retail Desk',
    '2026-09-16T09:40:00Z',
  ),

  createArticle(
    'business-09',
    'business',
    'Companies review flexible workspace policies as employee needs change',
    'Businesses are reassessing office layouts and workspace schedules after several years of changing work patterns.',
    'Companies are reviewing how much office space they need and how employees use it. Some businesses are creating flexible meeting areas while reducing permanently assigned desks.\n\nReal estate managers say the focus has shifted from maximizing desk capacity to supporting different types of work.',
    'Workplace Business',
    '2026-09-15T14:05:00Z',
  ),

  createArticle(
    'business-10',
    'business',
    'Small exporters improve order tracking for international customers',
    'Smaller exporters are adopting better shipment tracking tools to give customers more visibility.',
    'Small exporters are investing in shipment tracking tools that provide customers with clearer delivery updates. Business owners say better information can reduce support requests and improve confidence in international orders.\n\nThe systems are increasingly being integrated with existing order management tools.',
    'Trade & Commerce',
    '2026-09-14T12:10:00Z',
  ),

  // ============================================================
  // TECHNOLOGY — 10 ARTICLES
  // ============================================================

  createArticle(
    'technology-01',
    'technology',
    'Local energy grids turn to software to balance unpredictable demand',
    'Utilities are testing neighborhood-scale systems that coordinate batteries, rooftop solar and household demand in real time.',
    'A growing number of regional utilities are testing software that can coordinate power from rooftop solar, home batteries and electric vehicles. The systems are designed to respond to changing demand throughout the day.\n\nThe approach could help communities make better use of renewable power without waiting for major transmission projects.',
    'The Grid Journal',
    '2026-09-24T08:15:00Z',
  ),

  createArticle(
    'technology-02',
    'technology',
    'Developers explore smaller AI models for everyday applications',
    'Software teams are testing smaller AI models that can perform focused tasks with lower computing requirements.',
    'Developers are experimenting with smaller artificial intelligence models for applications that do not require the largest systems. Smaller models can be useful when applications need faster responses or lower operating costs.\n\nTeams are comparing accuracy, speed and resource requirements across different workloads.',
    'Technology Review Desk',
    '2026-09-23T13:45:00Z',
  ),

  createArticle(
    'technology-03',
    'technology',
    'Schools introduce coding assistants for classroom projects',
    'Educators are testing software assistants that help students understand programming concepts while completing assignments.',
    'Schools are experimenting with coding assistants that provide hints and explanations while students work on programming assignments. Teachers say the systems are being used as learning aids rather than replacements for instruction.\n\nEducators are also developing guidelines around checking and understanding generated code.',
    'Digital Education News',
    '2026-09-22T11:30:00Z',
  ),

  createArticle(
    'technology-04',
    'technology',
    'New tools help small teams monitor cloud spending',
    'Developers are adopting lightweight tools that provide clearer information about cloud infrastructure costs.',
    'Small software teams are adopting cloud cost monitoring tools that break spending down by service and project. Developers say clearer information makes it easier to identify unused resources and unexpected increases.\n\nSome tools are also adding alerts that notify teams when spending passes predefined thresholds.',
    'Cloud Technology Weekly',
    '2026-09-21T16:20:00Z',
  ),

  createArticle(
    'technology-05',
    'technology',
    'Open-source projects improve accessibility testing for websites',
    'Developers are creating easier ways for teams to identify common accessibility problems during development.',
    'Open-source developer communities are improving tools that automatically detect common accessibility issues in websites. The tools can identify problems involving labels, contrast, keyboard navigation and page structure.\n\nMaintainers say automated checks are most useful when combined with manual testing.',
    'Web Platform Journal',
    '2026-09-20T10:05:00Z',
  ),

  createArticle(
    'technology-06',
    'technology',
    'Researchers test battery designs using new simulation techniques',
    'Engineering teams are using computer simulations to evaluate battery materials before building physical prototypes.',
    'Researchers are using advanced computer simulations to test how different battery materials might behave under changing conditions. The simulations allow teams to compare designs before committing resources to physical prototypes.\n\nScientists say laboratory testing remains essential, but simulations can narrow down promising options.',
    'Future Technology',
    '2026-09-19T09:50:00Z',
  ),

  createArticle(
    'technology-07',
    'technology',
    'Browser tools make privacy settings easier to understand',
    'New interface designs are attempting to explain complicated privacy controls in simpler language.',
    'Browser developers are testing redesigned privacy controls that explain permissions in more accessible language. The goal is to help users understand which websites can access particular information.\n\nDesigners say privacy settings are often difficult to understand because they involve technical concepts that users rarely encounter.',
    'Internet Desk',
    '2026-09-18T14:40:00Z',
  ),

  createArticle(
    'technology-08',
    'technology',
    'Small companies adopt automated document processing',
    'Businesses are using software to extract information from invoices, forms and other repetitive documents.',
    'Small companies are adopting automated document processing systems to reduce repetitive data entry. The tools can extract information from invoices, forms and reports and send it into existing business systems.\n\nCompanies are still keeping human review for documents where mistakes could have significant consequences.',
    'Enterprise Technology News',
    '2026-09-17T12:00:00Z',
  ),

  createArticle(
    'technology-09',
    'technology',
    'Universities expand robotics laboratories for student projects',
    'More universities are creating shared robotics facilities where students can experiment with sensors and autonomous systems.',
    'Universities are expanding robotics laboratories that allow students from different departments to work on practical projects. Facilities typically include programmable robots, sensors and basic manufacturing equipment.\n\nFaculty members say shared laboratories can reduce the cost of equipment for individual student teams.',
    'Campus Technology',
    '2026-09-16T15:25:00Z',
  ),

  createArticle(
    'technology-10',
    'technology',
    'Developers improve tools for testing applications on mobile devices',
    'Software teams are using new testing tools to reproduce common device and network conditions before release.',
    'Development teams are adopting improved testing tools that simulate different mobile devices, network speeds and screen sizes. The tools allow developers to identify interface problems before applications reach users.\n\nTesting teams say automated device coverage can reduce the amount of repetitive manual testing required.',
    'Developer Weekly',
    '2026-09-15T08:35:00Z',
  ),

  // ============================================================
  // SPORTS — 10 ARTICLES
  // ============================================================

  createArticle(
    'sports-01',
    'sports',
    'Community cycling teams try a new approach to heat-safe training',
    'Coaches are adjusting session timing and recovery plans as clubs prepare for warmer conditions.',
    'Community cycling clubs are changing how they schedule training as warmer weather becomes a more regular part of the season. Some teams now begin rides earlier and shorten high-intensity intervals on hot days.\n\nSeveral clubs are sharing their approach with regional organizers.',
    'The Weekend Sport',
    '2026-09-19T09:10:00Z',
  ),

  createArticle(
    'sports-02',
    'sports',
    'Young athletes gain access to more community training facilities',
    'Local sports organizations are opening additional practice facilities for students and amateur athletes.',
    'Community sports organizations are expanding access to training facilities for young athletes. Several programs are sharing existing grounds and equipment to reduce costs.\n\nCoaches say greater access can help beginners participate without expensive private memberships.',
    'Sports Community Desk',
    '2026-09-18T14:30:00Z',
  ),

  createArticle(
    'sports-03',
    'sports',
    'Coaches use performance data to personalize training plans',
    'Sports teams are increasingly using basic performance data to adjust training workloads.',
    'Coaches are using performance measurements to better understand how athletes respond to training. The information can include workload, recovery and performance during practice sessions.\n\nTeams say the goal is not to replace coaching decisions but to provide additional information.',
    'Athletics Weekly',
    '2026-09-17T11:45:00Z',
  ),

  createArticle(
    'sports-04',
    'sports',
    'Community football clubs invest in better youth facilities',
    'Local football organizations are improving pitches and training areas for younger players.',
    'Community football clubs are investing in improved training facilities for youth teams. Projects include better playing surfaces, lighting and shared equipment.\n\nClub organizers say improved facilities can make regular training easier for both players and coaches.',
    'Football Community News',
    '2026-09-16T16:10:00Z',
  ),

  createArticle(
    'sports-05',
    'sports',
    'Schools organize more inter-college athletics competitions',
    'Educational institutions are expanding opportunities for students to participate in organized athletics events.',
    'Schools and colleges are increasing the number of athletics competitions available to students. Organizers say regular events can encourage participation and give athletes more experience competing under pressure.\n\nThe programs include running, jumping and team events.',
    'Campus Sports',
    '2026-09-15T10:20:00Z',
  ),

  createArticle(
    'sports-06',
    'sports',
    'Tennis clubs introduce flexible practice sessions for beginners',
    'Local tennis clubs are creating shorter sessions aimed at people who are new to the sport.',
    'Tennis clubs are introducing flexible beginner sessions that require less time than traditional training programs. Coaches say shorter sessions can make it easier for new players to build a regular routine.\n\nClubs are also creating shared equipment programs for beginners.',
    'Racket Sports Daily',
    '2026-09-14T13:05:00Z',
  ),

  createArticle(
    'sports-07',
    'sports',
    'Athletes experiment with recovery routines between competitions',
    'Sports teams are paying greater attention to rest, hydration and recovery during busy competition schedules.',
    'Athletes competing in frequent events are experimenting with structured recovery routines. Teams are tracking rest periods and training loads to avoid unnecessary fatigue.\n\nCoaches emphasize that recovery plans vary depending on the sport and individual athlete.',
    'Performance Sport',
    '2026-09-13T09:40:00Z',
  ),

  createArticle(
    'sports-08',
    'sports',
    'Local basketball leagues add more weekend fixtures',
    'Community leagues are expanding schedules to accommodate growing participation.',
    'Local basketball leagues are adding weekend fixtures after registrations increased. Organizers are using additional courts and rotating schedules to accommodate more teams.\n\nLeague officials say the expanded format should provide more regular competition while avoiding excessive travel.',
    'Basketball Bulletin',
    '2026-09-12T15:15:00Z',
  ),

  createArticle(
    'sports-09',
    'sports',
    'Chess clubs create beginner tournaments for new players',
    'Community chess organizations are introducing smaller tournaments designed to help beginners gain competitive experience.',
    'Chess clubs are organizing beginner-friendly tournaments where new players can experience competitive games without entering large established events.\n\nOrganizers say the smaller format helps participants learn tournament procedures while meeting other players.',
    'Chess & Games Journal',
    '2026-09-11T12:35:00Z',
  ),

  createArticle(
    'sports-10',
    'sports',
    'Running groups expand early-morning community sessions',
    'Local running groups are adding more early sessions to help members avoid hotter parts of the day.',
    'Community running groups are increasing the number of early-morning sessions available to members. Organizers say the schedule gives runners a consistent option before work and school.\n\nSeveral groups are also introducing slower-paced sessions for beginners.',
    'Running Weekly',
    '2026-09-10T07:50:00Z',
  ),

  // ============================================================
  // SCIENCE — 10 ARTICLES
  // ============================================================

  createArticle(
    'science-01',
    'science',
    'Researchers map how restored wetlands hold back stormwater',
    'A multi-year field study is measuring how wetland restoration changes flood patterns after heavy rain.',
    'Researchers working across several restored wetlands have combined water-level sensors, aerial surveys and rainfall records to understand how the landscapes respond to storms.\n\nThe team found that effects vary with soil type, vegetation and the shape of nearby channels.',
    'Field Notes Science',
    '2026-09-22T10:00:00Z',
  ),

  createArticle(
    'science-02',
    'science',
    'Scientists develop new methods for monitoring urban air quality',
    'Researchers are testing networks of smaller sensors to complement traditional air-quality monitoring stations.',
    'Scientists are testing networks of compact air-quality sensors in urban neighborhoods. The devices can collect measurements from locations that are not covered by traditional monitoring stations.\n\nResearchers are comparing readings from the smaller sensors with established equipment to evaluate their reliability.',
    'Science Monitor',
    '2026-09-21T09:15:00Z',
  ),

  createArticle(
    'science-03',
    'science',
    'Researchers study how forests recover after severe storms',
    'A long-term field study is tracking changes in forests following major weather events.',
    'Researchers are monitoring forests that experienced severe storms several years ago. They are recording tree growth, soil conditions and changes in plant communities.\n\nThe study could provide more information about how different forest types recover naturally after major disturbances.',
    'Ecology Research Desk',
    '2026-09-20T12:50:00Z',
  ),

  createArticle(
    'science-04',
    'science',
    'Astronomers improve methods for identifying distant objects',
    'Research teams are developing software that helps process large astronomical datasets more efficiently.',
    'Astronomers are improving software systems used to identify unusual objects in large telescope datasets. Automated systems can help researchers prioritize observations that require closer examination.\n\nScientists say the tools are particularly useful as telescopes produce increasing amounts of data.',
    'Astronomy Today',
    '2026-09-19T18:00:00Z',
  ),

  createArticle(
    'science-05',
    'science',
    'Marine researchers track changes in coastal ecosystems',
    'Scientists are combining underwater surveys and satellite observations to study coastal environments.',
    'Marine researchers are combining underwater surveys with satellite observations to study changes in coastal ecosystems. The approach allows scientists to compare local observations with larger regional patterns.\n\nResearchers say long-term monitoring is important because coastal ecosystems can change significantly between seasons.',
    'Ocean Science Review',
    '2026-09-18T10:45:00Z',
  ),

  createArticle(
    'science-06',
    'science',
    'Researchers investigate how soil health affects crop productivity',
    'Scientists are comparing soil conditions across farms to better understand long-term agricultural productivity.',
    'Agricultural researchers are studying how soil properties influence crop productivity over multiple growing seasons. Measurements include organic matter, moisture and nutrient levels.\n\nThe researchers hope the results can help farmers make better decisions about soil management.',
    'Agricultural Science',
    '2026-09-17T13:30:00Z',
  ),

  createArticle(
    'science-07',
    'science',
    'New sensors help researchers measure glacier movement',
    'Scientists are combining remote sensors with field observations to monitor changes in glaciers.',
    'Researchers are deploying new sensor systems to measure glacier movement and surface conditions. The devices can collect observations continuously while researchers use periodic field visits to validate the measurements.\n\nScientists say continuous data can reveal changes that short field surveys may miss.',
    'Earth Science Journal',
    '2026-09-16T08:20:00Z',
  ),

  createArticle(
    'science-08',
    'science',
    'Universities collaborate on long-term biodiversity surveys',
    'Researchers are creating shared methods for monitoring plant and animal populations over several years.',
    'Universities and research organizations are collaborating on long-term biodiversity surveys. Teams are using common methods so observations from different locations can be compared.\n\nResearchers say consistent data collection is essential for understanding gradual ecological changes.',
    'Biodiversity Report',
    '2026-09-15T11:10:00Z',
  ),

  createArticle(
    'science-09',
    'science',
    'Scientists examine how urban trees affect local temperatures',
    'Researchers are measuring temperature differences between areas with different levels of tree cover.',
    'Scientists are studying how urban tree cover affects local temperatures during hot weather. Sensors are being placed in streets, parks and neighborhoods with different amounts of vegetation.\n\nThe project aims to provide more detailed evidence for city planners deciding where additional trees could have the greatest effect.',
    'Urban Science Review',
    '2026-09-14T14:55:00Z',
  ),

  createArticle(
    'science-10',
    'science',
    'Research teams improve tools for studying renewable materials',
    'Scientists are testing new laboratory methods for evaluating materials that could be used in sustainable products.',
    'Research teams are developing laboratory methods for comparing renewable materials. The work focuses on durability, production requirements and how materials behave under different conditions.\n\nResearchers say standardized testing could make it easier to compare results from different laboratories.',
    'Materials Science Weekly',
    '2026-09-13T10:25:00Z',
  ),

  // ============================================================
  // HEALTH — 10 ARTICLES
  // ============================================================

  createArticle(
    'health-01',
    'health',
    'Hospitals expand digital appointment systems for routine care',
    'Healthcare providers are improving online scheduling tools to make routine appointments easier to arrange.',
    'Hospitals and clinics are expanding digital appointment systems for routine care. New interfaces are designed to show available appointment types more clearly and reduce unnecessary phone calls.\n\nHealthcare organizations are also keeping traditional booking options for patients who prefer them.',
    'Health Services Desk',
    '2026-09-22T09:00:00Z',
  ),

  createArticle(
    'health-02',
    'health',
    'Community programs encourage regular physical activity',
    'Local organizations are creating accessible exercise programs aimed at people who are new to regular physical activity.',
    'Community organizations are launching low-cost physical activity programs for residents. Sessions include walking groups, beginner exercise classes and outdoor activities.\n\nOrganizers say the focus is on building sustainable habits rather than intensive short-term programs.',
    'Community Health Journal',
    '2026-09-21T13:15:00Z',
  ),

  createArticle(
    'health-03',
    'health',
    'Researchers study better ways to organize preventive health information',
    'Health researchers are testing clearer communication methods for routine preventive care.',
    'Researchers are studying how people understand information about preventive healthcare. The projects compare different ways of presenting schedules, recommendations and reminders.\n\nThe researchers hope clearer communication can help people make more informed decisions about routine care.',
    'Public Health Review',
    '2026-09-20T11:40:00Z',
  ),

  createArticle(
    'health-04',
    'health',
    'Workplaces introduce quieter spaces for focused breaks',
    'Some employers are redesigning office areas to provide employees with quieter places to rest during the workday.',
    'Several workplaces are creating quieter spaces where employees can take short breaks away from busy office areas. Employers say the spaces are intended to provide flexibility rather than prescribe a particular break routine.\n\nEmployees are being asked to provide feedback about how the spaces are used.',
    'Workplace Health',
    '2026-09-19T15:00:00Z',
  ),

  createArticle(
    'health-05',
    'health',
    'Researchers examine links between neighborhood design and daily activity',
    'A research project is studying whether walkable neighborhoods influence everyday physical activity.',
    'Researchers are examining how neighborhood design affects everyday movement. The study compares areas with different access to sidewalks, parks, public transport and local services.\n\nResearchers say the goal is to better understand how environmental factors influence daily routines.',
    'Health Research Desk',
    '2026-09-18T10:20:00Z',
  ),

  createArticle(
    'health-06',
    'health',
    'Clinics test simpler digital forms for patient registration',
    'Healthcare providers are redesigning registration forms to reduce unnecessary questions and improve clarity.',
    'Clinics are testing shorter digital registration forms for routine appointments. The redesign focuses on presenting questions in smaller groups and explaining why information is requested.\n\nProviders say clearer forms may make the registration process easier for both patients and staff.',
    'Healthcare Technology',
    '2026-09-17T12:30:00Z',
  ),

  createArticle(
    'health-07',
    'health',
    'Community kitchens expand nutrition education programs',
    'Local food organizations are combining meal programs with practical nutrition education.',
    'Community kitchens are expanding programs that combine meal services with practical food education. Participants can learn about meal planning, food storage and preparing affordable meals.\n\nOrganizers say the programs are designed around everyday cooking rather than specialized diets.',
    'Nutrition Community News',
    '2026-09-16T16:45:00Z',
  ),

  createArticle(
    'health-08',
    'health',
    'Universities study how students use campus wellness services',
    'Researchers are analyzing anonymized service data to understand when students seek support.',
    'University researchers are studying patterns in how students use campus wellness services. The analysis focuses on general trends such as seasonal demand and appointment types.\n\nResearchers say the findings could help institutions plan services around periods of higher demand.',
    'Campus Health Report',
    '2026-09-15T09:35:00Z',
  ),

  createArticle(
    'health-09',
    'health',
    'Hospitals improve patient navigation with clearer signs',
    'Healthcare facilities are redesigning signs and maps to make large hospitals easier to navigate.',
    'Several hospitals are redesigning signs and maps after reviewing common navigation problems. The new systems use clearer directions and more consistent naming for departments.\n\nHospital administrators say better navigation can reduce confusion for patients and visitors.',
    'Medical Services Journal',
    '2026-09-14T13:50:00Z',
  ),

  createArticle(
    'health-10',
    'health',
    'Public health teams create multilingual information resources',
    'Health organizations are developing easier-to-understand resources for communities that speak multiple languages.',
    'Public health teams are creating multilingual information resources for common health services. The materials are being reviewed by community organizations to improve clarity and accessibility.\n\nOfficials say the resources are intended to complement existing healthcare services.',
    'Public Health Desk',
    '2026-09-13T11:05:00Z',
  ),

  // ============================================================
  // ENTERTAINMENT — 10 ARTICLES
  // ============================================================

  createArticle(
    'entertainment-01',
    'entertainment',
    'Independent cinemas build local archives around community screenings',
    'Small theaters are pairing restored regional films with interviews and programs curated by local historians.',
    'Independent cinemas are building screening programs around films made in their own regions. Organizers are pairing restored titles with interviews and talks from local historians.\n\nSome theaters are recording post-screening discussions and adding them to small online collections.',
    'Culture Section',
    '2026-09-18T16:05:00Z',
  ),

  createArticle(
    'entertainment-02',
    'entertainment',
    'Local theaters experiment with shorter film festivals',
    'Independent venues are organizing smaller festivals focused on specific genres and regional filmmakers.',
    'Local theaters are experimenting with shorter film festivals that focus on specific themes and groups of filmmakers. Organizers say smaller programs can make it easier for audiences to attend multiple screenings.\n\nSeveral venues are also adding discussions with filmmakers after selected screenings.',
    'Cinema Review',
    '2026-09-17T14:10:00Z',
  ),

  createArticle(
    'entertainment-03',
    'entertainment',
    'Music venues create more opportunities for emerging artists',
    'Small venues are introducing recurring events designed to give new performers more stage time.',
    'Independent music venues are creating recurring events for emerging artists. The programs allow musicians to perform shorter sets while audiences discover performers they may not have encountered previously.\n\nVenue operators say the events are also helping create stronger local music communities.',
    'Music City Desk',
    '2026-09-16T19:20:00Z',
  ),

  createArticle(
    'entertainment-04',
    'entertainment',
    'Libraries expand access to local film and music collections',
    'Public libraries are developing digital collections featuring regional artists and filmmakers.',
    'Libraries are working with local artists and filmmakers to preserve regional cultural collections. Some projects include recorded interviews, short films and performances.\n\nLibrarians say digital collections can make local cultural material available to audiences who cannot attend physical events.',
    'Arts & Culture',
    '2026-09-15T10:40:00Z',
  ),

  createArticle(
    'entertainment-05',
    'entertainment',
    'Independent filmmakers turn to smaller production teams',
    'Filmmakers are experimenting with compact production models to reduce costs and simplify shooting schedules.',
    'Independent filmmakers are increasingly experimenting with smaller production teams. Producers say compact crews can make it easier to work across multiple locations and adapt schedules.\n\nThe approach is particularly common among filmmakers working on documentaries and smaller narrative projects.',
    'Film Industry Journal',
    '2026-09-14T17:30:00Z',
  ),

  createArticle(
    'entertainment-06',
    'entertainment',
    'Art galleries use digital previews to reach wider audiences',
    'Smaller galleries are creating online previews so visitors can explore exhibitions before attending in person.',
    'Independent galleries are using digital previews to introduce new exhibitions to audiences outside their immediate neighborhoods. Online pages include photographs, artist information and exhibition schedules.\n\nGallery owners say digital previews complement rather than replace in-person visits.',
    'Art Market News',
    '2026-09-13T12:15:00Z',
  ),

  createArticle(
    'entertainment-07',
    'entertainment',
    'Community festivals combine film, music and local food',
    'New neighborhood festivals are bringing several forms of entertainment together in one event.',
    'Community organizations are creating festivals that combine outdoor films, local music and food vendors. Organizers say the mixed format encourages people who might not attend a single-purpose event.\n\nSeveral festivals are also reserving space for local artists and small businesses.',
    'Culture & Community',
    '2026-09-12T15:45:00Z',
  ),

  createArticle(
    'entertainment-08',
    'entertainment',
    'Podcasters create local history series with community interviews',
    'Independent audio creators are producing documentary-style series based on interviews with residents.',
    'Independent podcasters are creating local history series using interviews with residents, researchers and community organizations. Episodes combine personal stories with historical records.\n\nCreators say the format gives communities another way to preserve memories and experiences.',
    'Audio Culture Weekly',
    '2026-09-11T09:55:00Z',
  ),

  createArticle(
    'entertainment-09',
    'entertainment',
    'Book clubs organize public conversations with emerging authors',
    'Community reading groups are expanding their programs with author talks and public discussions.',
    'Book clubs and independent bookstores are organizing public conversations with emerging authors. The events combine book discussions with questions from local readers.\n\nOrganizers say the format creates a more informal alternative to large literary festivals.',
    'Literary Culture Desk',
    '2026-09-10T13:25:00Z',
  ),

  createArticle(
    'entertainment-10',
    'entertainment',
    'Small theaters revive classic plays with modern staging',
    'Local theater groups are revisiting older plays using simpler sets and contemporary production techniques.',
    'Small theater companies are staging classic plays with modern production designs. Directors are experimenting with compact sets and updated lighting while retaining the original scripts.\n\nThe companies say the approach allows them to present established works without the costs associated with large productions.',
    'Stage & Screen',
    '2026-09-09T18:15:00Z',
  ),
]