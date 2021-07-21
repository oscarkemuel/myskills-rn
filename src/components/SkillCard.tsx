import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  skill: string;
}

export default function SkillCard({ skill, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },

  textSkill: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
})