
//develop environment
export const develop = {
  API: `https://apiinfinity.feliciastation.com/api/v1`,
  // API: `https://marketplace_api.megdev.co/api/v1`,
  // API: `https://marketplace.infinityangel.io/api/v1`,
  CAPTCHA_KEY: `6LfFLgIeAAAAAAclTDxmyP3juN4Wj-TeNI_7jl30`,
  GOOGLE_SIGN_IN_CLIENT_KEY: `655245171305-0pfnhphdi1gp33s1ejpgo2qem4matjc7.apps.googleusercontent.com`,
  MAIN_MENUS: [
    {
      title: "HOME",
      url: ["/"],
    },
    // {
    //   title: "PRESALE",
    //   url: ["/pre-sale"],
    // },
    {
      title: "MINTING",
      url: ["/minting-box"],
    },
    {
      title: "MARKETPLACE",
      url: ["/marketplace"],
    },
    {
      title: "BOXES",
      url: ["/boxes"],
    },
    {
      title: "SUMMON",
      url: ["/summon"],
      isLogged: true,
    },
    {
      title: "R - I",
      url: [
        "/research-institute/R-I",
        "/research-institute/slot",
        "/research-institute/history",
      ],
      isLogged: true,
    },
  ],
};

//staging environment
export const staging = {
  API: `https://marketplace_api.megdev.co/api/v1`,
  CAPTCHA_KEY: `6LfFLgIeAAAAAAclTDxmyP3juN4Wj-TeNI_7jl30`,
  GOOGLE_SIGN_IN_CLIENT_KEY: `655245171305-0pfnhphdi1gp33s1ejpgo2qem4matjc7.apps.googleusercontent.com`,
  MAIN_MENUS: [
    {
      title: "HOME",
      url: ["/"],
    },
    // {
    //   title: "MINTING",
    //   url: ["/minting-box"],
    // },
    {
      title: "MARKETPLACE",
      url: ["/marketplace"],
    },
    {
      title: "BOXES",
      url: ["/boxes"],
    },
    {
      title: "SUMMON",
      url: ["/summon"],
      isLogged: true,
    },
    {
      title: "R - I",
      url: [
        "/research-institute/R-I",
        "/research-institute/slot",
        "/research-institute/history",
      ],
      isLogged: true,
    },
  ],
};

//production environment
export const production = {
  // API: `https://marketplace.infinityangel.io/api/v1`,

  API: `https://apiinfinity.feliciastation.com/api/v1`,
  CAPTCHA_KEY: `6LdPQqMhAAAAANaFCYo54sl0FTq5_LtbZnX4a9n9`,
  GOOGLE_SIGN_IN_CLIENT_KEY: `655245171305-0pfnhphdi1gp33s1ejpgo2qem4matjc7.apps.googleusercontent.com`,
  MAIN_MENUS: [
    {
      title: "HOME",
      url: ["/"],
    },
    {
      title: "MINTING",
      url: ["/minting-box"],
    },
  ]
};
