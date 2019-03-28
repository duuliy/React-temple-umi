import imgsrc from '../../public/images/icon.png'
// import imgbg from '@v/images/img_bg.png'
// import loadingComponent from '../components/PageLoading/PageLoading.js'

const config = {
    siteName: 'duuliy',
    copyright: '版权所有duuliy',
    logoPath: imgsrc,
    // imgbg:imgbg,
    apiPrefix: '/api/v1',
    fixedHeader: true, // sticky primary layout header
    // loadingComponent: loadingComponent,
  
    /* Layout configuration, specify which layout to use for route. */
    layouts: [
      {
        name: 'login',
        include: [/.*/],
        exlude: [/(\/(en|zh))*\/login/],
      },
      {
        name: 'register',
        include: [/.*/],
        exlude: [/(\/(en|zh))*\/register/],
      }
    ],
  
    /* I18n configuration, `languages` and `defaultLanguage` are required currently. */
    i18n: {
      /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
      languages: [
        {
          key: 'en',
          title: 'English',
          flag: '/america.svg',
        },
        {
          key: 'zh',
          title: '中文',
          flag: '/china.svg',
        },
      ],
      defaultLanguage: 'zh',
    },
  }

  export default config
  