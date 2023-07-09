import React from "react"
import { StatusBar, Text, View, TextInput, TouchableOpacity } from "react-native"

import { styles } from "./styles"

export function Home() {

    function handleParticipantAdd() {
        console.log("você clicou no botão")
    }

    return (
        <View style={styles.container}>
            <StatusBar />
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
        </View>
    )
}