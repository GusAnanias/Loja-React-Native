import { Text, View, StyleSheet, Image } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/eu.jpeg')}
                style={styles.foto}
                resizeMode="cover"
            />
            <Text style={styles.titulo}>Gustavo Ananias - Dev Mobile</Text>
            <Text style={styles.description}>Olá eu me chamo Gustavo Ananias, sou músico e programador, seja bem-vindo ao meu App em React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    foto: {
        width: 160,
        height: 200,
        borderRadius: 100
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10
    },
    description: {
        padding: 5,
        textAlign: 'center'
    }
});