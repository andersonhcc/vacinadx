import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Pressable, StyleSheet, View} from 'react-native';
import {Platform} from 'react-native';
import {Header, HeaderContent, HeaderContentRow, InputRow} from './styles';
import Icon from '~/components/Icon';
import {useTheme} from 'styled-components';
import {Separator} from '~/components/Separator';
import Input from '~/components/Input';
import {useNavigation} from '@react-navigation/native';
import {CardMaps} from './localComponents/CardMaps';
import icon from '~/constants/icon';

const VaccineOnMap: React.FC = () => {
  const navigation = useNavigation();
  const {colors, spacing} = useTheme();
  const [selectedMarker, setSelectedMarker] = useState(false);

  return (
    <View style={styles.container}>
      <Header>
        <HeaderContent>
          <HeaderContentRow>
            <Pressable onPress={navigation.goBack}>
              <Icon
                icon="back"
                size={15}
                activeColor={colors.background.main}
              />
            </Pressable>

            <Separator width={spacing.lg} />
            <InputRow>
              <Input
                placeholder="Busque por bairro"
                icon="search"
                iconPosition="left"
                color="primary"
              />
            </InputRow>
          </HeaderContentRow>
          <Separator height={spacing.lg} />
        </HeaderContent>
      </Header>
      <MapView
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          image={icon.marker}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.434,
          }}
          onPress={e => {
            setSelectedMarker(old => !old);
          }}
        />
      </MapView>
      {!!selectedMarker && (
        <CardMaps
          distance="1,5km"
          title="Unidade de saúde de familia Campus do Iguaçu"
          image={require('~/assets/images/banner/covid.png')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export {VaccineOnMap};
