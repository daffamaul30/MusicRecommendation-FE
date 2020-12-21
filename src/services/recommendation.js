import BaseService from './baseService';
import API from '../config/rest';

const getRecommend = (title) => {
  return BaseService.get(API.MUSIC_RECOMMENDATION(title));
};

export default { getRecommend };
