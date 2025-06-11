import { getFocusedRouteNameFromRoute, Route } from "@react-navigation/native";

// Need to define a function to get the header title based on the route name.
// As this is the root header, it will be used for all screens in the app.
const getHeaderTitle = (route: Partial<Route<string>>) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log("getHeaderTitle called with routeName:", route, routeName);

  switch (routeName) {
    case "index":
      return "Welcome";
    case "hub":
      return "My Info Hub";
    case "home/index":
      return "Home";
    case "wallet/index":
      return "Your Digital Wallet";
    case "about/index":
      return "About Us";
    case "contactUs/index":
      return "Contact Us";
    default:
      return "Welcome";
  }
}

export { getHeaderTitle };