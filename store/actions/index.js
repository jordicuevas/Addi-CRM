export const actionTypes = {
  FAILURE: "FAILURE",
  VERIFY_USER: "VERIFY_USER",
  GET_LEADS: "GET_LEADS",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
  HYDRATE: "HYDRATE",
  LEAD_UPDATE_REQUESTED: "LEAD_UPDATE_REQUESTED",
  LEAD_UPDATE_SUCCEEDED: "LEAD_UPDATE_SUCCEEDED",
  LEAD_PROSPECT_REQUESTED: "LEAD_PROSPECT_REQUESTED",
  LEAD_PROSPECT_SUCCEEDED: "LEAD_PROSPECT_SUCCEEDED ",
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function fetchleads() {
  return { type: actionTypes.GET_LEADS };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}
export function reset() {
  return { type: actionTypes.RESET };
}

export const updateLead = (lead) => {
  return {
    type: actionTypes.LEAD_UPDATE_REQUESTED,
    payload: lead,
  };
};

export const validateProspect = (id) => {
  return {
    type: actionTypes.LEAD_PROSPECT_REQUESTED,
    payload: id,
  };
};
