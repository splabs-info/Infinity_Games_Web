import { combineReducers } from 'redux';
import { SettingReducer } from './setting/settingReducer';

const rootReducer = combineReducers({
  setting: SettingReducer,
});

export default rootReducer;
