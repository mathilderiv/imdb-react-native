import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-web";
import { Constants } from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.topPart}>
          <Text style={styles.title}>Interstellar</Text>
          <View style={styles.characteristics}>
            <Text style={styles.year}>2014</Text>
            <Text style={styles.pg}>PG.13</Text>
            <Text style={styles.duration}>2h 49min</Text>
            <Text style={styles.theme}>Adventure, Drama, Sci-Fi</Text>
          </View>

          <View style={styles.description}>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.moviePoster}
              resizeMode="contain"
            />
            <View style={styles.watchlist}>
              <Text numberOfLines={3} style={styles.synopsis}>
                A team for explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival
              </Text>

              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={() => {
                  console.log("pressed !");
                }}
              >
                <Text style={styles.btnText}>+ ADD TO WATCHLIST </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.rateThis}>
            <View style={styles.pleinStar}>
              <AntDesign name="star" size={24} color="#E6B91E" />
              <Text style={styles.notation}>
                <Text style={styles.bold}>8.6/10{"\n"}</Text>
                1,1M
              </Text>
            </View>
            <View style={styles.emptyStar}>
              <AntDesign name="staro" size={24} color="white" />
              <Text style={styles.bis}>RATE{"\n"} THIS</Text>
            </View>

            <View style={styles.metascore}>
              <MaterialCommunityIcons
                name="scoreboard"
                size={24}
                color="#79CE6B"
              />
              <Text style={styles.reviews}>
                Metascore {"\n"} 46 critics reviews
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.topBilled}>
          <Text style={styles.topTitle}>Top Billed Cast</Text>
          <Text style={styles.all}>SEE ALL</Text>
        </View>

        <View style={styles.actors}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.detailsCooper}>
              <Image
                source={require("./assets/matthew.jpg")}
                style={styles.matthew}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.textMatthew}
              >
                Matthew McConaughey
              </Text>
              <Text style={styles.nicknameC}>Cooper</Text>
            </View>

            <View style={styles.detailsAnne}>
              <Image
                source={require("./assets/anne.jpg")}
                style={styles.anne}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.textAnne}
              >
                Anne Hathaway
              </Text>
              <Text style={styles.nicknameB}>Brand</Text>
            </View>

            <View style={styles.detailsMackenzie}>
              <Image
                source={require("./assets/mackenzie.jpg")}
                style={styles.mackenzie}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.textMackenzie}
              >
                Mackenzie Foy
              </Text>

              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.nicknameM}
              >
                Murph - 10 years old
              </Text>
            </View>

            <View style={styles.detailsJessica}>
              <Image
                source={require("./assets/jessica.jpg")}
                style={styles.jessica}
              />
              <Text style={styles.textJessica}>Jessica Chastain</Text>
              <Text style={styles.nicknameMurph}> Murph</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Toute la taille de l'écran
    backgroundColor: "#1C1C1C",
  },

  scrollView: {
    paddingTop: Platform.OS === "android" ? Constants.StatusBarHeight : 0,
  },

  header: {
    backgroundColor: "#393939",
    height: 50,
  },

  title: {
    fontSize: 30,
    color: "white",
    marginTop: 20,
  },

  topPart: {
    padding: 20,
    backgroundColor: "#212121",
  },

  logo: {
    height: 24,
    width: 50,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 20,
  },

  characteristics: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    width: "90%",
  },

  year: {
    color: "lightgrey",
  },

  pg: {
    color: "lightgrey",
  },

  duration: {
    color: "lightgrey",
  },

  theme: {
    color: "lightgrey",
  },

  moviePoster: {
    height: 130,
    width: 90,
    marginTop: 30,
  },

  description: {
    flexDirection: "row",
  },

  synopsis: {
    marginTop: 50,
    marginLeft: 15,
    width: 260,
    color: "white",
  },

  btn: {
    height: 35,
    width: 240,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#0277BD",
    backgroundColor: "#0277BD",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 15,
  },

  btnText: {
    color: "white",
  },

  rateThis: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  notation: {
    fontSize: 10,
    color: "white",
    lineHeight: 12,
    marginTop: 5,
  },

  bold: {
    fontWeight: "bold",
    fontSize: 12,
  },

  bis: {
    fontSize: 10,
    color: "white",
    lineHeight: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },

  metascore: {
    alignItems: "center",
  },

  emptyStar: {
    alignItems: "center",
  },

  plainStar: {
    alignItems: "center",
    marginBottom: 10,
  },

  reviews: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },

  topBilled: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  topTitle: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    marginBottom: 10,
  },

  all: {
    color: "#0277BD",
    fontWeight: "bold",
    marginRight: 10,
  },

  matthew: {
    height: 160,
    width: 130,
    marginRight: 10,
  },

  nicknameC: {
    color: "white",
    textAlign: "center",
  },

  textMatthew: {
    color: "white",

    width: 120,
  },

  anne: {
    height: 160,
    width: 130,
    marginRight: 10,
  },

  textAnne: {
    color: "white",
    textAlign: "center",
    width: 120,
  },

  nicknameB: {
    color: "white",
    textAlign: "center",
  },

  textMackenzie: {
    color: "white",
    textAlign: "center",
    width: 120,
  },

  mackenzie: {
    height: 160,
    width: 130,
    marginRight: 10,
  },

  nicknameM: {
    color: "white",
    textAlign: "center",
    width: 120,
  },

  textJessica: {
    color: "white",
    textAlign: "center",
  },
  jessica: {
    height: 160,
    width: 130,
    marginRight: 10,
  },

  nicknameMurph: {
    color: "white",
    textAlign: "center",
  },

  actors: {
    flexDirection: "row",
  },
});
