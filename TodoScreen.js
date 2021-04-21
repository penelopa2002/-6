import React,  {useState} from "react";
import {StyleSheet, View, Text, Button, Alert} from "react-native";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove}) => {
  return (
    <View>
    <AppCard style = {styles.card}>
    <Text style = {styles.title}>{todo.title}</Text>
    <Button title="Ред." />
    </AppCard>
    <View style={styles.buttons}>
    <View style={styles.button}>
    <Button title="Зайди номрально" color="#FFA500" onPress={goBack} />
</View>
<View style={styles.button}>
<Button
title="Удалить"
color="#e53935"
onPress={() => onRemove(todo.id)}
/>
</View>
</View>
</View>
  );
};

const styles =StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  card: {
    marginBottom: 20,
    padding:15
  },
  button: {
    width: "40%"
  },
  title: {
    fontSize: 20
  }
});

