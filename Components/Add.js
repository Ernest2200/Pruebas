import { Text, View, StyleSheet,TextInput,Button,SafeAreaView } from 'react-native';
import {useState} from 'react'

export default function Add({navigation}) {

    const [id, onChangeId] = useState("");
    const [name, onChangeName] = useState("");
    const [team, onChangeTeam] = useState("");
    const [country, onChangeCountry] = useState("");
    const [image, onChangeImage] = useState("");
    
      return (
        <SafeAreaView>
          <Text>Ingrese el id del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="id"
          onChangeText={onChangeId}
          value={id}/>
          <Text>Ingrese el nombre del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="name"
          onChangeText={onChangeName}
          value={name}/>
          <Text>Ingrese el equipo del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="team"
          onChangeText={onChangeTeam}
          value={team}/>
          <Text>Ingrese la ciudad,pais del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="country"
          onChangeText={onChangeCountry}
          value={country}/>
          <Text>Ingrese la url de la imagen del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="image"
          onChangeText={onChangeImage}
          value={image}/>
    
           <Button
            title="Agregar Stadio"
            onPress={
              () => {
                var url="https://api-example-udb.herokuapp.com/api/list";
                fetch(url,{
                    method: 'POST',headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                   },
                    body: JSON.stringify({
                      id: id,
                      name:name,
                      team:team,
                      country:country,
                      image:image
                      })//fin body
                    }).then((res)=>res.json()).then((resJson)=>alert(resJson.message)).then(navigation.navigate("List"))
    
                    
              }
              }/>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    });