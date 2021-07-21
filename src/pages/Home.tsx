import React, { useState, useEffect } from 'react';
import { 
  View,
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
} from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    data.name ? setSkills(oldSkills => [...oldSkills, data]) : null
  }

  function handleRemoveSkill(id: string) {
    setSkills(oldSkills => oldSkills.filter((skill) => skill.id !== id))
  }

  useEffect(() => {
    const currentHours = new Date().getHours();

    if(currentHours < 12){
      setGretting('Good morging!')
    }else if(currentHours >= 12 && currentHours < 18){
      setGretting('Good afternoon!')
    }else {
      setGretting('Good night!')
    }

  }, [])

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, Oscar!</Text>
      <Text style={styles.gretting}>{gretting}</Text>
      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleNewSkill} title="Add" />

      <Text style={[styles.title, { marginVertical: 20 }]}>My skills</Text>

      <FlatList 
        data={skills} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },

  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7
  },

  gretting: {
    color: '#FFF'
  }
})