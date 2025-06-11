import { Slot, Stack } from "expo-router";

const ScreenRootLayout = () => {
  return (
  <Stack screenOptions={{ headerShown: false }} >
    <Stack.Screen name="home/index" options={{ title: "Home" }} />
    <Stack.Screen name="wallet/index" options={{ title: "Your Digital Wallet" }} />
    <Stack.Screen name="about/index" options={{ title: "About Us" }} />
    <Stack.Screen name="contactUs/index" options={{ title: "Contact Us" }} />
  </Stack>
  );
};

export default ScreenRootLayout;
