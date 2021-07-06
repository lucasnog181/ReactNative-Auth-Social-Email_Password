import { StyleSheet } from "react-native";

import { theme } from "../../theme/index";

export const sx = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },

  buttonContent: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  signInButton: {
    backgroundColor: theme.colors.primary,
    width: 150,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  SignUpButton: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    width: 150,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  TitleButton: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },

  TitleButton2: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
    fontSize: 18,
  },
});
