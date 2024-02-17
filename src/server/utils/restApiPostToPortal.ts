import { ISettings } from "../../model/types";
import { createAllURLs } from "./createClientURL";
import { post } from "request";

export const restApiPostToPortal = (settings: ISettings) => {
  const options = {
    json: true,
    body: {
      id: settings.id,
      link: createAllURLs(settings),
    },
  };
  post(settings.portalUrl || "", options, (error, response) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`statusCode: ${response.statusCode}`);
  });
};
