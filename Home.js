import React, { Component } from 'react';
import { StatusBar, Text, View, Image, ImageBackground } from 'react-native';
//import { BottomNavigation } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flexDirection: "column",
        flex: 1
      }}>
        <View style={{
          flex: 1.7,
          //backgroundColor: "blue"
        }}><Contact /></View>
        <View style={{
          //backgroundColor: "purple",
          flex: 1
        }}><Prevention /></View>
        <View style={{
          //backgroundColor: "green",
          flex: 1
        }}><Test /></View>
        <View style={{
          //backgroundColor: "grey"
        }}><BottomNavigation /></View>
      </View>
    );
  }
}

const Contact = () => {
  return (
    <View style={{
      position: 'absolute',
      backgroundColor: '#473F97',
      width: 414,
      height: 366,
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
        height: 43,
        flexDirection: "row",
        //backgroundColor: "purple",
        marginTop: 42,
        marginLeft: 10,
        marginRight: 10
      }}>
        <View style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center"
        }}>
          <Text style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 36,
            lineHeight: 43,
            color: "white"
          }}>COVID-19</Text>
        </View>
        <View style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center"
        }}>
          <View style={{
            position: "absolute",
            width: 98,
            height: 43,
            backgroundColor: "#FFFFFF",
            borderRadius: 25,
            flexDirection: "row"
          }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Image
                style={{
                  position: "absolute",
                  width: 34,
                  height: 31,
                  marginLeft: 10
                }}
                source={require('./src/assets/images/indonesia_640.png')}
              />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  position: "absolute",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: 17,
                  lineHeight: 27,
                  color: "black"
                }}>IND</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{
        height: 100,
        flexDirection: "column",
        //backgroundColor: "purple",
        marginTop: 52
      }}>
        <View style={{
          flex: 0.5,
          //backgroundColor: "red",
          justifyContent: "center",
          marginLeft: 10
        }}>
          <Text style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 19,
            color: "white"
          }}>Apakah kamu merasa sakit?</Text>
        </View>
        <View style={{
          flex: 1,
          //backgroundColor: "yellow"
        }}><Text style={{
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 12,
          lineHeight: 14,
          color: "white",
          textAlign: "center"
        }}>Call Center Tim Tanggap COVID-19 Siap Melayani Kamu 24 Jam.</Text>
          <Text style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            lineHeight: 14,
            color: "white",
            textAlign: "center"
          }}>Hubungin nomor atau chat via WhatsApp dibawah.</Text></View>
      </View>
      <View style={{
        flexDirection: "row",
        //backgroundColor: "white",
        height: 41
      }}>
        <View style={{
          flex: 1,
          //backgroundColor: "white",
          height: 41,
          alignItems: "center"
        }}>
          <View style={{
            backgroundColor: "#FF4C58",
            width: 138,
            height: 41,
            flexDirection: "row",
            borderRadius: 20,
            alignItems: "center"
          }}>
            <Image
              style={{
                width: 24,
                height: 24,
                marginLeft: 10
              }}
              source={require('./src/assets/images/call-24px-white.png')}
            />
            <Text
              style={{
                width: 104,
                height: 17,
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: 14,
                lineHeight: 17,
                paddingLeft: 10,
                //textAlign: "center",
                color: "#FFFFFF"
              }}>Call Center</Text>
          </View>

        </View>

        <View style={{
          flex: 1,
          height: 41,
          alignItems: "center"
        }}>
          <View style={{
            backgroundColor: "#10B418",
            width: 138,
            height: 41,
            flexDirection: "row",
            borderRadius: 20,
            alignItems: "center"
          }}>
            <Image
              style={{
                width: 29,
                height: 29,
                marginLeft: 10
              }}
              source={require('./src/assets/images/whatsapp-white.png')}
            />
            <Text
              style={{
                width: 104,
                height: 17,
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: 14,
                lineHeight: 17,
                paddingLeft: 10,
                color: "#FFFFFF"
              }}>WhatsApp</Text>
          </View>

        </View>

      </View>
    </View>
  )
}

const Prevention = () => {
  return (
    <View style={{
      flex: 1,
      //backgroundColor: "red",
      flexDirection: "column"
    }}>
      <View style={{
        flex: 0.3,
        //backgroundColor: "yellow",
        justifyContent: "center",
        marginLeft: 10
      }}>
        <Text style={{
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 16,
          lineHeight: 19
        }}>PENCEGAHAN</Text>
      </View>
      <View style={{
        flex: 1,
        //backgroundColor: "blue",
        flexDirection: "row"
      }}>
        <View style={{
          flex: 1,
          //backgroundColor: "purple"
        }}>
          <View style={{
            flex: 1,
            flexDirection: "column",
            //backgroundColor: "yellow",
            margin: 15,
            alignItems: "center",
            paddingTop: 5
          }}>
            <View style={{
              width: 89,
              height: 85,
              backgroundColor: "#FFFFFF",
              borderWidth: 2,
              borderColor: "#473F97",
              borderRadius: 100 / 2,
              justifyContent: "center",
              alignItems: "center"
            }}><Image
                style={{
                  position: "absolute",
                  width: 50,
                  height: 56
                }}
                source={require('./src/assets/images/01.png')}
              /></View>
            <Text style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 14,
              lineHeight: 16,
              textAlign: "center",
              marginTop: 5
            }}>Bersihkan tangan selalu</Text>
          </View>
        </View>
        <View style={{
          flex: 1,
          //backgroundColor: "red"
        }}><View style={{
          flex: 1,
          flexDirection: "column",
          //backgroundColor: "yellow",
          margin: 15,
          alignItems: "center",
          paddingTop: 5
        }}>
            <View style={{
              width: 89,
              height: 85,
              backgroundColor: "#FFFFFF",
              borderWidth: 2,
              borderColor: "#473F97",
              borderRadius: 100 / 2,
              justifyContent: "center",
              alignItems: "center"
            }}><Image
                style={{
                  position: "absolute",
                  width: 50,
                  height: 56
                }}
                source={require('./src/assets/images/05.png')}
              /></View>
            <Text style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 14,
              lineHeight: 16,
              textAlign: "center",
              marginTop: 5
            }}>Hindari kontak fisik</Text>
          </View></View>
        <View style={{
          flex: 1,
          //backgroundColor: "grey"
        }}><View style={{
          flex: 1,
          flexDirection: "column",
          //backgroundColor: "yellow",
          margin: 15,
          alignItems: "center",
          paddingTop: 5
        }}>
            <View style={{
              width: 89,
              height: 85,
              backgroundColor: "#FFFFFF",
              borderWidth: 2,
              borderColor: "#473F97",
              borderRadius: 100 / 2,
              justifyContent: "center",
              alignItems: "center"
            }}><Image
                style={{
                  position: "absolute",
                  width: 50,
                  height: 56
                }}
                source={require('./src/assets/images/02.png')}
              /></View>
            <Text style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 14,
              lineHeight: 16,
              textAlign: "center",
              marginTop: 5
            }}>Selalu gunakan masker</Text>
          </View></View>
      </View>
    </View>
  )
}

const Test = () => {
  return (
    <View style={{
      //backgroundColor: "red",
      margin: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <View style={{
        height: 120,
        //backgroundColor:"green"
      }}><ImageBackground
        style={{
          width: 365,
          height: 120
        }}
        source={require('./src/assets/images/boxGradientLinear.png')}
      ><View style={{
        //backgroundColor: "green",
        flex: 1,
        flexDirection: "row"
      }}>
            <View style={{
              //backgroundColor: "blue",
              flex: 0.5
            }}>
              <Image
                style={{
                  width: 110,
                  height: 116,
                  marginLeft: 10
                }}
                source={require('./src/assets/images/coronaVirus.png')}
              />
            </View>
            <View style={{
              //backgroundColor: "yellow",
              flex: 1,
              flexDirection: "column",
              margin: 15
            }}>
              <View style={{
                flex: 1,
                //backgroundColor: "purple",
                alignItems: "flex-end",
                marginRight:10
              }}>
                <Text style={{
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: 16,
                  lineHeight: 19
                }}>Lakukan Tesmu Sendiri!</Text>
              </View>
              <View style={{
                flex: 1,
                //backgroundColor: "green",
                alignItems: "flex-end",
                marginRight:10
              }}>
                <Text style={{
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: 12,
                  lineHeight: 14
                }}>Ikuti instruksi untuk melakukan test</Text>
              </View>
              <View style={{
                flex: 1,
                //backgroundColor: "blue",
                alignItems: "flex-end",
                marginRight:10
              }}>
                <View style={{
                  width: 115,
                  height: 33,
                  backgroundColor: "#503CAA",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 14,
                    lineHeight: 17,
                    color: "white"
                  }}>Test Sekarang</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
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
          }} source={require('./src/assets/images/navigation/baseline_home_black_18dp_active.png')} />
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
          }} source={require('./src/assets/images/navigation/baseline_info_black_18dp_grey.png')} />
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