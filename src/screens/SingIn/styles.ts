import { StyleSheet } from "react-native";

import { theme } from "../../theme/index";

export const sx = StyleSheet.create({
  content: {
    marginTop: 50,
    marginHorizontal: 20,
  },

  contentTitle: {
    marginTop: 54,
  },

  Title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 40,
  },

  Form: {},

  FormTitle: {
    marginBottom: 7,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 14,
  },

  Input: {
    width: "100%",
    height: 50,

    backgroundColor: "rgba(196, 196, 196, 0.15)",
    borderRadius: 8,
    padding: 10,
    color: theme.colors.heading,
    fontSize: 16,
  },

  FormInputEmil: {
    marginTop: 38,
  },

  FormInputPassword: {
    marginTop: 20,
  },

  ButtonAccount: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(229, 28, 68, 1)",
    marginTop: 70,
    borderRadius: 12,

    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  ButtonAccountTitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 17,
  },
});
