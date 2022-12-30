import { en } from '../../languages/en';
import { jp } from '../../languages/jp';
import { kr } from '../../languages/kr';
import { vn } from '../../languages/vn';
import { SettingStoreConstant } from './settingConstants';

export const _changeLanguage =
  (lang = 'en') =>
    (dispatch) => {
      let library;
      localStorage.setItem('lang', lang);
      switch (lang) {
        case 'vn':
          library = { ...en, ...vn };
          break;
        case 'kr':
          library = { ...en, ...kr };
          break;
        case 'jp':
          library = { ...en, ...jp };
          break;
        default:
          localStorage.setItem('lang', 'en');
          library = en;
          break;
      }
      dispatch({
        type: SettingStoreConstant.CHANGE_LANGUAGE,
        payload: library,
      });
    };

export const _showAppError = (error) => (dispatch) => {
  dispatch({
    type: SettingStoreConstant.SET_ERROR_CODE,
    payload: error,
  });
};
