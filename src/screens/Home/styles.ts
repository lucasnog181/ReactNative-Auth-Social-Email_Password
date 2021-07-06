import { StyleSheet } from "react-native";

import { theme } from "../../theme/index";

export const sx = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary100,
    paddingHorizontal: 20,
  },

  Image: {
    width: 300,
    height: 200,
  },
  content: {
    marginTop: 20,
  },

  titleContent: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 24,
    marginBottom: 30,
    marginTop: 30,
  },
});
