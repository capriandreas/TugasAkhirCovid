import React, { Component } from 'react';
import { StatusBar, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <MainStat />
        <BottomNavigation />
      </View>
    );
  }
}

const MainStat = () => {
  return (
    <View style={{
      flex: 1
      //backgroundColor: "blue"
    }}>
      <View style={{
        position: 'absolute',
        backgroundColor: '#473F97',
        width: 414,
        height: 483,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 5
      }}>
        <View style={{
          height: 30,
          flexDirection: "row"
        }}>
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start"
          }}>
            <Image
              style={{
                width: 33
              }}
              source={require('./src/assets/images/menu-24px-white.png')}
            />
          </View>

          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end"
          }}>
            <Image
              style={{
                width: 33
              }}
              source={require('./src/assets/images/notifications_none-24px-white.png')}
            />
          </View>
        </View>
        <View style={{
          flexDirection: "row",
          height: 43,
          marginTop: 30
        }}>
          <Text style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 36,
            lineHeight: 43,
            color: "#FFFFFF"
          }}>Statistics</Text>
        </View>
        <View style={{
          backgroundColor: "white",
          flexDirection: "row",
          height: 43,
          marginTop: 20
        }}>
          {/* Masukkan si Toggle Switch kesini */}
        </View>

        <View style={{
          flexDirection: "row",
          height: 43,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 20,
            lineHeight: 31,
            color: "#FFFFFF"
          }}>Total</Text>
        </View>

        <View style={{
          //backgroundColor: "red",
          height: 200
        }}>
          <View style={{
            //backgroundColor: "green",
            height: 100,
            flexDirection: "row"
          }}>
            <View style={{
              //backgroundColor: "white",
              flex: 1,
              justifyContent: "center"
            }}>
              <View style={{
                backgroundColor: "#54E8FF",
                flex: 1,
                margin: 10,
                borderRadius: 15
              }}>
                <View style={{
                  //backgroundColor: "white",
                  margin: 10,
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 15,
                    lineHeight: 24,
                    color: "white"
                  }}>Total Cases</Text>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 20,
                    lineHeight: 32,
                    color: "white"
                  }}>2,143,123</Text>
                </View>
              </View>
            </View>
            <View style={{
              //backgroundColor: "red",
              flex: 1,
              justifyContent: "center"
            }}>
              <View style={{
                backgroundColor: "#FFCE47",
                flex: 1,
                margin: 10,
                borderRadius: 15
              }}>
                <View style={{
                  //backgroundColor: "white",
                  margin: 10,
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 15,
                    lineHeight: 24,
                    color: "white"
                  }}>Active Cases</Text>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 20,
                    lineHeight: 32,
                    color: "white"
                  }}>1,505,212</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            //backgroundColor: "yellow",
            height: 100,
            flexDirection: "row"
          }}>
            <View style={{
              //backgroundColor: "red",
              flex: 1,
              justifyContent: "center"
            }}><View style={{
              backgroundColor: "#4DFF5F",
              flex: 1,
              margin: 10,
              borderRadius: 15
            }}>
                <View style={{
                  //backgroundColor: "white",
                  margin: 10,
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 15,
                    lineHeight: 24,
                    color: "white"
                  }}>Recovered Cases</Text>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 20,
                    lineHeight: 32,
                    color: "white"
                  }}>640,230</Text>
                </View>
              </View>
            </View>
            <View style={{
              //backgroundColor: "white",
              flex: 1,
              justifyContent: "center"
            }}>
              <View style={{
                backgroundColor: "#FF4D4D",
                flex: 1,
                margin: 10,
                borderRadius: 15
              }}>
                <View style={{
                  //backgroundColor: "white",
                  margin: 10,
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 15,
                    lineHeight: 24,
                    color: "white"
                  }}>Deaths</Text>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 20,
                    lineHeight: 32,
                    color: "white"
                  }}>153,260</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const BottomNavigation = () => {
  return (
    <View style={{
      //backgroundColor: "yellow",
      height: 55,
      flexDirection: "row",
      borderColor: "grey",
      borderTopWidth: 0.2
    }}>
      <View style={{
        //backgroundColor: "red",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <View style={{ width: 26, height: 26 }}>
          <Image style={{
            width: 26,
            height: 26
          }} source={require('./src/assets/images/navigation/baseline_home_black_18dp_grey.png')} />
        </View>
        <Text style={{ fontSize: 10, color: "black", marginTop: 4 }}>Home</Text>
      </View>
      <View style={{
        //backgroundColor: "purple",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <View style={{ width: 26, height: 26 }}>
          <Image style={{
            width: 26,
            height: 26
          }} source={require('./src/assets/images/navigation/baseline_contact_phone_black_18dp_grey.png')} />
        </View>
        <Text style={{ fontSize: 10, color: "black", marginTop: 4 }}>Contact</Text>
      </View>
      <View style={{
        //backgroundColor: "green",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <View style={{ width: 26, height: 26 }}>
          <Image style={{
            width: 26,
            height: 26
          }} source={require('./src/assets/images/navigation/baseline_info_black_18dp_active.png')} />
        </View>
        <Text style={{ fontSize: 10, color: "black", marginTop: 4 }}>Statistics</Text>
      </View>
      <View style={{
        //backgroundColor: "brown",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <View style={{ width: 26, height: 26 }}>
          <Image style={{
            width: 26,
            height: 26
          }} source={require('./src/assets/images/navigation/baseline_article_black_18dp_grey.png')} />
        </View>
        <Text style={{ fontSize: 10, color: "black", marginTop: 4 }}>News</Text>
      </View>
    </View>
  )
}

const Chart = () => {
  return (
    <View>

    </View>
  )
}


