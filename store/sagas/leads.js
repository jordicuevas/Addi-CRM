import { call, all, put, takeLatest } from "redux-saga/effects";
import { actionTypes, loadDataSuccess, failure } from "../actions";
import { toast, ToastContainer } from "react-nextjs-toast";
import { environment} from '../../environment'
import { sagaMessages } from '../../utils/messages'

function* getLeadsSaga() {
  try {
    const res = yield fetch(`${environment.api}/api/leads`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}
function* watchGetLeadsSaga() {
  yield takeLatest(actionTypes.GET_LEADS, getLeadsSaga);
}

function* updateLead(action) {
  try {
    const [identification, criminal] = yield all([
      call(fetch, `${environment.api}/api/verify`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }),
      call(fetch, `${environment.api}/api/criminal`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }),
    ]);

    const gotIdentity = yield identification.json();
    const gotCriminalBackground = yield criminal.json();

    if (gotIdentity.isValid && !gotCriminalBackground.isCriminal) {
      toast.notify(sagaMessages.userValidated, {
        type: "success",
      });
      yield put({
        type: actionTypes.LEAD_UPDATE_SUCCEEDED,
        payload: {
          verifiedResponse: true,
          id: action.payload,
        },
      });
    } else {
      toast.notify(sagaMessages.userNotValidated, { type: "error" });
    }
  } catch (error) {
    yield put({
      type: actionTypes.failure,
      payload: error.message,
    });
  }
}

function* watchUpdateLead() {
  yield takeLatest(actionTypes.LEAD_UPDATE_REQUESTED, updateLead);
}

function* validateProspect(action) {
  try {
    const response = yield fetch(`${environment.api}/api/score`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });

    const leadScore = yield response.json();
    if (leadScore.leadScore > 60) {
      toast.notify(`${sagaMessages.leadToProspect } ${leadScore.leadScore}`, {
        type: "success",
      });
      yield put({
        type: actionTypes.LEAD_PROSPECT_SUCCEEDED,
        payload: {
          prospectScore: leadScore,
          id: action.payload,
        },
      });
    } else {
      toast.notify(
        `${sagaMessages.leadNotProspect } ${leadScore.leadScore}`,
        { type: "error" }
      );
    }
  } catch (error) {
    yield put({
      type: actionTypes.failure,
      payload: error.message,
    });
  }
}

function* watchValidateProspect() {
  yield takeLatest(actionTypes.LEAD_PROSPECT_REQUESTED, validateProspect);
}

function* rootSaga() {
  yield all([
    watchGetLeadsSaga(),
    watchValidateProspect(),
    watchUpdateLead(),
  ]);
}

export default rootSaga;
