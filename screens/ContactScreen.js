import { ScrollView, Text, View } from "react-native";
import { Card } from 'react-native-elements';

const ConatctScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>
                    Contact Information
                </Card.Title>
                <Card.Divider />
                <View style={{ justifyContent: 'center', flex: 1}}>
                    <Text style={{ marginBottom: 10 }}>
                        1 Nucamp Way
                        Seattle, WA 98001
                        U.S.A.
                    </Text>
                    <Text>
                        Phone: 1-206-555-1234
                    </Text>
                    <Text>
                        Email: campsites@nucamp.co
                    </Text>
                </View>
            </Card>
        </ScrollView>
    );
};


export default ConatctScreen;