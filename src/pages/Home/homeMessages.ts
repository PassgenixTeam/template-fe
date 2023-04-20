import { defineMessages } from "react-intl";
import { EN_LOCALE, VI_LOCALE } from "../../services/language/constants";

// Scope is used to identify the messages in the translation files
const SCOPE = "HomePage";

// Define messages for the page
const homeMessages = defineMessages({
  seeMoreButton: {
    id: `${SCOPE}.SeeMoreButton`,
    [EN_LOCALE]: "SEE MORE",
    [VI_LOCALE]: "XEM THÊM",
  },
});

export default homeMessages;
