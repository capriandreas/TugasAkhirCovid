import React, { Component } from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import CardView from 'react-native-cardview'

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <MainStat />
        <NewsBody />
        <BottomNavigation />
      </View>
    );
  }
}

const NewsBody = () => {
  return (
    <View style={{
      flex: 1
      //backgroundColor: "red"
    }}>
      <View style={{
        flex: 1
        //backgroundColor: "yellow"
      }}>
        <View style={{
          flexDirection: "row",
          flex: 1
          //backgroundColor: "red"
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            //backgroundColor: "grey",
            height: 100,
            margin: 20,
            marginTop:30,
            borderColor:'black',
            borderWidth:1
          }}>
            <View style={{
              flex: 0.3,
              width: 50
              //backgroundColor: "blue",
            }}>
              <Image
                style={{
                  flex: 1,
                  width: 110,
                  height: null,
                  resizeMode: 'stretch'
                }}
                source={require('./src/assets/images/news/news_1.jpg')}
              />
            </View>
            <View style={{
              flex: 0.7,
              //backgroundColor: "purple",
              width: 50
            }}>
              <View style={{
                flex: 0.4,
                //backgroundColor: "red",
                flexDirection: "column"
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: "row",
                  margin:5
                }}>
                  <View style={{
                    flex: 0.3
                    //justifyContent: "center"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 14,
                      color: "red"
                    }}>Detik News</Text>
                  </View>
                  <View style={{
                    flex: 0.7,
                    //justifyContent: "center",
                    alignItems: "flex-end"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 8
                    }}>Rabu, 14 Oktober 2020 14:14 WIB</Text>
                  </View>
                </View>
              </View>
              <View style={{
                flex: 0.7,
                //backgroundColor: "green",
                flexDirection: "column",
                margin:3
              }}>
                <View style={{
                  flex: 1
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 14
                  }}>Polisi Tangkap Komplotan Begal Modus Operasi Yustisi Corona di Bengkulu</Text>
                </View>
                <View style={{
                  width: 130,
                  height: 20,
                  backgroundColor: "#503CAA",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 12,
                    lineHeight: 14,
                    color: "white"
                  }}>Baca Selengkapnya</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
        
        <View style={{
          flexDirection: "row",
          flex: 1
          //backgroundColor: "red"
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            //backgroundColor: "grey",
            height: 100,
            margin: 20,
            marginTop:30,
            borderColor:'black',
            borderWidth:1
          }}>
            <View style={{
              flex: 0.3,
              width: 50
              //backgroundColor: "blue",
            }}>
              <Image
                style={{
                  flex: 1,
                  width: 110,
                  height: null,
                  resizeMode: 'stretch'
                }}
                source={require('./src/assets/images/news/news_1.jpg')}
              />
            </View>
            <View style={{
              flex: 0.7,
              //backgroundColor: "purple",
              width: 50
            }}>
              <View style={{
                flex: 0.4,
                //backgroundColor: "red",
                flexDirection: "column"
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: "row",
                  margin:5
                }}>
                  <View style={{
                    flex: 0.3
                    //justifyContent: "center"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 14,
                      color: "red"
                    }}>Detik News</Text>
                  </View>
                  <View style={{
                    flex: 0.7,
                    //justifyContent: "center",
                    alignItems: "flex-end"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 8
                    }}>Rabu, 14 Oktober 2020 14:14 WIB</Text>
                  </View>
                </View>
              </View>
              <View style={{
                flex: 0.7,
                //backgroundColor: "green",
                flexDirection: "column",
                margin:3
              }}>
                <View style={{
                  flex: 1
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 14
                  }}>Polisi Tangkap Komplotan Begal Modus Operasi Yustisi Corona di Bengkulu</Text>
                </View>
                <View style={{
                  width: 130,
                  height: 20,
                  backgroundColor: "#503CAA",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 12,
                    lineHeight: 14,
                    color: "white"
                  }}>Baca Selengkapnya</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
        
        <View style={{
          flexDirection: "row",
          flex: 1
          //backgroundColor: "red"
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            //backgroundColor: "grey",
            height: 100,
            margin: 20,
            marginTop:30,
            borderColor:'black',
            borderWidth:1
          }}>
            <View style={{
              flex: 0.3,
              width: 50
              //backgroundColor: "blue",
            }}>
              <Image
                style={{
                  flex: 1,
                  width: 110,
                  height: null,
                  resizeMode: 'stretch'
                }}
                source={require('./src/assets/images/news/news_1.jpg')}
              />
            </View>
            <View style={{
              flex: 0.7,
              //backgroundColor: "purple",
              width: 50
            }}>
              <View style={{
                flex: 0.4,
                //backgroundColor: "red",
                flexDirection: "column"
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: "row",
                  margin:5
                }}>
                  <View style={{
                    flex: 0.3
                    //justifyContent: "center"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 14,
                      color: "red"
                    }}>Detik News</Text>
                  </View>
                  <View style={{
                    flex: 0.7,
                    //justifyContent: "center",
                    alignItems: "flex-end"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 8
                    }}>Rabu, 14 Oktober 2020 14:14 WIB</Text>
                  </View>
                </View>
              </View>
              <View style={{
                flex: 0.7,
                //backgroundColor: "green",
                flexDirection: "column",
                margin:3
              }}>
                <View style={{
                  flex: 1
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 14
                  }}>Polisi Tangkap Komplotan Begal Modus Operasi Yustisi Corona di Bengkulu</Text>
                </View>
                <View style={{
                  width: 130,
                  height: 20,
                  backgroundColor: "#503CAA",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 12,
                    lineHeight: 14,
                    color: "white"
                  }}>Baca Selengkapnya</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
        
        <View style={{
          flexDirection: "row",
          flex: 1
          //backgroundColor: "red"
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            //backgroundColor: "grey",
            height: 100,
            margin: 20,
            marginTop:30,
            borderColor:'black',
            borderWidth:1
          }}>
            <View style={{
              flex: 0.3,
              width: 50
              //backgroundColor: "blue",
            }}>
              <Image
                style={{
                  flex: 1,
                  width: 110,
                  height: null,
                  resizeMode: 'stretch'
                }}
                source={require('./src/assets/images/news/news_1.jpg')}
              />
            </View>
            <View style={{
              flex: 0.7,
              //backgroundColor: "purple",
              width: 50
            }}>
              <View style={{
                flex: 0.4,
                //backgroundColor: "red",
                flexDirection: "column"
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: "row",
                  margin:5
                }}>
                  <View style={{
                    flex: 0.3
                    //justifyContent: "center"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 14,
                      color: "red"
                    }}>Detik News</Text>
                  </View>
                  <View style={{
                    flex: 0.7,
                    //justifyContent: "center",
                    alignItems: "flex-end"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 8
                    }}>Rabu, 14 Oktober 2020 14:14 WIB</Text>
                  </View>
                </View>
              </View>
              <View style={{
                flex: 0.7,
                //backgroundColor: "green",
                flexDirection: "column",
                margin:3
              }}>
                <View style={{
                  flex: 1
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 14
                  }}>Polisi Tangkap Komplotan Begal Modus Operasi Yustisi Corona di Bengkulu</Text>
                </View>
                <View style={{
                  width: 130,
                  height: 20,
                  backgroundColor: "#503CAA",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 12,
                    lineHeight: 14,
                    color: "white"
                  }}>Baca Selengkapnya</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
        
        <View style={{
          flexDirection: "row",
          flex: 1
          //backgroundColor: "red"
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            //backgroundColor: "grey",
            height: 100,
            margin: 20,
            marginTop:30,
            borderColor:'black',
            borderWidth:1
          }}>
            <View style={{
              flex: 0.3,
              width: 50
              //backgroundColor: "blue",
            }}>
              <Image
                style={{
                  flex: 1,
                  width: 110,
                  height: null,
                  resizeMode: 'stretch'
                }}
                source={require('./src/assets/images/news/news_1.jpg')}
              />
            </View>
            <View style={{
              flex: 0.7,
              //backgroundColor: "purple",
              width: 50
            }}>
              <View style={{
                flex: 0.4,
                //backgroundColor: "red",
                flexDirection: "column"
              }}>
                <View style={{
                  flex: 1,
                  flexDirection: "row",
                  margin:5
                }}>
                  <View style={{
                    flex: 0.3
                    //justifyContent: "center"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 14,
                      color: "red"
                    }}>Detik News</Text>
                  </View>
                  <View style={{
                    flex: 0.7,
                    //justifyContent: "center",
                    alignItems: "flex-end"
                  }}>
                    <Text style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 8
                    }}>Rabu, 14 Oktober 2020 14:14 WIB</Text>
                  </View>
                </View>
              </View>
              <View style={{
                flex: 0.7,
                //backgroundColor: "green",
                flexDirection: "column",
                margin:3
              }}>
                <View style={{
                  flex: 1
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 14
                  }}>Polisi Tangkap Komplotan Begal Modus Operasi Yustisi Corona di Bengkulu</Text>
                </View>
                <View style={{
                  width: 130,
                  height: 20,
                  backgroundColor: "#503CAA",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Text style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: 12,
                    lineHeight: 14,
                    color: "white"
                  }}>Baca Selengkapnya</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
        
      </View>
    </View>
  )
}

const MainStat = () => {
  return (
    <View style={{
      flex: 0.2,
      backgroundColor: "blue"
    }}>
      <View style={{
        position: 'absolute',
        backgroundColor: '#473F97',
        width: 414,
        height: 150,
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
            }}>NEWS</Text>
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
          }} source={require('./src/assets/images/navigation/baseline_article_black_18dp_active.png')} />
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


