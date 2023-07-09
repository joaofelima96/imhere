import React from "react"
import { StatusBar, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"

import { Participant } from "../components/Participant"

import { styles } from "./styles"

export function Home() {
    const participants = ["Rodrigo", "Vini", "Diego", "Biro", "Ana", "Isa", "Jack", "Mayk", "João"]

    function handleParticipantAdd() {
        console.log("você clicou no botão")
    }

    function handleParticipantRemove(name: string) {
        console.log(`você clicou em remover o participante ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={"#6b6b6b"}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove("Rodrigo")}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    )
}