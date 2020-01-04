import { Tag, Project, NormalizedExperience, NormalizedProject } from "../data/experiences/index.types";
import Experience from "../pages/index/components/experience/components/experience";

const initialState = {
  entities: {
    tags: {} as {[key: string]: Tag},
    experiences: {} as {[key: string]: NormalizedExperience},
    projects: {} as {[key: string]: NormalizedProject},
  },
};

type State = typeof initialState;

type Action = {
  type: 'REPLACE_STATE',
  payload: Partial<State>,
};

const reducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case 'REPLACE_STATE': {
      return action.payload;
    };
    default: {
      return state;
    }
  }
};

export default reducer;
