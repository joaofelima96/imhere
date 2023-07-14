import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participant } from "../components/Participant"

import { styles } from "./styles"

export function Home() {

    // cria uma string vazia com valor inicial nulo
    const [participants, setParticipants] = useState<string[]>([]);

    // cria uma constante que guarda o nome dos participantes
    const [participantName, setParticipantName] = useState("");

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome")
        }

        // quando clico no botão, mudo o estado do meu array, adicionando a pessoa que escrevi no input
        setParticipants(prevState => [...prevState, participantName])

        // mudo o valor de participantName para nulo e utilizo esse valor no "value" do meu input
        // para que depois de adicionar o nome ao array ele limpe meu input
        setParticipantName("");
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
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
                    // passo o texto digitado no input para a função que muda o estado de participantName
                    onChangeText={setParticipantName}
                    // atribuo o valor de participantName ao input, que após ser adicionado no array, ficará nulo
                    value={participantName}
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
                        onRemove={() => handleParticipantRemove(item)}
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