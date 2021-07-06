import { StyleSheet } from "react-native";

import { theme } from "../../theme/index";

export const sx = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary100,
    paddingHorizontal: 20,
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  Name: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 28,
    marginTop: 15,
  },

  Button: {
    width: 150,
    height: 50,
    backgroundColor: theme.colors.secondary30,
    marginTop: 30,
    borderRadius: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  Icon: {
    marginRight: 1,
  },

  closeButton: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 15,
    marginBottom: 1,
  },
});
