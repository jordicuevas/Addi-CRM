import { actionTypes } from "../actions";
import { HYDRATE } from "next-redux-wrapper";
 
function reducer(state, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ leads: action.data },
      };



    case actionTypes.LEAD_UPDATE_SUCCEEDED:
      const updatedLead = state.leads.map((lead) => {
        if (lead.identification === action.payload.id) {
          return {
            ...lead,

            isVerified: true,
            qualified: true,
          };
        }
        return lead;
      });

      return { ...state, leads: updatedLead };


      
    case actionTypes.LEAD_PROSPECT_SUCCEEDED:
      let prospectsArray;
      if (state.prospects) {
        prospectsArray = state.prospects;
      } else {
        prospectsArray = [];
      }

      const prospect = state.leads.find(
        (lead) => lead.identification === action.payload.id
      );
      let prospectExists = prospectsArray.some(
        (prospect) => prospect.identification === action.payload.id
      );
      if (!prospectExists) {
        prospectsArray.push(prospect);
        const newLeads = state.leads.filter(
          (lead) => lead.identification !== action.payload.id
        );
        return {
          ...state,
          leads: newLeads,
          prospects: prospectsArray,
        };
      }  

    default:
      return state;
  }
}

export default reducer;
