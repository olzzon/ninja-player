import { ISettings } from "../../model/types";
import { createAllURLs } from "./createClientURL";
import { post } from "request";

export const restApiPostToPortal = (settings: ISettings) => {
  const options = {
    url: settings.portalUrl,
    json: true,
    body: {
      id: settings.id,
      link: createAllURLs(settings),
    },
  };
  post(options, (error, response) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`statusCode: ${response.statusCode}`);
  });
};
