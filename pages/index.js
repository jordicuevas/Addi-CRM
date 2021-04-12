import { fetchleads } from "../store/actions";
import { END } from "redux-saga";
import { wrapper } from "../store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Leads from "../components/leads";

const Index = () => {
  return <Leads />;
};
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().leads) {
    store.dispatch(fetchleads());
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

export default Index;
