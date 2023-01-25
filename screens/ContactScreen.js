import { ScrollView, Text, View } from "react-native";
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const ConatctScreen = () => {
    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
            >
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
            </Animatable.View>
        </ScrollView>
    );
};


export default ConatctScreen;