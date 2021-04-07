import React from "react";
import {
    ImageBackground,
    Image,
    StyleSheet,
    StatusBar,
    Dimensions, KeyboardAvoidingView
} from "react-native";
import {Block, Button, Checkbox, Text, theme} from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";


import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Input} from "../components";

class Onboarding extends React.Component {
  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <Block center>
        <Text
        style={styles.button} center
                          color={argonTheme.COLORS.SECONDARY}
                          textStyle={{ color: argonTheme.COLORS.BLACK }}
        >{text}</Text>
      </Block>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    New User Registration
                  </Text>
                </Block>


            <Block style={styles.registerContainer}>


              <Block flex>

                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} >
                      <Input
                        borderless
                        placeholder="Full Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                      <Block width={width * 0.8} >
                      <Input
                        borderless
                        placeholder="Shop Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} >
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                      <Block width={width * 0.8} >
                      <Input
                        borderless
                        placeholder="Contact Number"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />

                    </Block>
                      <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Confirm Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />

                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Submit
                        </Text>


                      </Button>
                        <Button color="primary" style={styles.createButton}>
                         <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
                        </Text>


                      </Button>

                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
  );
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>


                <Modal isVisible={this.state.visibleModal === 1}>
                  {this._renderModalContent()}
                </Modal>


                <Block width={width * 0.8} >
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />

                    </Block>

              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("App")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Login
                </Button>
              </Block>

                        {this._renderButton('Register', () =>
                  this.setState({ visibleModal: 1 })
                )}


          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  },
    registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    }},
    createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Onboarding;
