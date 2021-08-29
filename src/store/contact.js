import { snackbar } from "src/repositories/plugins";
import FlexValidators from "src/repositories/flex_validators";
import Connector from "src/repositories/connector";
const state = {
  formData: {
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    reason: ""
  },
  is_loading: false
};
const getters = {};

const mutations = {
  updateFormData(state, payload) {
    state.formData[payload.key] = payload.value;
  },
  updateIsLoading(state, value) {
    state.is_loading = value;
  },

  clearFormData(state) {
    state.formData = {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      reason: ""
    };
  }
};
const actions = {
  async create({ commit, state }, instance) {
    try {
      commit("updateIsLoading", true);
      const data = state.formData;

      new FlexValidators(data).check({
        firstname: "required|notNull",
        lastname: "required|notNull",
        email: "required|email|notNull",
        reason: "required|notNull"
      });

      await new Connector().api_calls(
        "https://www.agropark.com.ng/api/v1/section/contact",
        data
      );

      snackbar("success", "Contact form submitted successfully");
      commit("clearFormData");
      commit("updateIsLoading", false);
      instance.close();
    } catch (err) {
      snackbar("warning", err.message);
      commit("updateIsLoading", false);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
