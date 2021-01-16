import * as React from 'react';
import { View, FlatList, Alert, StyleSheet, Text } from 'react-native';
import { List, Button, Avatar } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons'; 


const data = [1, 2, 3];

const styles = StyleSheet.create({
      quizAttrContent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        height: 25,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        margin: 5,
        paddingTop: 3
      },
      quizAttrLeft:{
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 2
      },
      quizAttrMid:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row',
      },
      quizAttrRight:{
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 2
      },
      infoText:{
        color: '#676767',
        fontSize: 15
      },
      infoIcon:{
        color: "#676767",
        marginRight: 5
      }
  });

const MyComponent = () => (
  <View style={{ flex: 1, backgroundColor: '#2C2B3F' }}>
    <FlatList 
        data={data}
        renderItem ={(item) =>   
            <View style={{ padding: 8, borderRadius: 5, margin: 8, borderColor: '#FFF', backgroundColor: '#35344c' }}>
                <List.Item              
                titleStyle={{ fontFamily: 'Ubuntu_400Regular', color: '#FFF'}}
                descriptionStyle={{ fontFamily: 'Ubuntu_300Light', color: '#808790' }}
                title={"Ticket#1234"}
                description="Problemas com o ambiente de produção: Falha ao enviar e-mails."
                left={
                    props =>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}> 
                            {/* <Avatar.Image size={64} source=
                                {{ uri:('https://image.freepik.com/fotos-gratis/smooth-elegant-gradient-purple-background_1258-1372.jpg')}} 
                            /> */}
                            <Fontisto name="ticket" size={24} color="#35B5AD" />
                        </View>
                    }
                />
            </View>
        }
    />
  </View>
);

export default MyComponent;