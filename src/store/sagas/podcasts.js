import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import podcasts from '../../../server.json';

import PodcastsActions from '../ducks/podcasts';

export function* load() {
  try {
    // const response = yield call(api.get, 'podcasts');
    // yield put(PodcastsActions.loadSuccess(response.data));
    yield put(PodcastsActions.loadSuccess(podcasts.podcasts));
  } catch (err) {
    yield put(PodcastsActions.loadFailure());
  }
}
