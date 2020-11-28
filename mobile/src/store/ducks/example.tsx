export var Types = {
  EXAMPLE_TYPE: "EXPAMPLE_TYPE"
}

var INITIAL_STATE = {

}

export default function expampleReducer(state = INITIAL_STATE, payload)
{
  switch(payload.type)
  {
    case Types.EXAMPLE_TYPE:
      return {...state}
    default:
      return state;
  }
}

export const Actions = {
  exampleAction: () => {
    return {
      type: Types.EXAMPLE_TYPE
    }
  }
}