export const loadSettings = () => {
  const settings = localStorage.getItem("settings");
  if (settings) {
    return JSON.parse(settings);
  }
  return {};
};

export const saveSettings = (settings: any) => {    
  localStorage.setItem("settings", JSON.stringify(settings));
}