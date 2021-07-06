import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const sx = StyleSheet.create({
  buttonSocial: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginTop: 30,
    borderRadius: 12,

    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },

  buttonSocialTitle: {
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
  },

  buttonSocialIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
