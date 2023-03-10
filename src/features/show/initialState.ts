export const initialState: InitialState = {
  loading: false,
  keyword: 'breaking',
  status: 'idle',
  show: [
    {
      id: 169,
      url: 'https://www.tvmaze.com/shows/169/breaking-bad',
      name: 'Breaking Bad',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Crime', 'Thriller'],
      status: 'Ended',
      runtime: 60,
      averageRuntime: 60,
      premiered: '2008-01-20',
      ended: '2019-10-11',
      officialSite: 'http://www.amc.com/shows/breaking-bad',
      schedule: {
        time: '22:00',
        days: ['Sunday']
      },
      rating: {
        average: 9.2
      },
      weight: 99,
      network: {
        id: 20,
        name: 'AMC',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York'
        },
        officialSite: null
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 18164,
        thetvdb: 81189,
        imdb: 'tt0903747'
      },
      image: {
        medium:
          'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
        original:
          'https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg'
      },
      summary:
        "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>",
      updated: 1663295367,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/169'
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/2007806'
        }
      }
    }
  ],
  error: ''
};
