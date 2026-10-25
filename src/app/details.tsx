import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface Pokemon {
  name: string;
  image: string;
  imageBack: string;
  types: PokemonType[];
  url: string;
}

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}
const colorsByType: Record<string, string> = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

export default function Details() {
  const params = useLocalSearchParams();

  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    fetchPokemonDetails(params.detail as string);
  }, []);

  async function fetchPokemonDetails(detail: string) {
    try {
      const res = await fetch(detail);
      const data = await res.json();
      console.log(JSON.stringify(data.name, null, 2));

      setPokemon({
        name: data.name,
        image: data.sprites.front_default,
        imageBack: data.sprites.back_default,
        types: data.types,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Stack.Screen options={{ title: pokemon.name as string }} />
      <ScrollView
        contentContainerStyle={{
          gap: 20,
          padding: 20,
          paddingTop: 80,
          // backgroundColor: colorsByType[pokemon.types[0]?.type.name] + 50,
          borderRadius: 20,
        }}
      >
        <View>
          {/* <Text style={styles.name}>{pokemon.name}</Text> */}
          <Text style={styles.type}>{pokemon.types?.[0]?.type?.name}</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {pokemon.image && (
              <Image
                source={{ uri: pokemon.image }}
                style={{ width: 150, height: 150 }}
              />
            )}
            {pokemon.imageBack && (
              <Image
                source={{ uri: pokemon.imageBack }}
                style={{ width: 150, height: 150 }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  type: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
});
